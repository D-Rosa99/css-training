import React from 'react';

import NavItem from './NavItem';
import './style.css';

function navItem() {
  return [
    'HOME',
    'JOIN X-TEAM',
    'OUR DEVELOPERS',
    'UNLEASH+',
    'BLOG',
    'CASE STUDIES',
  ].map((item, index) => <NavItem key={index} itemName={item} />);
}

export default function Header() {
  return (
    <header className="header">
      <a aria-label="logo link" href="/">
        <img className="logo" src="../../assets/images/logo.png" alt="logo" />
      </a>
      <nav>
        <ul className="nav-item-list">{navItem()}</ul>
      </nav>
      <a
        className="hire-button"
        role="button"
        aria-label="hire developers"
        href="/"
      >
        HIRE X-TEAM
      </a>
    </header>
  );
}
