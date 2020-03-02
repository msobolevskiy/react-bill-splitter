import React from 'react';
import './App.css';
import LeftPart from './components/LeftPart/LeftPart';
import RightPart from './components/RightPart/RightPart';

function App(props) {

  return ( 
    <div className = 'app-wrapper' >
      <div className = 'left-part'><LeftPart/></div>
      <div className = 'right-part'><RightPart/></div>
    </div>
  );
}

export default App;