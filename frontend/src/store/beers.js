// want this store to be an object, holding all beers
// key:beerId, value: beer object
// initialize it to empty
// load all the beers from the db into it in the LOAD action (and thunk)
import {csrfFetch} from './csrf';

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

const removeBeer = id => ({
  type: REMOVE_BEER,
  id
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
  console.log('Responce:',response)
  if(response.ok){
    const beer = await response.json();
    dispatch(addBeer(beer));
    return beer;
  }
};

export const addOneBeer = (data) => async dispatch => {
  const response = await csrfFetch(`/api/beers`, {
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
  console.log('THIS IS DATA *********************************', data);

  const response = await csrfFetch(`/api/beers/${data.id}`, {
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
  const response = await csrfFetch(`/api/beers/${id}`, {
    method: 'delete',
  });
  if (response.ok){

    const id = response.json();
    dispatch(removeBeer(id));
    return id;
  }
}

// reducer
const initialState = {beersList:[],styles:[]}

const sortList = (list) => {
  return list.sort((beerA, beerB) => {
    return beerA.id - beerB.id;
  }).map((beer) => beer.id);
};

const beerReducer = (state = initialState, action) => {
  switch(action.type){
    case LOAD:{
      const allBeers = {};
      action.beers.forEach(beer => {
        allBeers[beer.id] = beer;
      });
      return {
        ...state,
        ...allBeers,
        beersList: sortList(action.beers),
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
        const beerList = newState.beersList.map(id => newState[id]);
        beerList.push(action.beer);
        newState.beersList = sortList(beerList)
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
      const newState = {...state};
      const beerList = newState.beersList.map(id => newState[id]);
      const newBeerList = beerList.filter(beer => beer.id !== action.id);
      newState.beersList = sortList(newBeerList);
      delete newState[action.id];
      return newState;
    }
    default:
      return state;
  };
};

export default beerReducer;