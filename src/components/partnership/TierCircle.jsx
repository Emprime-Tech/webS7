import React from "react";

const ACCENT = "#f59e0b";

const PackageDots = () => {
  return (
    <>
      {/* left dots */}
      <div className="absolute -left-3 top-8 flex flex-col gap-2">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="w-[3px] h-[3px] rounded-full"
            style={{ background: ACCENT }}
          />
        ))}
      </div>

      {/* right dots */}
      <div className="absolute -right-3 bottom-8 flex flex-col gap-2">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="w-[3px] h-[3px] rounded-full"
            style={{ background: ACCENT }}
          />
        ))}
      </div>
    </>
  );
};

export default function TierCircle({ label = "BRONZE PARTNER" }) {
  const [tier, partner] = label.split(" ");

  return (
    <div className="relative flex items-center justify-center">
      <PackageDots />

      {/* OUTER WRAPPER */}
      <div className="relative w-[220px] h-[220px]">
        
        {/* OUTER SVG RING */}
        <svg
          className="absolute inset-0 w-full h-full rotate-[-28deg]"
          viewBox="0 0 220 220"
        >
          <circle
            cx="110"
            cy="110"
            r="100"
            fill="transparent"
            stroke={ACCENT}
            strokeWidth="1.5"
            strokeDasharray="470 140"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>

        {/* INNER MAIN CIRCLE */}
        <div
          className="
            absolute 
            inset-[18px]
            rounded-full
            border
            flex
            items-center
            justify-center
            overflow-hidden
          "
          style={{
            background: "#050505",
            borderColor: ACCENT,
            boxShadow: `0 0 40px rgba(245,158,11,0.08)`,
          }}
        >
          {/* subtle glow */}
          <div
            className="absolute inset-0 rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(245,158,11,0.25), transparent 55%)",
            }}
          />

          {/* TEXT */}
          <div className="relative z-10 text-center">
            <h3
              className="
                text-[26px]
                md:text-[30px]
                font-light
                tracking-[0.08em]
                leading-[1.1]
              "
              style={{ color: ACCENT }}
            >
              {tier}
              <br />
              <span className="font-medium">{partner}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}