import HeroComponent from "../components/home/HeroComponent.jsx";
import ServicesComponent from "../components/home/ServicesComponent.jsx";
import AboutSection from "../components/home/AboutSection.jsx";
import PricesSection from "../components/home/PricesSection.jsx";
import ReviewsSection from "../components/home/ReviewsSection.jsx";
import ContactsSection from "../components/home/ContactsSection.jsx";

// export function meta({}: Route.MetaArgs) {
//     return [
//         {title: "FitHub home page", url: "/"},
//         {name: "description", content: "Welcome to FitHub!"},
//     ];
// }

export default function HomePage() {
    return (
        <>
            <HeroComponent/>
            <AboutSection/>
            <ServicesComponent/>
            <PricesSection/>
            <ReviewsSection/>
            <ContactsSection/>
        </>
    )
}
