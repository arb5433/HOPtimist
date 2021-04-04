import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {userInfo} from '../../store/session';

import './UserProfile.css';

const UserProfile = () => {
  const dispatch = useDispatch();
  const userPictureUrl = 'https://user-images.githubusercontent.com/74081636/113229030-229c8500-9264-11eb-9007-101271534ed6.jpeg'

  const [beerNum, setBeerNum] = useState(0);
  const [reviewNum, setReviewNum] = useState(0);
  
  const user = useSelector(state => {
    return state.session.user;
  });

  useEffect(() => {
    dispatch(userInfo(user.id));
  }, [dispatch, user.id]);

  const userStats = useSelector(state => {
    return state.session.userInfo;
  });

  useEffect(() => {
    if (userStats){
      setBeerNum(userStats.Beers ? userStats.Beers.length : 0);
      setReviewNum(userStats.Reviews ? userStats.Reviews.length : 0);
    };
  }, [userStats]);
  

  return (
    <div className='user-page-wrapper'>
      <div className='user-banner'>
        <div className='up-user-picture'>
          <img className='user-picture' src={userPictureUrl} alt='user profile'/>
        </div>
        <div className='up-name'>
          <h1>{user.username}</h1>
        </div>
        <div className='up-stats'>
          <div className='up-beers'>Number of beers: {beerNum}</div>
          <div className='up-reviews'>Number of reviews: {reviewNum}</div>
          <div className='up-friends'>Number of friends: 0</div>
        </div>
      </div>
      <div className='up-recent-outer'>
        <div className='up-recent-wrapper'>
          <h2 className='up-title'>Recent Beers: </h2>
            {beerNum && (<div>
              {userStats.Beers.map(beer => {
                return <NavLink className='up-list-link' key={beer.id} to={`/beers/${beer.id}`}>{beer.name}</NavLink>
              })}
            </div>)}
          <h2 className='up-title'>Recent Reviews: </h2>
            {reviewNum && (<div>
              {userStats.Reviews.map(review => {
                return <NavLink className='up-list-link' key={review.id} to={`/beers/${review.Beer.id}/reviews/${review.id}`}>{review.Beer.name}</NavLink>
              })}
            </div>)}
        </div>
      </div>
      <div className='up-wishlist-outer'>
        <div className='up-wishlist-wrapper'>
          <h2 className='up-title'>Wishlist:</h2>
          <p>Currently no items on your wishlist.</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfile;