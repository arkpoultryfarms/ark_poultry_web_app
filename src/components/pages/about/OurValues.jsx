import SectionTitle from "@/components/ui/SectionTitle";

export default function OurValues() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Values" subtitle="What we stand for" center={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 shadow-md">
              <div className="w-16 h-16 bg-[#f5cda7] rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We operate with a deep respect for the environment, using eco-friendly and resource-efficient farming practices. From renewable energy systems to organic feed production, sustainability is at the heart of our operations.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-white p-8 shadow-md">
              <div className="w-16 h-16 bg-[#f5cda7] rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-3xl">🐔</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Animal Welfare
              </h3>
              <p className="text-gray-600">
                Our birds are raised in clean, spacious, and stress-free environments. We ensure every chicken has access to natural light, open-air runs, and nutritious, chemical-free feed.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-white p-8 shadow-md">
              <div className="w-16 h-16 bg-[#f5cda7] rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality</h3>
              <p className="text-gray-600">
                From hatch to harvest, we maintain the highest quality standards. Every product we deliver undergoes strict hygiene, safety, and nutritional checks to ensure excellence at every stage.
              </p>
            </div>
            {/* Value 4 */}
            <div className="bg-white p-8 shadow-md">
              <div className="w-16 h-16 bg-[#f5cda7] rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Community
              </h3>
              <p className="text-gray-600">
                We’re proud to empower our local community by creating jobs, supporting local suppliers, and providing agricultural education programs that promote self-sufficiency and innovation.
              </p>
            </div>
            {/* Value 5 */}
            <div className="bg-white p-8 shadow-md">
              <div className="w-16 h-16 bg-[#f5cda7] rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Transparency
              </h3>
              <p className="text-gray-600">
                We believe our customers have the right to know how their food is produced. That’s why we welcome farm visits and share honest insights into our processes and farming methods.
              </p>
            </div>
            {/* Value 6 */}
            <div className="bg-white p-8 shadow-md">
              <div className="w-16 h-16 bg-[#f5cda7] rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously research and adopt new technologies to improve farm efficiency, reduce waste, and enhance both product quality and animal well-being.
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}