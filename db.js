// Import the MySQL module
const mysql = require('mysql');

// Create a MySQL pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'farm_ease_db',
  // Add the following line to specify the authentication plugin
  authPlugin: 'mysql_native_password'
});

// Export the pool to be used in other modules
module.exports = pool;
