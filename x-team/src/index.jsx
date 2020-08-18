import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CookiesBar from './component/CookiesBar';
import Header from './component/Header';
import Hero from './component/Hero';
import BrandHero from './component/brandHero';
import Cavalry from './component/Cavalry';

class App extends Component {
  render() {
    return (
      <>
        <CookiesBar />
        <Header />
        <Hero />
        <BrandHero />
        <Cavalry />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
