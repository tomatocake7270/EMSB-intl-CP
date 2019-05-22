import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';

const Gallery = () => {
    return (
        <Container className="mt-4">
            {/* <div className="d-flex flex-column align-items-between"> */}
                {/* <h4>
                <img src="assets/images/home/gallery.png" alt="Gallery" className="mx-3 img-fluid"></img>
                Event Galleries
                </h4> */}
                <Row>
                    <Col lg={{ size: 5, offset: 2}} sm="6">
                        <Media>
                            <Media left href="#">
                                <Media object src="/assets/images/home/gallery-instagram.png" alt="Instagram gallery" />
                            </Media>
                            <Media body>
                                <Media heading className="mt-3 ml-2">
                                    Instagram Posts
                                </Media>
                            </Media>
                        </Media>
                    </Col>
                    <Col lg="5" sm="6">
                        <Media>
                            <Media left href="#">
                                <Media object src="/assets/images/home/gallery-google.png" alt="Instagram gallery" />
                            </Media>
                            <Media body>
                                <Media heading className="mt-3 ml-2">
                                    Google Photos Album
                                </Media>
                            </Media>
                        </Media>
                    </Col>
                </Row>
            {/* </div> */}
            
        </Container>
    )
}

export default Gallery;