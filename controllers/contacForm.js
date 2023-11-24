const path = require('path');
const rootDir = require('../util/path');

const getContactForm = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "contact.html"));
};

const getSuccessPage = (req, res, next) => {
    res.send('<h1>Form Successfully filled</h1>')
};

module.exports ={
    getContactForm,
    getSuccessPage
}