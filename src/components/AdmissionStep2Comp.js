import React from 'react';
import { Container, Row, Col, Media, Button } from 'reactstrap';

function AdmissionS2(props) {
    return(
        <div className="text-center">
            <Container className="my-3 border-bottom border-primary pb-1">
                <div className="d-flex justify-content-center">
                    <Media className="mx-3">
                        <Media left href="/admission">
                            <Media object src="/assets/images/admission-step-deselected.png" alt="selected" className="img-fluid"/>
                        </Media>
                        <Media body>
                            <Media heading className="mt-1 ml-2">
                                <p>Step 1</p>
                            </Media>
                        </Media>
                    </Media>
                    <Media className="mx-3">
                        <Media left href="/admission/step2">
                            <Media object src="/assets/images/admission-step-selected.png" alt="selected" className="img-fluid"/>
                        </Media>
                        <Media body>
                            <Media heading className="mt-1 ml-2">
                                <p>Step 2</p>
                            </Media>
                        </Media>
                    </Media>
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
                </div>
            </Container>
        
            <Container className="my-3">
                <Row>
                    {/* className="border border-primary rounded" */}
                    <Col md="6">  
                        <div className="d-flex flex-column align-items-center text-left mt-2">
                            <Media className="my-2">
                                <Media left href="#">
                                    <Media object src="/assets/images/admission-check.png" alt="checkmark" className="img-fluid admission-checkmark" />
                                </Media>
                                <Media body className="ml-2">
                                    <p>The Parent/Guardian/Agency will then start the process. (Allow 6 - 20 weeks)</p>
                                </Media>
                            </Media>
                            <Media className="mb-2">
                                <Media left href="#">
                                    <Media object src="/assets/images/admission-check.png" alt="checkmark" className="img-fluid admission-checkmark" />
                                </Media>
                                <Media body className="ml-2">
                                    <p>Apply for CAQ from Immigration, Diversité et Inclusion Québec: by first register online and pay the fee and then mail the documents to designated address.</p>
                                </Media>
                            </Media>
                            <Media className="mb-2">
                                <Media left href="#">
                                    <Media object src="/assets/images/admission-check.png" alt="checkmark" className="img-fluid admission-checkmark" />
                                </Media>
                                <Media body className="ml-2">
                                    <p>With CAQ in hand, then apply for Study Permit from Canadian Federal Government through the online system. No mailing needed.</p>
                                </Media>
                            </Media>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="d-flex flex-column align-items-start text-left my-4 pt-2 pl-3 border border-primary rounded">
                            <Media>
                                <Media left href="#">
                                    <Media object src="/assets/images/admission-link.png" alt="link" className="img-fluid admission-link-icon" />
                                </Media>
                                <Media body className="ml-2">
                                    <p>Steps to Apply for CAQ</p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left href="#">
                                    <Media object src="/assets/images/admission-link.png" alt="link" className="img-fluid admission-link-icon" />
                                </Media>
                                <Media body className="ml-2">
                                    <p>CAQ Online Application Portal</p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left href="#">
                                    <Media object src="/assets/images/admission-link.png" alt="link" className="img-fluid admission-link-icon" />
                                </Media>
                                <Media body className="ml-2">
                                    <p>CAQ Application Checklist (non-adult)</p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left href="#">
                                    <Media object src="/assets/images/admission-link.png" alt="link" className="img-fluid admission-link-icon" />
                                </Media>
                                <Media body className="ml-2">
                                    <p>Study Permit Online Application Portal</p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left href="#">
                                    <Media object src="/assets/images/admission-link.png" alt="link" className="img-fluid admission-link-icon" />
                                </Media>
                                <Media body className="ml-2">
                                    <p>Study Permit Application Checklist</p>
                                </Media>
                            </Media>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default AdmissionS2;