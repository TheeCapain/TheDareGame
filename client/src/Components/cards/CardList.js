import { useState } from "react";
import React from "react";
import Card from "./Card";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;



const supabase = createClient(supabaseUrl, supabaseKey);

async function getChallenges() {
    try {
        let { data, error } = await supabase
            .from('challenges')
            .select('*')
        if (error) {
            throw new Error(error.message);
        }
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

let challenges = await getChallenges()
let score = 0;
let challengesCompleted = 0;
let usedCards = []


function CardList(props) {

    let players = props.players
    let [cards, setCards] = useState(challenges)

    const cardCompleted = (card) => {
        score = card.challenge_points + parseInt(score)
        challengesCompleted = challengesCompleted + 1;
        usedCards.push(card)
        removeCard(card.challenge_id)
    }

    const removeCard = (id) => {
        cards = cards.filter(card => card.challenge_id !== id);
        setCards(cards)

    }

    let activeCard = () => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        const card = cards[randomIndex];
        return card;
    };
    if (cards.length !== 0) {
        return (
            <div id='activeCard' className='grid  place-items-center'>
                <p>{players.length}'s turns</p>
                <Card activeCard={activeCard()} cardCompleted={cardCompleted} removeCard={removeCard} />

                <p>Your score is: {score}</p>

                {usedCards.map(card => (
                    <div key={card.challenge_id} className="blog-preview" >
                        <h2>{card.challenge_title}</h2>
                    </div>
                ))}
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