use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Barcode {
    pub id: String,
    pub nom: Option<String>,
    pub code: String,           // NOT NULL in schema — shouldn't be Option
    pub symbology: String,
    pub qte: i32,
    pub price: Option<f64>,     // was dropped last message — re-add if still needed
    pub image_path: String,
    pub status: String,
    pub created_at: String,     // useful for display; DATETIME comes back as TEXT via rusqlite
    pub updated_at: String,
}

#[derive(Debug, Deserialize)]
pub struct NewBarcode {
    pub nom: Option<String>,
    pub code: String,
    pub symbology: String,
    pub qte: i32,
    pub price: Option<f64>,
    pub image_path: String,
    pub status: String,
}