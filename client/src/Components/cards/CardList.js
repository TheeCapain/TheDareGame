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

function CardList() {
    let [cards, setCards] = useState(challenges)

    const cardCompleted = (card) => {
        score = card.challenge_points + parseInt(score)
        challengesCompleted = challengesCompleted + 1;
        removeCard(card.challenge_id)
    }

    const removeCard = (id) => {
        const usedCards = cards.filter(card => card.challenge_id !== id);
        console.log(cards.length)
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