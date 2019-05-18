import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import SchoolEMSBCal from './SchoolEMSBCalComp';
import SchoolPicker from './SchoolBadgesRenderComp';
import { schoolsInfo } from '../shared/SchoolDetails';

const Schools = () => {
    return(
        <div className="text-center">
            <SchoolEMSBCal />

            <Container className="my-4">                
                <Row className="my-5">
                    <SchoolPicker route     = {schoolsInfo[0].route} 
                                  iconUrl   = {schoolsInfo[0].iconUrl}
                                  name      = {schoolsInfo[0].name} />
                    <SchoolPicker route     = {schoolsInfo[1].route} 
                                  iconUrl   = {schoolsInfo[1].iconUrl}
                                  name      = {schoolsInfo[1].name} />
                    <SchoolPicker route     = {schoolsInfo[2].route} 
                                  iconUrl   = {schoolsInfo[2].iconUrl}
                                  name      = {schoolsInfo[2].name} />
                    <SchoolPicker route     = {schoolsInfo[3].route} 
                                  iconUrl   = {schoolsInfo[3].iconUrl}
                                  name      = {schoolsInfo[3].name} />
                </Row>
                <Row className="mb-5">
                    <SchoolPicker route     = {schoolsInfo[4].route} 
                                  iconUrl   = {schoolsInfo[4].iconUrl}
                                  name      = {schoolsInfo[4].name} />
                    <SchoolPicker route     = {schoolsInfo[5].route} 
                                  iconUrl   = {schoolsInfo[5].iconUrl}
                                  name      = {schoolsInfo[5].name} />
                    <SchoolPicker route     = {schoolsInfo[6].route} 
                                  iconUrl   = {schoolsInfo[6].iconUrl}
                                  name      = {schoolsInfo[6].name} />
                    <SchoolPicker route     = {schoolsInfo[7].route} 
                                  iconUrl   = {schoolsInfo[7].iconUrl}
                                  name      = {schoolsInfo[7].name} />
                </Row>
                <Row className="mb-5">
                    <SchoolPicker route     = {schoolsInfo[8].route} 
                                  iconUrl   = {schoolsInfo[8].iconUrl}
                                  name      = {schoolsInfo[8].name} />
                    <SchoolPicker route     = {schoolsInfo[9].route} 
                                  iconUrl   = {schoolsInfo[9].iconUrl}
                                  name      = {schoolsInfo[9].name} />
                    <SchoolPicker route     = {schoolsInfo[10].route} 
                                  iconUrl   = {schoolsInfo[10].iconUrl}
                                  name      = {schoolsInfo[10].name} />
                    <SchoolPicker route     = {schoolsInfo[11].route} 
                                  iconUrl   = {schoolsInfo[11].iconUrl}
                                  name      = {schoolsInfo[11].name} />
                </Row>
                <Row className="mb-5">
                    <Col>
                        <img src="assets/images/schoolLogos/RWA.jpg" width="240px" className="img-fluid" alt="Royal West Academy"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Schools;