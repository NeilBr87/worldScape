import './style.css';
import React from 'react';
import {useState} from 'react';
import Navigator from '../Navigator';
export default function Fantasy() {

  const [location, setLocation] = useState('');
  const [navShown, setNavShown] = useState(false);
  const [paragraph1, setParagraph1] = useState('');
  const [paragraph2, setParagraph2] = useState('');
  const [showGuide, setShowGuide] = useState(true);

  function handleNavigation() {
    setNavShown(!navShown);
    setShowGuide(false)
  }



  return (
    <div className="App">
      <div id="compassBox" style={{width: '60px', height: '60px', margin: '0 auto', marginTop: '5px', marginBottom: '5px', borderRadius: '10px'}}>
      <img src="https://www.publicdomainpictures.net/pictures/440000/nahled/kompass-navigation-vintage-clipart.png" alt="compass" style={{width: '60px'}} onClick={handleNavigation}></img>
      </div>
        {showGuide &&
            <div id="navigationBox" style={{position: 'fixed', left: '34.5%', top: '25%', zIndex: '2', width: '28%', padding: '20px', borderRadius: '10px', boxShadow: '1px 5px 5px rgba(0.5, 1.5, 0.7, 0.7)'}}>
            <h1>Welcome to the world of Aether</h1>
            <h3 style={{fontWeight: 'normal', fontSize: '25px'}}>You will explore its main continent as a curious traveller and pilgrim along the roads. This is a world of magic and of strange, unknown gods.</h3>
            <h3 style={{fontWeight: 'normal', fontSize: '25px'}}>Click the icon above to open the navigation menu and begin your journey.</h3>
        </div>}

      <Navigator id="navigatorView" navShown={navShown} setLocation={setLocation} paragraph1={paragraph1} paragraph2={paragraph2} setParagraph1={setParagraph1} setParagraph2={setParagraph2} />
    </div>
  );
}
