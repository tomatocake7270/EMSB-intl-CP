import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';

const SchoolEMSBCal = () => {
    return (
        <Container className="my-3 border-bottom border-primary pb-3 text-left">
            <Row className="ml-5">
                <Col md="6" className="py-2">
                    <Media>
                        <Media left href="#">
                            <Media object src="/assets/images/calendar-1.png" alt="18-19 Calendar" className="img-fluid"/>
                        </Media>
                        <Media body>
                            <Media heading className="mt-3 pl-1 ml-2">
                                EMSB 2018-19 Calendar
                            </Media> 
                        </Media>
                    </Media>
                </Col>
                <Col md="6" className="py-2">
                    <Media>
                        <Media left href="#">
                            <Media object src="/assets/images/calendar-2.png" alt="19-20 Calendar" className="img-fluid emsb-calender"/>
                        </Media>
                        <Media body>
                            <Media heading className="mt-3 pl-1 ml-2">
                                EMSB 2019-20 Calendar
                            </Media>
                        </Media>
                    </Media>
                </Col>
            </Row>
        </Container>
    )    
}

export default SchoolEMSBCal;