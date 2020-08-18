import React from 'react';
import './style.css';

export default function Hero() {
  return (
    <div className={'hero'}>
      <h1 className={'hero-title'}>
        KEEP
        <br /> MOVING
        <br /> FORWARD.
      </h1>
      <div>
        <h2>
          X-Team provides high-performing, on-demand
          <br />
          teams of developers for leading brands.
        </h2>
        <a href={'/'}>WATCH VIDEO</a>
      </div>
    </div>
  );
}
