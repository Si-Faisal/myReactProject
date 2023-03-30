import React, { useEffect, useState } from 'react';
import SingleCard from '../singleCard/SingleCard';

const Cards = () => {
    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCard(data));
    },[])

    return (
        <div  className='single-card'>
            {
                card.map(data => <SingleCard AllData ={data} key={data.id}></SingleCard>)
            }
            
        </div> 
    );
};

export default Cards;