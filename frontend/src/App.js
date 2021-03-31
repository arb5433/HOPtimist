import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from './components/SignupFormModal';
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import BeerDisplayPage from './components/BeerDisplayPage';
import BeerReviewPage from './components/BeerReviewPage';
import AddBeerForm from './components/AddBeerForm';
import AddReviewForm from './components/AddReviewForm';

function App() {
  // restores the user to the store on a refresh
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div className='app-container'>
      <div className='nav'>
        <Navigation isLoaded={isLoaded}/>
      </div>
      <div className='main-content'>
        {isLoaded && (
          <Switch>
            <Route exact path="/">
              <BeerDisplayPage/>
            </Route>
            <Route exact path='/beers/:id'>
              <BeerReviewPage/>
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route exact path='/beers'>
              <AddBeerForm/>
            </Route>
            <Route path ='/beers/:id/reviews'>
              <AddReviewForm/>
            </Route>
          </Switch>
        )}
      </div>
      <div className='footer'>
          <div className='dev-name'>Created By: Adam Bailey</div>
          <a className='dev-name' href='https://github.com/arb5433'>Github Profile</a>
      </div>
    </div>
  );
}

export default App;
