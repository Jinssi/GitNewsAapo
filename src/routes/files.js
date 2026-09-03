const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const EXPORT_DIR = path.join(__dirname, '..', '..', 'data', 'exports');

router.get('/download', (req, res) => {
  const target = path.join(EXPORT_DIR, req.query.name);

  fs.readFile(target, 'utf8', (err, data) => {
    if (err) {
      return res.status(404).send('export not found');
    }
    res.type('text/csv').send(data);
  });
});

module.exports = router;
