import React from "react";
import logo from './logo.png'
import './NavBar.css'
const NavBar = () => {
	return (
		<nav className='NavBar'>

			<a href="/">
            <img className='logo' src={logo} alt="logo" />
            </a>
			<a href="/aboutMe">About me</a>
			<a href="/proyects">Proyects</a>
			<a href="/Examples">Examples</a>
			<a href="#Footer">Redes</a>
		</nav>
	);
};

export default NavBar;
