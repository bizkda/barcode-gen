use crate::barcode::model::{Barcode, NewBarcode};
use rusqlite::Connection;

pub trait BarcodeRepository {
    fn create(&self, conn: &Connection, barcode: &NewBarcode, id: &str) -> Result<(), String>;
    fn search(
        &self,
        conn: &Connection,
        name: Option<&str>,
        created_at: Option<&str>,
        symbology: Option<&str>,
    ) -> Result<Vec<Barcode>, String>;
}

pub struct SqliteBarcodeRepository;

impl BarcodeRepository for SqliteBarcodeRepository {
    fn create(&self, conn: &Connection, barcode: &NewBarcode, id: &str) -> Result<(), String> {
        let now = chrono::Utc::now().to_rfc3339();
        conn.execute(
            "INSERT INTO barcode (id, name, code, symbology, qte, price, image_path, status, created_at)
             VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)",
            (
                id,
                &barcode.name,
                &barcode.code,
                &barcode.symbology,
                barcode.qte,
                barcode.price,
                &barcode.image_path,
                &barcode.status,
                &now,
            ),
        )
        .map_err(|e| e.to_string())?;
        Ok(())
    }

    fn search(
    &self,
    conn: &Connection,
    name: Option<&str>,
    created_at: Option<&str>,
    symbology: Option<&str>,
    ) -> Result<Vec<Barcode>, String> {
        let mut query = String::from(
            "SELECT id, name, code, symbology, qte, price, image_path, status, created_at, updated_at
            FROM barcode WHERE 1=1"
        );
        let mut params: Vec<Box<dyn rusqlite::ToSql>> = Vec::new();

        if let Some(n) = name {
            query.push_str(" AND name LIKE ?");
            params.push(Box::new(format!("%{}%", n)));
        }
        if let Some(created) = created_at {
            query.push_str(" AND created_at LIKE ?");
            params.push(Box::new(format!("%{}%", created)));
        }
        if let Some(symbol) = symbology {
            query.push_str(" AND symbology LIKE ?");
            params.push(Box::new(format!("%{}%", symbol)));
        }
        query.push_str(" ORDER BY name");

        let mut stmt = conn.prepare(&query).map_err(|e| e.to_string())?;
        let params_refs: Vec<&dyn rusqlite::ToSql> = params.iter().map(|b| b.as_ref()).collect();

        let rows = stmt
            .query_map(params_refs.as_slice(), |r| {
                Ok(Barcode {
                    id: r.get(0)?,
                    name: r.get(1)?,
                    code: r.get(2)?,
                    symbology: r.get(3)?,
                    qte: r.get(4)?,
                    price: r.get(5)?,
                    image_path: r.get(6)?,
                    status: r.get(7)?,
                    created_at: r.get(8)?,
                    updated_at: r.get(9)?,
                })
            })
            .map_err(|e| e.to_string())?;

        rows.collect::<Result<Vec<Barcode>, rusqlite::Error>>()
            .map_err(|e| e.to_string())
    }
}