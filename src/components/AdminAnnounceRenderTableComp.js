import React from 'react';
import { allAnnouncements } from '../shared/AnnounceDetails';
import RenderAnnounceRow from './AdminAnnounceRenderComp';


const RenderAnnounceTable = () => {
    return (
        allAnnouncements.map(RenderAnnounceRow)
    )
}

export default RenderAnnounceTable;