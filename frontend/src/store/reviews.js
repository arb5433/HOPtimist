// want this store to be an object, holding all reviews
// key:reviewId, value: review object
// initialize it to empty
// load all the reviews from the db into it in the LOAD action (and thunk)

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

const deleteReview = (review) => ({
  type: DELETE_REVIEW,
  review
});

// thunk creators

export const newReview = (data) => async dispatch => {
  const response = await fetch(`/api/beers/${data.beerId}/reviews/${data.id}`,{
    method: 'post',
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

export const destroyReview = (data) => async dispatch => {
  const response = await fetch(`/api/beers/${data.beerId}/reviews/${data.id}`,{
    method: 'delete'
  });
  
  if(response.ok){
    const review = response.json();
    dispatch(deleteReview(review));
    return review;
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

const initialState = {reviews:[]}

const reviewReducer = (state = initialState, action) => {
  switch (action.type){
    case LOAD:{
      return {
        ...state,
        reviews: action.reviews,
      };
    }
    case ADD_REVIEW:{
      if (!state[action.review.id]) {
        const newState = {
          ...state,
          [action.review.id]: action.review
        };
        const reviewList = newState.reviews.map(id => newState[id]);
        reviewList.push(action.review);
        newState.reviews = reviewList;
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
      return {
        ...state,
        [action.reviewId]: {
          ...state[action.reviewId],
          reviews: state[action.reviewId].filter(
            (review) => review.id !== action.reviewId
          ),
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default reviewReducer;