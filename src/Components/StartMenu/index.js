import React from 'react';
import {useState} from 'react';
import WorldSelector from '../WorldSelector';
import Credits from '../Credits';

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

    function handleCredits() {
        setShowMenu(false);
        setCredits(true);
    }

    return (
        <div>
            {showMenu &&
            <div style={{color: 'white'}}>
                <h1 className="primaryText">worldScape</h1>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '30px', marginTop: '2%'}}>
                <h1 onClick={handleStart} className="primaryText" style={{fontSize: '42px', border: '8px ridge red', width: '250px', padding: '10px', borderRadius: '10px', backgroundColor: 'rgb(0, 0, 0)', color: 'red'}}>Start</h1>
                <h1 className="primaryText" style={{fontSize: '42px', border: '8px ridge white', width: '250px', padding: '10px', borderRadius: '10px', backgroundColor: 'rgb(255, 0, 0)', color: 'white'}}>Guide</h1>
                <h1 className="primaryText" style={{fontSize: '42px', border: '8px ridge white', width: '250px', padding: '10px', borderRadius: '10px', backgroundColor: 'rgb(0, 0, 0)', color: 'white'}}>About</h1>
                <h1 onClick={handleCredits} className="primaryText" style={{fontSize: '42px', border: '8px ridge red', width: '250px', padding: '10px', borderRadius: '10px', backgroundColor: 'rgb(0, 0, 255)', color: 'red'}}>Credits</h1>
                </div>
            </div>}

            <div>
                {start ? <WorldSelector /> : null}
                {credits ? <Credits /> : null}
            </div>

        </div>
    )
}