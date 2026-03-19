import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sai Sathya Jain | Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const skills = ["React 19", "Next.js", "TypeScript", "Cloudflare Workers", "Hono"];

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Violet glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#fff",
            marginBottom: 40,
            letterSpacing: "-0.5px",
          }}
        >
          SSJ<span style={{ color: "#7c3aed" }}>.</span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: 16,
            letterSpacing: "-1.5px",
          }}
        >
          Sai Sathya Jain
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 28,
            color: "#a78bfa",
            fontWeight: 600,
            marginBottom: 24,
          }}
        >
          Full-Stack Developer
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 18,
            color: "#6b7280",
            marginBottom: 40,
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Building serverless full-stack products end-to-end with React, Next.js & Cloudflare.
        </div>

        {/* Skill badges */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {skills.map((skill) => (
            <div
              key={skill}
              style={{
                padding: "6px 16px",
                borderRadius: 999,
                border: "1px solid rgba(124,58,237,0.35)",
                background: "rgba(124,58,237,0.1)",
                color: "#c4b5fd",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 15,
            color: "#374151",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ color: "#4b5563" }}>📍</span> Jaipur, India · Open to full-time
        </div>
      </div>
    ),
    { ...size }
  );
}
