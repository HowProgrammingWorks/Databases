'use strict';

const { Pool } = require('pg');

const pool = new Pool({
  host: '127.0.0.1',
  port: 5432,
  database: 'application',
  user: 'marcus',
  password: 'password',
})

const sql = 'SELECT $1::text as message';
const par = ['Hello'];
const res = pool.query(sql, par, (err, res) => {
  if (err) {
    throw err;
  }
  console.log(res.rows);
  client.end();
});
