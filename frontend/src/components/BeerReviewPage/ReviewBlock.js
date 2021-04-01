import './BeerReviewPage.css'

const userPictureUrl = 'https://user-images.githubusercontent.com/74081636/113229030-229c8500-9264-11eb-9007-101271534ed6.jpeg'


const ReviewBlock = ({review, beer}) => {
  return(
    <div className='review-wrapper'>
      <div className='user-wrapper'>
        <img className='user-picture' src={userPictureUrl}/>
        <p className='review-auth'>{review.User.username} left a review for {beer.name} by {beer.Brewery.name}.</p>
      </div>
      <p className='review-text'>{review.review}</p>
      <p className='review-rating'>Rated &#127867;{review.rating} &#127867;</p>
    </div>
  )
}

export default ReviewBlock;