// constants
const LOAD = 'breweries/LOAD';
// const ADD_BREWERY = 'breweries/ADD_BREWERY';
// const REMOVE_BREWERY = 'breweries/REMOVE_BREWERY';

// action creators

const load = breweries => ({
  type: LOAD,
  breweries
});

// const addBrew = brewery => ({
//   type: ADD_BREWERY,
//   brewery
// });

// const removeBrew = brewery => ({
//   type: REMOVE_BREWERY,
//   brewery
// });

// thunk action creators

export const getBrews = () => async dispatch => {
  const response = await fetch('/api/breweries');
  if(response.ok){
    const breweries = await response.json();
    dispatch(load(breweries));
  };
};

// reducer
const initialState = {breweries:[]};

const brewReducer = (state = initialState, action) => {
  switch(action.type){
    case LOAD: {
      return {
        ...state,
        breweries: action.breweries,
      };
    }
    default:
      return state;
    ;
  };
};

export default brewReducer;
