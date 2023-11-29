import "./MenuHeader.css";
import logoMundial from "../../assets/images/LogoQATAR22.jpg";
import { NavLink } from "react-router-dom";

export function MenuHeader() {
    return (
        <header className="menuNav">
            <NavLink
                to="/inicio"
                className="menuNav__imagen">
                <img src={logoMundial} alt="FIFA World Cup 2022 Logo" title="FIFA World Cup 2022" className="menuNav__imagen" />
            </NavLink>
            <nav className="enlacesNav">
                <NavLink
                    to="/inicio"
                    className={({ isActive }) => {
                        return isActive ? "enlacesNav__enlace enlacesNav__enlace--active" : "enlacesNav__enlace";
                    }}
                >
                    Inicio
                </NavLink>
                <NavLink
                    to="/selecciones"
                    className={({ isActive }) => {
                        return isActive ? "enlacesNav__enlace enlacesNav__enlace--active" : "enlacesNav__enlace";
                    }}
                >Selecciones
                </NavLink>
                <NavLink
                    to="/onceIdeal"
                    className={({ isActive }) => {
                        return isActive ? "enlacesNav__enlace enlacesNav__enlace--active" : "enlacesNav__enlace";
                    }}
                >Once Ideal
                </NavLink>
            </nav>
        </header>
    );
}