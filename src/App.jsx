import { Routes, Route } from "react-router-dom";
import Partido from "./pages/Partidos";
import Formulario from "./pages/Formulario";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Partido" element={<Partido />} />
        <Route path="/Formulario" element={<Formulario />} />
      </Routes>
    </>
  );
}
