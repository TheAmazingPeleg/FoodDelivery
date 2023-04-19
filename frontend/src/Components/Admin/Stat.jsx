import React from 'react';

function Stat({ name, value, bgColorType }) {
  return (
    <div className="stat-view" id={bgColorType > 0 && bgColorType < 7 ? `stat-${bgColorType}` : 'stat-1'}>
      <h3>{name}</h3>
      <h1>{value}</h1>
    </div>
  );
}
export default Stat;
