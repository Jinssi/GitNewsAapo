const express = require('express');
const health = require('./src/routes/health');

const app = express();
app.use(express.json());

app.use('/health', health);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`GitNews API listening on ${port}`);
});

module.exports = app;
