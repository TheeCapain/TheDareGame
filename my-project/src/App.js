import './App.css';
import CardList from './Components/cards/CardList';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Play
        </button>
        <CardList />
      </header>
    </div>
  );
}

export default App;
