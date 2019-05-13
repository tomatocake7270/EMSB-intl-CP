import React from 'react'
import { Container, Row, Col, Media, Card, CardImg, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { titleInfo, cardInfo } from '../shared/StudentsDetails';

// import Students from './StudentsComp';

const RenderMedia = ({href, url, title}) => {
    return (
        // <Media object src={titleImageUrl.url[url]} alt="Field Trip" className="img-fluid"/>
        <Media className="mx-3">
            <Media body>
                <Media heading className="mt-2 mr-2">
                    {title}
                </Media> 
            </Media>
            <Media right href={href} id="RegistrationTooltip">
            <Media object src={url} alt="Field Trip" className="img-fluid"/>
                {/* <UncontrolledTooltip placement="right" target="RegistrationTooltip">
                    Register Now!
                </UncontrolledTooltip> */}
            </Media>
        </Media>
    )
}

const RenderCard = ({ imgUrl, iconUrl, altText, heading }) => {
    return (
        <Col md="6" className="my-1">
            <Card className="border rounded">
                <CardImg top width="100%" src={imgUrl} alt={altText} className="img-fluid"/>
                <CardBody className="bg-success">
                    <Media>
                        <Media left href="#">
                            <Media object src={iconUrl} alt={altText} className="img-fluid students-field-trip-icon"/>
                        </Media>
                        <Media body className="ml-2 mt-1">
                            <Media heading>
                                {heading}
                            </Media>
                            <div className="d-flex justify-content-between">
                                <p className="students-field-trip-location"></p>
                                <FontAwesomeIcon icon={ faInfoCircle } size="lg"/>
                            </div>
                        </Media>
                    </Media>
                </CardBody>
            </Card>
        </Col>
    )
}

function StudentsStudy() {    
    return(
        <div>
            {/* <Students laMian = "I love Ramian so much!" /> */}
            <Container className="my-2 border-bottom border-primary pb-1">
                <div className="d-flex justify-content-center">
                    <RenderMedia title = {titleInfo.fieldTrips.title}
                                 href  = {titleInfo.fieldTrips.href}
                                 url   = {titleInfo.fieldTrips.url.urlDeselected}/>
                    <RenderMedia title = {titleInfo.studyAssist.title}
                                 href  = {titleInfo.studyAssist.href}
                                 url   = {titleInfo.studyAssist.url.urlSelected}/>
                    <RenderMedia title = {titleInfo.healthSupport.title}
                                 href  = {titleInfo.healthSupport.href}
                                 url   = {titleInfo.healthSupport.url.urlDeselected}/>
                
                </div>
            </Container>
            <Container>
                <Row className="my-2">
                    <RenderCard imgUrl  = {cardInfo.rosettaStone.imgUrl}
                                iconUrl = {cardInfo.rosettaStone.iconUrl}
                                altText = {cardInfo.rosettaStone.altText}
                                heading = {cardInfo.rosettaStone.heading} />
                    
                    <Col md="6" className="my-1">
                        <Card>
                            <CardImg top width="100%" src="/assets/images/fieldTrips/ski.jpg" alt="Ski trip" className="img-fluid"/>
                            <CardBody className="bg-primary">
                                
                            </CardBody>
                        </Card>
                    </Col>
                    <RenderCard imgUrl  = {cardInfo.learnQuebec.imgUrl}
                                iconUrl = {cardInfo.learnQuebec.iconUrl}
                                altText = {cardInfo.learnQuebec.altText}
                                heading = {cardInfo.learnQuebec.heading} />
                    <RenderCard imgUrl  = {cardInfo.vitalEnglish.imgUrl}
                                iconUrl = {cardInfo.vitalEnglish.iconUrl}
                                altText = {cardInfo.vitalEnglish.altText}
                                heading = {cardInfo.vitalEnglish.heading} />
                </Row>
            </Container>
        </div>
    )
}

export default StudentsStudy;