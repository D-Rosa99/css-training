import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CookiesBar from './component/CookiesBar';

class App extends Component {
  render() {
    return <CookiesBar />;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
