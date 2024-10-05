import React from "react";
import '../../styles/index.css';

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
        </div>
        <div className ="row divcontainer">
            <div className="col column2" ></div>
            <div className="col column2">Horas</div>
            <div className="col column2" >Minutos</div> 
            <div className="col column2" >Minutos </div> 
            <div className="col column2" >Segundos</div> 
            <div className="col column2" >Segundos</div>
        </div>
        <button className="btn btn-danger" onClick={props.stopCounter}>Detener Contador</button>
        <button className="btn btn-success" onClick={props.startCounter}>Iniciar/Resumir Contador</button>
        </>
    );
};

export default Home;

