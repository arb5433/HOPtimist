import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getBeers } from '../../store/beers';
import BeerCard from '../BeerCard/index';

const TopRated = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBeers());
  }, [dispatch]);


  
  return (
    null
  );
}