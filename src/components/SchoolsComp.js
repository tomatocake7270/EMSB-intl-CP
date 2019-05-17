import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import SchoolEMSBCal from './SchoolEMSBCalComp';

function Schools(props) {
    return(
        <div className="text-center">
            <SchoolEMSBCal />

            <Container className="my-4">                
                <Row className="my-5">
                    <Col>
                        <Button color="link" href="/schools/face">
                            <img src="assets/images/schoolLogos/FACE.png" width="120px" className="img-fluid" alt="FACE School"></img>
                        </Button>
                        
                    </Col>
                    <Col>
                        <img src="assets/images/schoolLogos/JL.png" width="120px" className="img-fluid" alt="FACE School"></img>
                    </Col>
                    <Col>
                        <img src="assets/images/schoolLogos/JFK.png" width="120px" className="img-fluid" alt="FACE School"></img>
                    </Col>
                    <Col>
                        <img src="assets/images/schoolLogos/LBP.jpg" width="120px" className="img-fluid" alt="FACE School"></img>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <img src="assets/images/schoolLogos/LHA.jpg" width="120px" className="img-fluid" alt="FACE School"></img>
                    </Col>
                    <Col>
                        <img src="assets/images/schoolLogos/JP.jpg" width="120px" className="img-fluid" alt="FACE School"></img>
                    </Col>
                    <Col>
                        <img src="assets/images/schoolLogos/LMac.jpg" width="120px" className="img-fluid" alt="FACE School"></img>
                    </Col>
                    <Col>
                        <img src="assets/images/schoolLogos/MM.png" width="120px" className="img-fluid" alt="FACE School"></img>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <img src="assets/images/schoolLogos/RM.jpg" width="120px" className="img-fluid" alt="FACE School"></img>
                    </Col>
                    <Col>
                        <img src="assets/images/schoolLogos/RV.png" width="120px" className="img-fluid" alt="FACE School"></img>
                    </Col>
                    <Col>
                        <img src="assets/images/schoolLogos/VMC.jpg" width="120px" className="img-fluid" alt="FACE School"></img>
                    </Col>
                    <Col>
                        <img src="assets/images/schoolLogos/WM.jpg" width="120px" className="img-fluid" alt="FACE School"></img>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <img src="assets/images/schoolLogos/RWA.jpg" width="240px" className="img-fluid" alt="Royal West Academy"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Schools;