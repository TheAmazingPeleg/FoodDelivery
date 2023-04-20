import React from 'react';

function Cart(cartItems, setCartItems) {
  const removeFromCart = (item) => {
    // eslint-disable-next-line react/destructuring-assignment
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name}
            {' '}
            -
            {item.quantity}
            {' '}
            -
            {item.price}
            {/* eslint-disable-next-line react/button-has-type */}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
