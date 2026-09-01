use rusqlite::OptionalExtension;
use crate::barcode::{self, model::{Barcode, NewBarcode}};
use rusqlite::Connection;

pub trait BarcodeRepository{
    fn create(&self , conn : &Connection , barcode  : &NewBarcode , id : &str) -> Result<() , String>;
    fn search(&self , conn : &Connection , nom: Option<&str> , create_at: Option<&str> , symbology: Option<&str>) -> Result<Vec<Barcode> , String>;
}
pub struct SqliteBarcodeRepository;

impl BarcodeRepository for SqliteBarcodeRepository {
    fn create(&self , conn : &Connection , barcode  : &NewBarcode , id : &str) -> Result<() , String> {
        let now = chrono::Utc::now().to_rfc3339();
        conn.execute(
            "INSERT INTO barcode (id , name , code , symbology , qte , price , image_path , status  , create_at) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8 , ?9)  ", 
            (
                id,
                &barcode.nom,
                &barcode.code,
                &barcode.symbology,
                barcode.qte,
                barcode.price,
                barcode.image_path,
                barcode.status,
                &now,
            )
        )
        .map_err(|e| e.to_string())?;
        Ok(())
    }
    fn search(&self , conn : &Connection , nom: Option<&str> , create_at: Option<&str> , symbology: Option<&str>) -> Result<Vec<Barcode> , String> {
            Ok(())
    }
}