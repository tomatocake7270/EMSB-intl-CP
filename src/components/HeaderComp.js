import React, { useState } from 'react'
import { Collapse, Nav, Navbar, NavItem, NavbarBrand, NavbarToggler } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Header = () => {
    const [ hamburgerState, setHamburgerState ] = useState({
        isOpen: false
    }) 

    const toggleHamburger = () => {
        const doesShowHam = hamburgerState.isOpen
        setHamburgerState({ isOpen: !doesShowHam })
    }

    const adminInputAlert = withReactContent(Swal)    

    async function adminInputs() {
        const {value: inputValues} = await adminInputAlert.fire({
            title: 'Admin Authentication',
            html:
                '<input class="swal2-input" id="admin-email" placeholder="Admin email">' +
                '<input type="password" class="swal2-input" id="admin-password" placeholder="Admin password">',
            focusConfirm: false,
            preConfirm: () => {
                return [
                document.getElementById('admin-email').value,
                document.getElementById('admin-password').value
                ]
            }
        })
        if(inputValues) {
            adminInputAlert.fire(JSON.stringify(inputValues))  // 这里换成 admin 跳转
        }
    }


    return (
        <div>                
            <React.Fragment>
                <Navbar color="light" light expand="md" sticky="top">
                    <NavbarBrand href="/">EMSB International Students</NavbarBrand>
                    <NavbarToggler onClick={toggleHamburger} />
                    <Collapse isOpen={hamburgerState.isOpen} navbar>
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
                            <NavLink  className="nav-link text-secondary" to="" onClick={adminInputs}>Admin</NavLink>
                        </NavItem>
                        {/* onClick={this.goToAdmin}to="/admin" onClick={adminInputs}*/}
                    </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
    
        </div>
    )
}

export default Header;