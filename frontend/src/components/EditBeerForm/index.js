import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';

import {getBrews} from '../../store/breweries';
import {getStyles, updateBeer} from '../../store/beers';

import './EditBeerForm.css'

const EditBeerForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {id} = useParams();

  const beer = useSelector(state => {
    return state.beer[id];
  });


  const [name, setName] = useState(beer.name);
  const [brew, setBrew] = useState(beer.breweryId);
  const [abv, setAbv] = useState(beer.abv);
  const [ibu, setIbu] = useState(beer.ibu);
  const [style, setStyle] = useState(beer.styleId);
  const [description, setDescription] = useState(beer.description);

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
      id: beer.id,
      name,
      breweryId: brew,
      abv,
      ibu,
      styleId: style,
      description,
      userId: user.id
    }
    await dispatch(updateBeer(data));
    history.push('/');
  }

  return (
    <div className='beer-form-wrapper'>
      <form className='add-beer-form' onSubmit={onSubmit}>
        <div className='beer-form-header'>
          <div className='title'>Update a Beer</div>
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
          <button type='submit'>Update Beer</button>
        </div>
      </form>
    </div>
  )
};

export default EditBeerForm;