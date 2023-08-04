import { React } from "react";
import CardList from "../Components/Cards/CardList.js"
import Timer from "../Components/Timer.js"
const Play = (props) => {

    const { players } = props.location.state;

    return (
        <div>
            <Timer />
            <CardList players={players} />
        </div>);
}




export default Play;