const path = require('path');
const rootDir = require('../util/path');

const Product = require('../models/product');

const getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
}

const postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

const getProduct = (req, res, next) => {
    Product.fetchAll((products) => {
        console.log(products);
        res.sendFile(path.join(rootDir, "views", "shop.html"));
    });
    
}

module.exports = {getAddProduct, postAddProduct, getProduct};