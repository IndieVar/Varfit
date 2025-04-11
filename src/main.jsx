import * as React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import {router} from "../app/router.jsx";

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <React.Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router}/>
        </React.Suspense>
    </React.StrictMode>
)
