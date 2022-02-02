import React from 'react';

export default function Theme({ theme }) {
  return (
    <div className="theme-box flex">
      {theme.map((item, i) => (
        <div key={++i} title={`${item} theme`} id={`th-${item}`}></div>
      ))}
    </div>
  );
}
