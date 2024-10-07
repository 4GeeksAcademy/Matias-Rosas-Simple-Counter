import React from "react";
import ReactDOM from "react-dom/client";

import "../styles/index.css";
import Home from "./component/home.jsx";

let seconds = 0;
let processInterval = null;
let userInput = null; // Variable global para almacenar el valor ingresado por el usuario
const root = ReactDOM.createRoot(document.getElementById('app'));

const Stop = () => {
    clearInterval(processInterval);
    processInterval = null;
};

const interval = function () {
    if (processInterval === null) { // Solo inicia un nuevo intervalo si no hay uno activo
        processInterval = setInterval(function () {
            if (userInput !== null && seconds === userInput) {
                console.log("si aparece esto es que la alerta funciona");
                alert("Time reached: " + userInput + " seconds");
                Stop();
            }

            const digitfive = Math.floor(seconds / 10000);
            const digitfour = Math.floor(seconds / 1000);
            const digitthree = Math.floor(seconds / 100);
            const digittwo = Math.floor(seconds / 10);
            const digitone = Math.floor(seconds / 1);

            root.render(
                <Home
                    digitOne={digitone % 10}
                    digitTwo={digittwo % 10}
                    digitThree={digitthree % 10}
                    digitFour={digitfour % 10}
                    digitFive={digitfive % 10}
                    Stop={Stop}
                    Resume={Resume}
                    setUserInput={(value) => {
                        userInput = value;
                    }}
                />
            );

            seconds++;
        }, 1000);
    }
};

interval();

const Resume = () => {
    if (processInterval === null) {
        interval();
 }

};
