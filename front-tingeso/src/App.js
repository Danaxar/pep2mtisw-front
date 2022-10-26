import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navigation/Navbar.js'
import LoadFile from './views/CargarArchivo';
import IngresarAutorizaciones from './views/IngresarAutorizaciones';
import IngresarJustificativo from './views/IngresarJustificativo';
import CalcularSueldos from './views/CalcularSueldos';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/uploadfile' exact Component={<LoadFile />}/>
          <Route path='/justificativo/formulario' exact Component={<IngresarJustificativo />}/>
          <Route path='/autorizacion/formulario' exact Component={<IngresarAutorizaciones />}/>
          <Route path='/sueldo/planilla' exact Component={<CalcularSueldos />}/>
        </Routes>
      </Router>
    </div>
  );
}

// Hacer visible el componente
export default App;
