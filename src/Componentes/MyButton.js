import React, {useState}from "react";
import '../Estilos/MyButton.css';

function MyButton() {
    return(
        <button className="Boton">Crear nueva</button>
    );
    
    const [clicked, setClicked] = useState(false);  //se define el nombre de la variable clicked en el estado falso y utilizamos el setcliked para que altere el eastado

    return (
            <button onMouseDown={() => setClicked(true)} // Cambia a 'true' cuando se mantiene presionado
            onMouseUp={() => setClicked(false)}  // Cambia a 'false' cuando se suelta 
            >   
            {/* se crea un evento on click que cuando setClicked es true me dice me cliqueaste pero cuando no esta clicleado me dice no me cliceaste */}
            {clicked ? "You clicked me!" : " not Click me"}
        </button>
    );
}

export default MyButton;
