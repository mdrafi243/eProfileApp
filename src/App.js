import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import AppNavbar from './components/AppNavbar'

function App(props) {
  return (
    <div className="App">
      <AppNavbar />
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default App;
