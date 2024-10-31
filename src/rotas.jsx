import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Ferramentas from "./Pages/Ferramentas";
import Planos  from "./Pages/planos";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Ferramentas" element={<Ferramentas />} />
                <Route path="/Planos" element={<Planos />}/>
            </Routes>
        </BrowserRouter>
    )
}