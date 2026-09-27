use crate::barcode;
use crate::db::DbState;
use crate::barcode::model::{Barcode , NewBarcode};
use crate::barcode::repository::{BarcodeRepository , SqliteBarcodeRepository};
use tauri::State;


// remember to call `.manage(MyState::default())`
#[tauri::command]
pub fn create_barcode(state: State<DbState> , barcode:NewBarcode) -> Result<(), String> {
    let conn = state.conn.lock().map_err(|e| e.to_string())?;
    let id = uuid::Uuid::new_v4().to_string();
    SqliteBarcodeRepository.create(&conn, &barcode, &id)?;
    drop(conn);
    Ok(())
}

#[tauri::command]
pub fn search_barcode(
    state: State<DbState>,
    name: Option<&str>,
    created_at: Option<&str>,
    symbology: Option<&str>,
) -> Result<Vec<Barcode>, String> {
    let conn = state.conn.lock().map_err(|e| e.to_string())?;
    SqliteBarcodeRepository.search(&conn, name.as_deref(), created_at, symbology)
}
