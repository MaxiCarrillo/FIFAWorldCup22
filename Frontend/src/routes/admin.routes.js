import { AdminLayout } from "../layouts/adminLayout/AdminLayout";
import { Inicio, NotFound, OnceIdeal, Login, Registro, ForgetPassword } from "../views";

const routesAdmin = [
    {
        path: "/",
        component: Inicio,
        layout: AdminLayout,
        exact: true
    },
    {
        path: "/iniciarSesion",
        component: Login,
        layout: AdminLayout,
        exact: true
    },
    {
        path: "/registro",
        component: Registro,
        layout: AdminLayout,
        exact: true
    },
    {
        path: "/forgetPassword",
        component: ForgetPassword,
        layout: AdminLayout,
        exact: true
    },
    {
        path: "/onceIdeal",
        component: OnceIdeal,
        layout: AdminLayout,
        exact: true
    },
    {
        path: "*",
        component: NotFound,
        layout: AdminLayout,
        exact: true
    }
];

export default routesAdmin;