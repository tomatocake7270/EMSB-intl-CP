import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { titleInfo, cardInfo, listInfo } from '../shared/StudentsDetails';
import { RenderMedia, RenderCard, RenderList, RenderStudyCard } from './StudentsRenderComp';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


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
                                heading = {cardInfo.rosettaStone.heading} 
                                faIcon  = { faExternalLinkAlt } />
                    
                    <Col md="6" className="my-1">
                        <div className="d-flex flex-column align-items-start my-1 py-2 pl-3 border border-primary rounded">
                            <RenderList iconUrl = {listInfo.rosettaItem1.iconUrl}
                                        altText = {listInfo.rosettaItem1.altText}
                                        heading = {listInfo.rosettaItem1.heading} />
                            <RenderList iconUrl = {listInfo.rosettaItem2.iconUrl}
                                        altText = {listInfo.rosettaItem2.altText}
                                        heading = {listInfo.rosettaItem2.heading} />
                            <RenderList iconUrl = {listInfo.rosettaItem3.iconUrl}
                                        altText = {listInfo.rosettaItem3.altText}
                                        heading = {listInfo.rosettaItem3.heading} />
                            <RenderList iconUrl = {listInfo.rosettaItem4.iconUrl}
                                        altText = {listInfo.rosettaItem4.altText}
                                        heading = {listInfo.rosettaItem4.heading} />
                            <RenderList iconUrl = {listInfo.rosettaItem5.iconUrl}
                                        altText = {listInfo.rosettaItem5.altText}
                                        heading = {listInfo.rosettaItem5.heading} />
                        </div>
                    </Col>
                    <RenderCard imgUrl  = {cardInfo.learnQuebec.imgUrl}
                                iconUrl = {cardInfo.learnQuebec.iconUrl}
                                altText = {cardInfo.learnQuebec.altText}
                                heading = {cardInfo.learnQuebec.heading} 
                                faIcon  = { faExternalLinkAlt } />
                    <RenderCard imgUrl  = {cardInfo.vitalEnglish.imgUrl}
                                iconUrl = {cardInfo.vitalEnglish.iconUrl}
                                altText = {cardInfo.vitalEnglish.altText}
                                heading = {cardInfo.vitalEnglish.heading}
                                faIcon  = { faExternalLinkAlt } />
                </Row>  
            </Container>
        </div>
    )
}

export default StudentsStudy;