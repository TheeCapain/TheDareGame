import Team from '../Components/GameSettings/GameConfig/Team'
import Player from '../Components/GameSettings/GameConfig/Player'

let test = Team()

const Setup = () => {

    return (
        <div className="grid place-items-center">

            <div >
                <ul >
                    <li>
                        <h1 className="font-sans">The Challenge Game</h1>
                    </li>
                    <li>
                        <div>
                            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                            <input type="text" id="first_name" placeholder="Team name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>

                        <button className="bg-blue-500 hover:bg-blue-700 w-64 m-1 text-white font-bold py-2 px-4 rounded-full">
                            Add team
                        </button>
                    </li>
                    <li>

                        <button className="bg-blue-500 hover:bg-blue-700 w-64 m-1 text-white font-bold py-2 px-4 rounded-full">
                            Add players
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
                    <li>
                        <button className="bg-blue-500 hover:bg-blue-700 w-64 m-1 text-white font-bold py-2 px-4 rounded-full">
                            Password
                        </button>
                    </li>
                    <li>
                        <button className="bg-green-500 hover:bg-green-700 w-64 m-1 text-white font-bold py-2 px-4 rounded-full">
                            Start Game
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Setup;