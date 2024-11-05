var express = require('express');
const path = require('path');
var cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config()

// create the connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

var app = express()
app.use(cors())

app.use('/images', express.static(path.join(__dirname, 'images')));
app.get('/image/:imageName', (req, res) => {
  const imageName = req.params.imageName; 
  const imagePath = path.join(__dirname, 'images', imageName); 

  res.sendFile(imagePath, (err) => {
    if (err) {
      res.status(404).send('Image not found');
    }
  });
});

app.get('/hello', function (req, res, next) {
  res.json({msg: 'hellowordggg'})
})

app.get('/urs', function (req, res, next){
    connection.query(
        'SELECT * FROM `users`',
        function(err, result, fields){
            res.json(result)
        }
    )
})

app.listen(8081, function () {
  console.log('CORS-enabled web server listening on port 8081')
})