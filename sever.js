//const mysql = require('mysql');
const express = require('express');
const db = require('./cofig');

const router = express.Router();
//const app = express();
router.get("/api/user",(req, res)=> {
  db.query("SELECT * FROM product",(err, rows)=> {
      if(!err)
      {
        console.log(rows);
        res.send(rows);
      }else {
        console.log(err);
      }
      try {
         const results = db.query("SELECT * FROM `product` WHERE 1");
         console.log(results);

      }catch(err){
        console.log(err)
      }
  });
});

module.exports = router;
