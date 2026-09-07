"use client";

import { useEffect, useState } from 'react';
import HomeSectionTitle from "@/components/ui/HomeSectionTitle";
import { MapPin, Phone, Mail, MessageCircleMore, Clock, Send } from 'lucide-react';
import Recaptcha, { RECAPTCHA_ENABLED } from "@/components/ui/Recaptcha";

const FORMSUBMIT_ACTION = "https://formsubmit.co/info@arkpoultry.com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    service: "",
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [formSubmitNext, setFormSubmitNext] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const url = new URL(window.location.href);
    if (url.searchParams.get("talk") === "sent") {
      setShowThankYou(true);
      url.searchParams.delete("talk");
      const path = url.pathname + (url.search || "");
      window.history.replaceState(null, "", `${path}#contact`);
    }

    const returnTo = `${window.location.origin}${window.location.pathname}?talk=sent`;
    setFormSubmitNext(returnTo);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    if (RECAPTCHA_ENABLED && !captchaVerified) {
      e.preventDefault();
      setCaptchaError(true);
    }
  };

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

          {showThankYou ? (
            <div className="bg-[#f5cda7] border border-[#fcbd82] p-6 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-[#d57315] mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">
                Thank You!
              </h4>
              <p className="text-gray-700">
                Your message has been sent successfully. We'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form action={FORMSUBMIT_ACTION} method="POST" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="Let's Talk — Ark Poultry website" />
              <input type="hidden" name="_template" value="table" />
              {formSubmitNext ? (
                <input type="hidden" name="_next" value={formSubmitNext} />
              ) : null}

              <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                <div className='w-full'>
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder='Your Name'
                    className='px-6 py-7 w-full bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#d57315]'
                    required
                  />
                </div>

                <div className='w-full'>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Your Email'
                    className='px-6 py-7 w-full bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#d57315]'
                    required
                  />
                </div>

                <div className='w-full'>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="px-6 py-7 w-full bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#d57315]"
                    required
                  >
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

                <button
                  type="submit"
                  className='w-full px-6 py-7 bg-[#d57315] text-white font-bold hover:bg-[#b35d12] transition-colors flex items-center justify-center gap-2'
                >
                  <Send size={18} />
                  Let's Talk
                </button>
              </div>

              <div className="flex flex-col items-center mt-6">
                <Recaptcha
                  onChange={(verified) => {
                    setCaptchaVerified(verified);
                    if (verified) setCaptchaError(false);
                  }}
                />
                {captchaError && (
                  <p className="text-red-400 text-sm mt-2">
                    Please verify you're not a robot before submitting.
                  </p>
                )}
              </div>
            </form>
          )}


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