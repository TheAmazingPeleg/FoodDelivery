import React from 'react';
import Input from './Components/Input/Input';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Input type="text" name="hey" value="yeey!!" />
    </div>
  );
}

export default App;
