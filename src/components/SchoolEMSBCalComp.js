import React from 'react';
import { Container, Row, Col, Media, Button } from 'reactstrap';

const SchoolEMSBCal = () => {
    return (
        <Container className="my-3 border-bottom border-primary pb-3 text-left">
            <Row>
                <Col md={{ size: 5, offset: 1}} xs={{ size: 7, offset: 3}} className="py-2">
                    <Button color="link" className="text-decoration-none text-left" href="/assets/pdfs/calendars/emsb-18-19.pdf" target="_blank">
                        <Media>
                            <Media left>
                                <Media object src="/assets/images/calendar-1.png" alt="18-19 Calendar" className="emsb-calendar-icon"/>
                            </Media>
                            <Media body>
                                <Media heading className="mt-3 pl-1 ml-2 emsb-calendar-text">
                                    <span className="emsb-calendar-title-crumb">ESMB </span>2018-19 Calendar
                                </Media> 
                            </Media>
                        </Media>
                    </Button>
                </Col>
                <Col md={{ size: 5, offset: 1}} xs={{ size: 7, offset: 3}} className="py-2">
                    <Button color="link" className="text-decoration-none text-left emsb-calendar-btn-right" href="/assets/pdfs/calendars/emsb-19-20.pdf" target="_blank">
                        <Media>
                            <Media left>
                                <Media object src="/assets/images/calendar-2.png" alt="19-20 Calendar" className="emsb-calendar-icon"/>
                            </Media>
                            <Media body>
                                <Media heading className="mt-3 pl-1 ml-2 emsb-calendar-text">
                                    <span className="emsb-calendar-title-crumb">EMSB </span>2019-20 Calendar
                                </Media>
                            </Media>
                        </Media>
                    </Button>
                </Col>
            </Row>
        </Container>
    )    
}

export default SchoolEMSBCal;