import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

const Stories = () => {
    return (
        <Container className="my-3">
            <div className="d-flex flex-column align-items-center">
                <h4>
                <img src="/assets/images/home/students.png" alt="Students" className="home-logos mx-3 img-fluid"></img>
                 Our Students
                </h4>
                <Row>
                    <Col md="6" className="my-2">
                        <Media className="pl-2 pt-3 pr-3 m-1 border rounded">
                            <Media left href="#">
                                <Media object src="/assets/images/home/student-girl-1.png" alt="Girl 1" className="img-fluid" />
                            </Media>
                            <Media body className="ml-2">
                                <h5>The most important reason for me to study in Montreal is its very unique bilingual culture that can help me develop strong language abilities.</h5>
                                <div className="d-flex justify-content-between">
                                    <p>Alessandro, Lester B. Pearson School</p>
                                    <a href="https://www.nba.com" rel="noopener noreferrer" target="_blank">Read more</a>
                                </div>
                                
                            </Media>
                        </Media>
                    </Col>
                    <Col md="6" className="my-2">
                        <Media className="pl-2 pt-3 pr-3 m-1 border rounded">
                            <Media left href="#">
                                <Media object src="/assets/images/home/student-boy-2.png" alt="Boy 2" className="img-fluid" />
                            </Media>
                            <Media body className="ml-2">
                                <h5>I was very impressed by the politeness and courtesy of people in Montreal. I really enjoy the less pressured life here.</h5>
                                <div className="d-flex justify-content-between">
                                    <p>Leo, F.A.C.E. School</p>
                                    <a href="https://www.nba.com" rel="noopener noreferrer" target="_blank">Read more</a>
                                </div>
                                
                            </Media>
                        </Media>
                    </Col>
                    <Col md="6" className="my-2">
                        <Media className="pl-2 pt-3 pr-3 m-1 border rounded">
                            <Media left href="#">
                                <Media object src="/assets/images/home/student-girl-2.png" alt="Girl 2" className="img-fluid" />
                            </Media>
                            <Media body className="ml-2">
                                <h5>In EMSB schools, I have more freedom to share my ideas with my classmates and much more opportunities to help each other in group work.</h5>
                                <div className="d-flex justify-content-between">
                                    <p>Ashely, Rosemount High School</p>
                                    <a href="https://www.nba.com" rel="noopener noreferrer" target="_blank">Read more</a>
                                </div>
                                
                            </Media>
                        </Media>
                    </Col>
                    <Col md="6" className="my-2">
                        <Media className="pl-2 pt-3 pr-3 m-1 border rounded">
                            <Media left href="#">
                                <Media object src="/assets/images/home/student-boy-1.png" alt="Boy 1" className="img-fluid" />
                            </Media>
                            <Media body className="ml-2">
                                <h5>I love singing so much, and I am so lucky that there are a lot of activities in my school to develop my art talents!</h5>
                                <div className="d-flex justify-content-between">
                                    <p>Michelle, James Lyng High School</p>
                                    <a href="https://www.nba.com" rel="noopener noreferrer" target="_blank">Read more</a>
                                </div>
                                
                            </Media>
                        </Media>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Stories;