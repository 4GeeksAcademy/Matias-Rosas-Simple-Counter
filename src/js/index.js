//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let digitone = 0;
let digittwo = 0;
let digitthree = 0;
let digitfour = 0;
let digitfive = 0;

let intervalId = null;

const root = ReactDOM.createRoot(document.getElementById('app'));

const startCounter = () => {
    if (!intervalId) {
        intervalId = setInterval(function () {
            digitone++;

            if (digitone === 10) {
                digitone = 0;
                digittwo++;
            }
            if (digittwo === 6) {
                digittwo = 0;
                digitthree++;
            }
            if (digitthree === 6) {
                digitthree = 0;
                digitfour++;
            }
            if (digitfour === 6) {
                digitfour = 0;
                digitfive++;
            }
            if (digitfive === 10) {
                digitfive = 0;
            }

            // Renderiza el componente Home con los valores actualizados
            root.render(
                <Home
                    digitOne={digitone}
                    digitTwo={digittwo}
                    digitThree={digitthree}
                    digitFour={digitfour}
                    digitFive={digitfive}
                    stopCounter={stopCounter}
                    startCounter={startCounter}
                />
            );

        }, 1000);
    }
};

const stopCounter = () => {
    clearInterval(intervalId);
    intervalId = null;
};

// Renderiza el componente Home inicialmente
root.render(
    <Home
        digitOne={digitone}
        digitTwo={digittwo}
        digitThree={digitthree}
        digitFour={digitfour}
        digitFive={digitfive}
        stopCounter={stopCounter}
        startCounter={startCounter}
    />
);

startCounter();