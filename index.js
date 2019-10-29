const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
  extended: true 
}));

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'testing'
});

conn.connect((err) =>{
  if(err) throw err;
  console.log('db connected');
});


// default route
app.get('/', function(req, res){
  return res.send({ error: true, message: 'nodejs simple api' });
});

// retrieve all product
app.get('/products', function(req, res){
  let sql = "SELECT * FROM tblProduct";
  conn.query(sql, function(error, results, fields) {
    if(error) throw error;
    return res.send({ error: false, data: results, message: 'Product List' });
  });
});


// retrieve product by id
app.get('/product/:id', function(req, res){
  let product_idx = req.params.id;
  
  if( !product_idx ){
    return res.status(400).send({ error: true, message: 'Please provide product id' });
  }

  let sql = "SELECT * FROM tblProduct WHERE product_idx=?";
  conn.query(sql, product_idx, function(error, results, fields) {
    if(error) throw error;
    return res.send({ error: false, data: results[0], message: 'Product List' });
  });
});


// add new product
app.post('/product', function(req, res){
  let product_name = req.body.product_name;
  let product_price = req.body.product_price;
  
  if( !product_name || !product_price ){
    return res.status(400).send({ error: true, message: 'Please provide product' });
  }

  let sql = "INSERT INTO tblProduct SET ? ";
  conn.query(sql, { product_name: product_name, product_price: product_price }, function(error, results, fields) {
    if(error) throw error;
    return res.send({ error: false, data: results, message: 'New product has been added succesfully.' });
  });
});

// add new product
app.put('/product', function(req, res){
  let product_idx = req.body.product_idx;
  let product_name = req.body.product_name;
  let product_price = req.body.product_price;
  
  if( !product_name || !product_price || !product_idx ){
    return res.status(400).send({ error: true, message: 'Please provide product name and product price' });
  }

  let sql = "UPDATE tblProduct SET product_name = ?, product_price = ? WHERE product_idx = ? ";
  conn.query(sql, [ product_name, product_price, product_idx ], function(error, results, fields) {
    if(error) throw error;
    return res.send({ error: false, data: results, message: 'Product has been updated succesfully.' });
  });
});


// delete product by id
app.delete('/product', function(req, res){
  let product_idx = req.body.product_idx;
  
  if( !product_idx ){
    return res.status(400).send({ error: true, message: 'Please provide product id' });
  }

  let sql = "DELETE FROM tblProduct WHERE product_idx = ? ";
  conn.query(sql, [ product_idx ], function(error, results, fields) {
    if(error) throw error;
    return res.send({ error: false, data: results, message: 'Product has been delete succesfully.' });
  });
});


// create a server
var server = app.listen(3001, () => {
  var host = server.address().address
  var port = server.address().port

  console.log("server is listening at http://%s:%s", host, port);
})