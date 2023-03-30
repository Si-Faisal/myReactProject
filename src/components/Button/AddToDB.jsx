
import React from 'react';

const AddToDB = (props) => {
    const clickhandler = (id) => {
       let cartitem = {}
    
    // console.log('click me ', id)
    //find cart from db

        const cartOfdb = localStorage.getItem('shoping-cart');
        if (cartOfdb) {
            cartitem = JSON.parse(cartOfdb);
        } else {
            cartitem ={}
        }

    // set cart to db
    const quantity = cartitem[id];
    if (quantity) {
        const NewQuantity = quantity + 1;
        cartitem[id] = NewQuantity;
    } else {
        cartitem[id] = 1;
    }
      localStorage.setItem('shoping-cart',JSON.stringify(cartitem) );  
    }
    return (
        <div>
            <button onClick={()=>clickhandler(props.id)}>Add to Cart</button>
        </div>
    );
};

const RomoveFromDb = (props) => {
    // const { id } = props.id;
    const clickhandlerOFremove = (id) => {
        console.log('remove to click');
        const storeCart = localStorage.getItem('shoping-cart');
        if (storeCart) {
            const ShopingCart = JSON.parse(storeCart);
            if (id in ShopingCart) {
                delete ShopingCart[id];
                localStorage.setItem('shoping-cart', JSON.stringify(ShopingCart));
            }
        }
    }
    return (
        <div>
            <button onClick={()=> clickhandlerOFremove(props.id)}>Remove toCart</button>

        </div>
    )
};
const DeletingShopingCart = () => {
    localStorage.removeItem('shoping-cart');
}

export {AddToDB, RomoveFromDb,DeletingShopingCart} ;