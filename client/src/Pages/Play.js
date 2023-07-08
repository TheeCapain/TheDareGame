import CardList from "../Components/Cards/CardList.js";
let score = 0;
const Play = () => {

    return (
        <div>
            <CardList score={score}/>
        </div>);
}

export default Play;