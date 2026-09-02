import { useState } from "react";
import "./App.css";

const BARCODE_TYPES = ["Code 128", "QR Code", "EAN-13", "UPC-A", "Data Matrix"];
const SWATCHES = [
  { name: "Ink", value: "#201C18" },
  { name: "Teal", value: "#1F5F5B" },
  { name: "Terracotta", value: "#C9502F" },
  { name: "Amber", value: "#B87A1F" },
];
const HISTORY = [
  { title: "Roasted Batch — Dark", meta: "Code 128 · 2h ago", tag: "Package" },
  { title: "Studio Portfolio Link", meta: "QR Code · Yesterday", tag: "Print" },
  { title: "Candle Jar — Amber 9oz", meta: "UPC-A · Mon", tag: "Label" },
] as const;

function BarcodeIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 5v14M8 5v14m4-14v14m5-14v14m4-14v14" />
    </svg>
  );
}

function QrIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3m5 0v.01M12 7v3a2 2 0 0 1-2 2H7m-4 0h.01M12 3h.01M12 16v.01M16 12h1m4 0v.01M12 21v-1" />
    </svg>
  );
}

function ShareIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98" />
    </svg>
  );
}

function SaveIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
    </svg>
  );
}

function App() {
  const [selectedType, setSelectedType] = useState(BARCODE_TYPES[0]);
  const [encodeValue, setEncodeValue] = useState("841725930174");
  const [selectedSwatch, setSelectedSwatch] = useState(SWATCHES[0].value);
  const [size, setSize] = useState(78);

  return (
    <main style={{ background: "var(--ps-canvas)" }} className="min-h-screen px-6 pt-10 pb-10">
      {/* Header */}
      <div className="mb-8">
        <p style={{ fontFamily: "var(--ps-font-body)", color: "var(--ps-fg-muted)" }} className="text-sm">
          Good afternoon
        </p>
        <h1
          style={{ fontFamily: "var(--ps-font-display)", fontWeight: 700, color: "var(--ps-fg)" }}
          className="text-3xl"
        >
          Label Studio
        </h1>
      </div>

      {/* Type selector */}
      <div className="mb-6 flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist" aria-label="Barcode type">
        {BARCODE_TYPES.map((type) => {
          const active = selectedType === type;
          return (
            <button
              key={type}
              role="tab"
              aria-selected={active}
              onClick={() => setSelectedType(type)}
              style={{
                background: active ? "var(--ps-primary)" : "var(--ps-surface)",
                color: active ? "var(--ps-on-accent)" : "var(--ps-fg-muted)",
                fontFamily: "var(--ps-font-body)",
                borderRadius: "var(--ps-radius-md)",
                boxShadow: "var(--ps-shadow-sm)",
              }}
              className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap px-4 py-2.5 text-[13px] font-bold transition active:scale-95"
            >
              {type}
            </button>
          );
        })}
      </div>

      {/* Preview card */}
      <section
        style={{ background: "var(--ps-surface)", borderRadius: "var(--ps-radius-lg)", boxShadow: "var(--ps-shadow-md)" }}
        className="mb-6 flex flex-col items-center gap-4 p-6"
      >
        <div
          style={{ background: "#FFFFFF", borderRadius: "var(--ps-radius-md)" }}
          className="flex w-full flex-col items-center gap-2 px-4 pt-5 pb-4"
        >
          <svg viewBox="0 0 220 56" preserveAspectRatio="none" aria-hidden="true" className="block h-16 w-full">
            <rect x="0" y="0" width="220" height="56" fill="#ffffff" />
            <g fill={selectedSwatch}>
              {[
                4, 9, 13, 18, 25, 29, 35, 39, 44, 51, 55, 60, 66, 70, 77, 82, 86, 92, 96, 101,
                108, 112, 118, 123, 127, 134, 138, 143, 149, 153, 160, 165, 169, 175, 179, 184,
                191, 195, 201, 206, 210, 215,
              ].map((x, i) => (
                <rect key={x} x={x} y={4} width={[3, 1, 2, 4][i % 4]} height={44} />
              ))}
            </g>
          </svg>
          <span style={{ fontFamily: "var(--ps-font-body)", color: "#201C18" }} className="text-[11px] tracking-[0.12em]">
            {encodeValue.slice(0, 1)} {encodeValue.slice(1, 6)}K {encodeValue.slice(6, 9)}K {encodeValue.slice(9)}
          </span>
        </div>
        <span style={{ fontFamily: "var(--ps-font-body)", color: "var(--ps-fg-muted)" }} className="text-xs font-bold">
          {selectedType} · {size}%
        </span>
      </section>

      {/* Input card */}
      <section
        style={{ background: "var(--ps-surface)", borderRadius: "var(--ps-radius-lg)", boxShadow: "var(--ps-shadow-md)" }}
        className="mb-6 flex flex-col gap-5 p-5"
      >
        <div
          style={{ background: "var(--ps-surface-recessed)", borderRadius: "var(--ps-radius-md)" }}
          className="flex items-center gap-3 p-4"
        >
          <input
            type="text"
            value={encodeValue}
            onChange={(e) => setEncodeValue(e.currentTarget.value)}
            placeholder="Enter data to encode"
            style={{ fontFamily: "var(--ps-font-body)", color: "var(--ps-fg)" }}
            className="min-w-0 flex-1 border-none bg-transparent text-base outline-none placeholder:opacity-60"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span style={{ fontFamily: "var(--ps-font-body)", color: "var(--ps-fg)" }} className="text-sm font-bold">
              Bar color
            </span>
            <span style={{ fontFamily: "var(--ps-font-body)", color: "var(--ps-fg-muted)" }} className="text-xs">
              Applies to preview and export
            </span>
          </div>
          <div className="flex gap-2">
            {SWATCHES.map((swatch) => (
              <button
                key={swatch.name}
                aria-selected={selectedSwatch === swatch.value}
                aria-label={swatch.name}
                onClick={() => setSelectedSwatch(swatch.value)}
                style={{
                  backgroundColor: swatch.value,
                  borderRadius: "var(--ps-radius-full)",
                  outline: selectedSwatch === swatch.value ? "2px solid var(--ps-accent)" : "none",
                  outlineOffset: "2px",
                }}
                className="h-7 w-7 shrink-0 transition active:scale-90"
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-0.5">
            <span style={{ fontFamily: "var(--ps-font-body)", color: "var(--ps-fg)" }} className="text-sm font-bold">
              Size
            </span>
            <span style={{ fontFamily: "var(--ps-font-body)", color: "var(--ps-fg-muted)" }} className="text-xs">
              Sticker width
            </span>
          </div>
          <div className="flex flex-1 items-center gap-3">
            <input
              type="range"
              min={20}
              max={100}
              value={size}
              onChange={(e) => setSize(Number(e.currentTarget.value))}
              className="ps-slider w-full flex-1"
            />
            <span
              style={{ fontFamily: "var(--ps-font-body)", color: "var(--ps-fg-muted)" }}
              className="w-9 text-right text-[13px] tabular-nums"
            >
              {size}%
            </span>
          </div>
        </div>
      </section>

      {/* Action grid */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <button
          style={{ background: "var(--ps-primary)", borderRadius: "var(--ps-radius-md)", boxShadow: "var(--ps-shadow-sm)" }}
          className="flex flex-col items-start gap-3 p-5 text-left transition active:scale-95"
        >
          <BarcodeIcon className="h-7 w-7 text-white" />
          <div>
            <div style={{ fontFamily: "var(--ps-font-display)", fontWeight: 700 }} className="text-lg leading-tight text-white">
              Generate
            </div>
            <div className="mt-1 text-xs text-white/80">Render this label</div>
          </div>
        </button>
        <button
          style={{ background: "var(--ps-secondary)", borderRadius: "var(--ps-radius-md)", boxShadow: "var(--ps-shadow-sm)" }}
          className="flex flex-col items-start gap-3 p-5 text-left transition active:scale-95"
        >
          <ShareIcon className="h-7 w-7 text-white" />
          <div>
            <div style={{ fontFamily: "var(--ps-font-display)", fontWeight: 700 }} className="text-lg leading-tight text-white">
              Share
            </div>
            <div className="mt-1 text-xs text-white/80">Send as PNG or PDF</div>
          </div>
        </button>
      </div>
      <button
        style={{ background: "var(--ps-accent)", borderRadius: "var(--ps-radius-md)", boxShadow: "var(--ps-shadow-sm)" }}
        className="mb-8 flex w-full items-center gap-3 p-5 text-left transition active:scale-95"
      >
        <SaveIcon className="h-6 w-6 shrink-0 text-white" />
        <div>
          <div style={{ fontFamily: "var(--ps-font-display)", fontWeight: 700 }} className="text-lg leading-tight text-white">
            Save to library
          </div>
          <div className="mt-1 text-xs text-white/80">Keep this label for reuse later</div>
        </div>
      </button>

      {/* Recent */}
      <p
        style={{ fontFamily: "var(--ps-font-body)", color: "var(--ps-fg)" }}
        className="mb-3 text-xs font-bold uppercase tracking-wide"
      >
        Recent
      </p>
      <div style={{ background: "var(--ps-surface)", borderRadius: "var(--ps-radius-lg)", boxShadow: "var(--ps-shadow-md)" }}>
        {HISTORY.map((item, i) => (
          <div
            key={item.title}
            style={{ borderColor: "var(--ps-divider)" }}
            className={`flex items-center gap-3 p-4 ${i !== 0 ? "border-t" : ""}`}
          >
            <div
              style={{ background: "var(--ps-surface-recessed)", color: "var(--ps-fg)", borderRadius: "var(--ps-radius-sm)" }}
              className="flex h-11 w-11 shrink-0 items-center justify-center"
            >
              {item.tag === "Print" ? <QrIcon className="h-[18px] w-6" /> : <BarcodeIcon className="h-[18px] w-6" />}
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span style={{ fontFamily: "var(--ps-font-body)", color: "var(--ps-fg)" }} className="truncate text-sm font-bold">
                {item.title}
              </span>
              <span style={{ fontFamily: "var(--ps-font-body)", color: "var(--ps-fg-muted)" }} className="text-xs">
                {item.meta}
              </span>
            </div>
            <span
              style={{
                background: "var(--ps-surface-recessed)",
                color: "var(--ps-fg-muted)",
                fontFamily: "var(--ps-font-body)",
                borderRadius: "var(--ps-radius-full)",
              }}
              className="shrink-0 px-3 py-1 text-[11px] font-bold"
            >
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;