'use strict';

const { Pool } = require('pg');

const pool = new Pool({
  host: '127.0.0.1',
  port: 5432,
  database: 'application',
  user: 'marcus',
  password: 'marcus',
});

const query = (sql, values, callback) => {
  const startTime = new Date().getTime();
  if (typeof values === 'function') {
    callback = values;
    values = [];
  }
  pool.query(sql, values, (err, res) => {
    const endTime = new Date().getTime();
    const executionTime = endTime - startTime;
    console.log(`Execution time: ${executionTime}`);
    if (callback) callback(err, res);
  });
};

// Usage

const fields = ['schemaname', 'tablename', 'tableowner', 'hasindexes'];
const sql = 'SELECT ' + fields.join(', ') +
  ' FROM pg_catalog.pg_tables WHERE tableowner = $1';
query(sql, ['marcus'], (err, res) => {
  console.dir({ res });
  if (err) {
    throw err;
  }
  console.table(res.fields);
  console.table(res.rows);
  pool.end();
});
