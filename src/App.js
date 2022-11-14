import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import AboutMe from './components/AboutMe/AboutMe'
import Proyects from './components/Proyects/Proyects'
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';


function App() {

  
  return (
    <>
    <NavBar/>
    <Route path="/" exact component={Home} />
    <Route path="/proyects" exact component={Proyects} />
    <Route path="/aboutMe" exact component={AboutMe} />
    <Footer/>
    </>


    );
}

export default App;
