import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { titleInfo, cardInfo, listInfo } from '../shared/StudentsDetails';
import { RenderMedia, RenderCard, RenderList } from './StudentsRenderComp';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

function Students() {    
    return(
        <div>
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
            <Container>
                <Row className="my-2">
                    <RenderCard imgUrl  = {cardInfo.ziplining.imgUrl}
                                iconUrl = {cardInfo.ziplining.iconUrl}
                                altText = {cardInfo.ziplining.altText}
                                heading = {cardInfo.ziplining.heading} 
                                headingFont = {cardInfo.ziplining.headingFont}
                                location= {cardInfo.ziplining.location}
                                route   = {cardInfo.ziplining.route}
                                faIcon  = { faMapMarkedAlt } />
                    <RenderCard imgUrl  = {cardInfo.ski.imgUrl}
                                iconUrl = {cardInfo.ski.iconUrl}
                                altText = {cardInfo.ski.altText}
                                heading = {cardInfo.ski.heading} 
                                headingFont = {cardInfo.ski.headingFont}
                                location= {cardInfo.ski.location}
                                route   = {cardInfo.ski.route}
                                faIcon  = { faMapMarkedAlt } />
                    <RenderCard imgUrl  = {cardInfo.qcCity.imgUrl}
                                iconUrl = {cardInfo.qcCity.iconUrl}
                                altText = {cardInfo.qcCity.altText}
                                heading = {cardInfo.qcCity.heading} 
                                headingFont = {cardInfo.qcCity.headingFont}
                                location= {cardInfo.qcCity.location}
                                route   = {cardInfo.qcCity.route}
                                faIcon  = { faMapMarkedAlt } />
                    <RenderCard imgUrl  = {cardInfo.sugarShack.imgUrl}
                                iconUrl = {cardInfo.sugarShack.iconUrl}
                                altText = {cardInfo.sugarShack.altText}
                                heading = {cardInfo.sugarShack.heading} 
                                headingFont = {cardInfo.sugarShack.headingFont}
                                location= {cardInfo.sugarShack.location}
                                route   = {cardInfo.sugarShack.route}
                                faIcon  = { faMapMarkedAlt } />
                </Row> 
            </Container>
            <Container>
                <div className="d-flex justify-content-around my-3 py-2 border rounded">
                    <Row className="my-1">
                        <Col md="auto" className="ml-4">
                            <RenderList iconUrl = {listInfo.fieldTripReg.iconUrl}
                                        altText = {listInfo.fieldTripReg.altText}
                                        heading = {listInfo.fieldTripReg.heading}
                                        linkUrl = {listInfo.fieldTripReg.linkUrl} />
                        </Col>
                        <Col md="auto" className="ml-4">
                            <RenderList iconUrl = {listInfo.fieldTripFAQ.iconUrl}
                                        altText = {listInfo.fieldTripFAQ.altText}
                                        heading = {listInfo.fieldTripFAQ.heading}
                                        linkUrl = {listInfo.fieldTripFAQ.linkUrl} />
                        </Col>                
                    </Row>
                </div>
                
            </Container>
        </div>
    )
}

export default Students;