import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Components/GameSettings/Menu';
import GameSetup from './Pages/GameSetup.js'
import Play from './Pages/Play';
import Navbar from './Components/Navbar';
import Join from './Pages/Join'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <div className='content'>
            <Switch>
              <Route exact path="/" component={Menu} />
              <Route path="/play" component={Play} />
              <Route path="/setup" component={GameSetup} />
              <Route path="/join" component={Join} />
            </Switch>
          </div>
        </header>
      </div >
    </Router >
  );
}

export default App;
