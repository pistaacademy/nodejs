const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../util/path');
const adminData = require('./admin');



router.get('/',(req, res, next)=>{
    const products = adminData.products;
    res.render('shop', {
        prods: products, 
        pageTitle: 'Pista Shop', 
        path: '/', 
        hasProducts: products.length > 0, 
        activeShop: true,
        productCSS: true
    });
});


module.exports = router;