const Setup = () => {
    return (
        <div className="grid h-screen place-items-center">

            <div className="border-solid border-2 border-indigo-600">
                <ul >
                    <li><h1 className="font-sans">The Challenge Game</h1></li>
                    <li>

                        <button className="bg-blue-500 hover:bg-blue-700 w-64 m-1 text-white font-bold py-2 px-4 rounded-full">
                            Add players
                        </button>
                    </li>
                    <li>

                        <button className="bg-blue-500 hover:bg-blue-700 w-64 m-1 text-white font-bold py-2 px-4 rounded-full">
                            Teams
                        </button>
                    </li>
                    <li>
                        <button className="bg-blue-500 hover:bg-blue-700 w-64 m-1 text-white font-bold py-2 px-4 rounded-full">
                            Time limit
                        </button>
                    </li>
                    <li>
                        <button className="bg-blue-500 hover:bg-blue-700 w-64 m-1 text-white font-bold py-2 px-4 rounded-full">
                            Card limit
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Setup;