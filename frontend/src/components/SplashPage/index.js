import LoginFormModal from "../LoginFormModal"
import SignupFormModal from "../SignupFormModal"

function SplashPage(){
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
      </div>
    </div>
  )
}

export default SplashPage;