DROP TABLE IF EXISTS entries;

CREATE TABLE entries(
  entries_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
)