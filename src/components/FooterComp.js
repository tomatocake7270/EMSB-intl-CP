import React from 'react';
import { Row, Col, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <React.Fragment>
            <div className="footer">       
                <Row>
                    <Col md={{ size: 5, offset: 1}} xs={{ size: 8, offset: 2}}>
                        <Media className="ml-3">
                            <Media left href="#">
                                <Media object src="/assets/images/EMSB-intl-logo.png" alt="EMSB" className="img-fluid emsb-footer-logo"/>
                            </Media>
                            <Media body className="ml-2">
                                <Media heading className="mt-2">
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
                    <Col md={{ size: 5, offset: 1}} xs={{ size: 8, offset: 2}} className="justify-content-end">
                        <Media className="ml-3">
                            <Media left href="#">
                                <Media object src="/assets/images/home/office-hours.png" alt="Office hours" className="img-fluid emsb-footer-logo"/>
                            </Media>
                            <Media body className="ml-2">
                                <Media heading className="mt-2">
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
                </Row>
                <div className="d-flex flex-column align-items-center">
                    <p className="mb-0">&copy; English Montreal School Board, 2019</p>
                    <p className="mb-0">
                        <Link to="/home">Home</Link> | 
                        <Link to="/admission"> Admission</Link> | 
                        <Link to="/schools"> Schools</Link> | 
                        <Link to="/students"> Students</Link> | 
                        <Link to="/contacts"> Contacts</Link></p>
                </div>  
            </div>     
        </React.Fragment>
    );
}

export default Footer;