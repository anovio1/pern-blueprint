const fs = require('fs');

//  vars
const port = 5000;

//  reqs
const express = require("express");
const app = express();
const cors = require("cors");
const {client, pool, seedDb} = require("./db");

// Test
async function test(){
  console.log("test");
  console.log(client);

  await client.connect();
  console.log(await client.query("SELECT NOW()"));
  console.log(await client.query("DROP TABLE IF EXISTS entries"));
}
test();

//  middleware
app.use(cors());
app.use(express.json());

//  Routes
app.listen(port, ()=> {
  console.log(`server has started on port ${port}`);
})

// Seed Database via file
app.post("/seed", async (req, res) => {
  try {
    console.log('seed: seed via file');
    console.log(req.body);
    if(req.body.action == "init") {
      let result = seedDb(pool);
      res.json(result);
    }
  } catch (err) {
    console.error(err.message);
  }
})

//  Seed Database via commands in request JSON
app.post("/seedManual", async (req, res) => {
  try {
    console.log('seedManual: seed manually through queries in JSON');
    console.log(req.body);
    if(req.body.action == "init") {
      for (let i = 0; i < req.body.sql.length; i++) {
        let query = req.body.sql[i];
        let result = await pool.query(query);
        res.json(result);
      }
    }
  } catch (err) {
    console.error(err.message);
  }
})