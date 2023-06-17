//  vars
const port = 5000;

//  reqs
const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());


app.listen(port, ()=> {
  console.log(`server has started on port ${port}`);
})

