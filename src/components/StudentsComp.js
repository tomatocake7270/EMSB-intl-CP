import React from 'react';
import { Container, Row, Col, Media, Card, CardImg, CardBody, UncontrolledTooltip } from 'reactstrap';
import { titleInfo, cardInfo, listInfo } from '../shared/StudentsDetails';
import { RenderMedia, RenderCard, RenderList } from './StudentsRenderComp';

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
                </Row> 
            </Container>
            <Container>
                <div className="d-flex justify-content-around my-3 py-2 border border-primary rounded">
                    <Row className="my-1">
                        <Col md="auto" className="ml-4">
                            <RenderList iconUrl = {listInfo.fieldTripReg.iconUrl}
                                        altText = {listInfo.fieldTripReg.altText}
                                        heading = {listInfo.fieldTripReg.heading} />
                        </Col>
                        <Col md="auto" className="ml-4">
                            <RenderList iconUrl = {listInfo.fieldTripFAQ.iconUrl}
                                        altText = {listInfo.fieldTripFAQ.altText}
                                        heading = {listInfo.fieldTripFAQ.heading} />
                        </Col>                
                    </Row>
                </div>
                
            </Container>
        </div>
    )
}

export default Students;