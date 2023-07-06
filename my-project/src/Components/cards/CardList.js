import Card from "./Card";


let cards = [{
    title: "TestCard1",
    description: "Testdescription1",
    points: 100
}, {
    title: "TestCard2",
    description: "Testdescription2",
    points: 200
}, {
    title: "TestCard3",
    description: "Testdescription3",
    points: 300
}]

let activeCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];
    return card;
  };



function CardList() {
    const title = activeCard().title 
    const description = activeCard().description
    const points = activeCard().points
    return (
        <div id='activeCard' className='grid h-screen place-items-center'>
            <Card title={title} description={description} points={points}/>
        </div>
    );
}

export default CardList;