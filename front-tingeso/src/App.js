import React from 'react';
import './App.css';
import { 
  BrowserRouter, 
  Route, 
  Routes,
} from 'react-router-dom';

import NavbarEjemplo from './components/navigation/Navbar.js'
// Vistas
import CalcularSueldos from './views/CalcularSueldos';
import Home from './views/Home';
import IngresarDatos from './views/IngresarDatos';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavbarEjemplo/>}>
            <Route path='/' element={<Home />}/>
            <Route path='uploadfile' element={<IngresarDatos />}/>
            <Route path='sueldo/planilla' element={<CalcularSueldos />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Hacer visible el componente
export default App;
