const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoute = require('./routes/admin');
const contactRoute = require('./routes/contact');
const shopRoute = require('./routes/shop');
const errorController = require('./controllers/404');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoute);
app.use('/contactus', contactRoute)
app.use(shopRoute);

app.use(errorController)

app.listen(4000, () => {
    console.log("Listening on port 4000");
})