import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Country from './components/country/Country'
import MyComponent from './components/country/MyComponent'
import Cards from './components/cards/Cards'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <Country></Country>
      <Cards></Cards>
    </div>
  )
  
}

function MyFunction() {
  return (
    <div>
      <h3 className="myfunction">welcome to another div outside the react  function</h3>
    </div>
  )
}
const CountFunction = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    const Newcount = count + 1;
    setCount(Newcount);
  }
  return (
    <div>
      <h1>counnt:{count }</h1>
      <button onClick={increase}>click To Incresese</button>
    </div>
  )
}
const ShowCountryData = () => {
  const [countries, setCountry] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountry(data));
  }, [])
//  console.log(countries)
  return (
   
    <div className="DetailsCountry">
      <h1>helllo world</h1>
      <p>{countries.length}</p>
      <p>{countries.name}</p>
      {
        countries.map(country =>  ShowCountryDetails(country))
      }
    </div>
  )
}
const ShowCountryDetails = (props) => {
  // console.log(props.flags.png);
  return (
    <div >
      <h2>{props.name.common}</h2>
      <img src={props.flags.png} alt="" />
    </div>
  )
}

export default App
