const { Pool, Client } = require("pg");

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "perntodo",
  password: "password",
  port: 5432,
};

// Connect with a connection pool.
const pool = new Pool(credentials);

// async function poolDemo() {
//   const now = await pool.query("SELECT NOW()");
//   await pool.end();

//   return now;
// }

// Connect with a client.

async function clientDemo() {
  const client = new Client(credentials);
  await client.connect();
  const now = await client.query("SELECT NOW()");
  await client.end();

  return now;
}

// Use a self-calling function so we can use async / await.

(async () => {
  // const poolResult = await poolDemo();
  // console.log("Time with pool: " + poolResult.rows[0]["now"]);

  const clientResult = await clientDemo();
  console.log("Time with client: " + clientResult.rows[0]["now"]);
})();

module.exports = pool;