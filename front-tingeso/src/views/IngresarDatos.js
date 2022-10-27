import React from 'react';
import Formularios from '../components/navigation/formularios';
import './IngresarDatos.css';


const IngresarDatos = () => {
  return (
    <div className='container-sm'>
      <div className="container">
        <h1> Cargar archivo </h1>
        <form>
          <input type="file"></input>
          <input type="submit"></input>
        </form>
      </div >
      <div className="container">
        <h1> Ingresar justificativos </h1>
        <Formularios></Formularios>
      </div>
      <div className="container">
        <h1> Ingresar autorizaciones </h1>
        <Formularios></Formularios>
      </div>
    </div>
  );
}

export default IngresarDatos;