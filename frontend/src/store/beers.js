// want this store to be an object, holding all beers
// key:beerId, value: beer object
// initialize it to empty
// load all the beers from the db into it in the LOAD action (and thunk)


// constants
const LOAD = 'beers/LOAD';
const LOAD_STYLES = 'beers/LOAD_STYLES';
const ADD_BEER = 'beers/ADD_BEER'
const REMOVE_BEER = 'beers/REMOVE'

// action creators
const load = beers => ({
  type: LOAD,
  beers
});

const loadStyles = styles => ({
  type: LOAD_STYLES,
  styles
});

const addBeer = beer => ({
  type: ADD_BEER,
  beer
});

const removeBeer = beer => ({
  type: REMOVE_BEER,
  beer
})

// thunk action creators

export const getBeers = () => async dispatch => {
  const response = await fetch('/api/beers');
  if(response.ok){
    const beers = await response.json();
    dispatch(load(beers));
  }
};

export const getStyles = () => async dispatch => {
  const response = await fetch('/api/beers/styles');
  if(response.ok){
    const styles = await response.json();
    dispatch(loadStyles(styles));
  };
};

export const getOneBeer = (id) => async dispatch => {
  const response = await fetch(`/api/beers/${id}`);
  if(response.ok){
    const beerData = await response.json();
    // beerData.beer is the beer, beerData.reviews are an array of all reviews
    dispatch(addBeer(beerData));
    return beerData;
  }
};

export const addOneBeer = (data) => async dispatch => {
  const response = await fetch(`/api/beers`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if(response.ok) {
    const beer = await response.json();
    dispatch(addBeer(beer));
    return beer;
  }
};

export const updateBeer = (data) => async dispatch => {
  const response = await fetch(`/api/beers/${data.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok){
    const beer = await response.json();
    dispatch(addBeer(beer));
    return beer;
  }
};

export const deleteBeer = (id) => async dispatch => {
  const response = await fetch(`/api/items/${id}`, {
    method: 'delete',
  });

  if (response.ok){
    const beer = response.json();
    dispatch(removeBeer(beer));
    return beer;
  }
}

// reducer
const initialState = {beers:[],styles:[]}

const beerReducer = (state = initialState, action) => {
  switch(action.type){
    case LOAD:{
      return {
        ...state,
        beers: action.beers,
      };
    }
    case LOAD_STYLES:{
      return {
        ...state,
        styles: action.styles,
      };
    }
    case ADD_BEER:{
      if (!state[action.beer.id]) {
        const newState = {
          ...state,
          [action.beer.id]: action.beer
        };
        const beerList = newState.beers.map(id => newState[id]);
        beerList.push(action.beer);
        newState.beers = beerList;
        return newState;
      }
      return {
        ...state,
        [action.beer.id]: {
          ...state[action.beer.id],
          ...action.beer,
        }
      };
    }
    case REMOVE_BEER:{
      return {
        ...state,
        [action.beerId]: {
          ...state[action.beerId],
          beers: state[action.beerId].filter(
            (beer) => beer.id !== action.beerId
          ),
        },
      };
    };
    default:{
      return state;
    }
  };
};

export default beerReducer;