import React from 'react';
import { Container, Row, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';

function Announce(props) {
    return(
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
        </Container>
    );
}

export default Announce;