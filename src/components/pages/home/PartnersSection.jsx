import React from 'react';

import HomeSectionTitle from "@/components/ui/HomeSectionTitle";

const partners = [{
  name: 'EcoFarm Solutions',
  logo: 'https://via.placeholder.com/200x80?text=EcoFarm'
}, {
  name: 'GreenTech Agriculture',
  logo: 'https://via.placeholder.com/200x80?text=GreenTech'
}, {
  name: 'Harvest Innovations',
  logo: 'https://via.placeholder.com/200x80?text=Harvest'
}, {
  name: 'SoilPro Analytics',
  logo: 'https://via.placeholder.com/200x80?text=SoilPro'
}, {
  name: 'CropGuard Systems',
  logo: 'https://via.placeholder.com/200x80?text=CropGuard'
}, {
  name: 'AquaFlow Irrigation',
  logo: 'https://via.placeholder.com/200x80?text=AquaFlow'
}];
const PartnersSection = () => {
  return <section className="py-16 bg-gray-50" id="partners">
      <div className="mx-auto px-4 w-full relative">
        <div className="text-center mb-12">
          <h2 className="text-lg font-bold text-[#d57315] mb-2">
            OUR PARTNERS
          </h2>
          <HomeSectionTitle
            title="Leading the Way with Trusted Poultry Industry Partners"
            titleColor="gray-800"
            bgColor="[#d57315]"
            center={true}
          />
          <p className="max-w-2xl mx-auto text-gray-600">
            We collaborate with leading companies in the Poultry industry
            to bring you the most innovative and effective solutions for your
            needs.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center w-full lg:w-[85%] relative lg:absolute md:right-0 bg-[#d57315] p-4 z-10">
          {partners.map((partner, index) => <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-32">
              <img src={partner.logo} alt={partner.name} className="max-h-16 max-w-full" />
            </div>)}
        </div>
      </div>
    </section>;
};
export default PartnersSection;