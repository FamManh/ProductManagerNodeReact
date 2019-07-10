var express = require('express');
var router = express.Router();

const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ProductManager',
  password: '21091997',
  port: 5432,
})

/* GET home page. */
router.get('/', function (req, res, next) {
});

router.get('/getdata', (req, res) => {

  // // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // // Request methods you wish to allow
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // // Request headers you wish to allow
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // // Set to true if you need the website to include cookies in the requests sent
  // // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);

  pool.query('SELECT * from Product', (err, response) => {
    if (err)
      console.log(err)
    else
      res.send(response.rows)
    //pool.end()
  })

})

router.get('/adddata', (req, res) => {
  res.render('add', { title: "sdfadsf" })
})

router.post('/adddata', (req, res) => {

  let item = {}
  item.name = req.body.productName;
  item.price = req.body.productPrice;
  item.image = req.body.productImage;
  //insert into Product (Name, Price, Image) values ($1,$2,$3),[item.name, item.price, item.image]
  pool.query("insert into Product (Name, Price, Image) values ('" + item.name + "', " + item.price + ", '" + item.image + "')", (err, response) => {
    if (err)
      console.log(err)
    //else
    //res.send(response)
    //pool.end()
  })
  res.send('Nhan duoc du lieu roi' + JSON.stringify(item))
})

module.exports = router;
