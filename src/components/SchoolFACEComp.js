import React, { useState } from 'react';
import { Container, Row, Col, Media, Breadcrumb, BreadcrumbItem, UncontrolledCarousel } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import SchoolEMSBCal from './SchoolEMSBCalComp';

const SchoolFACE = () => {

    const [ philoState, setPhiloState ] = useState({
        showPhilo: false
    });

    const togglePhilo = () => {
        const doesShowPhilo = philoState.showPhilo;
        setPhiloState({ showPhilo: !doesShowPhilo });
    };

    let plusBtnClass    = ["mt-1", "ml-3", "school-philo-list-icon"].join(" ");
    let minusBtnClass   = "d-none";

    let philoDropdown = null;

    if(philoState.showPhilo) {
        plusBtnClass    = "d-none";
        minusBtnClass   = ["mt-1", "ml-3", "school-philo-list-icon"].join(" ");
        philoDropdown = (
            <div className="d-flex flex-column align-items-start ml-2">
                <div className="d-flex justify-content-start">
                    <FontAwesomeIcon icon={ faCheckCircle } size="sm" className="mt-1 school-philo-list-icon" />
                    <p className="ml-3">
                        To combine academic and artistic development which provides our students with many challenges in which they can flourish and develop their full potential.
                    </p>
                </div>
                <div className="d-flex justify-content-start">
                    <FontAwesomeIcon icon={ faCheckCircle } size="sm" className="mt-1 school-philo-list-icon" />
                    <p className="ml-3">
                    To teach our important values which are openess of mind, respect, responsibility, independence, self-discipline, accomplishment and self-esteem.
                    </p>
                </div>
                <div className="d-flex justify-content-start">
                    <FontAwesomeIcon icon={ faCheckCircle } size="sm" className="mt-1 school-philo-list-icon" />
                    <p className="ml-3">
                    To develop respect for others, an appreciation for the many facets of the world, an open mind, a more active vision of life, teamwork, and to foster intellectual, emotional, and spiritual growth.
                    </p>
                </div>
            </div>
        )
    };

    const faceImg = [
        { src: '/assets/images/schools/FACE-1.jpg' },
        { src: '/assets/images/schools/FACE-2.jpg' },
        { src: '/assets/images/schools/FACE-3.jpg' },
        { src: '/assets/images/schools/FACE-4.jpg' }
    ];
    
    return (
        <div className="text-center">
            <SchoolEMSBCal />
            <Container className="px-5">
                <Breadcrumb tag="nav" listTag="div" className="mx-2 school-breadcrumb">
                    <BreadcrumbItem tag="a" href="/schools" className="">School Picker</BreadcrumbItem>
                    <BreadcrumbItem active tag="span" href="#">FACE School</BreadcrumbItem>
                </Breadcrumb>
                <Row className="text-left mx-2 mb-3">
                    <Col lg="5" className="mb-3">
                        <UncontrolledCarousel items={ faceImg } />
                    </Col>
                    <Col lg="7">
                        <Row>
                            <Col sm="12" className="mt-1">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/schools/school-intro.png" alt="Intro" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <p><b>Fine Arts Core Education (FACE) High School</b> is located north of Sherbrooke St. West and is accessible by bus, McGill Metro, and Central or Windsor Train Stations.</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" className="mb-1">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/schools/school-address.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <p>3449 University Street, Montreal, QC, H3A 2A8</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" md="6" className="my-1">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/schools/school-call.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <p>(514) 350-8899</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" md="6" className="my-1">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/schools/school-email.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <p>face@emsb.qc.ca</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" md="6" className="my-1">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/schools/school-website.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <p>http://face-english.csdm.ca</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" md="6" className="my-1">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/schools/school-calender.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <p>2018-2019 school calendar</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" className="my-1">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/schools/school-mission.png" alt="School missions" className="img=fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <Media body>
                                            <div className="d-flex justify-content-start">
                                                <p><b>Philosophy / Mission / Objectives</b></p>
                                                <FontAwesomeIcon icon={ faPlusCircle } className={plusBtnClass} onClick={togglePhilo} />
                                                <FontAwesomeIcon icon={ faMinusCircle } className={minusBtnClass} onClick={togglePhilo} />
                                            </div>
                                        </Media>
                                    </Media>
                                </Media>
                                
                                { philoDropdown }

                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default SchoolFACE; 
