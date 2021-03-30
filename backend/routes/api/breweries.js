const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Brewery } = require('../../db/models');

const router = express.Router();

const validationBrew = [
  // set up validations
];

//GET list of all of the breweries
router.get('/', asyncHandler(async(req, res) => {
  const breweries = await Brewery.findAll();
  return res.json(breweries);
}));

module.exports = router;