
import { useState } from 'react'
import './App.css'
import Countries from './Countries'


function App() {

  const [showVisited, setShowVisited]=useState([])
  
  const handleShowVisited = (country) => {
    let newVisitedArray = [...showVisited]

    if (newVisitedArray.includes(`${country}`)) {
      const index = newVisitedArray.indexOf(`${country}`);
      newVisitedArray.splice(index, 1);
      setShowVisited(newVisitedArray)
    }
    else {
      newVisitedArray = [...showVisited, country]
      setShowVisited(newVisitedArray)
    }
  }

  return (
    <>
      <h1>React</h1>
      <h4>Visited Country Count : {showVisited.length}</h4>
      <h5 className='visitedCountryList'>Visited Country Name : <ul>
        {
          showVisited.map((item,index) => <li key={index}>{item}</li>)
      }
      </ul></h5>
      <Countries handleShowVisited={handleShowVisited}></Countries>
    </>
  )
}

export default App
