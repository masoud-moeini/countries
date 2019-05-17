import Dexie from "dexie";

const db = new Dexie("CountryDB");
db.version(1).stores({ countries: "++id" });

export default db;
