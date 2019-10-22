import React from 'react';
import logoBlaBlaBla from './logo.svg';
import './App.css';
import CustomBtn from './components/CustomBtn';

let appId = 'app1';


function App() {
  return (
      <React.Fragment>
        <CustomBtn name={'afwafw'} />
        <div className="App-main" id={appId}>
          <header className="App-header">
            <img src={logoBlaBlaBla} className="App-logo" alt="logo" />
          </header>
        </div>
      </React.Fragment>
  );
}

export default App;
