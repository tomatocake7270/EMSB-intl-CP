import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Admission(props) {
    return(
        <div>
            <Container>
                <Row>
                    <Col md="6">Admission left</Col>
                    <Col md="6">Admission right</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Admission;