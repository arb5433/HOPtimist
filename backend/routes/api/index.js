const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const beersRouter = require('./beers.js');
const brewRouter = require('./breweries.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/beers', beersRouter);

router.use('/breweries', brewRouter);

module.exports = router;



