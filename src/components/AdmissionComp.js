import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';

function Admission(props) {
    return(
        <div>
            <Container className="my-3 border-bottom border-primary pb-3">
                <Row>
                    <Col md="6" className="py-2">
                        <Media>
                            <Media left href="#">
                                <Media object src="assets/images/calendar-1.png" alt="18-19 Calendar" className="img-fluid"/>
                            </Media>
                            <Media body>
                                <Media heading className="mt-2 ml-2">
                                    EMSB 2018-19 Calendar
                                </Media> 
                            </Media>
                        </Media>
                    </Col>
                    <Col md="6" className="py-2">
                        <Media>
                            <Media left href="#">
                                <Media object src="assets/images/calendar-2.png" alt="19-20 Calendar" className="img-fluid emsb-calender"/>
                            </Media>
                            <Media body>
                                <Media heading className="mt-2 ml-2">
                                    EMSB 2019-20 Calendar
                                </Media>
                            </Media>
                        </Media>
                    </Col>
                </Row>
            </Container>

            <Container className="my-4">
                <Row className="my-5">
                    <Col>
                        <img src="assets/images/schoolLogos/FACE.png" width="120px" className="img-fluid" alt="FACE School"></img>
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
                
            </Container>
        </div>
    )
}

export default Admission;