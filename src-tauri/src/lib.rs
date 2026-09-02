use tauri::Manager;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
mod db;
mod barcode;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app |{
            let db_state = db::init_db(app);
            app.manage(db_state);
            Ok(())
        })
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            barcode::commands::create_barcode,
            barcode::commands::search_barcode,
            ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
