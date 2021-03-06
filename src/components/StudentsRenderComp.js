import React from 'react'
import { Col, Card, CardImg, CardBody, Media, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

//数据输出方，用 props.输出数据名 mt-2 mr-2
export const RenderMedia = (props) => {
    return (
        <Link to={props.href}>
            <Media className="mx-3">
                <Media body>
                    <Media heading className={props.class}>
                        {props.title}
                    </Media> 
                </Media>
                <Media right id="RegistrationTooltip">
                <Media object src={props.url} alt="Tag icon" className="students-tag-icon"/>
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
                        <Media left>
                            <Media object src={props.iconUrl} alt={props.altText} className="img-fluid students-field-trip-icon"/>
                        </Media>
                        <Media body className="ml-2 mt-1">
                            <Media heading>
                                <p className={props.headingFont}>{props.heading}</p>
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

export const RenderList = (props) => {
    return (
        <Button color="link" href={props.linkUrl} className="text-decoration-none student-links-text" target="_blank">
            <Media className="my-2">
                <Media left>
                    <Media object src={props.iconUrl} alt={props.altText} className="students-list-icon" />
                </Media>
                <Media heading className="ml-2 mt-3">
                    <p>{props.heading}</p>
                </Media>
            </Media>
        </Button>
    )
}
