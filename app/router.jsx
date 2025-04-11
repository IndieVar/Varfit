import {createBrowserRouter, createRoutesFromElements, Route} from "react-router";
import HomePage from "../src/pages/HomePage.jsx";
import Layout from "../src/pages/Layout.jsx";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Layout/>}>
                <Route path="/" element={<HomePage/>}/>
            </Route>
        </>
    )
)