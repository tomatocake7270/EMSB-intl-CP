import React from 'react'
import { Container, Row, Col, Media, Card, CardImg, CardBody } from 'reactstrap';
import { titleInfo, cardInfo } from '../shared/StudentsDetails';
import { RenderMedia, RenderCard } from './StudentsRenderComp';

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
                        <div className="d-flex flex-column align-items-start my-1 py-2 pl-3 border border-primary rounded">
                            
                            <Media className="my-2">
                                <Media left href="#">
                                    <Media object src="/assets/images/studyAssist/study-rosetta-demo.png" alt="Video demos" className="img-fluid" />
                                </Media>
                                <Media heading className="ml-2 mt-3">
                                    <p>View Demo Videos</p>
                                </Media>
                            </Media>
                            <Media className="my-2">
                                <Media left href="#">
                                    <Media object src="/assets/images/studyAssist/study-check-licence.png" alt="Video demos" className="img-fluid" />
                                </Media>
                                <Media heading className="ml-2 mt-3">
                                    <p>Check Your Licence</p>
                                </Media>
                            </Media>
                            <Media className="my-2">
                                <Media left href="#">
                                    <Media object src="/assets/images/studyAssist/study-web.png" alt="Video demos" className="img-fluid" />
                                </Media>
                                <Media heading className="ml-2 mt-3">
                                    <p>Log in from Desktop Version</p>
                                </Media>
                            </Media>
                            <Media className="my-2">
                                <Media left href="#">
                                    <Media object src="/assets/images/studyAssist/study-app-store.png" alt="Video demos" className="img-fluid" />
                                </Media>
                                <Media heading className="ml-2 mt-3">
                                    <p>Download from iOS devices</p>
                                </Media>
                            </Media>
                            <Media className="my-2">
                                <Media left href="#">
                                    <Media object src="/assets/images/studyAssist/study-google-play.png" alt="Video demos" className="img-fluid" />
                                </Media>
                                <Media heading className="ml-2 mt-3">
                                    <p>Download from Android devices</p>
                                </Media>
                            </Media>
                        </div>
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