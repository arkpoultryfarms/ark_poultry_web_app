import AboutHero from "@/components/pages/about/AboutHero";
import OurStory from "@/components/pages/about/OurStory";
import OurValues from "@/components/pages/about/OurValues";
import Certifications from "@/components/pages/about/Certifications";
import FarmGallery from "@/components/pages/about/FarmGallery";
import VisitCTA from "@/components/pages/about/VisitCTA";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <AboutHero />
      <OurStory />
      <OurValues />
      <Certifications />
      <FarmGallery />
      <VisitCTA />
    </div>
  );
}
