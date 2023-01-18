import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './Form';
import Information from './Information';

function App() {
  return (
      <Routes>
    <div className="App">
      <Route exact path='/' component={ Form }/>
      <Route exact path='/information' component={ Information } />
    </div>
      </Routes>
  );
}

export default App;
