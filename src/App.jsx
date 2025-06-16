import NavbarMain from './components/navbar/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'
import SubHero from './components/heroSection/SubHero'
import AboutMain from './components/aboutSection/AboutMain'
import HelperSection from './components/HelperSection'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'
import ExpMain from './components/experienceSection/expMain'
import ProjectsMain from './components/projectsSection/ProjectsMain'
import ContactMain from './components/contactSection/ContactMain'
import FooterMain from './components/footer/FooterMain'
function App() {

  return (
    <main className='font-body'>
      <NavbarMain />
      <HeroMain />
      <SubHero />
      <AboutMain />
      <SkillsMain />
      <SubSkills />
      <ExpMain />
      <ProjectsMain />
      <ContactMain />
      <FooterMain />
    </main>
  )
}

export default App
