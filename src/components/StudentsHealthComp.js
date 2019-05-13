import React from 'react'
import { Container, Row, Col, Media, Card, CardImg, CardBody, UncontrolledTooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function StudentsHealth(props) {
    return(
        <div>
            <Container className="my-2 border-bottom border-primary pb-1">
                <div className="d-flex justify-content-center">
                    <Media className="mx-3">
                        
                        <Media body>
                            <Media heading className="mt-2 mr-2">
                                Field Trips
                            </Media> 
                        </Media>
                        <Media right href="/students/" id="RegistrationTooltip">
                            <Media object src="/assets/images/students-bus-deselected.png" alt="Field Trip" className="img-fluid"/>
                            {/* <UncontrolledTooltip placement="right" target="RegistrationTooltip">
                                Register Now!
                            </UncontrolledTooltip> */}
                        </Media>
                    </Media>
                    <Media className="mx-3">
                        
                        <Media body>
                            <Media heading className="mt-2 mr-2">
                                Study Assist
                            </Media> 
                        </Media>
                        <Media right href="/students/study">
                            <Media object src="/assets/images/students-study-deselected.png" alt="Study Assist" className="img-fluid students-title-icon-small pt-1"/>
                        </Media>

                    </Media>
                    <Media className="mx-3">
                        <Media body>
                            <Media heading className="mt-2 mr-2"> 
                                Health Support
                            </Media> 
                        </Media>
                        <Media right href="/students/health">
                            <Media object src="/assets/images/students-health-selected.png" alt="Health Support" className="img-fluid"/>
                        </Media>
                    </Media>
                </div>
            </Container>
        </div>
    )
}

export default StudentsHealth;