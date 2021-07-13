import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { searchBeers } from "../../store/beers";
import LoginFormModal from "../LoginFormModal"
import SignupFormModal from "../SignupFormModal"

function SplashPage(){
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchBeers({query: search}));
    history.push('/beers/search');
  }

  return (
    <div>
      <div className='splash-page-banner'>
        <LoginFormModal/>
        <SignupFormModal/>
      </div>
      <div>
        <form className='search-form' onSubmit={handleSubmit}>
          <input className='search-input' value={search} onChange={(event) => setSearch(event.target.value)} placeholder='Search for a Beer'/>
          <button className='search-icon' type='submit'>
            <i className='fa fa-search'></i>
          </button>
        </form>
        <button>Browse</button>
      </div>
    </div>
  )
}

export default SplashPage;