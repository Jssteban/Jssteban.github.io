import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Eventos from './Pages/Eventos';
// import Artistas from './Pages/Artistas';
 import Registrarse from './Pages/Registrarse'
import Entradas from './Pages/Entradas';
import Login from './Pages/Login';
import Contactos from './Pages/Contactos';
import Emisora from './Pages/Emisora';


// import Contacto from './Pages/Contacto';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/entradas" element={<Entradas />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/login" element={<Login />} />  
         <Route path="/contacto" element={<Contactos />} />
         <Route path="/emisora" element={<Emisora />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
