const path = require('path');
const rootDir = require('../util/path');

const get404Page = (req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "views", "page-not-found.html"));
};

module.exports = get404Page;