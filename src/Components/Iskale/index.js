import React from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import frozen from './frozen.jpg';

export default function Iskale() {
 
    return (
        <div id="container" htmlstyle="height:100%" style={{display: 'flex', justifyContent: 'center', marginTop: '1px', backgroundColor: 'black'}}>
            <ReactPhotoSphereViewer src={frozen} height={'92vh'} width={"98%"}></ReactPhotoSphereViewer>
        </div>
    );
    }