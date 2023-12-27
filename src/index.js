const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express()
const routes = require('./routes');
const route = require('./routes');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
// HTTP logger 
//app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));


//ROUTE init

route(app);



app.listen(3000)