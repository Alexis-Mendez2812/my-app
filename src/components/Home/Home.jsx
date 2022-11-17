import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const Home = () => {
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  return (
    <div>Home</div>
  )
}

export default Home