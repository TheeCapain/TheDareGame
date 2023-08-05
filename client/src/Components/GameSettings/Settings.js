import { useState } from "react";
import Players from "./Players";
import { useHistory } from "react-router-dom";

function Settings() {
    const [playerName, setPlayerName] = useState('')
    const [players, setPlayers] = useState([{ playerId: 0, playerName: "Player 1", playerTeam: 0, playerPoints:0 }])
    const history = useHistory();

    const startGame = () => {
        history.push({
            pathname: "/play",
            state: { players }
        });
    };


    return (
        <div className="grid place-items-center">
            <Players
                playerName={playerName}
                setPlayerName={setPlayerName}
                players={players}
                setPlayers={setPlayers} />
            <button className="bg-blue-500 hover:bg-blue-700 w-64 m-1 text-white font-bold py-2 px-4 rounded-full" onClick={startGame}>Start Game</button>
        </div >


    )
}
export default Settings
