import React from 'react';

function Card(props) {

  return (
    <div id='card' className='grid h-screen place-items-center'>
      <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
        <div id='attributes'>
          <p className=''></p>
          <p className='border-solid font-normal text-gray-700 dark:text-gray-400'>Points:{props.points}</p>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
            Forfeit challenge
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            Challenge complete
          </button>
        </div>
      </a>
    </div>
  );
}

export default Card;