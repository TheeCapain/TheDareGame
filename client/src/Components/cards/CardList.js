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
let turn = 1;
let playersTurn = 0;
function CardList(props) {

    let players = props.players
    let [cards, setCards] = useState(challenges)

    const cardCompleted = (card) => {
        score = card.challenge_points + parseInt(score)
        challengesCompleted = challengesCompleted + 1;
        usedCards.push(card)
        removeCard(card.challenge_id)
        playerTurn(turn)
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

    const playerTurn = () => {
        if (turn === players.length) {
            turn = 0
            playersTurn = turn
            turn++
        } else {
            playersTurn = turn++
        }

    }

    if (cards.length !== 0) {
        return (
            <div id='activeCard' className='grid  place-items-center'>
                <p>{players[playersTurn].playerName}'s turn</p>
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