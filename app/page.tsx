import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import SkillsSection from '@/components/SkillsSection'
import WorksSection from '@/components/WorksSection'

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <WorksSection />
    </div>
  )
}