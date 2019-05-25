import React, { useState } from 'react';
import { Container, Row, Col, Media, Breadcrumb, BreadcrumbItem, UncontrolledCarousel } from 'reactstrap';
import { titleInfo } from '../shared/StudentsDetails';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import { RenderMedia } from './StudentsRenderComp';


const CurrentFieldTrip = (props) => {
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
                    <p className="ml-3">{props.schedule0}</p>
                </div>
                <div className="d-flex justify-content-start">
                    <FontAwesomeIcon icon={ faCheckCircle } size="sm" className="school-philo-list-icon" />
                    <p className="ml-3">{props.schedule1}</p>
                </div>
                <div className="d-flex justify-content-start">
                    <FontAwesomeIcon icon={ faCheckCircle } size="sm" className="school-philo-list-icon" />
                    <p className="ml-3">{props.schedule2}</p>
                </div>
                <div className="d-flex justify-content-start">
                    <FontAwesomeIcon icon={ faCheckCircle } size="sm" className="school-philo-list-icon" />
                    <p className="ml-3">{props.schedule3}</p>
                </div>
                <div className="d-flex justify-content-start">
                    <FontAwesomeIcon icon={ faCheckCircle } size="sm" className="school-philo-list-icon" />
                    <p className="ml-3">{props.schedule4}</p>
                </div>
                <div className="d-flex justify-content-start">
                    <FontAwesomeIcon icon={ faCheckCircle } size="sm" className="school-philo-list-icon" />
                    <p className="ml-3">{props.schedule5}</p>
                </div>
                <div className="d-flex justify-content-start">
                    <FontAwesomeIcon icon={ faCheckCircle } size="sm" className="school-philo-list-icon" />
                    <p className="ml-3">{props.schedule6}</p>
                </div>
            </div>
        )
    };

    return (
        <div className="text-center">
            <Container className="my-2 border-bottom border-primary pb-1">
                <div className="d-flex justify-content-center">
                    <RenderMedia title = {titleInfo.fieldTrips.title}
                                 href  = {titleInfo.fieldTrips.href}
                                 url   = {titleInfo.fieldTrips.url.urlSelected}
                                 class = {titleInfo.headingClass.classSelected}/>
                    <RenderMedia title = {titleInfo.studyAssist.title}
                                 href  = {titleInfo.studyAssist.href}
                                 url   = {titleInfo.studyAssist.url.urlDeselected}
                                 class = {titleInfo.headingClass.classDeselected}/>
                    <RenderMedia title = {titleInfo.healthSupport.title}
                                 href  = {titleInfo.healthSupport.href}
                                 url   = {titleInfo.healthSupport.url.urlDeselected}
                                 class = {titleInfo.headingClass.classDeselected}/>
                </div>
            </Container>

            <Container className="px-5">
                <Breadcrumb tag="nav" listTag="div" className="mx-2 school-breadcrumb">
                    <BreadcrumbItem><Link to="/students">Field Trips</Link></BreadcrumbItem>
                    <BreadcrumbItem active tag="span">{props.trip}</BreadcrumbItem>
                </Breadcrumb>
                <Row className="text-left mx-2 mb-3">
                    <Col lg="5" className="mb-3">
                        <div className="d-flex flex-column align-items-start">
                            <UncontrolledCarousel items={props.imgs} />
                            <Media className="mt-4">
                                    <Media left>
                                        <Media object src="/assets/images/schools/school-address.png" alt="Intro" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <p>{props.location}</p>
                                    </Media>
                            </Media>
                            <Media>
                                    <Media left>
                                        <Media object src={props.introIcon} alt="Intro" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <b>{props.trip}</b>
                                        <p>{props.intro}</p>
                                    </Media>
                            </Media>
                        </div>
                        
                    </Col>
                    <Col lg="7">
                        <Row>
                            <Col sm="12" className="mt-0">
                                <Media>
                                    <Media left>
                                        <Media object src="/assets/images/fieldTrips/ft-date-time.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <b>Date and Departure Time</b>
                                        <p>{props.date}</p>
                                    </Media>
                                </Media>
                            </Col>
                            
                            <Col sm="12" className="my-1">
                                <Media>
                                    <Media left>
                                        <Media object src="/assets/images/fieldTrips/ft-meet.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <b>Meeting point</b>
                                        <p>{props.meet}</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" lg="6" className="my-1">
                                <Media>
                                    <Media left>
                                        <Media object src="/assets/images/fieldTrips/ft-back.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <b>Back to Montreal</b>
                                        <p>{props.back}</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" lg="6" className="my-1">
                                <Media>
                                    <Media left>
                                        <Media object src="/assets/images/fieldTrips/ft-transport.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <b>Transportation</b>
                                        <p>{props.transport}</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" md="6" className="my-1">
                                <Media>
                                    <Media left>
                                        <Media object src="/assets/images/fieldTrips/ft-to-bring.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <b>What to bring</b>
                                        <p>{props.bring}</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" md="6" className="my-1">
                                <Media>
                                    <Media left>
                                        <Media object src="/assets/images/fieldTrips/ft-to-wear.png" alt="School address" className="img-fluid" />
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <b>What to Wear</b>
                                        <p>{props.wear}</p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="12" lg="6" className="my-1">
                                <Media>
                                    <Media left>
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
                            <Col sm="12" lg="6" className="my-1">
                                <Link to="/contacts">
                                    <Media>
                                        <Media left>
                                            <Media object src="/assets/images/fieldTrips/ft-faq-small.png" alt="School missions" className="img=fluid" />
                                        </Media>
                                        <Media body className="ml-2 mt-1">
                                            <Media body>
                                                <div className="d-flex justify-content-start">
                                                    <b>Have questions? Just Ask!</b>
                                                </div>
                                            </Media>
                                        </Media>
                                    </Media>
                                </Link>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default CurrentFieldTrip;