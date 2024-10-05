import React from "react";
import '../../styles/index.css';

// Variable global para almacenar el valor ingresado por el usuario
let userInput = null;

const Home = (props) => {
    return (
        <>
        <div className="row divcontainer">
            <div className="col column ms-3" ><i className="far fa-clock"></i></div>
            <div id="five" className="col column">{props.digitFive}</div>
            <div id="four" className="col column">{props.digitFour}</div>
            <div id="three" className="col column">{props.digitThree}</div>
            <div id="two" className="col column">{props.digitTwo}</div>
            <div id="one" className="col column">{props.digitOne}</div>
            <button className="btn btn-danger" onClick={() => { props.Stop() }}>Stop</button>
            <button className="btn btn-success" onClick={() => { props.Resume() }}>Resume</button>
        </div>
        <form>
            <label htmlFor="usertimerinput">Set Time (seconds): </label>
            <input type="number" id="usertimerinput" />
            <button
                type="button"
                onClick={() => {
					const inputElement = document.getElementById("usertimerinput");
					if (inputElement) {
						props.setUserInput(Number(inputElement.value));
						console.log("Button was clicked, userInput set to: " + inputElement.value);
					}
				}}
            >
                Set Timer
            </button>
        </form>
        </>
    );
};

export default Home;
