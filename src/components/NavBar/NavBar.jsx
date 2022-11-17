import React from "react";
import Login from "../Login/Login";
import LogoutButton from "../LogoutButton/LogoutButton";
import logo from './LogoPortfolioBlanco.png'
import './NavBar.css'
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	
	return (
		<nav className='NavBar'>

			<a href="/">
            <img className='logo' src={logo} alt="logo" />
            </a>
			<a href="/aboutMe">About me</a>
			<a href="/proyects">Proyects</a>
			<a href="/Examples">Examples</a>
			{/* <a href="/profile">Profile</a> */}
			<a href="#Footer">Redes</a>
		{/* <Login/> */}
		{/* <LogoutButton/> */}

		{ user?.name && 
		<a href="/profile">			
		 <img src={user?.picture} alt={user?.name} /> 
		</a>
		   }
		{ !user?.name &&  <Login/>   }



		</nav>
	);
};

export default NavBar;
