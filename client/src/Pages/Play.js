import { React, useEffect } from "react";
import CardList from "../Components/Cards/CardList"

const Play = () => {
    useEffect(() => {
        function startTimer(duration, display) {
            let timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10)
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }


        let fiveMinutes = 60 * 60,
            display = document.querySelector('#time');
        startTimer(fiveMinutes, display);

    });





    return (
        <div>
            <div>Time Left: <span id="time"></span> minutes!</div>
            <CardList />
        </div>);
}




export default Play;