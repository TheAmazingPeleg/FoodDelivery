import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [value, setvalue] = useState('');

  function handleInputChange(event) {
    setvalue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(value);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(value);
    }
  }

  return (
    <div className="SearchBar" onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleInputChange} onKeyDown={handleKeyPress} />
    </div>
  );
}

export default SearchBar;
