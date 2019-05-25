import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { titleInfo, cardInfo, listInfo } from '../shared/StudentsDetails';
import { RenderMedia, RenderCard, RenderList } from './StudentsRenderComp';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function StudentsHealth() {
    return(
        <div>
            <Container className="my-2 border-bottom border-primary pb-1">
                <div className="d-flex justify-content-center">
                    <RenderMedia title = {titleInfo.fieldTrips.title}
                                 href  = {titleInfo.fieldTrips.href}
                                 url   = {titleInfo.fieldTrips.url.urlDeselected}
                                 class = {titleInfo.headingClass.classDeselected}/>
                    <RenderMedia title = {titleInfo.studyAssist.title}
                                 href  = {titleInfo.studyAssist.href}
                                 url   = {titleInfo.studyAssist.url.urlDeselected}
                                 class = {titleInfo.headingClass.classDeselected}/>
                    <RenderMedia title = {titleInfo.healthSupport.title}
                                 href  = {titleInfo.healthSupport.href}
                                 url   = {titleInfo.healthSupport.url.urlSelected}
                                 class = {titleInfo.headingClass.classSelected}/>
                </div>
            </Container>
            <Container>
                <Row className="my-2">
                    <RenderCard imgUrl  = {cardInfo.guardMe.imgUrl}
                                iconUrl = {cardInfo.guardMe.iconUrl}
                                altText = {cardInfo.guardMe.altText}
                                heading = {cardInfo.guardMe.heading}
                                headingFont= {cardInfo.guardMe.headingFont}
                                location= {cardInfo.guardMe.location}
                                faIcon  = { faExternalLinkAlt } />
                    <Col md="6" className="my-1">
                        <div className="d-flex flex-column align-items-start my-1 py-2 pl-3 border rounded">
                            <RenderList iconUrl = {listInfo.guardMeItem1.iconUrl}
                                        altText = {listInfo.guardMeItem1.altText}
                                        heading = {listInfo.guardMeItem1.heading} />
                            <RenderList iconUrl = {listInfo.guardMeItem2.iconUrl}
                                        altText = {listInfo.guardMeItem2.altText}
                                        heading = {listInfo.guardMeItem2.heading} />
                        </div>
                    </Col>
                    <RenderCard imgUrl  = {cardInfo.keepMeSafe.imgUrl}
                                iconUrl = {cardInfo.keepMeSafe.iconUrl}
                                altText = {cardInfo.keepMeSafe.altText}
                                heading = {cardInfo.keepMeSafe.heading}
                                headingFont= {cardInfo.keepMeSafe.headingFont}
                                location= {cardInfo.keepMeSafe.location}
                                faIcon  = { faExternalLinkAlt } />
                    <Col md="6" className="my-1">
                        <div className="d-flex flex-column align-items-start my-1 py-2 pl-3 border rounded">
                            <RenderList iconUrl = {listInfo.keepMeSafeItem1.iconUrl}
                                        altText = {listInfo.keepMeSafeItem1.altText}
                                        heading = {listInfo.keepMeSafeItem1.heading} />
                            <RenderList iconUrl = {listInfo.keepMeSafeItem2.iconUrl}
                                        altText = {listInfo.keepMeSafeItem2.altText}
                                        heading = {listInfo.keepMeSafeItem2.heading} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StudentsHealth;