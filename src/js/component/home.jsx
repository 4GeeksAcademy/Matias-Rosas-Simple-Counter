import React from "react";

import '../../styles/index.css'
//include images into your bundle

//create your first component
const Home = (props) => {
	return (
		<div className="row divcontainer">
			<div className="col column ms-3" ><i className="far fa-clock"></i></div>
			<div className="col column" >{digitfive}</div>
			<div className="col column" >{digitfour}</div>
			<div className="col column" >{digitthree}</div>
			<div className="col column" >{digittwo}</div>
			<div className="col column" >{digitone}</div>

		</div>
	);
};


const digitone = 0
const digittwo = 0
const digitthree = 0
const digitfour = 0
const digitfive = 0


// SetInterval(function(){
// 	if (digitone < 10)
// 		digitone++
// 	else {
// 		digitone === 0
// 	}


// })


export default Home;
