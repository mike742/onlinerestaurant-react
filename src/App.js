import { React, Component } from 'react';

import './App.css';
import Restaurant from './containers/Restaurant/Restaurant';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Restaurant />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
