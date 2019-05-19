import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

const SchoolPicker = (props) => {
    return (
        <Col>
            <Link to={`/schools/${props.route}`} > 
                <img src={props.iconUrl} width={props.iconWidth} className="img-fluid" alt={props.name}></img>
            </Link>
        </Col>
    )
}

export default SchoolPicker;