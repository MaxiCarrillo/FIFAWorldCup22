import { NavLink } from "react-router-dom";
import "./forgetPassword.css";

export function ForgetPassword() {
    return (
        <main className="loginMain">
            <h1 className="loginMain__titulo">REESTABLECER CONTRASEÑA</h1>
            <form>
                <figure className="contenedorInput">
                    <label htmlFor="email" className="formLabel">Correo Electrónico</label>
                    <input className="formInput" type="email" placeholder="maxi11carrillo@gmail.com" id="email" required></input>
                </figure>
                <button type="submit" className="btn--primary" id="btnIngresar">Reestablecer</button>
            </form>
            <div className="contenedorAncor">
                <NavLink to="/iniciarSesion" className="enlace--off">Iniciar Sesión</NavLink>
            </div>
        </main>
    );
}