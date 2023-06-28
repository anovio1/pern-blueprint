//  vars
const port = 5000;

//  reqs
const express = require("express");
const app = express();
const cors = require("cors");
const {client, pool} = require("./db");


// Test
async function test(){
  console.log("test");
  console.log(client);

  await client.connect();
  console.log(await client.query("SELECT NOW()"));
  client.query("CREATE TABLE testfrompost (id SERIAL PRIMARY KEY);")
  
}

test();

//  middleware
app.use(cors());
app.use(express.json());

//  Routes

app.listen(port, ()=> {
  console.log(`server has started on port ${port}`);
})

app.post("/test", async (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.error(err.message);
  }
})


app.post("/seed", async (req, res) => {
  try {
    console.log('seed');
    console.log(req.body);
    if(req.body.action == "init") {
      for (let i = 0; i < req.body.sql.length; i++) {
        let query = req.body.sql[i];
        console.log("\t in req.body.sql ... \r\n\t ... Query is " + query);
        console.log("awaiting pool.query")
        let result = await pool.query(query);
        res.json(result);
      }

    }
  } catch (err) {
    console.error(err.message);
  }
})