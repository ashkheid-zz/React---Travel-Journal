import React from 'react';

export default function Header({title, icon}) {
  return (
    <header className="header flex">
      <img className="header-icon" src={icon} alt="Header Icon" />
      <h1 className="header-title">{title}</h1>
    </header>
  );
}
