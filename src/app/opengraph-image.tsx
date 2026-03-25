import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Moriah Systems | Digital Solutions That Matter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        {/* Gold M logo */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 512 512"
        >
          <rect width="512" height="512" rx="96" fill="#0a0a0a" />
          <path
            d="M128 384V160l128 112 128-112v224"
            fill="none"
            stroke="#b89b2d"
            strokeWidth="36"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 32,
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 300,
              color: "#ffffff",
              letterSpacing: "0.05em",
            }}
          >
            Moriah Systems
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 300,
              color: "#b89b2d",
              marginTop: 12,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
            }}
          >
            Digital Solutions That Matter
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
