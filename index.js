const express = require('express');
const port = 80;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(`${port}`, () => {
  console.log('server started');
});
