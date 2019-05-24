import React, { useState } from 'react';
import { Badge, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { allAnnouncements } from '../shared/AnnounceDetails';

const RenderAnnounceRow = (props) => {

    const [ oprState, setOprState ] = useState({
        showOpr: false
    });

    const displayOpr = () => {
        setOprState({ showOpr: true });
    }
    const hideOpr = () => {
        setOprState({ showOpr: false });
    }

    const [ modalState, setModalState ] = useState({
        editModal: false
    })
    
    const toggleEditModal = () => {
        const doesShowModal = modalState.editModal;
        setModalState({ editModal: !doesShowModal });
        setOprState({ showOpr: false});
    }

    const [ annoState, setAnnoState ] = useState({
        announcements: allAnnouncements
    });

    let rowOprBtnClass = "d-none";
    
    if (oprState.showOpr) {
        rowOprBtnClass = "admin-table-opr-icon";
    }

    return (
        <tr key={props.announcements.announceId} onMouseOver={displayOpr} onMouseOut={hideOpr} className="admin-table-row">
            <th scope="row" className="align-middle">{props.announcements.sender}</th>
            <td className="admin-table-time align-middle">{props.announcements.createTimeStamp}</td>
            <td className="admin-table-time align-middle">{props.announcements.editTimeStamp}</td>
            <td className="align-middle">
                {props.announcements.isDraft ? <Badge color="danger">Draft</Badge> 
                                             : <Badge color="success">Published</Badge>}
            </td>
            <td className="text-left align-middle">{props.announcements.text}</td>
            <td className="align-middle admin-table-lastColumn">
                <div className="d-flex justify-content-center">
                    <Button color="link" className="admin-table-opr-btn">
                        <FontAwesomeIcon icon={faEdit} className={rowOprBtnClass} onClick={toggleEditModal} />
                    </Button>
                    <Button color="link" className="admin-table-opr-btn">
                        <FontAwesomeIcon icon={faTrashAlt} className={rowOprBtnClass} />
                    </Button>
                </div>
            </td>
            <Modal isOpen={modalState.editModal} toggle={toggleEditModal}>
                <ModalHeader toggle={toggleEditModal}>Edit Announcement</ModalHeader>
                <ModalBody>
                    <h4 className="lato-font bold-font">Announce ID: {props.announcements.announceId}</h4>
                    <p className="blue-font">Announce Text: {props.announcements.text}</p>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={toggleEditModal}>Update</Button>{' '}
                <Button color="secondary" onClick={toggleEditModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </tr>
    )
}

export default RenderAnnounceRow;