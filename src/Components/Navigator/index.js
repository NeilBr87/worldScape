import React from 'react';
import {useState} from 'react';
import Village from '../Village';
import Fjell from '../Fjell';
import Calidum from '../Calidum';
import Meridiem from '../Meridiem';
import Iskale from '../Iskale';
import Totenstadt from '../Totenstadt';
import Dhahabiun from '../Dhahabiun';
import useSound from 'use-sound';
import Wind from './Wind.mp3';
import villageSound from './village.mp3';

import './style.css';

export default function Navigator(props) {
    const [village, setVillage] = useState(false);
    const [fjell, setFjell] = useState(false);
    const [calidum, setCalidum] = useState(false);
    const [meridiem, setMeridiem] = useState(false);
    const [iskalde, setIskalde] = useState(false);
    const [totenstadt, setTotenstadt] = useState(false);
    const [dhahabiun, setDhahabiun] = useState(false);
    const [placeName, setPlaceName] = useState('Your journey begins');
    const [paragraph1, setParagraph1] = useState('Choose your destination below');
    const [paragraph2, setParagraph2] = useState('The entirety of the world of Aether is at your fingertips');

    const [play, { stop: stopPlay, volume }] = useSound(Wind, { volume: 0.8, loop: true });
    const [playVillage, { stop: stopPlayVillage, volume: volumeVillage }] = useSound(villageSound, { volume: 0.5, loop: true });


    function handleAmabilia() {
        stopPlay(); // Stop the currently playing sound
        playVillage();
        setVillage(true);
        setFjell(false);
        setCalidum(false);
        setMeridiem(false);
        setIskalde(false);
        setTotenstadt(false);
        setDhahabiun(false);
        setPlaceName('Amabilia');
        setParagraph1('Amibilia is a small, temperate western region that is mostly dotted with small villages and winding river valleys. It is populated by crop farmers, brewers, and shepherds.');
        setParagraph2('You enter Amibilia by the Low Western Road.');
    }

    function handleFjell() {
        stopPlayVillage() // Stop the village sound
        play(Wind)
        setVillage(false);
        setFjell(true);
        setCalidum(false);
        setMeridiem(false);
        setIskalde(false);
        setTotenstadt(false);
        setDhahabiun(false);
        setPlaceName('Fjell');
        setParagraph1('Fjell is a grand mountain valley in the middle of the continent. The Fjaloth River, which marks the final border between the East and the West, delves underground here. The Arduus Pass that soars above the valley is scenic - but can be slippery.');
        setParagraph2('You cross the river using the Arduus.');
    }

    function handleCalidum() {
        setVillage(false);
        setFjell(false);
        setCalidum(true);
        setMeridiem(false);
        setIskalde(false);
        setTotenstadt(false);
        setDhahabiun(false);
        setPlaceName('Calidum Desert');
        setParagraph1('The Calidum Desert is one of the most open stretches of land in the known world. You can wander for days without seeing so much as another traveller.');
        setParagraph2('You arrive at the Calidum Desert by taking the long Tradewind Road from Fjell.');
    }

    function handleMeridiem() {
        setVillage(false);
        setFjell(false);
        setCalidum(false);
        setMeridiem(true);
        setIskalde(false);
        setTotenstadt(false);
        setDhahabiun(false);
        setPlaceName('Meridiem');
        setParagraph1('Meridiem is the cultural heart of the desert, a vast, sprawling city with miles and miles of souks and market traders. It is a place of science, technology and wealth.');
        setParagraph2('You arrive in Meridiem after a long trek down the Tradewind Road.');
    }

    function handleIskale() {
        setVillage(false);
        setFjell(false);
        setCalidum(false);
        setMeridiem(false);
        setIskalde(true);
        setTotenstadt(false);
        setDhahabiun(false);
        setPlaceName('Iskale');
        setParagraph1('Iskale is the frozen northern heartland of the continent. An icy wasteland set amongst the very tallest of mountains, Iskale has no real civilisation apart from a handful of hunting and logging villages occupied by some of the hardiest frontierspeople alive.');
        setParagraph2('You arrive at a village in Iskale after a long, cold march north of Amabilia.');
    }

    function handleTotenstadt() {
        setVillage(false);
        setFjell(false);
        setCalidum(false);
        setMeridiem(false);
        setIskalde(false);
        setTotenstadt(true);
        setDhahabiun(false);
        setPlaceName('Totenstadt');
        setParagraph1('Totenstadt is one of the largest cities in the middle of the continent, in the darkly forested region of Burkolat. Wanderers traversing from west to east tend to avoid it if they can. Folk tales say that the vast city is run by the undead, or warlocks - or both.');
        setParagraph2('A chilly wind takes you towards Totenstadt from the Arduus Pass.');
    }

    function handleDhahabiun() {
        setVillage(false);
        setFjell(false);
        setCalidum(false);
        setMeridiem(false);
        setIskalde(false);
        setTotenstadt(false);
        setDhahabiun(true);
        setPlaceName('Dhahabiun');
        setParagraph1("Dhahabiun, the Golden Plain, makes up a large portion of the eastern continent. It's a vast, beautiful prairie often undisturbed by human settlement for hundreds of miles.");
        setParagraph2('You arrive in Dhahabiun after passing through the oppressive Burkolat forests and through a greener, more pleasant valley.');
    }
    return (
        <div>
            {props.navShown &&
            <div id="navigationBox" style={{position: 'fixed', left: '35.5%', top: '25%', zIndex: '2', width: '28%', padding: '20px', borderRadius: '10px', boxShadow: '1px 5px 5px rgba(0.5, 1.5, 0.7, 0.7)'}}>
                <h1 style={{marginTop: '-2px'}}>{placeName}</h1>
                <p style={{fontSize: '18px'}}>{paragraph1}</p>
                <p style={{fontSize: '18px'}}>{paragraph2}</p>
                <h2 style={{marginTop: '-10px'}}>Travel</h2>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px', marginTop: '-10px'}}>
                    <button className="travelButtons" style={{padding: '8px', fontSize: '14px', width: '120px', height: '40px'}} onClick={handleAmabilia}>Amabilia</button>
                    <button className="travelButtons" style={{padding: '8px', fontSize: '14px', width: '120px', height: '40px'}} onClick={handleFjell}>Fjell</button>
                    <button className="travelButtons" style={{padding: '8px', fontSize: '14px', width: '120px', height: '40px'}} onClick={handleCalidum}>Calidum Desert</button>
                    <button className="travelButtons" style={{padding: '8px', fontSize: '14px', width: '120px', height: '40px'}} onClick={handleMeridiem}>Meridiem</button>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10px', gap: '10px'}}>
                    <button className="travelButtons" style={{padding: '8px', fontSize: '14px', width: '120px', height: '40px'}} onClick={handleIskale}>Iskale</button>
                    <button className="travelButtons" style={{padding: '8px', fontSize: '14px', width: '120px', height: '40px'}} onClick={handleTotenstadt}>Totenstadt</button>
                    <button className="travelButtons" style={{padding: '8px', fontSize: '14px', width: '120px', height: '40px'}} onClick={handleDhahabiun}>Dhahabiun</button>
                </div>
            </div>}
        
            <div>
                {village ? <Village /> : null}
                {fjell ? <Fjell /> : null}
                {calidum ? <Calidum /> : null}
                {meridiem ? <Meridiem /> : null}
                {iskalde ? <Iskale /> : null}
                {totenstadt ? <Totenstadt /> : null}
                {dhahabiun ? <Dhahabiun /> : null}
            </div>

        </div>
    )
}