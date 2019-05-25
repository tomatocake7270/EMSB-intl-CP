import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import QcEdu from './AdmissionRenderComp';

const AdmissionS3 = () => {
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
                                <Media object src="/assets/images/admission-step-deselected.png" alt="selected" className="img-fluid"/>
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
                                <Media object src="/assets/images/admission-step-selected.png" alt="selected" className="img-fluid"/>
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
                    <Col md="6">  
                        <div className="d-flex flex-column align-items-start text-left mt-2">
                            <p>After receiving the CAQ, the Custodian of the Student  (for those requiring custodianship refer to Home Stay) will come to the EMSB with:</p>
                            <Media className="my-1">
                                <Media left href="#">
                                    <Media object src="/assets/images/admission-check.png" alt="checkmark" className="img-fluid admission-checkmark" />
                                </Media>
                                <Media body className="ml-2">
                                    <p>The CAQ</p>
                                </Media>
                            </Media>
                            <Media className="mb-1">
                                <Media left href="#">
                                    <Media object src="/assets/images/admission-check.png" alt="checkmark" className="img-fluid admission-checkmark" />
                                </Media>
                                <Media body className="ml-2">
                                    <p>The birth certificate of the student showing parents names (in their mother tongue  and translated into either English or French).</p>
                                </Media>
                            </Media>
                            <Media className="mb-1">
                                <Media left href="#">
                                    <Media object src="/assets/images/admission-check.png" alt="checkmark" className="img-fluid admission-checkmark" />
                                </Media>
                                <Media body className="ml-2">
                                    <p>A Certified Cheque or Money Order payable to the EMSB to cover the full period the student will attend school. </p>
                                </Media>
                            </Media>
                            <p>We will then complete the registration and apply for the Certificate of Eligibility for the student to attend an English School. ( Allow 3 - 4 weeks)</p>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="d-flex flex-column align-items-start text-left my-3 pt-2 pl-3 border rounded">
                            <Media>
                                <Media left href="#">
                                    <Media object src="/assets/images/admission-link.png" alt="link" className="img-fluid admission-link-icon" />
                                </Media>
                                <Media body className="ml-2">
                                    <p>Education Cost in Quebec</p>
                                </Media>
                            </Media>
                            <Media>
                                <Media left href="#">
                                    <Media object src="/assets/images/admission-link.png" alt="link" className="img-fluid admission-link-icon" />
                                </Media>
                                <Media body className="ml-2">
                                    <p>Canada Homestay Network</p>
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

export default AdmissionS3;