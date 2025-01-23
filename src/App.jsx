import NavBar from "./components/NavBar";
import ThreeBackground from "./components/ThreeBackground";
import HeroSection from "./components/HeroSection";
import NumbersSection from "./components/NumbersSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import EducationAndExperience from "./components/EducationAndExperience";
import ProjectsSection from "./components/ProjectsSection";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
function App() {
  return (
    <>
      <ThreeBackground />
      <NavBar />
      <HeroSection />
      <NumbersSection />
      <ServicesSection/>
      <SkillsSection/>
      <EducationAndExperience/>
      <ProjectsSection/>
      <ContactUs/>
      <Footer/>
      <BackToTop/>
    </>
  );
}

export default App;