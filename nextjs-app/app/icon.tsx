import { ImageResponse } from "next/og";

export const size = { width: 44, height: 44 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 44,
          height: 44,
          background: "#0A1628",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Outer border */}
        <div
          style={{
            position: "absolute",
            top: 2, left: 2, right: 2, bottom: 2,
            border: "1.5px solid rgba(248,246,241,0.9)",
            display: "flex",
          }}
        />
        {/* Inner border gold */}
        <div
          style={{
            position: "absolute",
            top: 8, left: 8, right: 8, bottom: 8,
            border: "1px solid #C9A962",
            display: "flex",
          }}
        />
        {/* Center fill */}
        <div
          style={{
            position: "absolute",
            top: 14, left: 14, right: 14, bottom: 14,
            background: "rgba(201,169,98,0.3)",
            display: "flex",
          }}
        />
        {/* Horizontal line */}
        <div
          style={{
            position: "absolute",
            top: 21, left: 8, right: 8,
            height: 1,
            background: "#C9A962",
            display: "flex",
          }}
        />
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: 21, top: 8, bottom: 8,
            width: 1,
            background: "#C9A962",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
