import React, { useState } from 'react';
import RenderAnnounceRow from './AdminAnnounceRenderComp';
import { allAnnouncements } from '../shared/AnnounceDetails';
import { Table, Form, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';


const AdminAnnounce = () => {

    const [ rowState, setRowState ] = useState({
        showAllRows: true,
        showEmsbRows: false,
        showEmsbIntlRows: false
    })

    const [ tagClassState, setTagClassState ] = useState({
        tag1Class: "admin-tag-text-active",
        tag2Class: "admin-tag-text",
        tag3Class: "admin-tag-text",
        tag1Border: "border-bottom border-danger",
        tag2Border: "border-bottom",
        tag3Border: "border-bottom",
    })
    

    // Display all anno
    const setAllRows = () => {
        setTagClassState({
            tag1Class: "admin-tag-text-active",
            tag2Class: "admin-tag-text",
            tag3Class: "admin-tag-text",
            tag1Border: "border-bottom border-danger",
            tag2Border: "border-bottom",
            tag3Border: "border-bottom",
        })
        setRowState({ 
            showAllRows: true,
            showEmsbRows: false,
            showEmsbIntlRows: false
        })
    }
    const [ annoState ] = useState({
        announcements: allAnnouncements
    })    

    const allRows = annoState.announcements.map(anno => {
        return (
            <RenderAnnounceRow  key = {anno.announceId}
                                announcements = {anno} />
        )
    })

    // Filter EMSB anno
    const [ emsbState, setEmsbState ] = useState({
        emsbAnnounces: []
    })

    const emsbFilter = annoState.announcements.filter(anno => {
        return anno.sender === "EMSB"
    })

    const setEmsbRows = () => {
        setEmsbState({ emsbAnnounces: emsbFilter })
        setTagClassState({
            tag1Class: "admin-tag-text",
            tag2Class: "admin-tag-text-active",
            tag3Class: "admin-tag-text",
            tag1Border: "border-bottom",
            tag2Border: "border-bottom border-danger",
            tag3Border: "border-bottom",
        })
        setRowState({ 
            showAllRows: false,
            showEmsbRows: true,
            showEmsbIntlRows: false
        })
    }
    
    const emsbRows = emsbState.emsbAnnounces.map(anno => {
        return (
            <RenderAnnounceRow  key = {anno.announceId}
                                announcements = {anno} />
        )
    })

    //Filter EMSB-intl anno
    const [ emsbIntlState, setEmsbIntlState ] = useState({
        esmbIntlAnnounces: []
    })
    
    const emsbIntlFilter = annoState.announcements.filter(anno => {
        return anno.sender === "EMSB-Intl"
    })

    const setEmsbIntlRows = () => {
        setEmsbIntlState({ esmbIntlAnnounces: emsbIntlFilter })
        setTagClassState({
            tag1Class: "admin-tag-text",
            tag2Class: "admin-tag-text",
            tag3Class: "admin-tag-text-active",
            tag1Border: "border-bottom",
            tag2Border: "border-bottom",
            tag3Border: "border-bottom border-danger",
        })
        setRowState({ 
            showAllRows: false,
            showEmsbRows: false,
            showEmsbIntlRows: true
        })
    }

    const emsbIntlRows = emsbIntlState.esmbIntlAnnounces.map(anno => {
        return (
            <RenderAnnounceRow key = {anno.announceId}
                               announcements = {anno} />
        )
    })

    let tableRows = null;
    
    if (rowState.showAllRows) {
        tableRows = allRows
    } else if (rowState.showEmsbRows) {
        tableRows = emsbRows
    } else if (rowState.showEmsbIntlRows) {
        tableRows = emsbIntlRows
    }

    
    return (
        <div className="admin-content d-flex justify-content-start">
            {/* Left section */}
            <div className="admin-left d-flex flex-column align-items-center my-3">
                <Button href="/home" color="link" className="admin-left-button">
                    <img src="/assets/images/EMSB-intl-logo.png" alt="Back to EMSB Intl" className="admin-big-logo" />
                </Button>
                <Button color="link" className="admin-left-button">
                    <img src="/assets/images/admin/admin-login.png" alt="Plz log in" className="admin-big-logo" />
                </Button>
                <Button color="link" href="/home" className="mt-auto ml-1 mb-3">Log out</Button>
            </div>
            
            {/* Right section */}
            <div className="admin-right d-flex flex-column align-items-between">
                
                {/* Title row */}
                <div className="d-flex justify-content-between">
                    <h1 className="admin-right-title dark-blue-font">Announcements</h1>
                    <div className="d-flex justify-content-around ml-auto mr-1">
                        <Form>
                            <Input placeholder="search" className="admin-search-bar" />
                            <Button color="link" className="admin-search-btn">
                                <FontAwesomeIcon icon={faSearch} className="admin-search-icon" />
                            </Button>
                        </Form>
                        <Button color="danger" className="admin-new-btn">
                            <FontAwesomeIcon icon={faPlus} size="lg" className="admin-new-icon" />
                        </Button>
                    </div>
                </div>

                {/* Tabs row */}
                <div className="d-flex justify-content-start admin-right-tags">
                    <div className={tagClassState.tag1Border}>
                        <Button color="link" className="admin-tag-btn text-decoration-none" onClick={setAllRows}>
                            <p className={tagClassState.tag1Class}>All</p>
                        </Button>
                    </div>
                    <div className={tagClassState.tag2Border}>
                        <Button color="link" className="admin-tag-btn text-decoration-none" onClick={setEmsbRows}>
                            <p className={tagClassState.tag2Class}>EMSB</p>
                        </Button>
                    </div>
                    <div className={tagClassState.tag3Border}>
                        <Button color="link" className="admin-tag-btn text-decoration-none" onClick={setEmsbIntlRows}>
                            <p className={tagClassState.tag3Class}>EMSB International</p>
                        </Button>
                    </div>
                </div>

                {/* Table row */}
                <Table hover borderless className="admin-right-table text-center">
                    <thead className="border-bottom">
                    <tr>
                        <th className="admin-table-header">Sender</th>
                        <th className="admin-table-header">Created</th>
                        <th className="admin-table-header">Modified</th>
                        <th className="admin-table-header">Status</th>
                        <th className="admin-table-header">Announcement</th>
                        <th className="admin-table-header admin-table-lastColumn">•••&nbsp;&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default AdminAnnounce;