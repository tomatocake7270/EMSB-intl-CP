import React from 'react';
import RenderAnnnounceTable from './AdminAnnounceRenderComp';
import { allAnnouncements } from '../shared/AnnounceDetails';
import { Table, Form, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const AdminAnnounce = () => {
    
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
                    <div className="border-bottom border-danger admin-tag-activate">
                        <Button color="link" className="admin-tag-btn">
                            <p className="admin-tag-text lato-font bold-font dark-blue-font">All</p>
                        </Button>
                    </div>
                    <div className="border-bottom">
                        <Button color="link" className="admin-tag-btn">
                            <p className="admin-tag-text lato-font light-grey-font">EMSB</p>
                        </Button>
                    </div>
                    <div className="border-bottom">
                        <Button color="link" className="admin-tag-btn">
                            <p className="admin-tag-text lato-font light-grey-font">EMSB International</p>
                        </Button>
                    </div>
                </div>

                {/* Table row */}
                <RenderAnnnounceTable   announceId  = {allAnnouncements[0].announceId}
                                        sender      = {allAnnouncements[0].sender}
                                    createTimeStamp = {allAnnouncements[0].createTimeStamp}
                                    editTimeStamp   = {allAnnouncements[0].editTimpeStamp}
                                        text        = {allAnnouncements[0].text} />
                {/* <Table hover borderless className="admin-right-table text-center">
                    <thead className="border-bottom">
                    <tr>
                        <th className="lato-font bold-font">Sender</th>
                        <th className="lato-font bold-font">Create time</th>
                        <th className="lato-font bold-font">Modified time</th>
                        <th className="lato-font bold-font">Status</th>
                        <th className="lato-font bold-font">Announcement</th>
                        <th className="lato-font bold-font">•••</th>
                    </tr>
                    </thead>
                    <tbody>
                        <RenderAnnnounceTable   sender = {allAnnouncements[0].sender}
                                       createTimeStamp = {allAnnouncements[0].createTimeStamp}
                                       editTimeStamp   = {allAnnouncements[0].editTimpeStamp}
                                                text   = {allAnnouncements[0].text} />
                        {/* Need to use "map" method */}
                    
            </div>
            
        </div>
    )
}

export default AdminAnnounce;