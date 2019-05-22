import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';

const Gallery = () => {
    return (
        <Container className="mt-4">
                <Row>
                    <Col lg={{ size: 5, offset: 2}} sm="6" className="mb-3">
                        <Media>
                            <Media left href="#">
                                <Media object src="/assets/images/home/gallery-instagram.png" alt="Instagram gallery" />
                            </Media>
                            <Media body>
                                <Media heading className="mt-3 ml-2 pink-font bold-font">
                                    Instagram Gallery
                                </Media>
                            </Media>
                        </Media>
                    </Col>
                    <Col lg="5" sm="6">
                        <Media>
                            <Media left href="#" className="mb-3">
                                <Media object src="/assets/images/home/gallery-google.png" alt="Instagram gallery" />
                            </Media>
                            <Media body>
                                <Media heading className="mt-3 ml-2 blue-font bold-font">
                                    Google Photos Album
                                </Media>
                            </Media>
                        </Media>
                    </Col>
                </Row>
        </Container>
    )
}

export default Gallery;