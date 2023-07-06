
function menu() {
    return (
        <div className="grid h-screen place-items-center">

            <div className="border-solid border-2 border-indigo-600">
                <ul >
                    <li><h1 className="font-sans">The Challenge Game</h1></li>
                    <li>
                        <button className="bg-blue-500 hover:bg-blue-700 w-64 m-1 text-white font-bold py-2 px-4 rounded-full">
                            Quick Play
                        </button>
                    </li>
                    <li>
                        <button className="bg-blue-500 hover:bg-blue-700 w-64 m-1 text-white font-bold py-2 px-4 rounded-full">
                            Custom Game
                        </button>
                    </li>
                    <li>
                        <button className="bg-blue-500 hover:bg-blue-700 w-64 m-1 text-white font-bold py-2 px-4 rounded-full">
                            Join Game
                        </button>
                    </li>
                    <li>
                        <button className="bg-blue-500 hover:bg-blue-700 w-64 m-1 text-white font-bold py-2 px-4 rounded-full">
                            How to play
                        </button>
                    </li>
                </ul>
            </div>
        </div>

    )

}

export default menu