import React from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import golden from './golden.jpg';

export default function Dhahabiun() {
 
    return (
        <div id="container" htmlstyle="height:100%" style={{display: 'flex', justifyContent: 'center', marginTop: '1px', backgroundColor: 'black'}}>
            <ReactPhotoSphereViewer src={golden} height={'92vh'} width={"98%"}></ReactPhotoSphereViewer>
        </div>
    );
    }