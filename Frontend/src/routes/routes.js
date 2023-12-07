import { UserLayout } from "../layouts/userLayout/UserLayout";
import { Inicio, NotFound, OnceIdeal } from "../views";

const routes = [
    {
        path: "/",
        component: Inicio,
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