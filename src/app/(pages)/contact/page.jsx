import ContactHero from "@/components/pages/contact/ContactHero";
import ContactForm from "@/components/pages/contact/ContactForm";
import ContactMap from "@/components/pages/contact/ContactMap";

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </div>
  );
}