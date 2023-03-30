import React from 'react';
import {useState} from 'react'

const MyComponent = () => {

const [inputValue, setInputValue] = useState('');
    const handleButtonClick = () => { console.log(inputValue); };
    const localstorage = () => {
        localStorage.setItem('cart',inputValue)
    }
    localstorage()
    return (
        <div>
          <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
          <button onClick={handleButtonClick}>Click me</button>  
        </div>
    );
};

export default MyComponent;