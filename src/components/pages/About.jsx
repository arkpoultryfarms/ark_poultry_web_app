import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { CheckCircleIcon, ArrowRightIcon } from 'lucide-react';
const About = () => {
  return <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] bg-cover bg-center" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
    }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Our Farm
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Learn about our story, our mission, and our commitment to
              sustainable poultry farming
            </p>
          </div>
        </div>
      </section>
      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Our Story" subtitle="From humble beginnings to industry leader" />
              <p className="text-gray-600 mb-6">
                FarmFresh Poultry began in 1995 when the Doe family purchased a
                small 50-acre property with the dream of creating a sustainable
                chicken farm. Starting with just 200 chickens, John and Mary Doe
                were committed to raising poultry in a humane, environmentally
                responsible way.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, our farm has grown to span over 200 acres, but
                our core values remain the same. We believe that happy, healthy
                chickens produce the best eggs and meat, and that sustainable
                farming practices are not just good for the environment, but
                good for business too.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be a leading supplier of premium poultry
                products to restaurants, grocery stores, and individual
                consumers throughout the region. Our commitment to quality,
                sustainability, and animal welfare continues to guide everything
                we do.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Our farm history" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Values" subtitle="What we stand for" center={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We are committed to environmentally responsible farming
                practices that conserve resources and minimize waste. Our farm
                operates on renewable energy and uses organic farming methods.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-3xl">🐔</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Animal Welfare
              </h3>
              <p className="text-gray-600">
                We believe in treating our chickens with care and respect. Our
                birds have access to outdoor areas, natural light, and plenty of
                space to move around freely.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. From our organic feed to our
                processing methods, every step is designed to ensure the highest
                quality poultry products.
              </p>
            </div>
            {/* Value 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Community
              </h3>
              <p className="text-gray-600">
                We're proud to support our local community through job creation,
                educational programs, and partnerships with local businesses and
                organizations.
              </p>
            </div>
            {/* Value 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Transparency
              </h3>
              <p className="text-gray-600">
                We believe in being open about our farming practices. That's why
                we offer farm tours and share detailed information about how we
                raise and care for our chickens.
              </p>
            </div>
            {/* Value 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-green-600 text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously research and implement new technologies and
                methods to improve our farming practices, efficiency, and
                environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Certifications Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionTitle title="Our Certifications" subtitle="Meeting the highest standards" />
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon size={24} className="text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">
                      Certified Organic
                    </h4>
                    <p className="text-gray-600">
                      Our farm meets all requirements for organic certification,
                      ensuring our products are free from harmful chemicals.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon size={24} className="text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">
                      Humane Certified
                    </h4>
                    <p className="text-gray-600">
                      Our animal welfare practices have been verified by
                      third-party auditors to meet or exceed industry standards.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon size={24} className="text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">
                      Non-GMO Project Verified
                    </h4>
                    <p className="text-gray-600">
                      Our feed and products have been verified to be produced
                      without genetically modified organisms.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon size={24} className="text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">
                      USDA Inspected
                    </h4>
                    <p className="text-gray-600">
                      Our processing facilities meet all USDA requirements for
                      food safety and quality.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">🌿</div>
                  <p className="font-bold text-gray-800">Organic</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">❤️</div>
                  <p className="font-bold text-gray-800">Humane</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">🌱</div>
                  <p className="font-bold text-gray-800">Non-GMO</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">✓</div>
                  <p className="font-bold text-gray-800">USDA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Farm Gallery Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Farm Gallery" subtitle="Take a visual tour of our facilities" center={true} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Farm gallery" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="https://images.unsplash.com/photo-1510627498534-cf7e9002facc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Farm gallery" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="https://images.unsplash.com/photo-1569127959161-2b1297b2d9a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Farm gallery" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="https://images.unsplash.com/photo-1598170845058-c2eec1a2c461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Farm gallery" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="https://images.unsplash.com/photo-1551887373-3c5bd224f6e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Farm gallery" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Farm gallery" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Farm gallery" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Farm gallery" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Visit Our Farm?
            </h2>
            <p className="text-xl mb-8">
              We offer guided tours of our facilities to schools, families, and
              interested individuals. Come see how we raise our chickens and
              produce our quality products.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-colors">
              Schedule a Tour
              <ArrowRightIcon size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default About;