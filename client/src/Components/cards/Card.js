import React from 'react';
const Card = ({ cardCompleted, activeCard, removeCard }) => {
  return (
    <div id='card'>
      <div
        className="w-96 h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='relative h-80'>
          <h5
            className="text-left mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {activeCard.challenge_title}
          </h5>
          <p className="text-left mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {activeCard.challenge_description}
          </p>
          <p className="text-left mb-4 text-base text-neutral-600 dark:text-neutral-200">
            This card is worth: {activeCard.challenge_points}
          </p>
        </div>

      </div>
      <button onClick={() => removeCard(activeCard.challenge_id)} className="inline-flex items-center mx-4 px-8 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
          Give up
        </button>
        <button onClick={() => cardCompleted(activeCard)} className="inline-flex items-center px-8 mx-4 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Accept
        </button>
    </div>


  );
}

export default Card;