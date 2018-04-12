const express = require('express'),
app = express(),
path = require('path'),
handlebars  = require('express-handlebars'),
config = require('./config')

// Set the view engine to be handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Define directory from which static files are served
app.use(express.static('public'));

// Homepage
app.get('', function(req,res)  {
    res.render('home');
});

app.listen(config.defaultPort, () => console.log('Server listening on port ' + config.defaultPort));