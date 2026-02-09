import HeroSection from "@/components/AboutPage/HeroSection";
import ImageSection from "@/components/AboutPage/ImageSection";
import AboutSection from "../../components/AboutPage/AboutSection";
import About from "../../components/AboutPage/About";

export default function AboutPage() {
    return (
        <div>
            <HeroSection />
            <About />
            <AboutSection />
            <ImageSection />
        </div>
    );
}