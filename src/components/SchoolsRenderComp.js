import React, { useState } from 'react';
import { Container, Row, Col, Media, Breadcrumb, BreadcrumbItem, UncontrolledCarousel } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import SchoolEMSBCal from './SchoolEMSBCalComp';

export const CurrentSchool = (props) => {
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
                        {props.philo1}
                    </p>
                </div>
                <div className="d-flex justify-content-start">
                    <FontAwesomeIcon icon={ faCheckCircle } size="sm" className="mt-1 school-philo-list-icon" />
                    <p className="ml-3">
                        {props.philo2}
                    </p>
                </div>
                <div className="d-flex justify-content-start">
                    <FontAwesomeIcon icon={ faCheckCircle } size="sm" className="mt-1 school-philo-list-icon" />
                    <p className="ml-3">
                        {props.philo3}
                    </p>
                </div>
            </div>
        )
    };
    
    return (
        <div className="text-center">
            <SchoolEMSBCal />
            <Container className="px-5">
                <Breadcrumb tag="nav" listTag="div" className="mx-2 school-breadcrumb">
                    <BreadcrumbItem tag="a"><Link to="/schools"><p className="lato-font">School Picker</p></Link></BreadcrumbItem>
                    <BreadcrumbItem active tag="span" href="#" className="lato-font">{props.name}</BreadcrumbItem>
                </Breadcrumb>
                <Row className="text-left mx-2 mb-3">
                    <Col lg="5" className="mb-3">
                        <UncontrolledCarousel items={props.imgUrl} />
                    </Col>
                    <Col lg="7">
                        <Row>
                            <Col sm="12" className="mt-1">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/schools/school-intro.png" alt="Intro" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <p>{props.intro}</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" className="mb-1">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/schools/school-address.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <p>{props.address}</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" md="6" className="my-1">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/schools/school-call.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <p>{props.telephone}</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" md="6" className="my-1">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/schools/school-email.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <p>{props.email}</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" md="6" className="my-1">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/schools/school-website.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <p>{props.website}</p>
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
    );
}

export const SchoolPicker = (props) => {
    return (
        <Col>
            <Link to={`/schools/${props.route}`} > 
                <img src={props.iconUrl} width={props.iconWidth} className="img-fluid" alt={props.name}></img>
            </Link>
        </Col>
    )
}