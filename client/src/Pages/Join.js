const Join = () => {

    return (
        <div className="grid place-items-center">

            <div >
                <ul >
                    <li>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Game Id" required />
                    </li>
                    <li>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Game Password if any" required />
                    </li>
                    <li>
                        <button className="bg-green-500 hover:bg-green-700 w-64 m-1 text-white font-bold py-2 px-4 rounded-full">
                            Join
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Join;