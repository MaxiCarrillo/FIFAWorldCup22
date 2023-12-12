import { UserLayout } from "../layouts/userLayout/UserLayout";
import { Inicio, NotFound, OnceIdeal, Login, Registro, ForgetPassword } from "../views";

const routes = [
    {
        path: "/",
        component: Inicio,
        layout: UserLayout,
        exact: true
    },
    {
        path: "/iniciarSesion",
        component: Login,
        layout: UserLayout,
        exact: true
    },
    {
        path: "/registro",
        component: Registro,
        layout: UserLayout,
        exact: true
    },
    {
        path: "/forgetPassword",
        component: ForgetPassword,
        layout: UserLayout,
        exact: true
    },
    {
        path: "/onceIdeal",
        component: OnceIdeal,
        layout: UserLayout,
        exact: true
    },
    {
        path: "*",
        component: NotFound,
        layout: UserLayout,
        exact: true
    }
];

export default routes;