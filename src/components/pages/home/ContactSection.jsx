import React from 'react';
import HomeSectionTitle from "@/components/ui/HomeSectionTitle";
import { MapPin, Phone, Mail, MessageCircleMore, Clock } from 'lucide-react';
const ContactSection = () => {
  return <section className="pt-20 pb-5 relative" style={{ backgroundImage: `url(/images/img3.jpg)` }} id="contact">
      <div className="absolute inset-0 bg-black opacity-90" />
      
      <div className="relative container mx-auto px-4 py-20 inset-1 z-20">
        <div className="text-center mb-16">
          <div className="text-center mb-12">
            <h2 className="text-xl font-bold text-[#d57315] mb-2">
              Company
            </h2>
            <HomeSectionTitle
              title="Get in Touch with Our Poultry Experts Today"
              titleColor="white"
              bgColor="[#d57315]"
              center={true}
            />
            <p className="max-w-3xl mx-auto my-8 text-white">
              We collaborate with leading companies in the Poultry industry
              to bring you the most innovative and effective solutions for your
              needs.
            </p>
          </div>

          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='w-full'>
              <input type="text" placeholder='Your Name' className='px-6 py-7 w-full bg-white/20' required />
            </div>

            <div className='w-full'>
              <input type="text" placeholder='Your Name' className='px-6 py-7 w-full bg-white/20' required />
            </div>

            <div className='w-full'>
              <select id="service" name="service" className="px-6 py-7 w-full bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#d57315]" required>
                <option value="" className='text-gray-700'>Select</option>
                <option value="crop-management" className='text-gray-700'>Crop Management</option>
                <option value="irrigation" className='text-gray-700'>Irrigation Solutions</option>
                <option value="analytics" className='text-gray-700'>Farm Analytics</option>
                <option value="soil-testing" className='text-gray-700'>Soil Testing</option>
                <option value="organic" className='text-gray-700'>Organic Farming</option>
                <option value="training" className='text-gray-700'>Agricultural Training</option>
                <option value="other" className='text-gray-700'>Other</option>
              </select>
            </div>

            <button className='w-full px-6 py-7 bg-[#d57315] text-white font-bold hover:bg-[#d57315]'>Let's Talk</button>
          </div>
          

          <div className='flex flex-col md:flex-row gap-12 md:gap-25 md:items-center justify-center pt-20'>
            <div className="flex items-center gap-2">
              <MessageCircleMore className="text-[#d57315] mr-2 mt-1 flex-shrink-0" size={60} />
              <span className='flex flex-col text-left'>
                <h3 className="text-[20px] md:text-[25px] text-white font-semibold">What's App</h3>
                <p className="text-[#d57315] font-semibold text-sm">+2349151151788</p>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="text-[#d57315] mr-2 mt-1 flex-shrink-0" size={60} />
              <span className='flex flex-col text-left'>
                <h3 className="text-[20px] md:text-[25px] text-white font-semibold">Email</h3>
                <p className="text-[#d57315] font-semibold text-sm">info@arkpoultry.com</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;