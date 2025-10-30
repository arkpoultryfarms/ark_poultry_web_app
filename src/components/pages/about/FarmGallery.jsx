import SectionTitle from "@/components/ui/SectionTitle";

export default function FarmGallery() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Farm Gallery" subtitle="Take a visual tour of our facilities" center={true} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img src="/images/img7.jpg" alt="Farm gallery" className="w-full h-64 object-cover shadow-md" />
            <img src="/images/img13.jpg" alt="Farm gallery" className="w-full h-64 object-cover shadow-md" />
            <img src="/images/img3.jpg" alt="Farm gallery" className="w-full h-64 object-cover shadow-md" />
            <img src="/images/img10.jpg" alt="Farm gallery" className="w-full h-64 object-cover shadow-md" />
            <img src="/images/img5.jpg" alt="Farm gallery" className="w-full h-64 object-cover shadow-md" />
            <img src="/images/img11.jpg" alt="Farm gallery" className="w-full h-64 object-cover shadow-md" />
            <img src="/images/img8.jpg" alt="Farm gallery" className="w-full h-64 object-cover shadow-md" />
            <img src="/images/img12.jpg" alt="Farm gallery" className="w-full h-64 object-cover shadow-md" />
          </div>
        </div>
    </section>
  );
}