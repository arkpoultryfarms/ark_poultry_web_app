import Link from "next/link";
import {
  Egg,
  Drumstick,
  LineChart,
  Tractor,
  Activity,
  Binoculars,
  Check,
} from "lucide-react";

const services = [{
  id: 'egg-production',
  icon: <Egg size={48} className="text-[#d57315]" />,
  title: 'Egg Production',
  description: 'Our premium-quality eggs come from well-nurtured hens raised under healthy and humane conditions. Whether you’re a retailer, wholesaler, or household customer, we guarantee freshness and consistency in every crate.',
  features: ['Fresh, organically fed poultry eggs', 'Multiple size and packaging options', 'Competitive wholesale pricing', 'Reliable, scheduled deliveries'],
  image: '/images/img1.jpg'
}, {
  id: 'meat-distribution',
  icon: <Drumstick size={48} className="text-[#d57315]" />,
  title: 'Meat Distribution',
  description: 'We ensure that our farm-fresh poultry meat reaches you on time and in perfect condition. Our distribution network is built on efficiency, hygiene, and traceability from farm to table.',
  features: ['Whole chickens and cut portions', 'Nationwide cold-chain delivery network', 'Flexible delivery schedules', 'Real-time tracking and updates'],
  image: '/images/img6.jpg'
}, {
  id: 'poultry-supply',
  icon: <LineChart size={48} className="text-[#d57315]" />,
  title: 'Poultry Supply',
  description: 'We support both new and experienced farmers with everything needed to run a successful poultry operation. From quality chicks to reliable feed and equipment, we are your trusted partner in farm growth.',
  features: ['Diverse breeds of healthy day-old chicks', 'Premium organic and hybrid feed', 'Modern poultry equipment and accessories', 'Bulk discounts available'],
  image: '/images/img8.jpg'
}, {
  id: 'farm-consulting',
  icon: <Tractor size={48} className="text-[#d57315]" />,
  title: 'Farm Consulting',
  description: 'Our experts work closely with farmers to develop customized poultry management plans that drive efficiency and improve flock health. We combine technical expertise with practical insights for measurable results.',
  features: ['Feed and nutrient management programs', 'Biosecurity and disease control planning', 'Housing design and environmental optimization', 'Productivity and profitability audits'],
  image: '/images/img13.jpg'
}, {
  id: 'organic-feed-production',
  icon: <Activity size={48} className="text-[#d57315]" />,
  title: 'Organic Feed Production',
  description: 'Our organic feed solutions are developed to support natural growth and enhance bird health without harmful additives. We also help farmers transition to organic production systems with expert guidance and certification support.',
  features: ['Organic feed formulation and supply', 'Natural pest and disease control methods', 'Organic certification and compliance assistance', 'Sustainable soil and nutrient management programs'],
  image: '/images/img7.jpg'
}, {
  id: 'farm-tours',
  icon: <Binoculars size={48} className="text-[#d57315]" />,
  title: 'Farm Tours',
  description: 'Experience modern poultry farming up close with our guided farm tours. Designed for students, families, and agricultural enthusiasts, our tours provide an engaging and educational look into sustainable poultry operations.',
  features: ['Guided behind-the-scenes facility tours', 'Live demonstrations of sustainable farming', 'Q&A sessions with our experts', 'Educational resources and farm-to-table insights'],
  image: '/images/img4.jpg'
}];

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Comprehensive Agricultural Solutions
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              At ArkPoultry Farm, we provide a full range of services designed to help farmers enhance productivity, sustainability, and profitability. From quality poultry products to expert consulting, we bring innovation and excellence to every stage of your farming journey.
            </p>
          </div>
          {services.map((service, index) => <div key={service.id} id={service.id} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
              <div className="container mx-auto px-4">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="mb-6">{service.icon}</div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => <div key={idx} className="flex items-start">
                          <Check className="text-[#d57315] mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>)}
                    </div>
                    <Link href="/contact" className="inline-block px-6 py-3 bg-[#d57315] text-white text-sm font-semibold hover:bg-[#d57315] transition-colors">
                      Inquire About This Service
                    </Link>
                  </div>
                  <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <img src={service.image} alt={service.title} className="shadow-lg w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>)}
        </div>
    </section>
  );
}