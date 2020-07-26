import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CookiesBar from './component/CookiesBar';
import Header from './component/Header';

class App extends Component {
  render() {
    return (
      <>
        <CookiesBar />
        <Header />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
