import React, {useState} from 'react';

function Formularios() {
  const [nombre, setNombre] = useState("");  // Variable de estado, util para formularios pequeños
  const handleSubmit = e => {
    e.preventDefault();
    alert("El formulario ha sido enviado");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='rut'>Rut:</label>
        <input type="text" id="rut" name="rut" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
        <br></br> <br></br>
        <label htmlFor='fecha'>Fecha:</label>
        <input type="date" id="fecha" name="fecha"></input>
        <br></br><br></br>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default Formularios;