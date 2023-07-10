import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min"
function menu() {
    return (
        <div className="grid place-items-center">

            <div>
                <ul >
                    <li><h1 className="font-sans">The Challenge Game</h1></li>
                    <li>
                        <Link to="/play">
                            <button className="bg-blue-500 hover:bg-blue-700 w-64 m-1 text-white font-bold py-2 px-4 rounded-full">
                                Quick Play
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/setup">
                            <button className="bg-blue-500 hover:bg-blue-700 w-64 m-1 text-white font-bold py-2 px-4 rounded-full">
                                Create Game
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/join">
                            <button className="bg-blue-500 hover:bg-blue-700 w-64 m-1 text-white font-bold py-2 px-4 rounded-full">
                                Join Game
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

    )

}

export default menu