// want this store to be an object, holding all reviews
// key:reviewId, value: review object
// initialize it to empty
// load all the reviews from the db into it in the LOAD action (and thunk)
import {csrfFetch} from './csrf';


//constants
const LOAD = 'reviews/LOAD'
const ADD_REVIEW = 'reviews/ADD_REVIEW'
const DELETE_REVIEW = 'reviews/DELETE_REVIEW'

// action creators

const load = (reviews) => ({
  type: LOAD,
  reviews
});

const addReview = (review) => ({
  type: ADD_REVIEW,
  review
});

const deleteReview = (id) => ({
  type: DELETE_REVIEW,
  id
});

// thunk creators

export const newReview = (review) => async dispatch => {
  const response = await csrfFetch(`/api/beers/${review.beerId}`,{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  });

  console.log(response)

  if(response.ok){
    const newReview = await response.json();
    dispatch(addReview(newReview));
    return newReview;
  }
};

export const updateReview = (data) => async dispatch => {
  const response = await fetch(`/api/beers/${data.beerId}/reviews/${data.id}`,{
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if(response.ok){
    const review = await response.json();
    dispatch(addReview(review));
    return review;
  }
};

export const destroyReview = (review) => async dispatch => {
  const response = await csrfFetch(`/api/beers/${review.beerId}/reviews/${review.id}`,{
    method: 'delete'
  });
  
  if(response.ok){
    const id = await response.json();
    dispatch(deleteReview(id));
    return id;
  }
};

export const loadReviews = (id) => async dispatch => {
  const response = await fetch(`/api/beers/reviews/${id}`);
  if(response.ok){
    const reviews =  await response.json();
    dispatch(load(reviews));
    return reviews;
  }
};

// reducer

const sortList = (list) => {
  return list.sort((reviewA, reviewB) => {
    return reviewA.id - reviewB.id;
  }).map((review) => review.id);
};

const initialState = {reviewsList:[]}

const reviewReducer = (state = initialState, action) => {
  switch (action.type){
    case LOAD:{
      const allReviews = {};
      action.reviews.forEach(review => {
        allReviews[review.id] = review;
      });
      return {
        ...state,
        ...allReviews,
        reviewsList: sortList(action.reviews),
      };
    }
    case ADD_REVIEW:{
      if (!state[action.review.id]) {
        const newState = {
          ...state,
          [action.review.id]: action.review
        };
        const reviewList = newState.reviewsList.map(id => newState[id]);
        reviewList.push(action.review);
        newState.reviewsList = sortList(reviewList);
        return newState;
      }
      return {
        ...state,
        [action.review.id]: {
          ...state[action.review.id],
          ...action.review,
        }
      };
    }
    case DELETE_REVIEW:{
      const newState = {...state};
      const reviewList = newState.reviewsList.filter(id => id.toString() !== action.id.toString());
      const newReviewList = reviewList.map(id => newState[id])
      newState.reviewsList = sortList(newReviewList);
      delete newState[action.id];
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default reviewReducer;