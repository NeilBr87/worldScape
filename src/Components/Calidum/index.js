import React from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import desertplain from './desertplain.jpg';

export default function Calidum() {
 
    return (
        <div id="container" htmlstyle="height:100%" style={{display: 'flex', justifyContent: 'center', marginTop: '1px', backgroundColor: 'black'}}>
            <ReactPhotoSphereViewer src={desertplain} height={'92vh'} width={"98%"}></ReactPhotoSphereViewer>
        </div>
    );
    }