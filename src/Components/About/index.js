import React from 'react';

export default function About() {

    return (
        <div className="backgroundPage">
                    <div style={{position: 'absolute', top: '50%', left: '50%', transform: "translate(-50%, -50%)", color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.82)', height: '80%', width: '80%', borderRadius: '10px'}}>

            <h1>About worldScape and its creator</h1>
            <p>worldScape was created by Neil Brooks, an aspiring full-stack developer. Using the revolutionary Skybox AI tool, it's designed to be a proof of concept for a new type of text adventure game, which swaps out simple images for fully 3D-appearing panoramic pictures. </p>
            <p>The idea is to use both these images, and related sound, to make something that feels immersive while still keeping things simple and avoiding having to design an actual 3D world.</p>
            <p>I look forward to adapting worldScape into some actual games, but in the meantime, enjoy this proof of concept!</p>
            <p>If you'd like to contact me or see more of my work, head on over to my <a href="https://neil-brooks-portfolio.netlify.app/"><span style={{fontWeight: 'bold'}}>portfolio</span></a> page</p>
            </div>
        </div>
    );
}