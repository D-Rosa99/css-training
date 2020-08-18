import React from 'react';
import './style.css';

const grayLogo = [
  'https://x-team.com/images/brands/twitter.svg',
  'https://x-team.com/images/brands/fox.svg',
  'https://x-team.com/images/brands/riot-games.svg',
  'https://x-team.com/images/brands/coinbase.svg',
  'https://x-team.com/images/brands/threadless.svg',
  'https://x-team.com/images/brands/dell.svg',
  'https://x-team.com/images/brands/discovery.svg',
  'https://x-team.com/images/brands/kaplan.svg',
  'https://x-team.com/images/brands/beachbody.svg',
];

export default function BrandHero() {
  return (
    <div className={'brand-hero'}>
      <h4 className={'brand-hero__title'}>
        TRUSTED BY THE WORLD'S LEADING BRANDS SINCE 2006
      </h4>
      <div>
        <ul className={'brand-hero__img-list'}>
          {grayLogo.map((item, index) => (
            <li key={index}>
              <img
                className={'brand-hero__img'}
                src={item}
                alt={`${item.slice(33, item.search('.svg'))} logo`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
