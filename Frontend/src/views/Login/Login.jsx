import { NavLink } from "react-router-dom";
import "./Login.css";

export function Login() {
    return (
        <main className="loginMain">
            <h1 className="loginMain__titulo">INICIAR SESIÓN</h1>
            <form>
                <figure className="contenedorInput">
                    <label htmlFor="email" className="formLabel">Correo Electrónico</label>
                    <input className="formInput" type="email" placeholder="maxi11carrillo@gmail.com" id="email" required></input>
                </figure>
                <figure className="contenedorInput">
                    <label htmlFor="password" className="formLabel">Contraseña</label>
                    <input className="formInput" type="password" placeholder="A1B2C3D4" id="password" required></input>
                </figure>
                <button type="submit" className="btn--primary" id="btnIngresar">Ingresar</button>
            </form>
            <div className="contenedorAncor">
                <NavLink to="/registro" className="enlace--off">Registrarme</NavLink>
                <NavLink to="/forgetPassword" className="enlace--off">Olvidé mi Contraseña</NavLink>
            </div>
        </main>
    );
}