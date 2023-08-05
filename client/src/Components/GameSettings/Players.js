let playerId = 1
let teamId = 1

function Players(props) {
    const playerName = props.playerName;
    const setPlayerName = props.setPlayerName;
    const players = props.players;
    const setPlayers = props.setPlayers;

    console.log(players)

    return (
        <div className="grid place-items-center">
            <div>
                <li><label className="relative h-32 w-32">Players</label></li>
                <li><input onChange={e => setPlayerName(e.target.value)} className="flex flex-row mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /></li>
                {players.map(player => (
                    <li type="text" key={player.playerId} className="flex flex-row w-full">
                        <p className="flex flex-row mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  ">{player.playerName}</p>
                        <select id="teams"  className="flex flex-row mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {players.map(player => (
                                <option key={player.playerTeam}>{player.playerTeam}</option>
                            ))}

                        </select>
                        <button placeholder={player.playerId} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => {
                            setPlayers(
                                players.filter(playerItem =>
                                    playerItem.playerId !== player.playerId
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
                            { playerId: playerId++, playerName: playerName, playerTeam: teamId++ }
                        ]);
                    }} >
                        +
                    </button>
                </li>

            </div>
        </div >

    )
}

export default Players

