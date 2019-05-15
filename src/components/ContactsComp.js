import React, { useState } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { RenderStaffDropdown } from './ContactsRenderComp';
import { postInfo, staffInfo } from '../shared/ContactDetails';

const Contacts = () => {

    const [ staffState, setStaffState ] = useState({
        showStaff0: false,
        showStaff1: false,
        showStaff2: false,
        showStaff3: false,
        showStaff4: false,
        showStaff5: false
    });

    const toggleStaff1 = () => {
        const doesShowStaff1 = staffState.showStaff1;
        setStaffState({ showStaff1: !doesShowStaff1 }); 
    };

    let plusBtnClass    = "contact-icon"; 
    let minusBtnClass   = ["d-none", "contact-icon"].join(" "); //可以没有 contact-icon 这里做演示
    let staff1Dropdown  = null;
    
    if (staffState.showStaff1) {
        plusBtnClass    = ["d-none", "contact-icon"].join(" ");
        minusBtnClass   = "contact-icon";
        staff1Dropdown = (
            <RenderStaffDropdown //>id      = {staffInfo.staff1.id}
                                    schools = {<p>{staffInfo.staff1.schools}</p>}
                                    phone   = {staffInfo.staff1.phone}
                                    email   = {staffInfo.staff1.email} />
        )
    };

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
                                        <FontAwesomeIcon icon={ faPhone } size="lg" className="contact-icon display" />
                                        <FontAwesomeIcon icon={ faPlusCircle } size="lg" className={plusBtnClass}  onClick={toggleStaff1} />
                                        <FontAwesomeIcon icon={ faMinusCircle } size="lg" className={minusBtnClass} onClick={toggleStaff1} />
                                    </div>
                                </div>
                                
                                { staff1Dropdown }
                                
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
                                        <FontAwesomeIcon icon={ faPlusCircle } size="lg" className="contact-icon"/>
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