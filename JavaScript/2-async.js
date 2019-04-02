'use strict';

const { Pool } = require('pg');

const pool = new Pool({
  host: '127.0.0.1',
  port: 5432,
  database: 'application',
  user: 'marcus',
  password: 'marcus',
});

const query = async (sql, values = []) => {
  const startTime = new Date().getTime();
  const res = await pool.query(sql, values);
  const endTime = new Date().getTime();
  const executionTime = endTime - startTime;
  console.log(`Execution time: ${executionTime}`);
  return res;
};

// Usage

(async () => {
  const fields = ['schemaname', 'tablename', 'tableowner', 'hasindexes'];
  const sql = 'SELECT ' + fields.join(', ') +
    ' FROM pg_catalog.pg_tables WHERE tableowner = $1';
  const { rows } = await query(sql, ['marcus']);
  console.table(rows);
  pool.end();
})();
