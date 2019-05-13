import React from 'react'
import { Container, Row, Col, Media, Card, CardImg, CardBody, UncontrolledTooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function Study(props) {
    return(
        <div>
            <Container className="my-2 border-bottom border-primary pb-1 justify-content-center">
                <Media>
                    <Media body>
                        <Media heading className="mt-2 ml-2">
                            Study Assistance
                        </Media> 
                    </Media>
                    <Media right href="#" id="RegistrationTooltip">
                        <Media object src="/assets/images/fieldTrips/school-bus.png" alt="Field Trip" className="img-fluid"/>
                        {/* <UncontrolledTooltip placement="right" target="RegistrationTooltip">
                            Register Now!
                        </UncontrolledTooltip> */}
                    </Media>
                </Media>
            </Container>
        </div>
    )
}

export default Study;