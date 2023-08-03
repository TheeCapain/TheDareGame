import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Components/GameSettings/Menu';
import Play from './Pages/Play';
import Navbar from './Components/Navbar';


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
            </Switch>
          </div>
        </header>
      </div >
    </Router >
  );
}

export default App;
