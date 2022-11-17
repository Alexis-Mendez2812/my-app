import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import AboutMe from './components/AboutMe/AboutMe'
import Proyects from './components/Proyects/Proyects'
import Examples from './components/Examples/Examples'
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

function App() {

  
  return (
    <>
    <NavBar/>
    <Route path="/proyects" exact component={Proyects} />
    <Route path="/Examples" exact component={Examples} />
    <Route path="/aboutMe" exact component={AboutMe} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/" exact component={Home} />
    <Footer/>
    </>


    );
}

export default App;
