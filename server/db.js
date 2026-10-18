const { Pool } = require('pg');

// Hosted providers such as Neon supply DATABASE_URL. Keep a modest pool
// because Netlify may run several function instances concurrently.
const config = process.env.DATABASE_URL
  ? { connectionString: process.env.DATABASE_URL, max: 5, idleTimeoutMillis: 10000, connectionTimeoutMillis: 10000, ssl: process.env.DATABASE_URL.includes('sslmode=require') ? undefined : { rejectUnauthorized: false } }
  : { host: process.env.PGHOST, port: process.env.PGPORT || 5432, database: process.env.PGDATABASE, user: process.env.PGUSER, password: process.env.PGPASSWORD, max: 5, idleTimeoutMillis: 10000, connectionTimeoutMillis: 10000 };

module.exports = new Pool(config);
