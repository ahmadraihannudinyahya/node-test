const express = require('express');

const app = express();

var param;

app.get('/var', (_, res) => {
  res.send({result : param});
});

app.get('/var/:value', (req, res) => {
  const { value } = req.params;
  param = value;
  res.send({result : value});
});

app.get('/test', (_, res) => {
  console.log('test');
  res.send({result : "test"});
});

app.get('/error', (_, res) => {
  console.log('error');
  process.exit(2);
  throw new Error('test');
});

app.listen(3000, () => {
  console.log('app running in port 3000');
})