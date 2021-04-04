import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {getBrews} from '../../store/breweries';
import {getStyles, addOneBeer} from '../../store/beers';

import './AddBeerForm.css'

const AddBeerForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState('');
  const [brew, setBrew] = useState('');
  const [abv, setAbv] = useState(0);
  const [ibu, setIbu] = useState(0);
  const [style, setStyle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    dispatch(getBrews());
    dispatch(getStyles());
  }, [dispatch]);

  const breweries = useSelector(state => {
    return state.brewery.breweries
  });

  const styles = useSelector(state => {
    return state.beer.styles;
  });

  const user = useSelector(state => {
    return state.session.user;
  });

  const onSubmit =  async event => {
    event.preventDefault();
    const data = {
      name,
      breweryId: brew,
      abv,
      ibu,
      styleId: style,
      description,
      userId: user.id
    }
    await dispatch(addOneBeer(data));
    history.push('/');
  }

  return (
    <div className='beer-form-wrapper'>
      <form className='add-beer-form' onSubmit={onSubmit}>
        <div className='beer-form-header'>
          <div className='title'>Add a New Beer</div>
          <p className='instructions'>Please read the following guidelines.</p>
          <ul className='guidelines'>
            <li>Don't include the brewery in the beer name.</li>
            <li>If the brewery is not listed please add it to our list of breweries.</li>
            <li>Only include the name as featured on the label.</li>
            <li>Please do not add any unsupported drinks (drinks that are not beers).</li>
            <li>Do not create a beer that are blends of 2 or more beers. This goes for any beers that are blended at a Bar/Brewery after kegging.</li>
            <li>Any failure to follow these guidelines will result in your profile being withheld beer access to the beer creation form.</li>
          </ul>
        </div>
        <div className='beer-form-inputs'>
          <label className='beer-form-input'>*Beer Name:
            <input type='text' name='name' value={name} onChange={(event) => setName(event.target.value)}/>
          </label>
          <label className='beer-form-input'>*Select a Brewery: 
            <select value={brew} onChange={(event => setBrew(event.target.value))}>
              <option disabled value=''>Breweries</option>
              {breweries.map(brewery => {
                return(
                  <option key={brewery.id} value={brewery.id}>{brewery.name}</option>
                )
              })}
            </select>
          </label>
          <label className='beer-form-input'>ABV: 
            <input type='number' value={abv} onChange={event => setAbv(event.target.value)}/>
          </label>
          <label className='beer-form-input'>IBU: 
            <input type='number' value={ibu} onChange={event => setIbu(event.target.value)}/>
          </label>
          <label className='beer-form-input'>*Select a Beer Style: 
            <select value={style} onChange={(event => setStyle(event.target.value))}>
              <option disabled value=''>Beer Styles</option>
              {styles.map(style => {
                return(
                  <option key={style.id} value={style.id}>{style.style}</option>
                )
              })}
            </select>
          </label>
          <label className='beer-form-input'>Description: 
            <textarea className='text-area' value={description} onChange={event => setDescription(event.target.value)}/>
          </label>
          <button className='add-beer-btn' type='submit'>Add Beer</button>
        </div>
      </form>
    </div>
  )
};

export default AddBeerForm;