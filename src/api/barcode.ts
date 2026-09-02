import { invoke } from "@tauri-apps/api/core";

export interface Barcode {
    id: String;
    name: String | null;
    code: String;           // NOT NULL in schema — shouldn't be Option
    symbology: String;
    qte: number | null;
    price: number | null;     // was dropped last message — re-add if still needed
    image_path: String | null;
    status: String;
    created_at: String;     // useful for display; DATETIME comes back as TEXT via rusqlite
    updated_at: String;
}
export interface NewBarcode {
    name: String | null;
    code: String;
    symbology: String;
    qte: number;
    price: number;
    image_path: String | null;
    status: String;
}

export function addBarcode(barcode: NewBarcode): Promise<string> {
  return invoke("create_barcode", { barcode });
}


export function searchBarcode(
  name?: string,
  created_at?: string,
  symbology?: string
): Promise<Barcode[]> {
  return invoke("search_barcode", {
    name: name || null,
    created_at: created_at ?? null,
    symbology: symbology ?? null,
  });
}

