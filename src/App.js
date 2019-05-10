import React from 'react'; // { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };    
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">ESMB International</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Admission</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Schools</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Students</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Contacts</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem> */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Languages
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

// function App() { // class App extends Component -> render() { return (*) }

  
//   return (
//     <div className="App">
//       {/* <Navbar dark color="primary">
//         <div className="container">
//           <NavbarBrand href="/">EMSB International</NavbarBrand>
//         </div>
//       </Navbar> */}
//       <Navbar color="faded" light>
//           <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
//           <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
//           <Collapse isOpen={!this.state.collapsed} navbar>
//             <Nav navbar>
//               <NavItem>
//                 <NavLink href="/components/">Components</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//     </div>
//   );
// }

export default App;
