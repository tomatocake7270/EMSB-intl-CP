import React from 'react';
import { Container, Row, Col, Media, Button } from 'reactstrap';
import QcEdu from './AdmissionQcEduComp';

function Admission(props) {
    return(
        <div className="text-center">
            <Container className="my-3 border-bottom border-primary pb-1">
                <div className="d-flex justify-content-center">
                    <Media className="mx-3">
                        <Media left href="/admission">
                            <Media object src="assets/images/admission-step-selected.png" alt="selected" className="img-fluid"/>
                        </Media>
                        <Media body>
                            <Media heading className="mt-1 ml-2">
                                <p>Step 1</p>
                            </Media>
                        </Media>
                    </Media>
                    <Media className="mx-3">
                        <Media left href="/admission/step2">
                            <Media object src="assets/images/admission-step-deselected.png" alt="selected" className="img-fluid"/>
                        </Media>
                        <Media body>
                            <Media heading className="mt-1 ml-2">
                                <p>Step 2</p>
                            </Media>
                        </Media>
                    </Media>
                    <Media className="mx-3">
                        <Media left href="/admission/step3">
                            <Media object src="assets/images/admission-step-deselected.png" alt="selected" className="img-fluid"/>
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
                                    <Media object src="assets/images/admission-check.png" alt="checkmark" className="img-fluid admission-checkmark" />
                                </Media>
                                <Media body className="ml-2">
                                    <p>The Parent/Guardian must complete the online application.</p>
                                </Media>
                            </Media>
                            <Media className="mb-2">
                                <Media left href="#">
                                    <Media object src="assets/images/admission-check.png" alt="checkmark" className="img-fluid admission-checkmark" />
                                </Media>
                                <Media body className="ml-2">
                                    <p>The agent/agency must read and complete the documents below and forward them to the EMSB (intstudent@emsb.qc.ca). Once approved, the agent/agency must complete the online application here.</p>
                                </Media>
                            </Media>
                            <Media className="mb-2">
                                <Media left href="#">
                                    <Media object src="assets/images/admission-check.png" alt="checkmark" className="img-fluid admission-checkmark" />
                                </Media>
                                <Media body className="ml-2">
                                    <p>Once completed and approved, a school can be chosen with the interests of the student in mind. The Letters of Acceptance for both the C.A.Q. (Certificate d’acceptation du Québec) and Study Permit will be prepared. (Allow 3 - 4 weeks)</p>
                                </Media>
                            </Media>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="d-flex flex-column align-items-center text-left">
                            <Button color="primary" className="mt-3">EMSB Online Application System</Button>
                            <div className="d-flex flex-column align-items-start text-left my-4 pt-2 pl-1 border border-primary rounded">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="assets/images/admission-form.png" alt="form" className="img-fluid admission-form-icon" />
                                    </Media>
                                    <Media body className="ml-2">
                                        <p>1. International Student Package and Agreement</p>
                                    </Media>
                                </Media>
                                <Media>
                                    <Media left href="#">
                                        <Media object src="assets/images/admission-form.png" alt="form" className="img-fluid admission-form-icon" />
                                    </Media>
                                    <Media body className="ml-2">
                                        <p>2. Instructions for Wire Transfer Payment</p>
                                    </Media>
                                </Media>
                                <Media>
                                    <Media left href="#">
                                        <Media object src="assets/images/admission-form.png" alt="form" className="img-fluid admission-form-icon" />
                                    </Media>
                                    <Media body className="ml-2">
                                        <p>3. Custodianship Declaration – Custodian for Minors Studying in Canada</p>
                                    </Media>
                                </Media>
                                <Media>
                                    <Media left href="#">
                                        <Media object src="assets/images/admission-form.png" alt="form" className="img-fluid admission-form-icon" />
                                    </Media>
                                    <Media body className="ml-2">
                                        <p>4. Agency/Agent Qualification Application Form</p>
                                    </Media>
                                </Media>
                                <Media>
                                    <Media left href="#">
                                        <Media object src="assets/images/admission-form.png" alt="form" className="img-fluid admission-form-icon" />
                                    </Media>
                                    <Media body className="ml-2">
                                        <p>5. Agency/Agent International Recruiting Agreement 2019-2020 School Year</p>
                                    </Media>
                                </Media>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <QcEdu/>
        </div>
    )
}

export default Admission;