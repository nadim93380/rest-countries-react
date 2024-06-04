import { useState } from 'react';
import './country.css'

const Country = (props) => {

    const [mark, setMark] = useState((false))
    
    const handleMark = () => {
        setMark(!mark);
    }
    
    
    const { country, iso2, cities } = props.country
    const { handleShowVisited } = props
    return (
        <div className="country">
            <h2>Country Name : {country}</h2>
            <p>iso2 : {iso2}</p>
            <h4>City Count : {cities.length}</h4>
            <button className='btn' onClick={() => { handleMark(); handleShowVisited(country)}}>{mark?'Visited':'Visit'}</button>
            
        </div>
    );
};

export default Country;