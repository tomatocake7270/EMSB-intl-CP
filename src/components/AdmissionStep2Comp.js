import React from 'react';
import { Container, Row, Col, Media, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import QcEdu from './AdmissionRenderComp';

const AdmissionS2 = () => {
    return(
        <div className="text-center">
            <Container className="my-3 border-bottom border-primary pb-1">
                <div className="d-flex justify-content-center">
                    <Link to="/admission">
                        <Media className="mx-3">
                            <Media left href="#">
                                <Media object src="/assets/images/admission-step-deselected.png" alt="selected" className="img-fluid"/>
                            </Media>
                            <Media body>
                                <Media heading className="mt-1 ml-2">
                                    <p>Step 1</p>
                                </Media>
                            </Media>
                        </Media>
                    </Link>
                    <Link to="/admission/step2">
                        <Media className="mx-3">
                            <Media left href="#">
                                <Media object src="/assets/images/admission-step-selected.png" alt="selected" className="img-fluid"/>
                            </Media>
                            <Media body>
                                <Media heading className="mt-1 ml-2">
                                    <p>Step 2</p>
                                </Media>
                            </Media>
                        </Media>
                    </Link>
                    <Link to="/admission/step3">
                        <Media className="mx-3">
                            <Media left href="#">
                                <Media object src="/assets/images/admission-step-deselected.png" alt="selected" className="img-fluid"/>
                            </Media>
                            <Media body>
                                <Media heading className="mt-1 ml-2">
                                    <p>Step 3</p>
                                </Media>
                            </Media>
                        </Media>
                    </Link>
                </div>
            </Container>
            <Container className="my-3">
                <Row>
                    {/* className="border border-primary rounded" */}
                    <Col md="6">  
                        <div className="d-flex flex-column align-items-center text-left mt-2">
                            <Button color="link" className="text-decoration-none" href="https://www.nba.com" target="_blank">
                                <Media className="my-2">
                                    <Media left href="#">
                                        <Media object src="/assets/images/admission-check.png" alt="checkmark" className="img-fluid admission-checkmark" />
                                    </Media>
                                    <Media body className="ml-2">
                                        <p className="admission-text">The Parent/Guardian/Agency will then start the process. (Allow 6 - 20 weeks)</p>
                                    </Media>
                                </Media>
                            </Button>
                            <Button color="link" className="text-decoration-none" href="https://www.nba.com" target="_blank">
                                <Media className="mb-2">
                                    <Media left href="#">
                                        <Media object src="/assets/images/admission-check.png" alt="checkmark" className="img-fluid admission-checkmark" />
                                    </Media>
                                    <Media body className="ml-2">
                                        <p className="admission-text">Apply for <b>CAQ</b> from Immigration, Diversité et Inclusion Québec: by first <b>register online and pay the fee</b> and then <b>mail the documents by post</b> to designated address.</p>
                                    </Media>
                                </Media>
                            </Button>
                            <Button color="link" className="text-decoration-none" href="https://www.nba.com" target="_blank">
                                <Media className="mb-2">
                                    <Media left href="#">
                                        <Media object src="/assets/images/admission-check.png" alt="checkmark" className="img-fluid admission-checkmark" />
                                    </Media>
                                    <Media body className="ml-2">
                                        <p className="admission-text">With CAQ in hand, then apply for <b>Study Permit</b> from Canadian Federal Government through the online system. No mailing needed.</p>
                                    </Media>
                                </Media>
                            </Button>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="d-flex flex-column align-items-start text-left my-4 pt-2 pl-3 border rounded">
                            <Media>
                                <Media left href="#">
                                    <Media object src="/assets/images/admission-link.png" alt="link" className="img-fluid admission-link-icon" />
                                </Media>
                                <Media body className="ml-2">
                                    <p className="admission-text">Steps to Apply for CAQ</p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left href="#">
                                    <Media object src="/assets/images/admission-link.png" alt="link" className="img-fluid admission-link-icon" />
                                </Media>
                                <Media body className="ml-2">
                                    <p className="admission-text">CAQ Online Application Portal</p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left href="#">
                                    <Media object src="/assets/images/admission-link.png" alt="link" className="img-fluid admission-link-icon" />
                                </Media>
                                <Media body className="ml-2">
                                    <p className="admission-text">CAQ Application Checklist (non-adult)</p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left href="#">
                                    <Media object src="/assets/images/admission-link.png" alt="link" className="img-fluid admission-link-icon" />
                                </Media>
                                <Media body className="ml-2">
                                    <p className="admission-text">Study Permit Online Application Portal</p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left href="#">
                                    <Media object src="/assets/images/admission-link.png" alt="link" className="img-fluid admission-link-icon" />
                                </Media>
                                <Media body className="ml-2">
                                    <p className="admission-text">Study Permit Application Checklist</p>
                                </Media>
                            </Media>
                        </div>
                    </Col>
                </Row>

            </Container>
            <QcEdu/>
        </div>
    );
}
export default AdmissionS2;