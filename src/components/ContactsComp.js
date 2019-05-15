import React, { useState } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contacts = (props) => {

    const [ staffState, setStaffState ] = useState({
        showStaff1: false,
        showStaff2: false,
        showStaff3: false,
        showStaff4: false,
        showStaff5: false,
        showStaff6: false
    });

    const toggleStaff = () => {
        const doesShowStaff1 = staffState.showStaff1;
        setStaffState({ showStaff1: !doesShowStaff1 }); 
    }

    return(
        <div>
            <Container className="text-center">
                <div className="d-flex flex-column align-items-center">
                    <Container className="mt-4 mb-3">
                        <div className="d-flex flex-column align-items-center">
                            <h4 className="my-1">Director of School Organization – International Students</h4> 
                            <div className="d-flex justify-content-center">
                                <Media className="my-2">
                                    <Media left href="#">
                                        <Media object src="/assets/images/staff/staff-1.png" alt="Leader" className="img-fluid" />
                                    </Media>
                                    <Media body>
                                        <Media heading className="mt-3 mx-3">
                                            <p>Ms. Sandra Léveillé</p>
                                        </Media>
                                    </Media>
                                </Media>
                                <div className="d-flex justify-content-end contact-icon-group">
                                    <FontAwesomeIcon icon={ faEnvelope } size="lg" className="contact-icon" />
                                    <FontAwesomeIcon icon={ faPhone } size="lg" className="contact-icon" />
                                    <FontAwesomeIcon icon={ faPlusCircle } size="lg" className="contact-icon" />
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <Row>
                    <Col xs="12" lg={{ size: 5, offset: 1 }}>
                        <Container className="my-2 border border-primary pb-1 rounded">
                            <div className="d-flex flex-column align-items-between">
                                <h4 className="border-bottom border-secondary mt-3 pb-1 mx-auto">Administrative Technicians</h4>
                                <div className="d-flex justify-content-between">
                                    <Media className="my-2 contact-staff-media">
                                        <Media left href="#">
                                            <Media object src="/assets/images/staff/staff-2.png" alt="admin technician 1" className="img-fluid" />
                                        </Media>
                                        <Media body>
                                            <Media heading className="contact-staff-name">
                                                <p>Ms. Natasha Gillespie</p>
                                            </Media>
                                        </Media>
                                    </Media>
                                    <div className="d-flex justify-content-end contact-icon-group">
                                        <FontAwesomeIcon icon={ faEnvelope } size="lg" className="contact-icon" />
                                        <FontAwesomeIcon icon={ faPhone } size="lg" className="contact-icon" />
                                        <FontAwesomeIcon icon={ faPlusCircle } size="lg" className="contact-icon" />
                                    </div>
                                </div>
                                
                                {/* dropdown */}
                                <div className="d-flex flex-column align-items-start text-left border border-secondary my-1 px-1 pt-2 rounded">
                                    <h5 className="border-bottom border-info">Schools in charge</h5>
                                    <div className="d-flex flex-wrap">
                                        <p>F.A.C.E. School,&nbsp;</p>
                                        <p>James Lyng High School,&nbsp;</p>
                                        <p>John F. Kennedy High School,&nbsp;</p>
                                        <p>John Paul I High School,&nbsp;</p>
                                        <p>Lester B. Pearson High School,&nbsp;</p>
                                        <p>Westmount High School</p>
                                    </div>
                                    <h5 className="border-bottom border-info">Phone number</h5>
                                    <p>(514) 483-7200 ext. 7259</p>
                                    <h5 className="border-bottom border-info">Email</h5>
                                    <p>ngillespie@emsb.qc.ca</p>
                                </div>
                                
                                <div className="d-flex justify-content-between">
                                    <Media className="my-2 contact-staff-media">
                                        <Media left href="#">
                                            <Media object src="/assets/images/staff/staff-3.png" alt="admin technician 1" className="img-fluid" />
                                        </Media>
                                        <Media body>
                                            <Media heading className="contact-staff-name">
                                                <p>Ms. Jeanine Lason</p>
                                            </Media>
                                        </Media>
                                    </Media>
                                    <div className="d-flex justify-content-end contact-icon-group">
                                        <FontAwesomeIcon icon={ faEnvelope } size="lg" className="contact-icon" />
                                        <FontAwesomeIcon icon={ faPhone } size="lg" className="contact-icon" />
                                        <FontAwesomeIcon icon={ faPlusCircle } size="lg" className="contact-icon" />
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </Col>
                    <Col xs="12" lg="5">
                        <Container className="my-2 border border-primary pb-1 rounded">
                            <div className="d-flex flex-column align-items-between">
                                <h4 className="border-bottom border-secondary mt-3 mb-3 pb-1 mx-auto">International Students Advisors</h4>
                                <div className="d-flex justify-content-between">
                                    <Media className="my-2 contact-staff-media">
                                        <Media left href="#">
                                            <Media object src="/assets/images/staff/staff-4.png" alt="admin technician 1" className="img-fluid" />
                                        </Media>
                                        <Media body>
                                            <Media heading className="contact-staff-name">
                                                <p>Mr. Charles Ai</p>
                                            </Media>
                                        </Media>
                                    </Media>
                                    <div className="d-flex justify-content-end contact-icon-group">
                                        <FontAwesomeIcon icon={ faEnvelope } size="lg" className="contact-icon" />
                                        <FontAwesomeIcon icon={ faPhone } size="lg" className="contact-icon" />
                                        <FontAwesomeIcon icon={ faPlusCircle } size="lg" className="contact-icon" onClick={toggleStaff} />
                                    </div>
                                </div>
                                
                                <div className="d-flex justify-content-between">
                                    <Media className="my-2 contact-staff-media">
                                        <Media left href="#">
                                            <Media object src="/assets/images/staff/staff-5.png" alt="admin technician 1" className="img-fluid" />
                                        </Media>
                                        <Media body>
                                            <Media heading className="contact-staff-name">
                                                <p>Ms. Ping Ji</p>
                                            </Media>
                                        </Media>
                                    </Media>
                                    <div className="d-flex justify-content-end contact-icon-group">
                                        <FontAwesomeIcon icon={ faEnvelope } size="lg" className="contact-icon" />
                                        <FontAwesomeIcon icon={ faPhone } size="lg" className="contact-icon" />
                                        <FontAwesomeIcon icon={ faPlusCircle } size="lg" className="contact-icon" />
                                    </div>
                                </div>
                                
                                <div className="d-flex justify-content-between">
                                    <Media className="my-2 contact-staff-media">
                                        <Media left href="#">
                                            <Media object src="/assets/images/staff/staff-6.png" alt="admin technician 1" className="img-fluid" />
                                        </Media>
                                        <Media body>
                                            <Media heading className="contact-staff-name">
                                                <p>Ms. Angela Kim</p>
                                            </Media>
                                        </Media>
                                    </Media>
                                    <div className="d-flex justify-content-end contact-icon-group">
                                        <FontAwesomeIcon icon={ faEnvelope } size="lg" className="contact-icon" />
                                        <FontAwesomeIcon icon={ faPhone } size="lg" className="contact-icon" />
                                        <FontAwesomeIcon icon={ faPlusCircle } size="lg" className="contact-icon" />
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contacts;