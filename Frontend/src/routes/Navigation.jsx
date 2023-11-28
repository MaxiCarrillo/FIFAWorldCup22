import {
    Inicio,
    OnceIdeal
} from "../views"

import { BrowserRouter, Routes, Route } from "react-router-dom";

export function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Inicio></Inicio>}></Route>
                <Route exact path="/inicio" element={<Inicio></Inicio>}></Route>
                <Route exact path="/OnceIdeal" element={<OnceIdeal></OnceIdeal>}></Route>
            </Routes>
        </BrowserRouter>
    );
}