"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const dbConfig = {
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 6100,
    database: "devdb" // Edits to these options also require edits to /server/.env config
};
const pool = new pg_1.Pool(dbConfig);
exports.pool = pool;
