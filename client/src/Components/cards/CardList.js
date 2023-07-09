import { useState } from "react";
import React from "react";
import Card from "./Card";


let score = 0;
let challengesCompleted = 0;



function CardList() {
        let [cards, setCards] = useState([{
            id: 1,
            title: "Take a picture of an exotic animal",
            description: "Take a picture of an animal that is not a pigeon a seagull or a normal house pet.",
            points: 100
        }, {
            id: 2,
            title: "Photoshoot with the little mermaid",
            description: "Take a picture of yourself standing in front of the little mermaid",
            points: 200
        }, {
            id: 3,
            title: "Treading waters",
            description: "Stand 15m above the water level.",
            points: 300
        }, {
            id: 4,
            title: "WEEEEEEEE!!!",
            description: "Find a public park and do a cartwheel",
            points: 400
        }, {
            id: 5,
            title: "The contemporary style",
            description: "Find some art and say 3 nice things about it",
            points: 500
        }])

        const cardCompleted = (card) => {
            score = card.points + parseInt(score)
            challengesCompleted = challengesCompleted + 1;
            removeCard(card.id)
        }

        const removeCard = (id) => {
            console.log(score)
            const usedCards = cards.filter(card => card.id !== id);
            setCards(usedCards)
        }

        let activeCard = () => {
            const randomIndex = Math.floor(Math.random() * cards.length);
            const card = cards[randomIndex];
            return card;
        };
        if (cards.length !== 0) {
            return (
                <div id='activeCard' className='grid  place-items-center'>

                    <Card activeCard={activeCard()} cardCompleted={cardCompleted} removeCard={removeCard} />
                    <p>Your score is: {score}</p>
                </div>
            );
        } else {
            return (

                <div id='activeCard' className='grid place-items-center'>
                    <h1>No more cards</h1>
                    <p>Challenges completed: {challengesCompleted}</p>
                    <p>Your score is: {score}</p>
                </div>
            );
        }

    }

export default CardList;