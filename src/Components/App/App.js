import './App.css';
import React from 'react';
import {useState} from 'react';
import Navigator from '../Navigator';
function App() {

  const [location, setLocation] = useState('');
  const [navShown, setNavShown] = useState(false);
  const [paragraph1, setParagraph1] = useState('');
  const [paragraph2, setParagraph2] = useState('');

  function handleNavigation() {
    setNavShown(!navShown);
  }



  return (
    <div className="App">
      <div id="compassBox" style={{width: '60px', height: '60px', margin: '0 auto', marginTop: '5px', marginBottom: '5px', borderRadius: '10px'}}>
      <img src="https://www.publicdomainpictures.net/pictures/440000/nahled/kompass-navigation-vintage-clipart.png" alt="compass" style={{width: '60px'}} onClick={handleNavigation}></img>
      </div>
      <Navigator id="navigatorView" navShown={navShown} setLocation={setLocation} paragraph1={paragraph1} paragraph2={paragraph2} setParagraph1={setParagraph1} setParagraph2={setParagraph2} />
    </div>
  );
}

export default App;
