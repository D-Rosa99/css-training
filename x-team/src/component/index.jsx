import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <>
        <h1>Esto deberia estar funcionando y sino me mato</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
