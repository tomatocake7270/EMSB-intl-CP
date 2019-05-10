import React from 'react'; // { Component } from 'react'
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';


function App() { // class App extends Component -> render() { return (*) }
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">EMSB International</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
