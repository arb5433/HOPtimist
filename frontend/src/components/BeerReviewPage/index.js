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

  const [totalRating, setTotalRating] = useState(0);
  

  const sortList = (list) => {
    return list.sort((reviewA, reviewB) => {
      return reviewB.id - reviewA.id;
    });
  };
  
  const unOrderedReviews = useSelector(state => {
    return state.review.reviewsList.map(reviewId => state.review[reviewId]);
  });

  const reviews = sortList(unOrderedReviews);

  const beer = useSelector(state => {
    return state.beer[id];
  });

  useEffect(() => {
    let total = 0;
    let count = 0;
    reviews.forEach(review => {
      total += review.rating;
      count++;
    });
    const newRating = total > 1 ? total/count : 0;
    const rounded = Math.round(newRating * 10) / 10
    setTotalRating(rounded);
  }, [reviews])

  useEffect(() => {
    dispatch(loadReviews(id))
  },[dispatch,id]);


  return (
    <div className='review-page-wrapper'>
      <div>
        {beer && (
          <div className='beer-card-wrapper-review'>
            <BeerCard beer={beer}/>
            <p className='overall-rating'>Overall Rating: &#127867;{totalRating ? totalRating : 'N/A'} &#127867;</p>
          </div>
        )}
      </div>
      {reviews && (
        <div className='reviews-wrapper'>
          {reviews.map(review => <ReviewBlock key={review.id} review={review} beer={beer}/>)}
        </div>
      )}
      {beer && (
        <div className='add-review-btn-wrapper'>
          <NavLink className='add-review-btn' to={`/beers/${beer.id}/reviews`}>Add a new review</NavLink>
        </div>
      )}
    </div>
  )
}

export default BeerReviewPage;