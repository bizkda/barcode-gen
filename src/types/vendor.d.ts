declare module "bwip-js" {
  interface BwipOptions {
    bcid: string;
    text: string;
    scale?: number;
    includetext?: boolean;
    backgroundcolor?: string;
    color?: string;
    [key: string]: unknown;
  }
  function toCanvas(canvas: HTMLCanvasElement | string, options: BwipOptions): HTMLCanvasElement;
  const bwipjs: { toCanvas: typeof toCanvas };
  export default bwipjs;
}