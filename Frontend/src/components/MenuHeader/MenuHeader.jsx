import "./MenuHeader.css";
import logoMundial from "../../assets/images/LogoQATAR22.jpg";

export function MenuHeader(){
    return(
        <header className="menuNav">
            <img src={logoMundial} alt="FIFA World Cup 2022 Logo" title="FIFA World Cup 2022" className="menuNav__imagen"/>
            <nav className="enlacesNav">
                <a href="" className="enlacesNav__enlace">Inicio</a>
                <a href="" className="enlacesNav__enlace">Selecciones</a>
                <a href="" className="enlacesNav__enlace">Once Ideal</a>
            </nav>
        </header>
    );
}