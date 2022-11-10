import React from "react";
import logo from './logo.png'
import './NavBar.css'
const NavBar = () => {
	return (
		<nav className='NavBar'>

			<a href="/">
            <img className='logo' src={logo} alt="logo" />
            </a>
			<a href="/aboutme">About me</a>
			<a href="/contact">Contact</a>
			<a href="#Footer">Redes</a>
		</nav>
	);
};

export default NavBar;
