import { React } from "react";
import CardList from "../Components/Cards/CardList.js"
import Timer from "../Components/Timer.js"
import { usePlayers } from "../Components/GameSettings/PlayerProvider.js";
const Play = (props) => {

    const { players } = usePlayers();
    console.log(players)

    return (
        <div>
            <Timer />
            <CardList />
        </div>);
}




export default Play;