import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap'; 

function QcEdu(props) {
    return(
        <div className="text-center">
            <Container className="my-3 border-bottom border-primary pb-1">
                {/* <div className="d-flex flex-column align-centent-center"></div> */}
                <h4>Introduction to Quebec Education System</h4>
            </Container>
            <Container className="mb-5 text-left">
                <Row>
                    <Col lg="4" md="6" className="my-2">
                        <Media>
                            <Media left href="#">
                                <Media object src="/assets/images/nationalFlags/qc-edu-english.png" alt="English version" className="img-fluid admission-qc-edu-nf"/>
                            </Media>
                            <Media body>
                                <Media heading className="mt-2 ml-2">
                                <p className="font-weight-normal admission-qc-edu-title">Education in Quebec</p>
                                </Media>
                                {/* <p className="font-weight-light ml-2 pt-0"> – An Overview</p> */}
                            </Media>
                        </Media>
                    </Col>
                    <Col lg="4" md="6" className="my-2">
                        <Media>
                            <Media left href="#">
                                <Media object src="/assets/images/nationalFlags/qc-edu-french.png" alt="French version" className="img-fluid admission-qc-edu-nf"/>
                            </Media>
                            <Media body>
                                <Media heading className="mt-2 ml-2">
                                <p className="font-weight-normal admission-qc-edu-title">l'Éducation au Québec</p>
                                </Media>
                            </Media>
                        </Media>
                    </Col>
                    <Col lg="4" md="6" className="my-2">
                        <Media>
                            <Media left href="#">
                                <Media object src="/assets/images/nationalFlags/qc-edu-chinese.png" alt="Chinese version" className="img-fluid admission-qc-edu-nf"/>
                            </Media>
                            <Media body>
                                <Media heading className="mt-2 ml-2">
                                <p className="font-weight-normal admission-qc-edu-title">魁北克教育概况</p>
                                </Media>
                            </Media>
                        </Media>
                    </Col>
                    <Col lg="4" md="6" className="my-2">
                        <Media>
                            <Media left href="#">
                                <Media object src="/assets/images/nationalFlags/qc-edu-spanish.png" alt="Spanish version" className="img-fluid admission-qc-edu-nf"/>
                            </Media>
                            <Media body>
                                <Media heading className="mt-2 ml-2">
                                <p className="font-weight-normal admission-qc-edu-title">La Educatión en Quebec</p>
                                </Media>
                            </Media>
                        </Media>
                    </Col>
                    <Col lg="4" md="6" className="my-2">
                        <Media>
                            <Media left href="#">
                                <Media object src="/assets/images/nationalFlags/qc-edu-portuguese.png" alt="Portuguese version" className="img-fluid admission-qc-edu-nf"/>
                            </Media>
                            <Media body>
                                <Media heading className="mt-2 ml-2">
                                <p className="font-weight-normal admission-qc-edu-title">A Educação no Quebec</p>
                                </Media>
                            </Media>
                        </Media>
                    </Col>
                    <Col lg="4" md="6" className="my-2">
                        <Media>
                            <Media left href="#">
                                <Media object src="/assets/images/nationalFlags/qc-edu-german.png" alt="German version" className="img-fluid admission-qc-edu-nf"/>
                            </Media>
                            <Media body>
                                <Media heading className="mt-2 pt-1 ml-2">
                                <p className="font-weight-normal admission-qc-edu-title-german">Bildung und Erziehung in Québec</p>
                                </Media>
                            </Media>
                        </Media>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default QcEdu;