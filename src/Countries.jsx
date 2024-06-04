import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Countries.css'


const Countries = ({ handleShowVisited }) => {
    const [countries, setCountries] = useState([])
    
    useEffect(() => {
        fetch("https://countriesnow.space/api/v0.1/countries")
            .then(res => res.json())
            .then(data => setCountries(data.data))
        
    }, [])
    


    return (
        <div>
            <h2>Hlw From Countries</h2>
            <p>Country Count : {countries.length}</p>
            <div className="countries">
            {
                countries.map(country => (
                    
                    <Country key={country.iso3} country={country} handleShowVisited={handleShowVisited}></Country>
                    
                    
                ))
            }

            </div>
            
        </div>
    );
};

export default Countries;