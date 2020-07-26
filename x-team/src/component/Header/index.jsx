import React from 'react';

import NavItem from './NavItem';
import './style.css';

function generateNavItem() {
  const test = [
    'HOME',
    'JOIN X-TEAM',
    'OUR DEVELOPERS',
    'UNLEASH+',
    'BLOG',
    'CASE STUDIES',
  ].map((item) => NavItem(item));
  return test;
}

export default function Header() {
  const navItem = generateNavItem();
  return (
    <header className="header">
      <a aria-label="logo link" href="/">
        <img className="logo" src="../../assets/images/logo.png" alt="logo" />
      </a>
      <nav>
        <ul>{navItem}</ul>
      </nav>
    </header>
  );
}
