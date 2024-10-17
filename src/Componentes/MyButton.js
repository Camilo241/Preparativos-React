import React from "react";
import '../Estilos/MyButton.css';

function MyButton({onClick}) {
    return(
        <button className="Boton" onClick={onClick}>Crear nueva</button>
    );

}

export default MyButton;
