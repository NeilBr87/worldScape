import React from 'react';
import "./style.css";
import CompassIcon from './CompassIcon.JPG'

export default function Guide() {
    return (
        <div className="backgroundPage">
            <div style={{position: 'absolute', top: '50%', left: '50%', transform: "translate(-50%, -50%)", color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.82)', height: '80%', width: '80%', borderRadius: '10px'}}>
                <h1>Guide</h1>
                <p>WorldScape is much simpler than a game. There are no challenges, boss fights or puzzles to solve. Instead, you simply navigate your way around a world through viewing a series of panoramic images with accompanying sound.</p>
                <p>Start by ensuring your sound is turned up. Follow the start menu through to the worlds.</p>
                <img src={CompassIcon} alt="compass icon" style={{width: '60px', borderRadius: '10px'}}></img>
                <p>Click the compass icon to open the navigation menu. This will show you the locations you can visit in the world. Click on a location to view it.</p>
                <p>Click another location to travel to that location. The audio associated with your location will stop and another will play.</p>
                <p>Click the compass icon again to close the navigation menu. It can be toggled on and off.</p>
                <p style={{fontSize: '40px', marginTop: '-2px', marginBottom: '-2px'}}>🔇</p>
                <p>Clicking this button on your navigation menu will stop all sounds.</p>
            </div>
        </div>
    )
}
