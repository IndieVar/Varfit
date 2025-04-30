import {createBrowserRouter, createRoutesFromElements, Route} from "react-router";
import HomePage from "../src/pages/HomePage.jsx";
import Layout from "../src/pages/Layout.jsx";
import NotFoundPage from "../src/pages/NotFoundPage.jsx";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Layout/>} errorElement={<NotFoundPage/>}>
                <Route path="/" element={<HomePage/>}/>
            </Route>
        </>
    )
)