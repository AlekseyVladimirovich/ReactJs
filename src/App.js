import React, { Component } from 'react';
import Api from './component/Api';
import './App.css';


class App extends Component {
  render() {
    return (
    	<>
      <div className="App">
        <header className="App-header">
        <Api />
        </header>
      </div>
      </>
    );
  }
}

export default App;
