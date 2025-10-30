import SectionTitle from "@/components/ui/SectionTitle";

export default function OurStory() {
  return (
    <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Our Story" subtitle="From Humble Beginnings to a Leader in Poultry Excellence" />
              <p className="text-gray-600 mb-6">
                ArkPoultry Farm was founded with a simple but powerful mission — to produce quality poultry products through ethical and sustainable farming practices. What started as a modest family-run venture with just a few hundred birds has now grown into one of the region’s most trusted providers of farm-fresh poultry and agricultural consulting services.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, our dedication to animal welfare, sustainable methods, and food quality has remained the foundation of our success. We believe that healthy, well-cared-for birds produce the best eggs and meat, and that responsible farming benefits both the community and the environment.
              </p>
              <p className="text-gray-600">
                Today, ArkPoultry proudly supplies premium poultry products to households, restaurants, and markets across the country — while continuing to innovate and set new standards for excellence in modern agriculture.
              </p>
            </div>
            <div className="overflow-hidden shadow-xl">
              <img src="/images/img9.jpg" alt="Our farm history" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
    </section>
  );
}