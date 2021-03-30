import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {useParams, NavLink} from 'react-router-dom';

import {loadReviews} from '../../store/reviews';

import ReviewBlock from './ReviewBlock';

const BeerReviewPage = () => {
  const dispatch = useDispatch();
  let {id} = useParams();
  id -= 1;

  const [totalRating, setTotalRating] = useState(0);
  
  const reviews = useSelector(state => {
    return state.review.reviews;
  });

  const beers = useSelector(state => {
    return state.beer.beers;
  });

  useEffect(() => {
    let total = 0;
    let count = 0;
    reviews.forEach(review => {
      total += review.rating;
      count++;
    });
    const newRating = total/count;
    setTotalRating(newRating);
  }, [reviews])

  useEffect(() => {
    dispatch(loadReviews(id))
  },[dispatch,id]);

  const beer = beers[id];

  return (
    <div>
      <div>
        <h1>{beer.name}</h1>
        <p>{beer.BeerStyle.style}</p>
        <p>{beer.Brewery.name}</p>
        <p>Overall Rating: {totalRating} Stars</p>
      </div>
      <div>
        {reviews.map(review => <ReviewBlock key={review.id} review={review}/>)}
      </div>
      <div>
        <NavLink to={`/beers/${beer.id}/reviews`}>Add a new review</NavLink>
      </div>
    </div>
  )
}

export default BeerReviewPage;