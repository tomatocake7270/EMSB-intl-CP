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

    const toggleStaff0 = () => {
        const doesShowStaff0 = staffState.showStaff0;
        setStaffState({ showStaff0: !doesShowStaff0 }); 
    };
    const toggleStaff1 = () => {
        const doesShowStaff1 = staffState.showStaff1;
        setStaffState({ showStaff1: !doesShowStaff1 }); 
    };
    const toggleStaff2 = () => {
        const doesShowStaff2 = staffState.showStaff2;
        setStaffState({ showStaff2: !doesShowStaff2 }); 
    };
    const toggleStaff3 = () => {
        const doesShowStaff3 = staffState.showStaff3;
        setStaffState({ showStaff3: !doesShowStaff3 }); 
    };
    const toggleStaff4 = () => {
        const doesShowStaff4 = staffState.showStaff4;
        setStaffState({ showStaff4: !doesShowStaff4 }); 
    };
    const toggleStaff5 = () => {
        const doesShowStaff5 = staffState.showStaff5;
        setStaffState({ showStaff5: !doesShowStaff5 }); 
    };

    let plusBtnClass0    = "contact-icon";      let minusBtnClass0   = ["d-none", "contact-icon"].join(" "); //可以没有 contact-icon 这里做演示
    let plusBtnClass1    = "contact-icon";      let minusBtnClass1   = ["d-none", "contact-icon"].join(" ");
    let plusBtnClass2    = "contact-icon";      let minusBtnClass2   = ["d-none", "contact-icon"].join(" ");
    let plusBtnClass3    = "contact-icon";      let minusBtnClass3   = ["d-none", "contact-icon"].join(" ");
    let plusBtnClass4    = "contact-icon";      let minusBtnClass4   = ["d-none", "contact-icon"].join(" ");
    let plusBtnClass5    = "contact-icon";      let minusBtnClass5   = ["d-none", "contact-icon"].join(" ");


    let staff0Dropdown  = null;    let staff1Dropdown  = null;
    let staff2Dropdown  = null;    let staff3Dropdown  = null;
    let staff4Dropdown  = null;    let staff5Dropdown  = null;
    
    if (staffState.showStaff0) {
        
        plusBtnClass0    = ["d-none", "contact-icon"].join(" ");
        minusBtnClass0   = "contact-icon";
        staff0Dropdown = (
            <div className="d-flex flex-column align-items-start text-left border border-secondary mb-2 pl-2 pt-2 rounded">
                {/* <h5 className="border-bottom border-info">Job description</h5> */}
                <h5>{postInfo.leader.postDescription}</h5>
                <h5 className="border-bottom border-info">Phone number</h5>
                <p>{staffInfo.staff0.phone}</p>
                <h5 className="border-bottom border-info">Email</h5>
                <p>{staffInfo.staff0.email}</p>
            </div>
        )
    };
    if (staffState.showStaff1) {
        plusBtnClass1    = ["d-none", "contact-icon"].join(" ");
        minusBtnClass1   = "contact-icon";
        staff1Dropdown = (
            <RenderStaffDropdown    //>id      = {staffInfo.staff1.id}
                                    post    = {postInfo.adminTech.postDescription}
                                    schools = {<p>{staffInfo.staff1.schools}</p>}
                                    phone   = {staffInfo.staff1.phone}
                                    email   = {staffInfo.staff1.email} />
        )
    };
    if (staffState.showStaff2) {
        plusBtnClass2    = ["d-none", "contact-icon"].join(" ");
        minusBtnClass2   = "contact-icon";
        staff2Dropdown = (
            <RenderStaffDropdown    post    = {postInfo.adminTech.postDescription}
                                    schools = {<p>{staffInfo.staff2.schools}</p>}
                                    phone   = {staffInfo.staff2.phone}
                                    email   = {staffInfo.staff2.email} />
        )
    };
    if (staffState.showStaff3) {
        plusBtnClass3    = ["d-none", "contact-icon"].join(" ");
        minusBtnClass3   = "contact-icon";
        staff3Dropdown = (
            <RenderStaffDropdown    post    = {postInfo.adminTech.postDescription}
                                    schools = {<p>{staffInfo.staff3.schools}</p>}
                                    phone   = {staffInfo.staff3.phone}
                                    email   = {staffInfo.staff3.email} />
        )
    };
    if (staffState.showStaff4) {
        plusBtnClass4   = ["d-none", "contact-icon"].join(" ");
        minusBtnClass4  = "contact-icon";
        staff4Dropdown = (
            <RenderStaffDropdown    post    = {postInfo.adminTech.postDescription}
                                    schools = {<p>{staffInfo.staff4.schools}</p>}
                                    phone   = {staffInfo.staff4.phone}
                                    email   = {staffInfo.staff4.email} />
        )
    };
    if (staffState.showStaff5) {
        plusBtnClass5    = ["d-none", "contact-icon"].join(" ");
        minusBtnClass5   = "contact-icon";
        staff5Dropdown = (
            <RenderStaffDropdown    post    = {postInfo.adminTech.postDescription}
                                    schools = {<p>{staffInfo.staff5.schools}</p>}
                                    phone   = {staffInfo.staff5.phone}
                                    email   = {staffInfo.staff5.email} />
        )
    };

    return(
        <div>
            <Container className="text-center">
                <div className="d-flex flex-column align-items-center">
                    <Container className="mt-4 mb-3">
                        <div className="d-flex flex-column align-items-between">
                            <h4 className="my-1 lato-font bold-font blue-font">Director of School Organization – International Students</h4> 
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
                                    <FontAwesomeIcon icon={ faPlusCircle } size="lg" className={plusBtnClass0} onClick={toggleStaff0} />
                                    <FontAwesomeIcon icon={ faMinusCircle } size="lg" className={minusBtnClass0} onClick={toggleStaff0} />
                                </div>
                            </div>
                            <Row>
                                <Col lg={{ size: 6, offset: 3 }}>
                                    {staff0Dropdown}
                                </Col>
                            </Row>
                            
                        </div>
                    </Container>
                </div>
                <Row>
                    <Col xs="12" lg={{ size: 5, offset: 1 }}>
                        <Container className="my-2 border pb-1 rounded">
                            <div className="d-flex flex-column align-items-between">
                                <h4 className="border-bottom border-secondary mt-3 pb-1 mx-auto blue-font bold-font">Administrative Technicians</h4>
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
                                        <FontAwesomeIcon icon={ faPlusCircle } size="lg" className={plusBtnClass1}  onClick={toggleStaff1} />
                                        <FontAwesomeIcon icon={ faMinusCircle } size="lg" className={minusBtnClass1} onClick={toggleStaff1} />
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
                                        <FontAwesomeIcon icon={ faPlusCircle } size="lg" className={plusBtnClass2}  onClick={toggleStaff2} />
                                        <FontAwesomeIcon icon={ faMinusCircle } size="lg" className={minusBtnClass2} onClick={toggleStaff2} />
                                    </div>
                                </div>

                                { staff2Dropdown }

                            </div>
                        </Container>
                    </Col>
                    <Col xs="12" lg="5">
                        <Container className="my-2 border pb-1 rounded">
                            <div className="d-flex flex-column align-items-between">
                                <h4 className="border-bottom border-secondary mt-3 mb-3 pb-1 mx-auto blue-font bold-font">International Students Advisors</h4>
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
                                        <FontAwesomeIcon icon={ faPlusCircle } size="lg" className={plusBtnClass3} onClick={toggleStaff3} />
                                        <FontAwesomeIcon icon={ faMinusCircle } size="lg" className={minusBtnClass3} onClick={toggleStaff3} />
                                    </div>
                                </div>

                                { staff3Dropdown }
                                
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
                                        <FontAwesomeIcon icon={ faPlusCircle } size="lg" className={plusBtnClass4} onClick={toggleStaff4} />
                                        <FontAwesomeIcon icon={ faMinusCircle } size="lg" className={minusBtnClass4} onClick={toggleStaff4} />
                                    </div>
                                </div>

                                { staff4Dropdown }
                                
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
                                        <FontAwesomeIcon icon={ faPlusCircle } size="lg" className={plusBtnClass5} onClick={toggleStaff5} />
                                        <FontAwesomeIcon icon={ faMinusCircle } size="lg" className={minusBtnClass5} onClick={toggleStaff5} />
                                    </div>
                                </div>

                                { staff5Dropdown }
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contacts;