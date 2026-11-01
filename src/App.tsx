import SiteHeader from "./components/SiteHeader";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ToolkitSection from "./components/ToolkitSection";
import EducationSection from "./components/EducationSection";
import ContactFooter from "./components/ContactFooter";

export default function App() {
  return (
    <>
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
