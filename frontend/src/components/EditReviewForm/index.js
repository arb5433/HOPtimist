import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

import {getBeers} from '../../store/beers';
import {updateReview} from '../../store/reviews';
import BeerCard from '../BeerCard';
import { set } from 'js-cookie';

const EditReviewForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {id, rId} = useParams();

  const beer = useSelector(state => {
    return state.beer[id];
  });

  const user = useSelector(state => {
    return state.session.user;
  });

  const reviewObj = useSelector(state => {
    return state.review[rId];
  });
  
  const [review, setReview] = useState();
  const [rating, setRating] = useState();

  useEffect(()=>{
    if(reviewObj){
      setReview(reviewObj.review);
      setRating(reviewObj.rating);
    }
  },[reviewObj])


  useEffect(() => {
    dispatch(getBeers());
  },[dispatch]);




  const onSubmit = event => {
    event.preventDefault();
    const reviewPayLoad = {
      id: reviewObj.id,
      userId: user.id,
      beerId: beer.id,
      review,
      rating
    }
    dispatch(updateReview(reviewPayLoad));
    history.push(`/beers/${id}`);
  }

  return (
    <div className='review-form-wrapper'>
      <div className='rf-bc-wrapper'>
        <BeerCard beer={beer}/>
      </div>
      <form className='add-review-form' onSubmit={onSubmit}>
        <div className='title'>Update Review</div>
        <div className='review-form-inputs'>
          <label className='review-form-input'>Review
            <textarea className='text-area' value={review} onChange={(event) => setReview(event.target.value)}/>
          </label>
          <label className='review-form-input'>Rating: 
            <select value={rating} onChange={event => setRating(event.target.value)}>
              <option value={0} disabled>How Many Mugs</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
              <option value={4}>Four</option>
              <option value={5}>Five</option>
            </select>
          </label>
          <button className='add-beer-btn' type='submit'>Update Review</button>
        </div>
      </form>
    </div>
  )
};

export default EditReviewForm;