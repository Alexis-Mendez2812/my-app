import React from "react";
import "./Footer.css";
import Facebook from "./images/Facebook.png";
import Instagram from "./images/Instagram.png";
import github from "./images/github.png";
import gmail from "./images/gmail.png";
import LinkedIn from "./images/LinkedIn.png";

const Footer = () => {
	return (
		<div className="Footer" id="Footer">
			<a
				target="_blank"
				href="https://instagram.com/amor_propio_sublimaciones?igshid=YmMyMTA2M2Y="
			>
				<img className="redes-logo" src={Instagram} alt="redes-logo" />
				Instagram
			</a>
			<a
				target="_blank"
				href="https://www.facebook.com/amorpropiosublimaciones"
			>
				<img className="redes-logo" src={Facebook} alt="redes-logo" />
				Facebook
			</a>
			<a target="_blank" href="https://github.com/Alexis-Mendez2812">
				<img className="redes-logo" src={github} alt="redes-logo" />
				GitHub
			</a>
			<a
				target="_blank"
				href="https://www.linkedin.com/in/alexis-ezequiel-mendez/"
			>
				<img className="redes-logo" src={LinkedIn} alt="redes-logo" />
				Linkedin
			</a>
			<a
				target="_blank"
				href="mailto:281212.namaste@gmail.com?subject=I%20contact%20you%20from%20the%20website&body=We%20are%20interested%20in%20your%20profile%20and%20would%20like%20to%20contact%20you"
			>
				<img className="redes-logo" src={gmail} alt="redes-logo" />
				Mail me
			</a>
		</div>
	);
};

export default Footer;
