const express = require('express');
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/', function(req, res) {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      res.send(data)
    })
});

app.get('/profil', function(req, res) {
    console.log('masuk Profile')
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }
        res.send(data);
    })
});

app.get('/berita', function(req, res) {
    console.log('masuk berita')
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }
        res.send(data);
    })
});

app.get('/berita/:id/:judul', function(req, res) {
    console.log('masuk detail berita')
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) {
          return console.log(err);
      }
      res.send(data);
    })
});

app.use(express.static(path.resolve(__dirname, './build')));

app.listen(port, () => console.log(`Listening on port ${port}`));