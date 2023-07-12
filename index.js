const express = require('express');

const app = express();

app.get('/test', (_, res) => {
  console.log('test');
  res.send({result : "test"});
});

app.get('/error', (_, res) => {
  throw new Error('test');
});

app.listen(3000, () => {
  console.log('app running in port 3000');
})