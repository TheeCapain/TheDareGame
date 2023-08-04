import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min"

let nextId = 0;

function Menu() {

    const [name, setName] = useState('')
    const [players, setPlayers] = useState([{
        id: nextId,
        name: "Test"
    }
    ])
    console.log(players)

    return (
        <div className="grid place-items-center">
            <div>
                <ul >
                    <li><h1 className="font-sans">The Challenge Game</h1></li>
                    <li><label className="left-0 ">Players</label></li>{players.map(player => (
                        <input type="text" key={player.id} onChange={e => setName(e.target.value)} className="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Player Name" value={player.name} />
                    ))}
                    <li>
                        <button className="bg-green-500 hover:bg-green-700 w-64 m-1 text-white font-bold py-2 px-4 rounded-full" onClick={() => {
                            setPlayers([
                                ...players,
                                { id: nextId++, name: name }
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
        </div>

    )

}

export default Menu