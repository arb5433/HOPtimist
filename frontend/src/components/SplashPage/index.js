import LoginFormModal from "../LoginFormModal"
import SignupFormModal from "../SignupFormModal"

function SplashPage(){
  return (
    <div className='splash-page-banner'>
      <LoginFormModal/>
      <SignupFormModal/>
    </div>
  )
}