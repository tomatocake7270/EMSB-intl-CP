import React from 'react';

//Staff detail dropdown
export const RenderStaffDropdown = (props) => {
    return (
        <div className="d-flex flex-column align-items-start text-left border mb-2 pl-2 pt-2 rounded">
            <h5 className="border-bottom border-info">Post description</h5>
            <div className="d-flex flex-wrap mb-2">
                {props.post}
            </div>
            <h5 className="border-bottom border-info">Schools in charge</h5>
            <div className="d-flex flex-wrap mb-2" id={props.id}>
                {props.schools}
            </div>
            <h5 className="border-bottom border-info">Phone number</h5>
            <p>{props.phone}</p>
            <h5 className="border-bottom border-info">Email</h5>
            <p>{props.email}</p>
        </div>
    )
}
