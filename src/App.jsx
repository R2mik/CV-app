import React from 'react';

import { Nav } from './components/nav';
import { Main } from './components/main';

import './styles/App.css';

export const App = () => {
  return (
    <div className="App">
      <Nav/>
      <Main/>
    </div>
  );
}

export default App;
