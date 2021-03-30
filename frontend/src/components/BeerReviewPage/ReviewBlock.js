const ReviewBlock = ({review}) => {
  return(
    <div>
      <p>{review.review}</p>
      <span>Rated {review.rating} Stars</span>
      <p>Created By: {review.User.username}</p>
    </div>
  )
}

export default ReviewBlock;