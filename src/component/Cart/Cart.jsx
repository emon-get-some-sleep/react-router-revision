import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h2>Cart Summary {cart.length}</h2>
            {
               cart.map(tshirt => <p>{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button> </p>)
            }
        </div>
    );
};

export default Cart;