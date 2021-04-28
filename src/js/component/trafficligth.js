import React, { useState } from "react";

const TrafficLigth = () => {
	const [circulo3color, setCirculo3Color] = useState("circulo3");
	const [circulo2color, setCirculo2Color] = useState("circulo2");
	const [circulo1color, setCirculo1Color] = useState("circulo1");

	return (
		<div>
			<div id="box-out">
				<div>
					<div
						id={circulo3color}
						className="color3"
						onClick={() => {
							setCirculo3Color("circulo3-encendido");
							setCirculo2Color("circulo2");
							setCirculo1Color("circulo1");
						}}></div>
					<div
						id={circulo2color}
						className="color2"
						onClick={() => {
							setCirculo3Color("circulo1");
							setCirculo2Color("circulo2-encendido");
							setCirculo1Color("circulo1");
						}}></div>
					<div
						id={circulo1color}
						className="color1"
						onClick={() => {
							setCirculo3Color("circulo3");
							setCirculo2Color("circulo2");
							setCirculo1Color("circulo1-encendido");
						}}></div>
				</div>
			</div>
		</div>
	);
};

export default TrafficLigth;
