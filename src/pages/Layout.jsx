import HeaderComponent from "../components/HeaderComponent.jsx";
import {Outlet} from "react-router";

export default function Layout() {

    return (
        <div className="bg-white">
            <HeaderComponent/>
            <Outlet/>
        </div>
    )
}