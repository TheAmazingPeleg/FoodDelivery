import React from 'react';

function Cart({ cartItems, setCartItems }) {
  const removeFromCart = (item) => {
    // eslint-disable-next-line react/destructuring-assignment
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <h2>Cart is empty, please add items to cart</h2>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name}
              {' '}
              -
              {item.quantity}
              {' '}
              -
              {item.price}
              <button type="button" onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
          <button type="button" onClick={() => setCartItems([])}>reset</button>
        </ul>
      )}
    </div>
  );
}

export default Cart;
