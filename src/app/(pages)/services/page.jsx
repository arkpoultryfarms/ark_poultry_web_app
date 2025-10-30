import ServicesHero from "@/components/pages/services/ServicesHero";
import ServicesOverview from "@/components/pages/services/ServicesOverview";
import ServicesCTA from "@/components/pages/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <ServicesHero />
      <ServicesOverview />
      <ServicesCTA />
    </div>
  );
}