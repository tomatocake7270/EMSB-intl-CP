import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Students(props) {
    return(
        <div>
            <Container>
                <Row>
                    <Col md="6">Students left</Col>
                    <Col md="6">Students right</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Students;