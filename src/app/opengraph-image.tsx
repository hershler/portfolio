import { ImageResponse } from "next/og";

export const alt = "Rachel Rubin Hershler — Backend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#12100e",
          color: "#f3eee6",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          <span>Israel</span>
          <span>Amdocs · 2021–present</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            Rachel Rubin Hershler
          </div>
          <div style={{ fontSize: 32, marginTop: 16, color: "#c45c26" }}>
            Backend Developer
          </div>
        </div>
        <div style={{ fontSize: 22, opacity: 0.75, maxWidth: 820 }}>
          C · C++ · Python · Java · Oracle · Linux — large-scale systems, daemons,
          and production tooling.
        </div>
      </div>
    ),
    { ...size },
  );
}
