import React from "react";
import Modals from "./Modals/Modals";
import CarouselOne from "./CarouselOne/CarouselOne";
import CarouselFadeExample from "./CarouselFadeExample/CarouselFadeExample";
import MapComponent from "./MapComponent/MapComponent";

const Examples = () => {
	return (
		<div>
			<h1>Examples</h1>
			<Modals   />
			<CarouselOne name="Alexis" />
			<MapComponent />
			<CarouselFadeExample />
			
		</div>
	);
};

export default Examples;
