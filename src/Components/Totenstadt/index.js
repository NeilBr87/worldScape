import React from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import totenstadt from './totenstadt.jpg';

export default function Totenstadt() {
 
    return (
        <div id="container" htmlstyle="height:100%" style={{display: 'flex', justifyContent: 'center', marginTop: '1px', backgroundColor: 'black'}}>
            <ReactPhotoSphereViewer src={totenstadt} height={'92vh'} width={"98%"}></ReactPhotoSphereViewer>
        </div>
    );
    }