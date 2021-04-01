const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const { Beer, Review, BeerStyle, Brewery, User } = require('../../db/models');

const router = express.Router();

const validationBeer = [
  // set up validations
];

const validationReviews = [
  // set up validations
];

// GET list of all of the reviews for a given beer
router.get('/reviews/:id', asyncHandler(async(req, res) => {
  let {id} = req.params;
  const reviews = await Review.findAll({where:{beerId: id}, include: User});
  return res.json(reviews);
}));

// X
// GET list of 10 of the beers
router.get('/10', asyncHandler(async(req, res) => {
  const beers = await Beer.findAll({include: [BeerStyle, Brewery], limit: 10, order: [['id', 'DESC']]});
  return res.json(beers);
}));

// GET list of all of the beers
router.get('/', asyncHandler(async(req, res) => {
  const beers = await Beer.findAll({include: [BeerStyle, Brewery]});
  return res.json(beers);
}));

// X
// GET list of all of the beer styles
router.get('/styles', asyncHandler(async(req, res) => {
  const styles = await BeerStyle.findAll();
  return res.json(styles);
}));

// X
// GET the one beer
router.get('/:id', asyncHandler(async(req, res) => {
  const {id} = req.params;
  const beer = await Beer.findOne({where: {id}, include: [BeerStyle, Brewery]});
  return res.json(beer);
}))

// X
// POST add a new beer
router.post('/', asyncHandler(async (req, res) => {
  const {name, breweryId, abv, ibu, styleId, description, userId} = req.body;
  const beer = await Beer.create({name, breweryId, abv, ibu, styleId, description, userId});
  return res.json(beer);
}),
);

// POST add a new review
router.post('/:id', asyncHandler(async (req, res) => {
  console.log('*******************In the backend')
  const {userId, beerId, review, rating, imageUrl} = req.body;
  const newReview = await Review.create({userId, beerId, review, rating, imageUrl});
  console.log('*************** NEW REVIEW ******************',newReview);
  return res.json(newReview);
}));

// X
// PUT update a beer that you have already created
router.put('/:id', asyncHandler(async(req, res) => {
  const {name, breweryId, abv, ibu, styleId, description} = req.body;
  const beer = await Beer.update({name, breweryId, abv, ibu, styleId, description});
  return res.json(beer);
}));

// X
// DELETE remove a beer that you have added
router.delete('/:id', asyncHandler(async(req, res) => {
  const {id} = req.params;
  const beer = await Beer.findByPk(id);
  const reviews = await Review.findAll({where:{beerId: id}});
  reviews.forEach(async review => {
     await review.destroy();
  })
  await beer.destroy();
  return res.json(id)
}));

// PUT update a review for a beer that you have already created
router.put('/:id/reviews/:rId', asyncHandler(async(req, res) => {
  const {rId} = req.params;
  const {userId, beerId, review, rating, imageUrl} = req.body;
  const OldReview = await Review.findByPk(rId)
  const newReview = await OldReview.update({userId, beerId, review, rating, imageUrl});
  return res.json(newReview);
}));

//DELETE remove a review that you have already created
router.delete('/:id/reviews/:rId', asyncHandler(async (req, res) => {
  const {rId} = req.params;
  const review = await Review.findByPk(rId);
  await review.destroy();
  return res.json(rId);
}));

module.exports = router;