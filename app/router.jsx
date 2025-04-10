import {createBrowserRouter} from "react-router";
import Home from "../src/pages/Home.jsx";
import About from "../src/pages/About.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Home
    },
    {
        path: "/about",
        Component: About
    },
]);

export default router;