const express = require('express');
const stylus = require('stylus');
const nib = require('nib');
const path = require('path');

const app = express();

const router = require('./routes/router');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static((path.join(__dirname, 'public'))));

compile = (str, path) => {
    return stylus(str)
        .set('filename', path)
        .use(nib())
}

app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
}));

app.use('/', router);

app.listen(3000);