import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const member of cart) {
        total = total + member.salary;
    }
    return (
        <div className="cart-info">
           <h2>Cart</h2>
            <h3>Number Of President: {props.cart.length}</h3>
            <p>Total :${total}</p> 
        </div>
    );  
};

export default Cart;