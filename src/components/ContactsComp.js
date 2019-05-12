import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Contacts(props) {
    return(
        <div>
            <Container>
                <Row>
                    <Col md="6">Contacts left</Col>
                    <Col md="6">Contacts right</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contacts;