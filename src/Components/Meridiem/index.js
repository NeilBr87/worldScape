import React from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import desertcity from './desertcity.jpg';

export default function Meridiem() {
 
    return (
        <div id="container" htmlstyle="height:100%" style={{display: 'flex', justifyContent: 'center', marginTop: '1px', backgroundColor: 'black'}}>
            <ReactPhotoSphereViewer src={desertcity} height={'92vh'} width={"98%"}></ReactPhotoSphereViewer>
        </div>
    );
    }