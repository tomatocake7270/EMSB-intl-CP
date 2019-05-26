//Temporarily unfinished

import React from 'react'
import { staffInfo } from '../shared/ContactDetails'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const RenderStaffInfo = (props) => {


    const staffEmailAlert = withReactContent(Swal)

    const copyStaffEmail = () => {
        let staffName  = staffInfo.staff0.name
        let staffEmail = staffInfo.staff0.email
        //var text = "Example text to appear on clipboard";
        navigator.clipboard.writeText(staffEmail).then(() => {
            staffEmailAlert.fire({
                type: 'success',
                //title: 'Email address of Ms. Léveillé has copied on your clipboard.',
                html: '<h4>Email address of <b>'+ staffName + '</b></h4><h5>has been copied to clipboard.</h5>',
                showCloseButton: false,
                showCancelButton: false,
                focusConfirm: false,
                showConfirmButton: true,
                width: '40%',
            })
        }, (err) => {
            console.error('Async: Could not copy text: ', err);
        })
    }

    return (
        <span>
            <FontAwesomeIcon icon={ faEnvelope } size="lg" className="contact-icon" onClick={copyStaffEmail} />
            <FontAwesomeIcon icon={ faPhone } size="lg" className="contact-icon" />
        </span>
    )
}

export default RenderStaffInfo;