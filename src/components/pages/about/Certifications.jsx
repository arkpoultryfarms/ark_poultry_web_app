import SectionTitle from "@/components/ui/SectionTitle";
import { CheckCircleIcon } from 'lucide-react';

export default function Certifications() {
  return (
    <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionTitle title="Our Certifications" subtitle="Meeting the Highest Industry Standards" />
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon size={24} className="text-[#d57315] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">
                      Certified Organic
                    </h4>
                    <p className="text-gray-600">
                      Our operations meet all recognized organic farming standards — ensuring our products are naturally raised and free from harmful additives.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon size={24} className="text-[#d57315] mr-3 flex-shrink-0 mt-1" />
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
                  <CheckCircleIcon size={24} className="text-[#d57315] mr-3 flex-shrink-0 mt-1" />
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
                  <CheckCircleIcon size={24} className="text-[#d57315] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">
                      National Food Safety Inspected
                    </h4>
                    <p className="text-gray-600">
                      Our processing facilities are regularly inspected and certified for food safety, hygiene, and quality assurance.
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
                  <p className="font-bold text-gray-800">NAFDAC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}