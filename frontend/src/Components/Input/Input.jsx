import React, { useState } from 'react';
import './Input.styling.css';

function Input({ ...props }) {
  const [value, setValue] = useState(props.value);

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <lable>
        {props.name}
        :
      </lable>
      <input {...props} value={value} onChange={handleChangeValue} />
    </div>
  );
}

export default Input;
