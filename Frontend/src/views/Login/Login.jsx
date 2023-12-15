import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginApi } from "../../api/user";
import { useAuth } from "../../hooks/useAuth";
import "./Login.css";

export function Login() {

    const { login } = useAuth();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email("El correo electrónico no es válido").required("El correo electrónico es obligatorio"),
            password: Yup.string().required("La contraseña es obligatoria")
        }),
        onSubmit: async (formData) => {
            try {
                const response = await loginApi(formData);
                const { access } = response;
                login(access)
            } catch (error) {
                console.log(error);
            }
        }
    });

    return (
        <main className="loginMain">
            <h1 className="loginMain__titulo">INICIAR SESIÓN</h1>
            <form onSubmit={formik.handleSubmit}>
                <figure className="contenedorInput">
                    <label htmlFor="email" className="formLabel">Correo Electrónico</label>
                    <input
                        className="formInput"
                        type="email"
                        placeholder="maxi11carrillo@gmail.com"
                        autoComplete="off"
                        id="email" value={formik.values.email}
                        onChange={formik.handleChange}
                        required></input>
                </figure>
                <figure className="contenedorInput">
                    <label htmlFor="password" className="formLabel">Contraseña</label>
                    <input
                        className="formInput"
                        type="password"
                        placeholder="A1B2C3D4"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        required></input>
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