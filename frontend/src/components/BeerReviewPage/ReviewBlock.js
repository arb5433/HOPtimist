import { useSelector, useDispatch } from 'react-redux';
import { destroyReview, loadReviews } from '../../store/reviews';
import './BeerReviewPage.css'

const userPictureUrl = 'https://user-images.githubusercontent.com/74081636/113229030-229c8500-9264-11eb-9007-101271534ed6.jpeg'


const ReviewBlock = ({review, beer}) => {
  const dispatch = useDispatch();

  const user = useSelector(state => {
    return state.session.user;
  });

  const deleteClick = async (event) => {
    await dispatch(destroyReview(review));
  }


  return(
    <div className='review-wrapper'>
      <div className='user-wrapper'>
        <img className='user-picture' src={userPictureUrl}/>
        {review.User && <p className='review-auth'>{review.User.username} left a review for {beer.name} by {beer.Brewery.name}.</p>}
      </div>
      <p className='review-text'>{review.review}</p>
      <p className='review-rating'>Rated &#127867;{review.rating} &#127867;</p>
      {user && (
        <div>
          {user.id === review.userId && (
            <div>
              <button onClick={deleteClick}>Delete</button>
              <button>Edit</button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ReviewBlock;