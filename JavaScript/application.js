'use strict';

const { Pool } = require('pg');

const pool = new Pool({
  host: '127.0.0.1',
  port: 5432,
  database: 'application',
  user: 'marcus',
  password: 'marcus',
})

const sql = 'SELECT * FROM pg_catalog.pg_tables where tablespace = $1';
const par = ['pg_global'];
const res = pool.query(sql, par, (err, res) => {
  if (err) {
    throw err;
  }
  console.table(res.rows);
});
