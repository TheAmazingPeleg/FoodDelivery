import React from 'react';

function Stat({ name, value, bgColor }) {
  return (
    <div className="stat-view" id={bgColor > 0 && bgColor < 7 ? `stat-${bgColor}` : 'stat-1'}>
      <h3>{name}</h3>
      <h1>{value}</h1>
    </div>
  );
}
export default Stat;
