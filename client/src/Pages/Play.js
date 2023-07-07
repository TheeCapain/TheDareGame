import CardList from "../Components/Cards/CardList.js";
let score;
const Play = () => {
    return (
        <div>
            <CardList score={score}/>
        </div>);
}

export default Play;