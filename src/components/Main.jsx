import AboutSection from "./AboutSection";
import HeroSection from "./sections/HeroSection";
import HighlightSection from "./sections/HighlightSection";
import Testimonials from "./sections/Testimonials";
const Main = () => {
    return(
        <main>
            <HeroSection /> 
            <HighlightSection />
            <Testimonials/>
            <AboutSection/>
        </main>
    );
}

export default Main;