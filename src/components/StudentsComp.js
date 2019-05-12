import React from 'react';
import { Container, Row, Col, Media, Card } from 'reactstrap';

function Students(props) {
    return(
        <div>
            <Container>
                {/* Field Trips */}
            </Container>
            <Container>
                <Row>
                    <Col md="6">Ziplining</Col>
                    <Col md="6">Ski</Col>
                    <Col md="6">QC City</Col>
                    <Col md="6">Sugar Shack</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Students;