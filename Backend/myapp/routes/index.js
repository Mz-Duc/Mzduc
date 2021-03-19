var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sanpham',
  password: 'msd48',
  port: 5432,
})

/* GET home page. */
router.get('/', function(req, res, next) {
});


// get data from posgree
router.get('getdata01', function(req, res, next) {
  
  pool.query('SELECT * from product_info', (err, ress) => {
    if(err){console.log(err);}
    else{
      res.send(ress.rows)
    }
  })
});

  router.get('add',function(req,res,next){
    res.render('add',{})
  });

  router.post('add',function(req,res,next){
    var product_name=req.body.product_name,
    product_price=req.body.product_price,
    product_image=req.body.product_image;
    product_format=req.body.product_format,
    dispatcha=req.body.dispatcha;
    pool.query("insert into product_info (name,price,image) values ($1,$2,$3)",[product_name,product_price,product_image,product_format,dispatcha]
    ,(err,response)=>{res.send("Da nhan dc dl"+ product_image+product_name+product_name+product_format,dispatcha);});
  })
module.exports = router;
