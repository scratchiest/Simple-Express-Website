const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express | Index', heading: 'Welcome to Express' });
})

router.get('/contact', (req, res, next) => {
    res.render('contact', { title: 'Express | Contact', heading: 'Contact Page' });
})

router.get('/about', (req, res, next) => {
    res.render('about', { title: 'Express | About', heading: 'About Page' });
})

module.exports = router;