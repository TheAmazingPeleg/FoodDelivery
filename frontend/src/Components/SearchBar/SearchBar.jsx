import React, { useState } from 'react';
import './SearchBar.styling.css';

function SearchBar({ placeholder,onSearch }) {
  const [value, setvalue] = useState('');
  const [focused, setFocused] = useState(false);

  function handleInputChange(event) {
    setvalue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(value);
  }
  
  function handleFocus() {
    setFocused(true);
  }

  function handleBlur() {
    setFocused(false);
  }
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(value);
    }
  }

  return (
      <input placeholder={focused ? "" : placeholder} className="SearchBar" type="text" value={value} onChange={handleInputChange} onKeyDown={handleKeyPress} onSubmit={handleSubmit} onFocus={handleFocus} onBlur={handleBlur} />
  );
}

export default SearchBar;
