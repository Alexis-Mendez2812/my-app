import React, { useState } from "react";
import "./AddRecipes.css";
const AddRecipes = () => {
	const [ingrediente, setIngrediente] = useState("");
	const [listaIngredientes, setlistaIngredientes] = useState([]);
// const [variable,setVariable] = useState("")
	function actualizarIngrediente(event) {
		setIngrediente(event.target.value);
	}
	function agregarIngrediente() {
		if (ingrediente.length > 0) {
			setlistaIngredientes([...listaIngredientes, ingrediente]);
			setIngrediente("");
		}
	}
	function deleteIngrediente(e) {
		
			setlistaIngredientes(listaIngredientes.filter(ing=>ing!==e) );
			
		
	}
	function cargar(e) {
		
			e.preventDefault()
			
		
	}
    console.log(listaIngredientes)
    console.log(ingrediente)
	return (
		<div>
			<form onSubmit={cargar} >
				<input
					type="text"
					placeholder="Agrega un ingrediente"
					value={ingrediente}
					onChange={actualizarIngrediente}
				/>
				<button onClick={agregarIngrediente}>Agregar</button>
			</form>
			<ul>
				{listaIngredientes.length == 0 ? (
					<li>Agrega tus ingredientes</li>
				) : (
					listaIngredientes.map((e) => (
						<li>
							{e}
                            <button onClick={()=>deleteIngrediente(e)}>X</button>
						</li>
					))
				)}
			</ul>
		</div>
	);
};

export default AddRecipes;
