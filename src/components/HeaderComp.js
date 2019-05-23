import React from 'react';
import { Collapse, Nav, Navbar, NavItem, NavbarBrand, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.goToAdmin = this.goToAdmin.bind(this);
        this.state = {
          isOpen: false,
          accessToAdmin: false
        };    
      }
      
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    goToAdmin() {
        this.setState({
            accessToAdmin: !this.state.accessToAdmin
        })
    }

    render() {
        return(
            <div>
            {this.state.accessToAdmin ? (
                    <div>There is Nothing here</div>
            ) : (
                
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
                            <NavItem>
                                <NavLink  className="nav-link" to="/admin">Admin</NavLink>
                            </NavItem>
                            {/* onClick={this.goToAdmin} */}
                        </Nav>
                        </Collapse>
                    </Navbar>
                </React.Fragment>
            )} 
            </div>
        );
    }
}

export default Header;