import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sai Sathya Jain, Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const paper = "#F6F3EC";
const ink = "#1A1814";
const muted = "#5C564C";
const accent = "#B23A1E";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: paper,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "serif",
          color: ink,
        }}
      >
        <div style={{ display: "flex", fontSize: 28 }}>Sai Sathya Jain</div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 72, lineHeight: 1.05, letterSpacing: "-1.5px", maxWidth: 980 }}>
            I build the software an examinations office&nbsp;
            <span style={{ color: accent, fontStyle: "italic" }}>runs on</span>.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: `1px solid rgba(26,24,20,0.2)`,
            paddingTop: 24,
            fontFamily: "monospace",
            fontSize: 20,
            color: muted,
          }}
        >
          <span>Full-stack developer · Jaipur, India</span>
          <span>React · Next.js · Cloudflare</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
