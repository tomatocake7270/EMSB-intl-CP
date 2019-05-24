import React, { useState } from 'react';
import { Badge, Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const RenderAnnounceTable = (props) => {

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
    }

    //let RowOperation = null;
    let rowOprBtnClass = "d-none";
    
    if (oprState.showOpr) {
        rowOprBtnClass = "admin-table-opr-icon";
    }

    // TODO: test isDraft -> Badge

    return (
        <div>
            <Table hover borderless className="admin-right-table text-center">
                <thead className="border-bottom">
                <tr>
                    <th className="admin-table-header">Sender</th>
                    <th className="admin-table-header">Create time</th>
                    <th className="admin-table-header">Modified time</th>
                    <th className="admin-table-header">Status</th>
                    <th className="admin-table-header">Announcement</th>
                    <th className="admin-table-header">•••&nbsp;&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                    <tr onMouseOver={displayOpr} onMouseOut={hideOpr}>
                        <th scope="row">{props.sender}</th>
                        <td><p className="admin-table-time">{props.createTimeStamp}</p></td>
                        <td><p className="admin-table-time">{props.editTimeStamp}</p></td>
                        <td><Badge color="danger">Draft</Badge></td>
                        <td className="text-left">{props.text}</td>
                        <td className="d-flex justify-content-center admin-table-lastColumn">
                            <Button color="link" className="admin-table-opr-btn">
                                <FontAwesomeIcon icon={faEdit} className={rowOprBtnClass} onClick={toggleEditModal} />
                            </Button>
                            <Button color="link" className="admin-table-opr-btn">
                                <FontAwesomeIcon icon={faTrashAlt} className={rowOprBtnClass} />
                            </Button>
                        </td>
                    </tr>
                    <Modal isOpen={modalState.editModal} toggle={toggleEditModal}>
                        <ModalHeader toggle={toggleEditModal}>Edit Announcement</ModalHeader>
                        <ModalBody>
                            <h4 className="lato-font bold-font">Announce ID: {props.announceId}</h4>
                            <p className="blue-font">Announce Text: {props.text}</p>
                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" onClick={toggleEditModal}>Update</Button>{' '}
                        <Button color="secondary" onClick={toggleEditModal}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </tbody>
            </Table>
        </div>
      
      
    )
}

export default RenderAnnounceTable; 