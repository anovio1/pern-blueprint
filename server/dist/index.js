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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const _db_1 = require("./_db");
//  Vars
const port = 5000;
//  Init express
const app = (0, express_1.default)();
//  Test Db Connection/Config
(0, _db_1.testDb)();
//  Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//  Routes
app.listen(port, () => {
    console.log(`server has started on port ${port}`);
});
// Seed Database via file
app.post("/seed", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('seed: seed via file');
        console.log(req.body);
        if (req.body.action == "init") {
            let result = (0, _db_1.seedDb)(_db_1.pool);
            res.json(result);
        }
    }
    catch (err) {
        if (err instanceof Error) {
            console.log('error');
            console.error(err.message);
        }
        else {
            console.error("Try/Catch produced error not of type Error");
        }
    }
}));
// Seed Database via commands in request JSON
app.post("/seedManual", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('seedManual: seed manually through queries in JSON');
        console.log(req.body);
        if (req.body.action === "init") {
            for (let i = 0; i < req.body.sql.length; i++) {
                let query = req.body.sql[i];
                let result = yield _db_1.pool.query(query);
                res.json(result);
            }
        }
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            console.error("Try/Catch produced error not of type Error");
        }
        else {
            console.error("Try/Catch produced error not of type Error");
        }
    }
}));
console.error("Try/Catch produced error not of type Error");
