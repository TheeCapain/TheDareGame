import React from 'react';
const Card = ({ cardCompleted, activeCard, removeCard }) => {
  return (

    <div id='card'>
      <div className="w-96 h-96  rounded overflow-hidden shadow-lg bg-slate-50">
        <div className="px-6 py-4">
          <div className="h-24 font-bold text-xl mb-2 text-gray-700 ">{activeCard.title}</div>

          <p className="h-24 text-gray-700 text-base">
            {activeCard.description}
          </p>
          <p className="h-24 text-gray-700 text-base">
            This card is worth: {activeCard.points}
          </p>
        </div>
        <div className=" relative">
          <div className="flex flex-row absolute bottom-0 mx-16">
            <button onClick={() => cardCompleted(activeCard)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-2.5">
              Accept
            </button>
            <button onClick={() => removeCard(activeCard.id)} className="bottom-0 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ml-2.5">
              Decline
            </button></div>
        </div>
      </div>
    </div>

  );
}

export default Card;