import NavBar from "./components/NavBar";
import ThreeBackground from "./components/ThreeBackground";
import HeroSection from "./components/HeroSection";
import NumbersSection from "./components/NumbersSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import EducationAndExperience from "./components/EducationAndExperience";
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
    </>
  )
}

export default App