import React, { useState } from 'react';
import { Container, Row, Col, Media, Breadcrumb, BreadcrumbItem, UncontrolledCarousel } from 'reactstrap';
import { titleInfo } from '../shared/StudentsDetails';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import { RenderMedia } from './StudentsRenderComp';

const ZipLiningTest = () => {
    const [ scheduleState, setScheduleState ] = useState({
        showSchedule: false
    });

    const toggleSchedule = () => {
        const doesShowSchedule = scheduleState.showSchedule;
        setScheduleState({ showSchedule: !doesShowSchedule });
    };

    let plusBtnClass    = ["mt-1", "ml-3", "school-philo-list-icon"].join(" ");
    let minusBtnClass   = "d-none";

    let scheduleDropdown = null;

    if(scheduleState.showSchedule) {
        plusBtnClass    = "d-none";
        minusBtnClass   = ["mt-1", "ml-3", "student-schedule-list-icon"].join(" ");
        scheduleDropdown = (
            <div className="d-flex flex-column align-items-start ml-2">
                <div className="d-flex justify-content-start">
                    <FontAwesomeIcon icon={ faCheckCircle } size="sm" className="mt-1 school-philo-list-icon" />
                    <p className="ml-3">
                        schedul 1
                    </p>
                </div>
                <div className="d-flex justify-content-start">
                    <FontAwesomeIcon icon={ faCheckCircle } size="sm" className="school-philo-list-icon" />
                    <p className="ml-3">
                        schedul 2
                    </p>
                </div>
                <div className="d-flex justify-content-start">
                    <FontAwesomeIcon icon={ faCheckCircle } size="sm" className="school-philo-list-icon" />
                    <p className="ml-3">
                        schedul 3
                    </p>
                </div>
                <div className="d-flex justify-content-start">
                    <FontAwesomeIcon icon={ faCheckCircle } size="sm" className="school-philo-list-icon" />
                    <p className="ml-3">
                        schedul 4
                    </p>
                </div>
                <div className="d-flex justify-content-start">
                    <FontAwesomeIcon icon={ faCheckCircle } size="sm" className="school-philo-list-icon" />
                    <p className="ml-3">
                        schedul 5
                    </p>
                </div>
                <div className="d-flex justify-content-start">
                    <FontAwesomeIcon icon={ faCheckCircle } size="sm" className="school-philo-list-icon" />
                    <p className="ml-3">
                        schedul 6
                    </p>
                </div>
                <div className="d-flex justify-content-start">
                    <FontAwesomeIcon icon={ faCheckCircle } size="sm" className="school-philo-list-icon" />
                    <p className="ml-3">
                        schedul 7
                    </p>
                </div>
            </div>
        )
    };

    const zipliningImg = [
        { src: '/assets/images/schools/FACE-0.jpg' },
        { src: '/assets/images/schools/FACE-1.jpg' },
        { src: '/assets/images/schools/FACE-2.jpg' },
        { src: '/assets/images/schools/FACE-3.jpg' }
    ];
    
    return (
        <div className="text-center">
            <Container className="my-2 border-bottom border-primary pb-1">
                <div className="d-flex justify-content-center">
                    <RenderMedia title = {titleInfo.fieldTrips.title}
                                 href  = {titleInfo.fieldTrips.href}
                                 url   = {titleInfo.fieldTrips.url.urlSelected}/>
                    <RenderMedia title = {titleInfo.studyAssist.title}
                                 href  = {titleInfo.studyAssist.href}
                                 url   = {titleInfo.studyAssist.url.urlDeselected}/>
                    <RenderMedia title = {titleInfo.healthSupport.title}
                                 href  = {titleInfo.healthSupport.href}
                                 url   = {titleInfo.healthSupport.url.urlDeselected}/>
                </div>
            </Container>
            <Container className="px-5">
                <Breadcrumb tag="nav" listTag="div" className="mx-2 school-breadcrumb">
                    <BreadcrumbItem tag="a" className=""><Link to="/students">Field Trips</Link></BreadcrumbItem>
                    <BreadcrumbItem active tag="span" href="#">Abraska Ziplining</BreadcrumbItem>
                </Breadcrumb>
                <Row className="text-left mx-2 mb-3">
                    <Col lg="5" className="mb-3">
                        <div className="d-flex flex-column align-items-start">
                            <UncontrolledCarousel items={ zipliningImg } />
                            <Media className="mt-4">
                                    <Media left href="#">
                                        <Media object src="/assets/images/schools/school-address.png" alt="Intro" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <p>45 Chemin du Sous-Bois, Mont St-Grégoire, QC</p>
                                    </Media>
                            </Media>
                            <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/fieldTrips/ft-ziplining-intro.png" alt="Intro" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <p>Ziplining is a fun activity you can practice in Canada during the summer or fall season. In Montreal area, there are several parks with treetop challenge games and zip line adventures that wil make you appreciate the beutiful summer and fall colors from different heights.</p>
                                    </Media>
                            </Media>
                        </div>
                        
                    </Col>
                    <Col lg="7">
                        <Row>
                            <Col sm="12" className="mt-0">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/fieldTrips/ft-date-time.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <b>Date and Departure Time</b>
                                        <p>Friday, Mar 29 and April 5, 2019 at 9:30 am</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" lg="6" className="my-1">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/fieldTrips/ft-meet.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <b>Meeting point</b>
                                        <p>March 29: John F. Kennedy High School</p>
                                        <p>April 5: Westmount High School</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" lg="6" className="my-1">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/fieldTrips/ft-back.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <b>Back to Montreal</b>
                                        <p>Same day, at about 4:00 pm</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" className="my-1">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/fieldTrips/ft-transport.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <b>Transportation</b>
                                        <p>School bus</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" md="6" className="my-1">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/fieldTrips/ft-to-bring.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <b>What to bring</b>
                                        <p>Lunch, snacks; Bottles of water; A pair of thin gloves</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" md="6" className="my-1">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/fieldTrips/ft-to-wear.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <b>What to Wear</b>
                                        <p>Comfortable clothes with multiple layerse; Running shoes</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" className="my-1">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/fieldTrips/ft-schedule.png" alt="School missions" className="img=fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <Media body>
                                            <div className="d-flex justify-content-start">
                                                <p><b>Field trip schedule</b></p>
                                                <FontAwesomeIcon icon={ faPlusCircle } className={plusBtnClass} onClick={toggleSchedule} />
                                                <FontAwesomeIcon icon={ faMinusCircle } className={minusBtnClass} onClick={toggleSchedule} />
                                            </div>
                                        </Media>
                                    </Media>
                                </Media>
                                
                                { scheduleDropdown }

                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default ZipLiningTest;
