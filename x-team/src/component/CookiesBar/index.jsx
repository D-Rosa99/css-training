import React from 'react';

import './style.css';

export default function CookiesBar() {
  return (
    <div className="cookies-bar">
      <span role="text">
        This website uses cookies to ensure you get the best experience on our
        website. &#8287;
        <a href="#" aria-label="learn more about cookies" role="button">
          Privacy Policy
        </a>
      </span>
      <button className="cookies-bar__button">OK</button>
    </div>
  );
}
