import React from 'react';
import { Container, Row, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';

const Announce = () => {
    return(
        <Container className="my-4">
          <div className="d-flex flex-column align-items-center">
            <h4>
            <img src="/assets/images/home/announce.png" alt="Announcement" className="mx-3 img-fluid"></img>
              Announcements
            </h4>
            <Row>
              <Col lg="3" md="6" sm="12" className="my-2">
                <Toast className="mx-auto">
                  <ToastHeader icon="danger">
                    April 22, 2019
                  </ToastHeader>
                  <ToastBody>
                  The new EMSB Admin App developed especially for admin users is just available for download on the App Store!
                  </ToastBody>
                </Toast>
              </Col>
              <Col lg="3" md="6" sm="12" className="my-2">
                <Toast className="mx-auto">
                  <ToastHeader icon="primary">
                    April 24, 2019
                  </ToastHeader>
                  <ToastBody>
                  We are now awaiting the final review by EMSB before the official release.
                  </ToastBody>
                </Toast>
              </Col>
              <Col lg="3" md="6" sm="12" className="my-2">
                <Toast className="mx-auto">
                  <ToastHeader icon="success">
                    March 25, 2019
                  </ToastHeader>
                  <ToastBody>
                  Welcome to the App dedicated to all international students and their parents/guardians at the English Montreal School Board!
                  </ToastBody>
                </Toast>
              </Col>
              <Col lg="3" md="6" sm="12" className="my-2">
                <Toast className="mx-auto">
                  <ToastHeader icon="info">
                    March 25, 2019
                  </ToastHeader>
                  <ToastBody>
                  The Orientation date for 19-20 School Year will be on August 26th, 2019. Please welcome to the Auditorium of Royal Vale School!
                  </ToastBody>
                </Toast>
              </Col>
            </Row>
          </div>          
        </Container>
    );
}

export default Announce;