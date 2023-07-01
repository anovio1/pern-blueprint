const { Client, Pool } = require("pg");
const fs = require('fs');

const dbCreds = {
  user: "postgres",
  password: "password",
  host: "localhost",
  port: "6100",
  database: "devdb"
};

const client = new Client(dbCreds);

const pool = new Pool(dbCreds)

const seedDb = async function (actor) {
  console.log(`in seedDb function`);
  let sql = fs.readFileSync('seed.sql').toString();
  console.log(`console.log(sql)`);
  console.log(sql);
  let result = await actor.query(sql);
  return result;
}

module.exports = {pool, client, seedDb};