const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log('Could not conect to the data base: ', err);
  } else {
    console.log('cONNECT TO DATA BASE: ' + config.db);
  }
});

app.use(express.static(__dirname + '/client2/dist/client2'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client2/dist/client2/index.html'));
  console.log('listening on port 8080');
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
