import fs from 'fs';
import express from 'express';
import cors from 'cors';
import { pool, seedDb, testDb } from './_db';
import { timeout } from './_helpers';



//  Vars
const port: number = 5000;

//  Init express
const app: express.Application = express();

//  Test Db Connection/Config
testDb();

//  Middleware
app.use(cors());
app.use(express.json());

//  Routes
app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});

// Seed Database via file
app.post("/seed", async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    console.log('seed: seed via file');
    console.log(req.body);
    if (req.body.action == "init") {
      let result = seedDb(pool);
      res.json(result);
    }
  } catch (err) {
    if (err instanceof Error) {
      console.log('error');
      console.error(err.message);
    }
    else {
      console.error("Try/Catch produced error not of type Error");
    }
  }
});

// Seed Database via commands in request JSON
app.post("/seedManual", async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    console.log('seedManual: seed manually through queries in JSON');
    console.log(req.body);
    if (req.body.action === "init") {
      for (let i = 0; i < req.body.sql.length; i++) {
        let query: string = req.body.sql[i];
        let result = await pool.query(query);
        res.json(result);
      }
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      console.error("Try/Catch produced error not of type Error");
    }
    else {
      console.error("Try/Catch produced error not of type Error");
    }
  }
});
console.error("Try/Catch produced error not of type Error");
