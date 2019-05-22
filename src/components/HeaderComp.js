import React from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,  
    UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
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
        return(
            <React.Fragment>
                <Navbar color="light" light expand="md" sticky="top">
                    <NavbarBrand href="/">EMSB International Students</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/admission">Admission</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  className="nav-link" to="/schools">Schools</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  className="nav-link" to="/students">Students</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  className="nav-link" to="/contacts">Contacts</NavLink>
                        </NavItem>
                        {/* <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem> */}
                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Login
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
            </React.Fragment>
        );
    }
}

export default Header;