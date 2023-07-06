import Card from "./Card";


let cards = [{
    title: "Take a picture of an exotic house animal",
    description: "Take a picture of an animal that is not a pigeon a seagull or a normal house pet.",
    points: 100
}, {
    title: "Photoshoot with the little mermaid",
    description: "Take a picture of yourself standing in front of the little mermaid",
    points: 200
}, {
    title: "Treading waters",
    description: "Stand 15m above the water level.",
    points: 300
}]

let usedCards = []

let activeCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];
    cards.slice(randomIndex)
    console.log(cards)
    usedCards.push(card)
    console.log(usedCards)
    return card;
};

const card = activeCard()

function CardList() {

    return (
        <div id='activeCard' className='grid h-screen place-items-center'>
            <Card title={card.title} description={card.description} points={card.points} />
        </div>
    );
}

export default CardList;