import React from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import mountains from '../../Components/Fjell/mountains.jpg';
import { useState } from 'react';
import Fantasy from '../Fantasy';
import Paris from './Paris.jpg';
import SciFi from './SciFi.jpg';
import './style.css';

export default function WorldSelector() {
const [fantasy, setFantasy] = useState(false);
const [showChoice, setShowChoice] = useState(true);
const [historical, setHistorical] = useState(false);
const [sciFi, setSciFi] = useState(false);

    function handleFantasy() {
        setShowChoice(false)
        setFantasy(true)
        setHistorical(false)
        setSciFi(false)
    }

    function handleHistorical() {
        setHistorical(!historical)
        setFantasy(false)
    }

    function handleSciFi() {
        setSciFi(!sciFi)
        setFantasy(false)
    }

    return (
        <div>
            {showChoice &&
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', marginTop: '7%'}}>
                <h1 className="primaryText" style={{textAlign: 'center', color: 'white', fontSize: '50px'}}>Choose your world</h1>
                <h3 className="primaryText" style={{textAlign: 'center', color: 'white', marginTop: '-5px', marginBottom: '35px'}}>Drag or play the worldscapes below, then click on its name below to explore.</h3>

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: '50px'}}>

                <div id="fantasyCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <ReactPhotoSphereViewer src={mountains} height={'300px'} width={"350px"}></ReactPhotoSphereViewer>
                    <h2 onClick={handleFantasy}>Fantasy</h2>
                </div>

                <div id="historyCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white'}}>
                    <ReactPhotoSphereViewer src={Paris} height={'300px'} width={"350px"}></ReactPhotoSphereViewer>
                    <h2 onClick={handleHistorical}>Historical</h2>
                    {historical && <h3 className="primaryText" style={{textAlign: 'center', color: 'red', marginTop: '-10px', width: '300px', paddingTop: '10px', paddingBottom: '10px'}}>This world is still under construction! Check back soon.</h3>}
                </div>

                <div id="sciFiCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white'}}>
                    <ReactPhotoSphereViewer src={SciFi} height={'300px'} width={"350px"}></ReactPhotoSphereViewer>
                    <h2 onClick={handleSciFi}>SciFi</h2>
                    {sciFi && <h3 className="primaryText" style={{textAlign: 'center', color: 'red', marginTop: '-10px', width: '300px', paddingTop: '10px', paddingBottom: '10px'}}>This world is still under construction! Check back soon.</h3>}

                </div>

                </div>
                
                </div>}

            {fantasy && <Fantasy />}

        </div>
    );
    }