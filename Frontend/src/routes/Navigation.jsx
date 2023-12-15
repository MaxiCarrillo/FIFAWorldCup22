import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import routes from "./routes";
import routesAdmin from "./admin.routes";
import { map } from "lodash";

export function Navigation() {

    const { auth } = useAuth();

    if (auth) return (
        <BrowserRouter>
            <Routes>
                {
                    map(routesAdmin, (route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <route.layout>
                                    <route.component />
                                </route.layout>}
                        />
                    ))
                }
            </Routes>
        </BrowserRouter>
    );

    return (
        <BrowserRouter>
            <Routes>
                {
                    map(routes, (route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <route.layout>
                                    <route.component />
                                </route.layout>}
                        />
                    ))
                }
            </Routes>
        </BrowserRouter>
    );
}