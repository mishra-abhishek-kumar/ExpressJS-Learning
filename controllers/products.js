const path = require('path');
const rootDir = require('../util/path');

const products = [];

const getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
}

const postAddProduct = (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
}

const getProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "shop.html"));
}

module.exports = {getAddProduct, postAddProduct, getProduct};