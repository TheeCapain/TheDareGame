import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min"

let playerId = 0

function Menu() {
    const [playerName, setPlayerName] = useState('')
    const [players, setPlayers] = useState([])
    console.log(players)
    return (
        <div className="grid place-items-center">
            <div>
                <ul >
                    <li><h1 className="font-sans">The Challenge Game</h1></li>
                    <li><label className="relative h-32 w-32">Players</label></li>
                    <input onChange={e => setPlayerName(e.target.value)} className="flex flex-row mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    {players.map(player => (
                        <li type="text" key={player.playerId} className="flex flex-row w-full">
                            <p className="flex flex-row mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  ">{player.playerName}</p>
                            <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => {
                                setPlayers(
                                    players.filter(a =>
                                        a.playerId !== player.playerId
                                    )
                                );
                            }}>
                                Delete
                            </button>
                        </li>
                    ))}
                    <li>
                        <button className="bg-green-500 hover:bg-green-700 w-64 m-1 text-white font-bold py-2 px-4 rounded-full" onClick={() => {
                            setPlayers([
                                ...players,
                                { playerId: playerId++, playerName: playerName }
                            ]);
                        }} >
                            +
                        </button>
                    </li>
                    <li>
                        <Link to="/play">
                            <button className="bg-blue-500 hover:bg-blue-700 w-64 m-1 text-white font-bold py-2 px-4 rounded-full">
                                Play
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div >

    )

}

export default Menu