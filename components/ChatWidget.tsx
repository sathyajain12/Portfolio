"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "What did you build for the exams office?",
  "Which stack do you use most?",
  "Are you open to new roles?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        { role: "assistant", content: "Ask me about Sai's projects, experience or availability." },
      ]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200);
  }, [open]);

  async function sendMessage(text: string) {
    const userMsg = text.trim();
    if (!userMsg || loading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: userMsg }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok || !res.body) throw new Error("Request failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);
      setLoading(false);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: assistantText };
          return updated;
        });
      }
    } catch {
      setLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. You can email sathyajain9@gmail.com instead.",
        },
      ]);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="w-[min(340px,calc(100vw-2.5rem))] max-h-[500px] flex flex-col bg-paper border border-rule/20 shadow-[0_12px_40px_-12px_rgb(0_0_0/0.25)]"
            role="dialog"
            aria-label="Questions about Sai"
          >
            <div className="flex items-start justify-between px-4 pt-4 pb-3 border-b border-rule/15">
              <div>
                <p className="font-serif text-lg leading-none">Ask about my work</p>
                <p className="font-mono text-[11px] text-faint mt-1.5">
                  Answered by an AI model, so it may make mistakes
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-muted hover:text-ink transition-colors p-1 -mr-1"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0 max-h-[320px] text-sm leading-relaxed">
              {messages.map((msg, i) =>
                msg.role === "user" ? (
                  <p key={i} className="pl-8 text-right text-ink">
                    {msg.content}
                  </p>
                ) : (
                  <p key={i} className="pr-6 text-muted border-l-2 border-accent/60 pl-3 whitespace-pre-wrap">
                    {msg.content || <span className="text-faint">…</span>}
                  </p>
                )
              )}
              {loading && <p className="text-faint border-l-2 border-accent/60 pl-3">…</p>}

              {messages.length === 1 && (
                <ul className="pt-1 space-y-1.5">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <li key={q}>
                      <button onClick={() => sendMessage(q)} className="link text-left text-ink">
                        {q}
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              <div ref={bottomRef} />
            </div>

            <div className="px-4 py-3 border-t border-rule/15 flex items-center gap-3">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a question"
                aria-label="Your question"
                className="flex-1 bg-transparent text-sm text-ink placeholder:text-faint outline-none"
                disabled={loading}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || loading}
                className="font-mono text-xs text-accent disabled:text-faint transition-colors"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        className="px-4 py-2.5 bg-ink text-paper text-sm hover:bg-accent transition-colors shadow-[0_6px_20px_-8px_rgb(0_0_0/0.35)]"
        aria-expanded={open}
      >
        {open ? "Close" : "Ask a question"}
      </button>
    </div>
  );
}
