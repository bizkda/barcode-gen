use rusqlite::Connection;
use std::sync::Mutex;
use tauri::Manager;

pub struct DbState {
    pub conn: Mutex<Connection>,
}

const SCHEMA: &str = "
CREATE TABLE IF NOT EXISTS barcode (
    id INTEGER PRIMARY KEY ,
    name TEXT,
    code TEXT NOT NULL UNIQUE,
    symbology TEXT NOT NULL,
    qte INTEGER DEFAULT 0,
    price REAL,
    image_path TEXT,
    status TEXT DEFAULT 'active',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
";

pub fn init_db(app: &tauri::App) -> DbState {
    let data_dir = app
        .path()
        .app_data_dir()
        .expect("could not resolve app data dir");

    std::fs::create_dir_all(&data_dir).expect("failed to create app data dir");

    let db_path = data_dir.join("barcode.db");
    let conn = Connection::open(db_path).expect("failed to open sqlite db");
    conn.execute_batch(SCHEMA).expect("failed to run schema");

    DbState {
        conn: Mutex::new(conn),
    }
}