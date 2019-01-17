require('dotenv').config();


const express = require('express');
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs');
const httpServer = require('http-server');

require('isomorphic-fetch');

const app = express();

app.get('/', function(req, res) {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      data = data.replace(/\$OG_URL/g, 'http://ardysusanto.com');
      data = data.replace(/\$OG_TYPE/g, 'website');
      data = data.replace(/\$OG_TITLE/g, 'Ardysusanto.com - Bersama membangun ekonomi kerakyatan');
      data = data.replace(/\$OG_IMAGE/g, 'https://storage.googleapis.com/ardy-upload/1546909842526ardy-susanto%202.jpg');
      data = data.replace(/\$OG_IMAGE_TYPE/g, 'image/jpeg');
      data = data.replace(/\$OG_IMAGE_WIDTH/g, '400');
      data = data.replace(/\$OG_IMAGE_HEIGHT/g, '300');
      data = data.replace(/\$OG_DESCRIPTION/g, 'Ardy Susanto merupakan sosok muda dari Partai Kebangkitan Bangsa yang akan maju untuk menjadi Calon DPR RI Dapil Banten 3');
      data = data.replace('2335498293131821', '2335498293131821')
      res.send(data);
    })
});

app.get('/profil', function(req, res) {
    console.log('masuk Profile')
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      data = data.replace(/\$OG_URL/g, 'http://ardysusanto.com');
      data = data.replace(/\$OG_TYPE/g, 'website');
      data = data.replace(/\$OG_TITLE/g, 'Ardysusanto.com - Bersama membangun ekonomi kerakyatan');
      data = data.replace(/\$OG_IMAGE/g, 'https://storage.googleapis.com/ardy-upload/1546909842526ardy-susanto%202.jpg');
      data = data.replace(/\$OG_IMAGE_TYPE/g, 'image/jpeg');
      data = data.replace(/\$OG_IMAGE_WIDTH/g, '400');
      data = data.replace(/\$OG_IMAGE_HEIGHT/g, '300');
      data = data.replace(/\$OG_DESCRIPTION/g, 'Ardy Susanto merupakan sosok muda dari Partai Kebangkitan Bangsa yang akan maju untuk menjadi Calon DPR RI Dapil Banten 3');
      data = data.replace('2335498293131821', '2335498293131821')
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
      data = data.replace(/\$OG_URL/g, 'http://ardysusanto.com');
      data = data.replace(/\$OG_TYPE/g, 'website');
      data = data.replace(/\$OG_TITLE/g, 'Ardysusanto.com - Bersama membangun ekonomi kerakyatan');
      data = data.replace(/\$OG_IMAGE/g, 'https://storage.googleapis.com/ardy-upload/1546909842526ardy-susanto%202.jpg');
      data = data.replace(/\$OG_IMAGE_TYPE/g, 'image/jpeg');
      data = data.replace(/\$OG_IMAGE_WIDTH/g, '400');
      data = data.replace(/\$OG_IMAGE_HEIGHT/g, '300');
      data = data.replace(/\$OG_DESCRIPTION/g, 'Ardy Susanto merupakan sosok muda dari Partai Kebangkitan Bangsa yang akan maju untuk menjadi Calon DPR RI Dapil Banten 3');
      data = data.replace('2335498293131821', '2335498293131821')
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

      console.log('TEst ', req.url)
      const url = req.url
      const id = url.split('/')[2]
      const judul = url.split('/')[3]

      console.log('REQUEST ', id, judul)

      fetch(`http://35.185.181.27:3000/api/berita/readbyid/${id}`)
      .then(function(response) {
        if (!response) {
          return console.log('ERROR ')
        }
        return response.json()
      })
      .then(function (response) {
        console.log('NAH => ',response.data)
        const { judul, isi, img } = response.data
        data = data.replace(/\$http://ardysusanto.com/g, `http://ardysusanto.com/berita/${id}/${judul}`);
        data = data.replace(/\$OG_TYPE/g, 'article');
        data = data.replace(/\$OG_TITLE/g, judul);
        data = data.replace(/\$OG_IMAGE/g, img);
        data = data.replace(/\$OG_IMAGE_TYPE/g, 'image/jpeg');
        data = data.replace(/\$OG_IMAGE_WIDTH/g, '400');
        data = data.replace(/\$OG_IMAGE_HEIGHT/g, '300');
        data = data.replace(/\$OG_DESCRIPTION/g, isi.replace(/(<([^>]+)>)/ig,"").substring(0, 80));
        data = data.replace('2335498293131821', '2335498293131821')
        res.send(data);
        })
        .catch(function (error) {
          return console.log(error)
        })

    })
});

app.get('/admin', function(req, res) {
    console.log('masuk admin')
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      res.send(data);
    })
});

app.get('/admin/dashboard', function(req, res) {
    console.log('masuk admin dashboard')
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      res.send(data);
    })
});

app.get('/admin/user', function(req, res) {
    console.log('masuk admin user')
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      res.send(data);
    })
});

app.get('/admin/user/tambah', function(req, res) {
    console.log('masuk admin tambah user')
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      res.send(data);
    })
});

app.get('/admin/user/reset/:id', function(req, res) {
    console.log('masuk admin reset password')
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      res.send(data);
    })
});

app.get('/admin/user/edit/:id', function(req, res) {
    console.log('masuk admin edit user')
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      res.send(data);
    })
});

app.get('/admin/berita', function(req, res) {
    console.log('masuk admin berita')
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      res.send(data);
    })
});


app.get('/admin/berita/tambah', function(req, res) {
    console.log('masuk admin berita tambah')
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      res.send(data);
    })
});

app.get('/admin/berita/edit/:id', function(req, res) {
    console.log('masuk admin berita edit')
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