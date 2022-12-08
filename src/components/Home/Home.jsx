import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./Home.css";
import Login from "../Login/Login";
import AddRecipes from '../AddRecipes/AddRecipes.jsx'

const Home = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	

	return (
		<div >
		<Login/>
		<AddRecipes/>
		</div>
	);
};

export default Home;
