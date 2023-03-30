import React from 'react';
import { AddToDB, RomoveFromDb } from '../Button/AddToDB';

import ('./SingleCard.css')
const SingleCard = (props) => {
    const { id, price, email, gender, name } = props.AllData;
    

    return (
        <div className='innerCard'>
            {
            //    console.log(AllData)  
            }
            <div >
              <h2>Name:{name}</h2>
             <p>Id:{id}</p>
            <p>Email:{email}</p>
            <p>Gender:{gender}</p>
            <h3>Price:{price}</h3>
                <AddToDB id={id}></AddToDB> 
                <RomoveFromDb id={id}></RomoveFromDb>
            </div>
            
        </div>
         
    );
};

export default SingleCard;