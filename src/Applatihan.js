import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
    <Message/>
      {/* <Greet name="Bangsat" heroName="batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Anjas" heroName="Superman">
        <p>cek</p>
      </Greet>
      <Welcome name="Anjas" heroName="Superman"/>
      <Welcome name="Bangsat" heroName="batman"/> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
