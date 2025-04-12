import HeroComponent from "../components/HeroComponent.jsx";
import ServicesComponent from "../components/ServicesComponent.jsx";
import AboutSection from "../components/AboutSection.jsx";
import PricesSection from "../components/PricesSection.jsx";
import ReviewsSection from "../components/ReviewsSection.jsx";



export default function HomePage() {
    return (
        <>
            <HeroComponent/>
            <AboutSection/>
            <ServicesComponent/>
            <PricesSection/>
            <ReviewsSection/>
        </>
    )
}
