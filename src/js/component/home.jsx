import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color,setColor]=useState("")
	return (
		<div className="semaforo">
		<div>
			<div className={`rojo ${"rojo"==color?"active":""}`} onClick={()=>{setColor("rojo")}}></div>
			<div className={`amarillo ${"amarillo"==color?"active":""}`} onClick={()=>{setColor("amarillo")}}></div>
			<div className={`verde ${"verde"==color?"active":""}`} onClick={()=>{setColor("verde")}}></div>
		</div>
	</div>
	);
};

export default Home;
