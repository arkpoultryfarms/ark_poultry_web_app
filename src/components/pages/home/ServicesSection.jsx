"use client";

import HomeSectionTitle from "@/components/ui/HomeSectionTitle";
import Link from "next/link";
import {
  Egg,
  Drumstick,
  LineChart,
  Tractor,
  Activity,
  Binoculars,
} from "lucide-react";

const services = [
  {
    icon: <Egg size={60} className="text-[#d57315]" />,
    title: "Egg Production",
    description:
      "We produce premium-quality eggs from healthy, free-range chickens. Available in various sizes and packaging options, our eggs are supplied to both retail and wholesale customers who value freshness and nutrition.",
    link: "/services#crop-management",
  },
  {
    icon: <Drumstick size={60} className="text-[#d57315]" />,
    title: "Meat Distribution",
    description:
      "Our farm-fresh chicken meat is processed under strict hygiene and safety standards, ensuring premium taste and quality. We supply restaurants, grocery stores, and individual customers with reliable, timely deliveries.",
    link: "/services#irrigation",
  },
  // {
  //   icon: <LineChart size={60} className="text-[#d57315]" />,
  //   title: "Poultry Supply",
  //   description:
  //     "We provide high-quality chicks, feed, and equipment for farmers looking to start or expand their poultry operations.",
  //   link: "/services#analytics",
  // },
  {
    icon: <Tractor size={60} className="text-[#d57315]" />,
    title: "Farm Consulting",
    description:
      "Our team of experts offers personalized farm consulting services, including poultry management, facility design, feed optimization, and sustainable operation strategies to help you grow efficiently.",
    link: "/services#soil-testing",
  },
  // {
  //   icon: <Activity size={60} className="text-[#d57315]" />,
  //   title: "Organic Feed",
  //   description:
  //     "We produce and sell high-quality organic feed for poultry, formulated to provide optimal nutrition and promote health.",
  //   link: "/services#organic",
  // },
  {
    icon: <Binoculars size={60} className="text-[#d57315]" />,
    title: "Farm Tours",
    description:
      "Experience sustainable poultry farming firsthand with our educational farm tours. Ideal for schools, families, and agricultural enthusiasts, these tours offer an inside look into modern, ethical poultry production.",
    link: "/services#training",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-[#232323]" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-md font-bold text-[#d57315] mb-2">
            OUR SERVICES
          </h2>
          <HomeSectionTitle
            title="Comprehensive Poultry Solutions Tailored to Your Needs"
            titleColor="white"
            bgColor="[#d57315]"
            center={true}
          />
          <p className="max-w-2xl mx-auto text-[#ffffffbf]">
            At ArkPoultry Farm, we provide a full range of poultry services designed to enhance farm productivity, promote sustainability, and boost profitability through innovative agricultural practices and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#00000026] flex flex-col items-center text-center p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h4 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h4>
              <p className="text-white mb-4 text-[#ffffffbf]">{service.description}</p>
              {/* <Link
                href={service.link}
                className="inline-flex items-center text-[#d57315] font-medium hover:text-green-700"
              >
                Learn more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link> */}
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block px-8 py-3 bg-[#d57315] text-white font-medium rounded-md hover:bg-green-700 transition-colors"
          >
            View All Services
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;
