import HeroComponent from "../components/HeroComponent.jsx";
import ServicesComponent from "../components/ServicesComponent.jsx";
import AboutSection from "../components/AboutSection.jsx";



export default function HomePage() {
    return (
        <>
            <HeroComponent/>
            <AboutSection/>
            <ServicesComponent/>
        </>
    )
}
