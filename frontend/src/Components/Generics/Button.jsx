/* eslint-disable react/button-has-type */
import React from 'react';

function Button({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
export default Button;
