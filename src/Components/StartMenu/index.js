import React from 'react';
import {useState} from 'react';
import WorldSelector from '../WorldSelector';
import Credits from '../Credits';
import Guide from '../Guide';
import About from '../About';
import './style.css';

export default function StartMenu() {
    const [showMenu, setShowMenu] = useState(true);
    const [start, setStart] = useState(false);
    const [guide, setGuide] = useState(false);
    const [about, setAbout] = useState(false);
    const [credits, setCredits] = useState(false);

    function handleStart() {
        setShowMenu(false);
        setStart(true);
    }

    function handleGuide() {
        setShowMenu(false);
        setGuide(true);
    }

    function handleAbout() {
        setShowMenu(false);
        setAbout(true);
    }

    function handleCredits() {
        setShowMenu(false);
        setCredits(true);
    }

    return (
        <div>
            {showMenu &&
            <div className="backgroundPage">
            <div style={{position: 'absolute', top: '50%', left: '50%', transform: "translate(-50%, -50%)", color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.82)', height: '80%', width: '80%', borderRadius: '10px'}}>
                <h1 style={{fontSize: '60px', marginTop: '5%', color: 'white', textShadow: '-3px -3px 0 black, 3px -3px 0 black, -3px 3px 0 black, 3px 3px 0 black'}}>worldScape</h1>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '30px', marginTop: '2%'}}>
                        <h1 style={{cursor: 'pointer'}} onClick={handleStart} >Start</h1>
                        <h1 style={{cursor: 'pointer'}} onClick={handleGuide} >Guide</h1>
                        <h1 style={{cursor: 'pointer'}} onClick={handleAbout}>About</h1>
                        <h1 style={{cursor: 'pointer'}} onClick={handleCredits}>Credits</h1>
                    </div>
            </div>
            </div>}

            <div>
                {start ? <WorldSelector /> : null}
                {guide ? <Guide /> : null}
                {about ? <About /> : null}
                {credits ? <Credits /> : null}
            </div>

        </div>
    )
}