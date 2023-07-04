"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testDb = exports.seedDb = exports.pool = void 0;
const pg_1 = require("pg");
const fs_1 = __importDefault(require("fs"));
const _helpers_1 = require("./_helpers");
const dbConfig = {
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 6100,
    database: "devdb"
};
const pool = new pg_1.Pool(dbConfig);
exports.pool = pool;
const seedDb = function (actor) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`in seedDb function`);
        let sql = fs_1.default.readFileSync('./src/sql/seed.sql').toString();
        console.log(`console.log(sql)`);
        console.log(sql);
        let result = yield actor.query(sql);
        return result;
    });
};
exports.seedDb = seedDb;
const testDb = function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("██████  SELECT NOW ███████████");
        console.log(yield pool.query("SELECT NOW()"));
        console.log("██████  DROP TABLE IF EXISTS entries ███████████");
        console.log(yield pool.query("DROP TABLE IF EXISTS entries"));
        console.log("██████  SHOW TABLES ███████████");
        console.log(yield pool.query("SELECT table_schema || '.' || table_name FROM information_schema.tables WHERE table_type = 'BASE TABLE' AND table_schema NOT IN ('pg_catalog', 'information_schema');"));
        console.log("██████  Waiting 5 seconds then seeding db ███████████");
        yield (0, _helpers_1.timeout)(5000);
        console.log("██████  seedDb(pool); ███████████");
        let result = yield seedDb(pool);
        console.log("██████  seedDb(pool) result ███████████");
        console.log(result);
        console.log("██████  SHOW USER-CREATED?? TABLES ███████████");
        console.log(yield pool.query("SELECT table_schema || '.' || table_name FROM information_schema.tables WHERE table_type = 'BASE TABLE' AND table_schema NOT IN ('pg_catalog', 'information_schema');"));
        console.log("██████  SHOW INFO OF TABLE ███████████");
        console.log(yield pool.query("SELECT table_name, table_schema, column_name, data_type FROM information_schema.columns WHERE table_name = 'entries';"));
        console.log("██████  INSERT INTO TABLE ███████████");
        console.log(yield pool.query("INSERT INTO entries(description) VALUES ('Test Description 1') RETURNING *;"));
    });
};
exports.testDb = testDb;
