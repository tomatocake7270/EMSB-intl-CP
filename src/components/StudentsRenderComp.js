import React from 'react'
import { Col, Card, CardImg, CardBody, Media } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

//数据输出方，用 props.输出数据名
export const RenderMedia = (props) => {
    return (
        // <Media object src={titleImageUrl.url[url]} alt="Field Trip" className="img-fluid"/>
        <Media className="mx-3">
            <Media body>
                <Media heading className="mt-2 mr-2">
                    {props.title}
                </Media> 
            </Media>
            <Media right href={props.href} id="RegistrationTooltip">
            <Media object src={props.url} alt="Field Trip" className="img-fluid"/>
                {/* <UncontrolledTooltip placement="right" target="RegistrationTooltip">
                    Register Now!
                </UncontrolledTooltip> */}
            </Media>
        </Media>
    )
}

export const RenderCard = ({ imgUrl, iconUrl, altText, heading }) => {
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
