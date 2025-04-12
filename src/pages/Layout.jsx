import HeaderComponent from "../components/HeaderComponent.jsx";
import {Outlet} from "react-router";
import FooterComponent from "../components/FooterComponent.jsx";

export default function Layout() {

    return (
        <div className="bg-white">
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    )
}