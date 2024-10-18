import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Ferramentas from "./Pages/Ferramentas";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Ferramentas" element={<Ferramentas />} />
            </Routes>
        </BrowserRouter>
    )
}