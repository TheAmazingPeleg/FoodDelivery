import React from 'react';
// import logo from './logo.svg';
// import Input from './Components/Input/Input';
import SearchBar from './Components/SearchBar/SearchBar';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
  // <div>
  //   <a href="">hey</a>
  //   <h1>hey</h1>
  //   <h2>hey</h2>
  //   <h3>hey</h3>
  //   <Input type="text" name="hey" />
  // </div>
  <div>
    <Navbar>
    <SearchBar  placeholder="search" ></SearchBar>
    </Navbar>
  </div>
  );
}

export default App;
