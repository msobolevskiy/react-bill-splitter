import React from 'react';
import './App.css';
import LeftPart from './components/LeftPart/LeftPart';
import RightPartContainer from './components/RightPart/RightPartContainer';

function App(props) {

  return ( 
    <div className = 'app-wrapper' >
      <div className = 'left-part'><LeftPart/></div>
      <div className = 'right-part'><RightPartContainer/></div>
    </div>
  );
}

export default App;