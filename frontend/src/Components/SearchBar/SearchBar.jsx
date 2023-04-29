import React, { useState } from 'react';
import './SearchBar.styling.css';
import SearchDiv from './SearchDiv';

function SearchBar({ placeholder, productsList }) {
  const [value, setvalue] = useState('');
  const [focused, setFocused] = useState(false);
  const [show, setShow] = useState(false);

  function handleInputChange(event) {
    setvalue(event.target.value);
    if (event.target.value !== '') {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  function handleFocus() {
    setFocused(true);
  }

  function handleBlur() {
    setFocused(false);
  }

  return (
    <>
      <input placeholder={focused ? '' : placeholder} className="SearchBar" type="text" value={value} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} />
      {show && <SearchDiv className="SearchDiv" productsList={productsList} value={value} />}
    </>
  );
}

export default SearchBar;
