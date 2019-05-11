import React from 'react'; // { Component } from 'react'\
import './App.css';
import Main from './components/MainComp';
import { BrowserRouter } from 'react-router-dom';

function App(props){
  return(
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}
export default App;
