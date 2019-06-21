import Dexie from "dexie";

const db = new Dexie("CountryDB");
db.version(1).stores({ countries: "++id, alpha3Code " });

export default db;
