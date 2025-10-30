"use client";

import Link from "next/link";
import HomeSectionTitle from "@/components/ui/HomeSectionTitle";
import { MessageCircleMore, UserStar, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white h-auto relative" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="overflow-hidden">
              <img
                src="/images/img12.jpg"
                alt="Farmers in field"
                className="w-full h-auto sm:h-[100vh] max-h-[542px] object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-6 -right-6 bg-[#d57315] text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm">Years of Experience</p>
            </div> */}
          </div>
          <div>
            <h2 className="text-md font-bold text-[#d57315] mb-2">ABOUT US</h2>
            <HomeSectionTitle
              title="Committed to Quality Poultry Products and Sustainable Farming"
              titleColor="gray-800"
              bgColor="[#d57315]"
              center={false}
            />
            <p className="text-gray-600 mb-6">
              At ArkPoultry Farm, we are dedicated to raising healthy birds and delivering premium poultry products through ethical and sustainable farming practices. With years of hands-on experience, our team combines modern farming technology with time-tested methods to ensure top-quality eggs, meat, and agricultural consulting services.
            </p>
            <p className="text-gray-600 mb-8">
              We believe that happy, well-cared-for chickens produce better results—for farmers, consumers, and the environment. Our commitment goes beyond production; we aim to empower farmers with the knowledge and tools to build resilient, efficient, and profitable poultry operations.
            </p>

            <div className="flex gap-3 md:gap-0 lg:items-center justify-left lg:justify-between flex-col lg:flex-row w-full lg:w-[80%] md:p-7 relative lg:absolute lg:right-8 lg:bottom-[13%] h-full lg:h-auto bg-white lg:shadow-md">
              <div className="flex items-center gap-2">
                <MessageCircleMore className="text-[#d57315] mr-2 mt-1 flex-shrink-0" size={60} />
                <span>
                  <h3 className="text-[20px] md:text-[25px] font-[600] text-gray-700">+234 9151 1517 88</h3>
                  <p className="text-gray-400 font-semibold text-sm">Get A Free Estimate</p>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <UserStar className="text-[#d57315] mr-2 mt-1 flex-shrink-0" size={60} />
                <span>
                  <h3 className="text-[20px] md:text-[25px] font-[600] text-gray-700">Users review</h3>
                  <p className="text-gray-400 font-semibold text-sm">Sustainable farming practices</p>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-[#d57315] mr-2 mt-1 flex-shrink-0" size={60} />
                <span>
                  <h3 className="text-[20px] md:text-[25px] font-[600] text-gray-700">Award</h3>
                  <p className="text-gray-400 font-semibold text-sm">Sustainable farming practices</p>
                </span>
              </div>
            </div>
            {/* <Link
              href="/about"
              className="inline-block px-6 py-3 bg-[#d57315] text-white font-medium rounded-md hover:bg-green-700 transition-colors"
            >
              Learn More About Us
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;