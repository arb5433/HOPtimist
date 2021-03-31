const ReviewBlock = ({review}) => {
  return(
    <div className='review-wrapper'>
      <p className='review-text'>{review.review}</p>
      <p className='review-rating'>Rated &#127867;{review.rating} &#127867;</p>
      <p className='review-auth'>Reviewed By: {review.User.username}</p>
    </div>
  )
}

export default ReviewBlock;