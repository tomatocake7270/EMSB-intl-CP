import React from 'react'
import { Col, Card, CardImg, CardBody, Media } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

//数据输出方，用 props.输出数据名
export const RenderMedia = (props) => {
    return (
        // <Media object src={titleImageUrl.url[url]} alt="Field Trip" className="img-fluid"/>
        <Link to={props.href}>
            <Media className="mx-3">
                <Media body>
                    <Media heading className="mt-2 mr-2">
                        {props.title}
                    </Media> 
                </Media>
                <Media right id="RegistrationTooltip">
                <Media object src={props.url} alt="Field Trip" className="img-fluid"/>
                    {/* <UncontrolledTooltip placement="right" target="RegistrationTooltip">
                        Register Now!
                    </UncontrolledTooltip> */}
                </Media>
            </Media>
        </Link>
    )
}

export const RenderCard = (props) => {
    return (
        <Col md="6" className="my-1">
            <Card className="border rounded">
                <CardImg top width="100%" src={props.imgUrl} alt={props.altText} className="img-fluid"/>
                <CardBody className="bg-primary">
                    <Media>
                        <Media left href="#">
                            <Media object src={props.iconUrl} alt={props.altText} className="img-fluid students-field-trip-icon"/>
                        </Media>
                        <Media body className="ml-2 mt-1">
                            <Media heading>
                                <p className="students-card-heading">{props.heading}</p>
                            </Media>
                            <div className="d-flex justify-content-between">
                                <p className="students-field-trip-location">{props.location}</p>
                                <Link to={`/students/${props.route}`}>
                                    <FontAwesomeIcon icon={props.faIcon} size="lg"/>
                                </Link>
                            </div>
                        </Media>
                    </Media>
                </CardBody>
            </Card>
        </Col>
    )
}

export const RenderStudyCard = (props) => {
    return (
        <Col md="6" className="my-1">
            <Card className="border rounded">
                <CardImg top width="100%" src={props.imgUrl} alt={props.altText} className="img-fluid"/>
                <CardBody className="bg-primary">
                    <Media>
                        <Media left href="#">
                            <Media object src={props.iconUrl} alt={props.altText} className="img-fluid students-field-trip-icon"/>
                        </Media>
                        <Media body className="ml-2 mt-1">
                            <Media heading>
                                <p className="students-card-heading">{props.heading}</p>
                            </Media>
                            <div className="d-flex justify-content-between">
                                <p className="students-field-trip-location">{props.location}</p>
                                <FontAwesomeIcon icon={props.faIcon} size="lg"/>
                            </div>
                        </Media>
                    </Media>
                </CardBody>
            </Card>
        </Col>
    )
}

export const RenderList = (props) => {
    return (
        <Media className="my-2">
            <Media left href={props.linkUrl}>
                <Media object src={props.iconUrl} alt={props.altText} className="img-fluid" />
            </Media>
            <Media heading className="ml-2 mt-3">
                <p>{props.heading}</p>
            </Media>
        </Media>
    )
}
