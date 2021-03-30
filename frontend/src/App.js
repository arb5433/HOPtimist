import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from './components/SignupFormPage';
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import BeerDisplayPage from './components/BeerDisplayPage';
import BeerReviewPage from './components/BeerReviewPage'


function App() {
  // restores the user to the store on a refresh
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <BeerDisplayPage/>
          </Route>
          <Route path='/beers/:id'>
            <BeerReviewPage/>
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
