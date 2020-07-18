import React from 'react';

import './style.css';

export default function CookiesBar() {
  return (
    <div className="cookies-bar">
      <span className="cookies-bar__text">
        This website uses cookies to ensure you get the best experience on our
        website.
        <a href="#" aria-label="learn more about cookies" role="button">
          Privacy Policy
        </a>
      </span>
      <button>OK</button>
    </div>
  );
}
