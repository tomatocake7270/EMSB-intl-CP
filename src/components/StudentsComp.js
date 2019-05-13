import React from 'react';
import { Container, Row, Col, Media, Card, CardImg, CardBody, UncontrolledTooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { titleInfo, cardInfo } from '../shared/StudentsDetails';
import { RenderMedia, RenderCard } from './StudentsRenderComp';

function Students() {    
    return(
        <div>
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
            <Container>
                <Row className="my-2">
                    {/* <Col md="6" className="my-1">
                        <Card className="border rounded">
                            <CardImg top width="100%" src="/assets/images/fieldTrips/ziplining.jpg" alt="Ziplining trip" className="img-fluid"/>
                            <CardBody className="bg-success">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/fieldTrips/ziplining-bg.png" alt="Ziplining icon" className="img-fluid students-field-trip-icon"/>
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <Media heading>
                                            Abraska Ziplining
                                        </Media>
                                        <div className="d-flex justify-content-between">
                                            <p className="students-field-trip-location">Marieville, Québec</p>
                                            <FontAwesomeIcon icon={ faInfoCircle } size="lg"/>
                                        </div>
                                    </Media>
                                </Media>
                            </CardBody>
                        </Card>
                    </Col> */}
                    <RenderCard imgUrl  = {cardInfo.ziplining.imgUrl}
                                iconUrl = {cardInfo.ziplining.iconUrl}
                                altText = {cardInfo.ziplining.altText}
                                heading = {cardInfo.ziplining.heading} 
                                location= {cardInfo.ziplining.location} />
                    <RenderCard imgUrl  = {cardInfo.ski.imgUrl}
                                iconUrl = {cardInfo.ski.iconUrl}
                                altText = {cardInfo.ski.altText}
                                heading = {cardInfo.ski.heading} 
                                location= {cardInfo.ski.location} />
                    <RenderCard imgUrl  = {cardInfo.qcCity.imgUrl}
                                iconUrl = {cardInfo.qcCity.iconUrl}
                                altText = {cardInfo.qcCity.altText}
                                heading = {cardInfo.qcCity.heading} 
                                location= {cardInfo.qcCity.location} />
                    <RenderCard imgUrl  = {cardInfo.sugarShack.imgUrl}
                                iconUrl = {cardInfo.sugarShack.iconUrl}
                                altText = {cardInfo.sugarShack.altText}
                                heading = {cardInfo.sugarShack.heading} 
                                location= {cardInfo.sugarShack.location} />
                    {/* <Col md="6" className="my-1">
                        <Card>
                            <CardImg top width="100%" src="/assets/images/fieldTrips/ski.jpg" alt="Ski trip" className="img-fluid"/>
                            <CardBody className="bg-primary">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/fieldTrips/ski-bg.png" alt="Ski icon" className="img-fluid students-field-trip-icon"/>
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <Media heading>
                                            Ski and Snowboarding
                                        </Media>
                                        <div className="d-flex justify-content-between">
                                            <p className="students-field-trip-location">Mont Rinaud, Québec</p>
                                            <FontAwesomeIcon icon={ faInfoCircle } size="lg"/>
                                        </div>
                                    </Media>
                                </Media>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6" className="my-1">
                        <Card >
                            <CardImg top width="100%" src="/assets/images/fieldTrips/qc-city.jpg" alt="Quebec City trip" className="img-fluid"/>
                            <CardBody className="bg-secondary">
                                <Media>
                                    <Media left href="#" className="mt-1">
                                        <Media object src="/assets/images/fieldTrips/qc-city-bg.png" alt="Quebec City icon" className="img-fluid students-field-trip-icon"/>
                                    </Media>
                                    <Media body className="ml-2 mt-2">
                                        <Media heading className="students-field-trip-small-title">
                                            Québec City and Ice Hotel
                                        </Media>
                                        <div className="d-flex justify-content-between">
                                            <p className="students-field-trip-location">Québec City, Québec</p>
                                            <FontAwesomeIcon icon={ faInfoCircle } size="lg"/>
                                        </div>
                                    </Media>
                                </Media>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6" className="my-1">
                        <Card>
                            <CardImg top width="100%" src="/assets/images/fieldTrips/sugar-shack.jpg" alt="Sugar Shack trip" className="img-fluid"/>
                            <CardBody className="bg-warning">
                                <Media>
                                    <Media left href="#">
                                        <Media object src="/assets/images/fieldTrips/sugar-shack-bg.png" alt="Sugar Shack icon" className="img-fluid students-field-trip-icon"/>
                                    </Media>
                                    <Media body className="ml-2 mt-1">
                                        <Media heading>
                                            Sugar Shack
                                        </Media>
                                        <div className="d-flex justify-content-between">
                                            <p className="students-field-trip-location">Sucrie de la Montagne, Québec</p>
                                            <FontAwesomeIcon icon={ faInfoCircle } size="lg"/>
                                        </div>
                                    </Media>
                                </Media>
                            </CardBody>
                        </Card>
                    </Col>*/}
                </Row> 
            </Container>
            
        </div>
    )
}

export default Students;