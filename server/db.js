const { Client, Pool } = require("pg");

const dbCreds = {
  user: "postgres",
  password: "password",
  host: "localhost",
  port: "6100",
  database: "devdb"
};

const client = new Client(dbCreds);

const pool = new Pool(dbCreds)


module.exports = {pool, client};