import React from "react";
import Settings from "./GameSettings/Settings";


function Menu() {
    return (
        <div className="grid place-items-center">
            <div>
                <ul >
                    <li><h1 className="font-sans">The Challenge Game</h1></li>
                    <Settings />
                </ul>
            </div>
        </div >

    )

}

export default Menu