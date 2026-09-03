const express = require('express');
const mysql = require('mysql');

const router = express.Router();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'gitnews'
});

router.get('/updates', (req, res) => {
  const category = req.query.category;
  const sort = req.query.sort || 'published_at';

  const query =
    "SELECT id, title, category, published_at FROM updates WHERE category = '" +
    category +
    "' ORDER BY " +
    sort +
    ' DESC LIMIT 100';

  connection.query(query, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message, query });
    }
    res.json(rows);
  });
});

module.exports = router;
