import React from 'react'; // { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

function StoryGallery() {
    return(
        <Container className="storyAndGallery my-3">
        <Row>
          <Col md={{ size: 5, offset: 1 }}>
            <div className="d-flex flex-column align-content-center">
              <img src="assets/images/home-student.png" alt="Int'l Student stories" className="home-logos mx-auto img-fluid"></img>
              <h2 className="mx-auto d-block">Stories</h2>
            </div>
          </Col>
          <Col md="6">
            <div className="d-flex flex-column align-content-center">
              <img src="assets/images/home-gallery.png" alt="Int'l Student gallery" className="home-logos mx-auto img-fluid"></img>
              <h2 className="mx-auto d-block">Gallery</h2>
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default StoryGallery;