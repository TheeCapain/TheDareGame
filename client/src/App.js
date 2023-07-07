import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './Components/GameSettings/Menu';
import GameSetup from './Pages/GameSetup.js'
import Play from './Pages/Play';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar/>
          <div className='content'>
            <Switch>
              <Route exact path="/">
                <Menu />
              </Route>
              <Route exact path="/play">
                <Play />
              </Route>
              <Route path="/setup">
                <GameSetup />
              </Route>
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
