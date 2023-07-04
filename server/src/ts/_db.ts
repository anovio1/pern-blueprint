import { Pool, PoolConfig } from 'pg';
import fs from 'fs';
import { timeout } from './_helpers';

const dbConfig: PoolConfig = {
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 6100,
  database: "devdb"
};

const pool: Pool = new Pool(dbConfig);

const seedDb = async function (actor: Pool): Promise<unknown> {
  console.log(`in seedDb function`);
  let sql: string = fs.readFileSync('./src/sql/seed.sql').toString();
  console.log(`console.log(sql)`);
  console.log(sql);
  let result = await actor.query(sql);
  return result;
};

const testDb = async function (): Promise<void> {
  console.log("██████  SELECT NOW ███████████");
  console.log(await pool.query("SELECT NOW()"));
  console.log("██████  DROP TABLE IF EXISTS entries ███████████");
  console.log(await pool.query("DROP TABLE IF EXISTS entries"));
  console.log("██████  SHOW TABLES ███████████");
  console.log(await pool.query("SELECT table_schema || '.' || table_name FROM information_schema.tables WHERE table_type = 'BASE TABLE' AND table_schema NOT IN ('pg_catalog', 'information_schema');"));
  console.log("██████  Waiting 5 seconds then seeding db ███████████");
  await timeout(5000);
  console.log("██████  seedDb(pool); ███████████");
  let result = await seedDb(pool);
  console.log("██████  seedDb(pool) result ███████████");
  console.log(result);
  console.log("██████  SHOW USER-CREATED?? TABLES ███████████");
  console.log(await pool.query("SELECT table_schema || '.' || table_name FROM information_schema.tables WHERE table_type = 'BASE TABLE' AND table_schema NOT IN ('pg_catalog', 'information_schema');"));
  console.log("██████  SHOW INFO OF TABLE ███████████");
  console.log(await pool.query("SELECT table_name, table_schema, column_name, data_type FROM information_schema.columns WHERE table_name = 'entries';"));
  console.log("██████  INSERT INTO TABLE ███████████");
  console.log(await pool.query("INSERT INTO entries(description) VALUES ('Test Description 1') RETURNING *;"));
};

export { pool, seedDb, testDb };