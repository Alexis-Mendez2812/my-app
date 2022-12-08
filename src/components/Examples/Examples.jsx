import React from "react";
import Modals from "./Modals/Modals";
import CarouselOne from "./CarouselOne/CarouselOne";
import CarouselFadeExample from "./CarouselFadeExample/CarouselFadeExample";
import MapComponent from "./MapComponent/MapComponent";
import Counter from "../Counter/Counter";

const Examples = () => {
	return (
		<div>
			<div>
				<ul>
					<li>
						<a href="#Modal">Modal</a>
					</li>
					<li>
						<a href="#CarouselOne">Carrousel Auto</a>
					</li>
					<li>
						<a href="#MapComponent">MapComponent</a>
					</li>
					<li>
						<a href="#CarrouselFade">Carrousel Fade</a>
					</li>
					<li>
						<a href="#Counter">Counter</a>
					</li>
				</ul>
			</div>

			<div>
				<h1>Examples</h1>
				<div id='Modal' >

				<Modals   />
				</div>
				<div id='CarouselOne' >

				<CarouselOne name="Alexis" />
				</div>
				<div id='MapComponent' >

				<MapComponent />
				</div>
				<div id='CarrouselFade' >
				<CarouselFadeExample   />
				</div>
				<div id='Counter'>

				<Counter />
				</div>
			</div>
		</div>
	);
};

export default Examples;
