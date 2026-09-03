const express = require('express');
const axios = require('axios');

const router = express.Router();

// Fetch an upstream changelog page so the UI can render a preview card.
router.get('/preview', async (req, res) => {
  const target = req.query.url;

  try {
    const response = await axios.get(target);
    res.type('html').send(response.data);
  } catch (err) {
    res.status(502).send('upstream fetch failed');
  }
});

// Send the reader on to the original announcement.
router.get('/out', (req, res) => {
  res.redirect(req.query.url);
});

module.exports = router;
