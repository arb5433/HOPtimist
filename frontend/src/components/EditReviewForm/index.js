import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

import {getBeers} from '../../store/beers';
import {updateReview} from '../../store/reviews';
import BeerCard from '../BeerCard';

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
  
  const [review, setReview] = useState(reviewObj.review);
  const [rating, setRating] = useState(reviewObj.rating);


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
    <div>
      <div>
        <BeerCard beer={beer}/>
      </div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Review</label>
          <textarea value={review} onChange={(event) => setReview(event.target.value)}/>
        </div>
        <div>
          <label>Rating: </label>
          <select value={rating} onChange={event => setRating(event.target.value)}>
            <option value={0} disabled>How Many Stars</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
            <option value={4}>Four</option>
            <option value={5}>Five</option>
          </select>
        </div>
        <button type='submit'>Update Review</button>
      </form>
    </div>
  )
};

export default EditReviewForm;