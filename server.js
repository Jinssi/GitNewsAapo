const express = require('express');
const health = require('./src/routes/health');
const search = require('./src/routes/search');
const reports = require('./src/routes/reports');
const files = require('./src/routes/files');
const proxy = require('./src/routes/proxy');

const app = express();
app.use(express.json());

app.use('/health', health);
app.use('/search', search);
app.use('/reports', reports);
app.use('/files', files);
app.use('/proxy', proxy);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`GitNews API listening on ${port}`);
});

module.exports = app;
