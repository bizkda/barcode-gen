import { useEffect, useRef, useState } from "react";
import JsBarcode from "jsbarcode";
import bwipjs from "bwip-js";
import { QRCodeSVG } from "qrcode.react";

export type CodeType = "Code 128" | "QR Code" | "EAN-13" | "UPC-A" | "Data Matrix";

interface CodePreviewProps {
  type: CodeType;
  value: string;
  color: string;
  /** 20–100, from the "Size" slider — width of the sticker as a % of its container */
  widthPercent: number;
}

const VALIDATORS: Record<CodeType, (v: string) => string | null> = {
  "Code 128": (v) => (v.length > 0 ? null : "Enter a value to encode"),
  "QR Code": (v) => (v.length > 0 ? null : "Enter a value to encode"),
  "EAN-13": (v) => (/^\d{12,13}$/.test(v) ? null : "EAN-13 needs 12–13 digits"),
  "UPC-A": (v) => (/^\d{11,12}$/.test(v) ? null : "UPC-A needs 11–12 digits"),
  "Data Matrix": (v) => (v.length > 0 ? null : "Enter a value to encode"),
};

export function CodePreview({ type, value, color, widthPercent }: CodePreviewProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [renderError, setRenderError] = useState<string | null>(null);

  const validationError = VALIDATORS[type](value);

  useEffect(() => {
    setRenderError(null);
    if (validationError) return;

    if ((type === "Code 128" || type === "EAN-13" || type === "UPC-A") && svgRef.current) {
      const format = type === "Code 128" ? "CODE128" : type === "EAN-13" ? "EAN13" : "UPC";
      try {
        JsBarcode(svgRef.current, value, {
          format,
          lineColor: color,
          background: "transparent",
          width: 2,
          height: 56,
          displayValue: true,
          fontSize: 13,
          textMargin: 6,
          margin: 0,
        });
        // JsBarcode sets fixed width/height attrs — override with CSS so the
        // "Size" slider can scale it responsively while keeping aspect ratio.
        svgRef.current.style.width = "100%";
        svgRef.current.style.height = "auto";
      } catch (err) {
        setRenderError(err instanceof Error ? err.message : "Could not render barcode — check the value");
      }
    }

    if (type === "Data Matrix" && canvasRef.current) {
      try {
        bwipjs.toCanvas(canvasRef.current, {
          bcid: "datamatrix",
          text: value,
          scale: 4,
          includetext: false,
          backgroundcolor: "FFFFFF",
          color: color.replace("#", ""),
        });
        canvasRef.current.style.width = "100%";
        canvasRef.current.style.height = "auto";
      } catch (err) {
        setRenderError(err instanceof Error ? err.message : "Could not render Data Matrix — check the value");
      }
    }
  }, [type, value, color, validationError]);

  const message = validationError ?? renderError;

  if (message) {
    return (
      <div
        style={{ background: "#FFFFFF", borderRadius: "var(--ps-radius-md)" }}
        className="flex w-full flex-col items-center justify-center gap-2 px-4 py-10"
      >
        <span
          style={{ fontFamily: "var(--ps-font-body)", color: "var(--ps-fg-muted)" }}
          className="text-center text-xs font-bold"
        >
          {message}
        </span>
      </div>
    );
  }

  return (
    <div
      style={{ background: "#FFFFFF", borderRadius: "var(--ps-radius-md)" }}
      className="flex w-full flex-col items-center gap-2 px-4 pt-5 pb-4"
    >
      {type === "QR Code" && (
        <div style={{ width: `${widthPercent}%` }}>
          <QRCodeSVG
            value={value}
            fgColor={color}
            bgColor="#FFFFFF"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      )}

      {type === "Data Matrix" && (
        <div style={{ width: `${widthPercent}%` }}>
          <canvas ref={canvasRef} style={{ imageRendering: "pixelated" }} />
        </div>
      )}

      {(type === "Code 128" || type === "EAN-13" || type === "UPC-A") && (
        <div style={{ width: `${widthPercent}%` }}>
          <svg ref={svgRef} />
        </div>
      )}
    </div>
  );
}