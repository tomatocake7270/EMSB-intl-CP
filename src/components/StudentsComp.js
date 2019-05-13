import React from 'react';
import { Container, Row, Col, Media, Card, CardImg, CardBody, UncontrolledTooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { titleInfo } from '../shared/StudentsDetails';

// const Students = () => {
//     return (
//         <p>I love cats!</p>
//     )
// }

const RenderMedia = ({href, url, title}) => {
    return (
        <Media className="mx-3">
            <Media body>
                <Media heading className="mt-2 mr-2">
                    {title}
                </Media> 
            </Media>
            <Media right href={href} id="RegistrationTooltip">
            <Media object src={url} alt={title} className="img-fluid"/>
                {/* <UncontrolledTooltip placement="right" target="RegistrationTooltip">
                    Register Now!
                </UncontrolledTooltip> */}
            </Media>
        </Media>
    )
}

function Students(props) {    
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
            <h1>{props.laMian}</h1>  
            {/* 这里用 props 做一个模板，在新的页面生成依据 props 后变量改变的 render 是结果 */}
            <Container>
                <Row className="my-2">
                    <Col md="6" className="my-1">
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
                    </Col>
                    <Col md="6" className="my-1">
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
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Students;