import { useState } from "react";
import SetPlayers from "./Players";


function Settings() {
    const [playerName, setPlayerName] = useState('')
    const [players, setPlayers] = useState([])

    return (
        <div className="grid place-items-center">
            <SetPlayers
                playerName={playerName}
                setPlayerName={setPlayerName}
                players={players}
                setPlayers={setPlayers} />

        </div >

    )
}
export default Settings
