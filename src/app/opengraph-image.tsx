import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#181818",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, color: "#fbbf24", fontWeight: 600 }}>
          {siteConfig.name.toLowerCase()}.
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 60, fontWeight: 600, maxWidth: 960, lineHeight: 1.15 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
