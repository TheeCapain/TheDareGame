import React from 'react';
const Card = ({ cardCompleted, activeCard }) => {
  return (

    <div id='card'>
      <div className="w-96 h-96  rounded overflow-hidden shadow-lg bg-slate-50">
        <div className="px-6 py-4">
          <div className="h-24 font-bold text-xl mb-2 text-gray-700 ">{activeCard.title}</div>
          <p className="h-24 text-gray-700 text-base">
            {activeCard.description}
          </p>
        </div>
        <div className=" relative h-32 w-32">
          <div className="flex flex-row absolute bottom-0 mx-16">
            <button onClick={() => cardCompleted(activeCard)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-2.5">
              Accept
            </button>
            <button className="bottom-0 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ml-2.5">
              Decline
            </button>08</div>
        </div>
      </div>
    </div>

  );
}

export default Card;