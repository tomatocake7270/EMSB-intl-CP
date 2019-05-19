import React from 'react';
import { Container, Row, Col } from 'reactstrap';
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
                                  name      = {schoolsInfo[0].name} 
                                  iconWidth = {schoolsInfo[0].iconWidth} />
                    <SchoolPicker route     = {schoolsInfo[1].route} 
                                  iconUrl   = {schoolsInfo[1].iconUrl}
                                  name      = {schoolsInfo[1].name}
                                  iconWidth = {schoolsInfo[1].iconWidth}  />
                    <SchoolPicker route     = {schoolsInfo[2].route} 
                                  iconUrl   = {schoolsInfo[2].iconUrl}
                                  name      = {schoolsInfo[2].name}
                                  iconWidth = {schoolsInfo[2].iconWidth}   />
                    <SchoolPicker route     = {schoolsInfo[3].route} 
                                  iconUrl   = {schoolsInfo[3].iconUrl}
                                  name      = {schoolsInfo[3].name}
                                  iconWidth = {schoolsInfo[3].iconWidth}   />
                </Row>
                <Row className="mb-5">
                    <SchoolPicker route     = {schoolsInfo[4].route} 
                                  iconUrl   = {schoolsInfo[4].iconUrl}
                                  name      = {schoolsInfo[4].name}
                                  iconWidth = {schoolsInfo[4].iconWidth}   />
                    <SchoolPicker route     = {schoolsInfo[5].route} 
                                  iconUrl   = {schoolsInfo[5].iconUrl}
                                  name      = {schoolsInfo[5].name}
                                  iconWidth = {schoolsInfo[5].iconWidth}   />
                    <SchoolPicker route     = {schoolsInfo[6].route} 
                                  iconUrl   = {schoolsInfo[6].iconUrl}
                                  name      = {schoolsInfo[6].name}
                                  iconWidth = {schoolsInfo[6].iconWidth}   />
                    <SchoolPicker route     = {schoolsInfo[7].route} 
                                  iconUrl   = {schoolsInfo[7].iconUrl}
                                  name      = {schoolsInfo[7].name}
                                  iconWidth = {schoolsInfo[7].iconWidth}   />
                </Row>
                <Row className="mb-5">
                    <SchoolPicker route     = {schoolsInfo[8].route} 
                                  iconUrl   = {schoolsInfo[8].iconUrl}
                                  name      = {schoolsInfo[8].name}
                                  iconWidth = {schoolsInfo[8].iconWidth}   />
                    <SchoolPicker route     = {schoolsInfo[9].route} 
                                  iconUrl   = {schoolsInfo[9].iconUrl}
                                  name      = {schoolsInfo[9].name}
                                  iconWidth = {schoolsInfo[9].iconWidth}   />
                    <SchoolPicker route     = {schoolsInfo[10].route} 
                                  iconUrl   = {schoolsInfo[10].iconUrl}
                                  name      = {schoolsInfo[10].name}
                                  iconWidth = {schoolsInfo[10].iconWidth}   />
                    <SchoolPicker route     = {schoolsInfo[11].route} 
                                  iconUrl   = {schoolsInfo[11].iconUrl}
                                  name      = {schoolsInfo[11].name}
                                  iconWidth = {schoolsInfo[11].iconWidth}   />
                </Row>
                <Row className="mb-5">
                    <SchoolPicker route     = {schoolsInfo[12].route} 
                                  iconUrl   = {schoolsInfo[12].iconUrl}
                                  name      = {schoolsInfo[12].name}
                                  iconWidth = {schoolsInfo[12].iconWidth}   />
                </Row>
            </Container>
        </div>
    )
}

export default Schools;