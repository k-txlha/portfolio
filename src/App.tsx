import SiteHeader from "./components/SiteHeader";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ToolkitSection from "./components/ToolkitSection";
import EducationSection from "./components/EducationSection";
import ContactFooter from "./components/ContactFooter";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  return (
    <>
      <LoadingScreen />
      <SiteHeader />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <ToolkitSection />
        <EducationSection />
        <ContactFooter />
      </main>
    </>
  );
}
