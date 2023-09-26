import React, { useState } from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Components/Inicio";
import CrearEncuesta from "./Components/CrearEncuesta";
import Encuesta from "./Components/Encuestas";
import Menu from './Components/Menu'; // Importa el componente Menu
import NotFound from './Components/NotFound'; // Importa el componente Menu
import encuestas from './data/encuestas.json'
function App() {
  const [listaEncuestas, setListaEncuestas] =
    useState(encuestas);
  const agregarEncuesta = (nuevaEncuesta) => {
    nuevaEncuesta.id = listaEncuestas.length + 1
    setListaEncuestas([...listaEncuestas, nuevaEncuesta]);
  };
  const responderEncuesta = (id, respuestas) => {
    const encuesta = listaEncuestas.find(enc => enc.id ===
      parseInt(id));
    encuesta.respuestas = [respuestas];
  };
  return (
    <BrowserRouter>
      <Menu /> {/* Agrega el menú de navegación */}
      <Routes>
        <Route path="/" element={<Inicio
          listaEncuestas={listaEncuestas} />} />
        <Route path="/encuesta/crear" element={<CrearEncuesta
          agregarEncuesta={agregarEncuesta} />} />
        <Route path="/encuesta/:id" element={<Encuesta
          listaEncuestas={listaEncuestas}
          responderEncuesta={responderEncuesta} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
