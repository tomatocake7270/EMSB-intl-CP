import React, { useState } from 'react';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {

    // const [ adminState, setAdminState ] = useState({
    //     accessToAdmin: false
    // })
    
    // const goToAdmin = () => {
    //     const hasGone = adminState.accessToAdmin;
    //     setAdminState({ accessToAdmin: !hasGone });
    // }
    return(
        <React.Fragment>
            {/* <Container> */}
            <div className="footer">
                <div className="d-flex justify-content-around px-5 mx-5">
                    <Media className="ml-3">
                        <Media left>
                            <Media object src="/assets/images/EMSB-intl-logo.png" alt="EMSB" className="img-fluid emsb-footer-logo"/>
                        </Media>
                        <Media body className="ml-2">
                            <Media heading className="mt-2 dark-grey-font">
                            EMSB, International Students
                            </Media>
                            <ul className="list-unstyled">
                                <li>Office 119, 6000 Fielding Avenue</li>
                                <li>Montreal, QC H3X 1T4</li>
                                <li>General Info: 514-483-7200 ext. 7258</li>
                                <li>intstudent@emsb.qc.ca</li>
                            </ul>
                        </Media>
                    </Media>
                    <Media className="mr-3 text-right">
                        <Media body className="mr-2">
                            <Media heading className="mt-2 dark-grey-font">
                            Office Hours
                            </Media>
                            <ul className="list-unstyled">
                                <li>Opening Hours: 8:00 am to 4:00 pm</li>
                                <li>Guest time: 8:30 am to 2:30 pm</li>
                                <li>General Info: 514-483-7200 ext. 7258</li>
                                <li>Law 101 (eligibility) Office Hours:&nbsp;
                                    <a href="https://www.emsb.qc.ca/emsb/admissions/eligibility/office" rel="noopener noreferrer" target="_blank">here</a></li>
                            </ul>
                        </Media>
                        {/* <Media right>
                            <Media object src="/assets/images/home/office-hours.png" alt="Office hours" className="img-fluid emsb-footer-logo"/>
                        </Media> */}
                    </Media>
                </div>       
                {/* <Row>
                    <Col sm="6">
                        <Media className="ml-3">
                            <Media left>
                                <Media object src="/assets/images/EMSB-intl-logo.png" alt="EMSB" className="img-fluid emsb-footer-logo"/>
                            </Media>
                            <Media body className="ml-2">
                                <Media heading className="mt-2 dark-grey-font">
                                EMSB, International Students
                                </Media>
                                <ul className="list-unstyled">
                                    <li>Office 119, 6000 Fielding Avenue</li>
                                    <li>Montreal, QC H3X 1T4</li>
                                    <li>General Info: 514-483-7200 ext. 7258</li>
                                    <li>intstudent@emsb.qc.ca</li>
                                </ul>
                            </Media>
                        </Media>
                    </Col>
                    <Col sm="6" className="justify-content-end">
                        <Media className="ml-3">
                            <Media left>
                                <Media object src="/assets/images/home/office-hours.png" alt="Office hours" className="img-fluid emsb-footer-logo"/>
                            </Media>
                            <Media body className="ml-2">
                                <Media heading className="mt-2 dark-grey-font">
                                Office Hours
                                </Media>
                                <ul className="list-unstyled">
                                    <li>Opening Hours: 8:00 am to 4:00 pm</li>
                                    <li>Guest time: 8:30 am to 2:30 pm</li>
                                    <li>General Info: 514-483-7200 ext. 7258</li>
                                    <li>Law 101 (eligibility) Office Hours:&nbsp;
                                        <a href="https://www.emsb.qc.ca/emsb/admissions/eligibility/office" rel="noopener noreferrer" target="_blank">here</a></li>
                                </ul>
                            </Media>
                        </Media>
                    </Col>
                </Row> */}
                <div className="d-flex flex-column align-items-center">
                    <p className="mb-0 footer-links">&copy; English Montreal School Board, 2019</p>
                    <p className="mb-0">
                        <Link to="/home" className="footer-links">Home</Link> | 
                        <Link to="/admission" className="footer-links"> Admission</Link> | 
                        <Link to="/schools" className="footer-links"> Schools</Link> | 
                        <Link to="/students" className="footer-links"> Students</Link> | 
                        <Link to="/contacts" className="footer-links"> Contacts</Link></p>
                </div>  
            </div>
            {/* </Container>      */}
        </React.Fragment>
    );
}

export default Footer;