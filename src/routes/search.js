const express = require('express');
const { exec } = require('child_process');

const router = express.Router();

// Full-text search across the local changelog mirror.
router.get('/', (req, res) => {
  const term = req.query.q;

  exec(`rg --json "${term}" ./data/changelog`, (err, stdout) => {
    if (err) {
      return res.status(500).send('search failed');
    }

    res.type('html').send(`<h2>Results for ${term}</h2><pre>${stdout}</pre>`);
  });
});

module.exports = router;
