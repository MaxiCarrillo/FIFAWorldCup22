import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Registro.css";

export function Registro() {

    const [isSamePassword, setIsSamePassword] = useState(false);

    return (
        <main className="loginMain">
            <h1 className="loginMain__titulo">REGISTRO</h1>
            <form>
                <figure className="contenedorInput">
                    <label htmlFor="email" className="formLabel">Correo Electrónico</label>
                    <input className="formInput" type="email" placeholder="maxi11carrillo@gmail.com" id="email" required></input>
                </figure>
                <figure className="contenedorInput">
                    <label htmlFor="user" className="formLabel">Usuario</label>
                    <input className="formInput" type="text" placeholder="carrillomaxj" id="user" required></input>
                </figure>
                <figure className="contenedorInput">
                    <label htmlFor="password" className="formLabel">Contraseña</label>
                    <input className="formInput" type="password" placeholder="A1B2C3D4" id="password" required></input>
                </figure>
                <figure className="contenedorInput">
                    <label htmlFor="passwordRepeat" className="formLabel">Repita la contraseña</label>
                    <input className="formInput" type="password" placeholder="A1B2C3D4" id="passwordRepeat" required></input>
                    { isSamePassword && <label className="errorLabel">La contraseña no coincide.</label> }
                </figure>
                <button type="submit" className="btn--primary" id="btnIngresar">Ingresar</button>
            </form>
            <div className="contenedorAncor">
                <NavLink to="/iniciarSesion" className="enlace--off">Iniciar Sesión</NavLink>
            </div>
        </main>
    );
}