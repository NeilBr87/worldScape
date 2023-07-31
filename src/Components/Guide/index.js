import React from 'react';
import "./style.css";
import CompassIcon from './CompassIcon.JPG'
import Auto from './Auto.JPG'
import Zoom from './Zoom.JPG'
import Fullscreen from './Fullscreen.JPG'

export default function Guide() {
    return (
        <div className="backgroundPage">
            <div style={{position: 'absolute', top: '50%', left: '50%', transform: "translate(-50%, -50%)", color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.82)', height: '80%', width: '80%', borderRadius: '10px'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'baseline', gap: '10px'}}> 
                    <div style={{width: '450px'}}>
                        <h1>General guide</h1>
                        <p>WorldScape is much simpler than a game. There are no challenges, boss fights or puzzles to solve. Instead, you simply navigate your way around a world through viewing a series of panoramic images with accompanying sound.</p>
                        <p>Start by ensuring your sound is turned up. Follow the start menu through to the worlds.</p>
                        <img src={CompassIcon} alt="compass icon" style={{width: '60px', borderRadius: '10px'}}></img>
                        <p>Click the compass icon to open the navigation menu. This will show you the locations you can visit in the world. Click on a location to view it.</p>
                        <p>Click another location to travel to that location. The audio associated with your location will stop and another will play.</p>
                        <p>Click the compass icon again to close the navigation menu. It can be toggled on and off.</p>
                        <p style={{fontSize: '40px', marginTop: '-2px', marginBottom: '-2px'}}>🔇</p>
                        <p>Clicking this button on your navigation menu will stop all sounds.</p>
                        <p style={{color: 'black'}}>Press the ◀ button on any screen to return to home.</p>
                    </div>
                    <div style={{width: '500px'}}>
                        <h1>Using the panoramas</h1>
                        <p>Click and drag the image to look around. You will be able to go in a full 360 degree motion. There is no 3d imaging to the site though - it's just simulated!</p>
                        <img src={Auto} alt="autobutton" style={{width: '40px', borderRadius: '10px'}}></img>
                        <p>Use this icon on the bottom left of the panoramic screen to autoplay the view. The camera will rotate around slowly until the setting is deactivated or the user navigates to another location.</p>
                        <img src={Zoom} alt="Zoom button" style={{borderRadius: '10px'}}></img>
                        <p>Use this slider to zoom in and out. It is recommended to use the middle setting.</p>
                        <img src={Fullscreen} alt="Fullscreen icon" style={{borderRadius: '10px'}}></img>
                        <p>Click this button to make the panorama fullscreen. You won't be able to use the navigator in this mode.</p>
                    </div>
                    <div style={{width: '450px'}}>
                        <h1>Known issues</h1>
                        <p>There's a certain point in the audio playthrough where it's possible you'll no longer be allowed to stop the particular MP3. It will play over your new choice and won't turn off when you deactivate sound. If this happens, hit the back button. So far, it only seems to affect Totenstadt.</p>
                        <p>If you alternate between locations quickly, there's a small chance one of the sounds will become stuck and will play over your new choice. You will be able to deactivate it using the sound off button, however.</p>
                        <p>These issues aren't, I believe, caused by my code. I think useSound gets quite confused with multiple quick changes, and there's nothing in the settings that would suggest why the first issue is happening.</p>
                    </div>
                </div>
                <a href="/" style={{color: 'black', textDecoration: 'none', fontSize: '60px'}}>◀</a>

            </div>
        </div>
    )
}
