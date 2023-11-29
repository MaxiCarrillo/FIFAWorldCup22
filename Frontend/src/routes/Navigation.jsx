import {
    Inicio,
    OnceIdeal,
    NotFound
} from "../views"

import { MenuHeader } from "../components/MenuHeader/MenuHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function Navigation() {
    return (
        <BrowserRouter>
            {/* El Navbar debe estar dentro de BrowserRouter porque este tiene los <Link> */}
            <MenuHeader></MenuHeader>
            <Routes>
                <Route exact path="/" element={<Inicio></Inicio>}></Route>
                <Route exact path="/inicio" element={<Inicio></Inicio>}></Route>
                <Route exact path="/OnceIdeal" element={<OnceIdeal></OnceIdeal>}></Route>
                <Route exact path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </BrowserRouter>
    );
}