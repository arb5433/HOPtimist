import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {useParams, NavLink} from 'react-router-dom';

import {loadReviews} from '../../store/reviews';

import ReviewBlock from './ReviewBlock';
import BeerCard from '../BeerCard';

import './BeerReviewPage.css'

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
    <div className='review-page-wrapper'>
      <div>
        {beer && (
          <div>
            <BeerCard beer={beer}/>
            <p className='overall-rating'>Overall Rating: &#127867;{totalRating} &#127867;</p>
          </div>
        )}
      </div>
      {reviews && (
        <div className='reviews-wrapper'>
          {reviews.map(review => <ReviewBlock key={review.id} review={review}/>)}
        </div>
      )}
      <div className='add-review-btn-wrapper'>
        <NavLink className='add-review-btn' to={`/beers/${beer.id}/reviews`}>Add a new review</NavLink>
      </div>
    </div>
  )
}

export default BeerReviewPage;