import React from 'react';
import { Table, Container, Row, Col, Form, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const AdminAnnounce = () => {
    return (
        <div className="d-flex justify-content-start">
            <div className="admin-left d-flex flex-column align-items-start my-3">
                <div>EMSB International Logo</div>
                <div>Login Logo</div>
                <div className="mt-auto">Logout</div>
            </div>
            <div className="admin-right">
                <Container className="d-flex flex-colomn align-items-start">
                    <Row>
                        <Col sm="6">
                            <h1>Announcements</h1>
                        </Col>
                        <Col sm="6" className="d-flex justify-content-center">
                            <Form>
                                <Input placeholder="search" />
                                <Button color="link">
                                    <FontAwesomeIcon icon={faSearch} />
                                </Button>
                            </Form>               
                        </Col>
                    </Row>
                    <div>Here are the tables</div>
                </Container>
            </div>
        </div>
    )
}

export default AdminAnnounce;