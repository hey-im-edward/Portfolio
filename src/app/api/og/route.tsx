import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";

const width = 1200;
const height = 630;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title")?.trim() || "Senior / Lead Developer";
  const subtitle =
    url.searchParams.get("subtitle")?.trim() ||
    "Portfolio production build for recruiter-first hiring";

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #0f172a 0%, #111827 42%, #1f2937 100%)",
        color: "#f8fafc",
        padding: "64px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "32px",
          padding: "56px",
          background: "rgba(15, 23, 42, 0.42)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              width: "fit-content",
              gap: "10px",
              borderRadius: "999px",
              padding: "10px 16px",
              background: "rgba(248, 250, 252, 0.08)",
              fontSize: "22px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxWidth: "920px",
            }}
          >
            <div
              style={{
                fontSize: "72px",
                lineHeight: 1.02,
                fontWeight: 700,
                letterSpacing: "-0.04em",
              }}
            >
              {title}
            </div>
            <div
              style={{
                maxWidth: "760px",
                fontSize: "30px",
                lineHeight: 1.35,
                color: "rgba(248, 250, 252, 0.8)",
              }}
            >
              {subtitle}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: "24px",
            color: "rgba(248, 250, 252, 0.72)",
          }}
        >
          <span>Clean architecture, strong execution, production ready.</span>
          <span>@portfolio</span>
        </div>
      </div>
    </div>,
    {
      width,
      height,
    },
  );
}
