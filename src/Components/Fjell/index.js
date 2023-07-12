import React from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import mountains from './mountains.jpg';

export default function Fjell() {
 
    return (
        <div id="container" htmlstyle="height:100%" style={{display: 'flex', justifyContent: 'center', marginTop: '1px', backgroundColor: 'black'}}>
            <ReactPhotoSphereViewer src={mountains} height={'92vh'} width={"98%"}></ReactPhotoSphereViewer>
        </div>
    );
    }