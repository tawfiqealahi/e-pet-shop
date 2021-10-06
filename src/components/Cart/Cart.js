import React from 'react';

const Cart = (props) => {
  const{cart}=props || {}

  // total price calculate
  const totalReducer = (prevValue,currentValue)=>prevValue+currentValue.price
  const total=cart.reduce(totalReducer,0)
    return (
        <div>
          <h3> <i className="fas fa-shopping-cart"></i> Number of Product: {cart.length}
          </h3>  
          <h2>Total Price= ${total}</h2>
          <ul>
            {
              cart.map(product=> <li>{product.name} = <h6>{product.price}</h6></li>)
            }
          </ul>
          
        </div>
    );
};

export default Cart;