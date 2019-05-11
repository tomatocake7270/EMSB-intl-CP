import React from 'react'; // { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, 
          UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem, UncontrolledCarousel,
          Container, Row, Col, Jumbotron, Button,
          Toast, ToastBody, ToastHeader, Media } from 'reactstrap';
import './App.css';

const items = [
  {
    src: 'assets/images/carousel-1.jpeg',
    // altText: 'Slide 1',
    // caption: 'Slide 1',
    // header: 'Slide 1 Header'
  },
  {
    src: 'assets/images/carousel-2.jpeg'
  },
  {
    src: 'assets/images/carousel-3.jpeg'
  }
];

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
        {/* HEADER */}
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
              
        {/* CAROUSEL + JUMBOTRON */}
        <Container className="homeCarousel">
          <Row>
            <Col md="7">
              <UncontrolledCarousel items={items} />
            </Col>
            <Col md="5">
              <Jumbotron>
              <h1 className="display-5">EMSB Intl</h1>
              <p className="lead">Être Bilingue, C'est Gagnant!</p>
              {/* <p className="lead">Best Bilingual Education in Québec!</p> */}
              {/* <hr className="my-2" /> */}
                {/* <p>smaller texts</p> */}
              <p className="lead">
                <Button color="primary">Apply Now</Button>
              </p>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
        {/* Announcements + Social Media */}
        <Container className="homeWhatsNew my-3">
          <div className="d-flex flex-column align-items-center">
            <h4>
            <img src="assets/images/home-announce.png" className="home-logos mx-auto img-fluid"></img>
              Announcements
            </h4>
          
            <Row>
              <Col md="4">
                <Toast>
                  <ToastHeader icon="primary">
                    April 22, 2019
                  </ToastHeader>
                  <ToastBody>
                  The new EMSB Admin App developed especially for admin users is just available for download on the App Store! 😃
                  </ToastBody>
                </Toast>
              </Col>
              <Col md="4">
                <Toast>
                  <ToastHeader icon="secondary">
                    April 24, 2019
                  </ToastHeader>
                  <ToastBody>
                  🔎We are now awaiting the final review by EMSB before the official release. 🕵️‍
                  </ToastBody>
                </Toast>
              </Col>
              <Col md="4">
                <Toast>
                  <ToastHeader icon="success">
                    March 25, 2019
                  </ToastHeader>
                  <ToastBody>
                  Welcome to the App dedicated to all international students and their parents/guardians at the English Montreal School Board!
                  </ToastBody>
                </Toast>
              </Col>
            </Row>
          </div>
          {/* <Row>
            <Col md="7">
              <div className="d-flex flex-column align-content-center">
                <img src="assets/images/home-announce.png" className="mx-auto img-fluid"></img>
                <h2 className="mx-auto d-block">Announcements</h2>
              </div>
            </Col>
            <Col md="5">
              <Toast>
                <ToastHeader icon="primary">
                  April 22, 2019
                </ToastHeader>
                <ToastBody>
                The new EMSB Admin App developed especially for admin users is just available for download on the App Store! 😃
                </ToastBody>
              </Toast>
              <Toast>
                <ToastHeader icon="secondary">
                  April 11, 2019
                </ToastHeader>
                <ToastBody>
                🔎We are now awaiting the final review by EMSB before the official release. 🕵️‍♀️
                </ToastBody>
              </Toast>
              <Toast>
                <ToastHeader icon="success">
                  March 25, 2019
                </ToastHeader>
                <ToastBody>
                Welcome to the App dedicated to all international students and their parents/guardians at the English Montreal School Board!
                </ToastBody>
              </Toast>
            </Col>
          </Row> */}
        </Container>

        <Container className="storyAndGallery my-3">
          <Row>
            <Col md={{ size: 5, offset: 1 }}>
              <div className="d-flex flex-column align-content-center">
                <img src="assets/images/home-student.png" className="home-logos mx-auto img-fluid"></img>
                <h2 className="mx-auto d-block">Stories</h2>
              </div>
            </Col>
            <Col md="6">
              <div className="d-flex flex-column align-content-center">
                <img src="assets/images/home-gallery.png" className="home-logos mx-auto img-fluid"></img>
                <h2 className="mx-auto d-block">Gallery</h2>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="footer">          
            <Row>
              <Col md={{ size: 5, offset: 1}}>
                <Media>
                  <Media left href="#">
                    <Media object src="assets/images/EMSB-intl-logo.png" alt="EMSB" className="img-fluid emsb-footer-logo"/>
                  </Media>
                  <Media body>
                    <Media heading className="mt-2">
                      EMSB, International Students
                    </Media>
                    <ul className="list-unstyled">
                      <li>Office 119, 6000 Fielding Avenue</li>
                      <li>Montreal, QC H3X 1T4</li>
                      <li>General Info: 514-483-7200 ext. 7258</li>
                      <li>intstudent@emsb.qc.ca</li>
                    </ul>
                  </Media>
                </Media>
              </Col>
              <Col md={{ size: 5, offset: 1}} className="align-self-center justify-content-end">
                <ul className="list-unstyled">
                  <li>Opening Hours: 8:00 am to 4:00 pm</li>
                  <li>Guest time: 8:30 am to 2:30 pm</li>
                  <li>General Info: 514-483-7200 ext. 7258</li>
                  <li>Law 101 (eligibility) Office Hours: here</li>
                </ul>
              </Col>
            </Row>
            <div className="d-flex flex-column align-items-center">
            <p className="mb-0">&copy; English Montreal School Board, 2019</p>
            <p className="mb-0"><a href="#">Admission</a> | <a href="#">Schools</a> | <a href="#">Students</a> | <a href="#">Contacts</a></p>
          </div>    
            
          
        </div>
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
