const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const beersRouter = require('./beers.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/beers', beersRouter);

module.exports = router;



