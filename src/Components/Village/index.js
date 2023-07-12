import React from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import village from './village.jpg';

export default function Village() {
 
    return (
        <div id="container" htmlstyle="height:100%" style={{display: 'flex', justifyContent: 'center', marginTop: '1px', backgroundColor: 'black'}}>
            <ReactPhotoSphereViewer src={village} height={'92vh'} width={"98%"}></ReactPhotoSphereViewer>
        </div>
    );
    }