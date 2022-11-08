import logo from './logo.svg';
import './App.css';
//metiendo un comentario
function App() {

  let ingreso = prompt("Ingrese valor1")
  let ingreso2 = prompt("Ingrese valor2")

  return (
    <div className="App">

{( ingreso && ingreso2) && <p>La suma es {Number(ingreso) + Number(ingreso2)}</p> }

      <header className="App-header">
        <h1>VOLVEMOS 20:20hs</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

 <input type="text" />
 <input type="password" />
 <input type="range" />
 <input type="date" />
 <input type="checkbox" />
 <input type="color" />
 <input type="button"  placeholder='Boton' ></input> 
      </header>
    </div>
  );
}

export default App;
