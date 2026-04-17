"use client"
import React, { useState, useEffect } from 'react';
import HomeSectionTitle from "@/components/ui/HomeSectionTitle";
import { Send, Handshake, UserStar, Award, Egg } from 'lucide-react';

const FORMSUBMIT_ACTION = 'https://formsubmit.co/info@arkpoultry.com';

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [formSubmitNext, setFormSubmitNext] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const url = new URL(window.location.href);
    if (url.searchParams.get('quote') === 'sent') {
      setShowThankYou(true);
      url.searchParams.delete('quote');
      const path = url.pathname + (url.search || '');
      window.history.replaceState(null, '', `${path}#quote`);
    }

    const returnTo = `${window.location.origin}${window.location.pathname}?quote=sent`;
    setFormSubmitNext(returnTo);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="bg-white text-white" id="quote">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center relative top-40">
          <div className=''>
            <img
              src="/images/img14.jpg"
              alt="Farmers in field"
              className="w-full h-auto sm:h-[100vh] object-cover"
            />
          </div>
          <div className="bg-gray-50 md:mr-15 z-10 text-gray-800 p-8 py-15 shadow-md">
            {showThankYou ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f5cda7] text-[#d57315] mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">
                  Thank You!
                </h4>
                <p className="text-gray-600">
                  Your quote request has been submitted successfully. One of our
                  experts will contact you shortly.
                </p>
              </div>
            ) : (
              <>
                <HomeSectionTitle
                  title="Request a Quote"
                  titleColor="gray-800"
                  bgColor="[#d57315]"
                  center={false}
                />
                <form
                  action={FORMSUBMIT_ACTION}
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="New quote request — Ark Poultry website"
                  />
                  <input
                    type="hidden"
                    name="_template"
                    value="table"
                  />
                  {formSubmitNext ? (
                    <input type="hidden" name="_next" value={formSubmitNext} />
                  ) : null}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <input
                        type="text"
                        placeholder='Full Name *'
                        id="fullname"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        className="w-full px-3 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#d57315]"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder='Email Address *'
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#d57315]"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <input
                        type="tel"
                        placeholder='Phone Number'
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#d57315]"
                      />
                    </div>
                    <div>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#d57315]"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="crop-management">Crop Management</option>
                        <option value="irrigation">Irrigation Solutions</option>
                        <option value="analytics">Farm Analytics</option>
                        <option value="soil-testing">Soil Testing</option>
                        <option value="organic">Organic Farming</option>
                        <option value="training">Agricultural Training</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <textarea
                      id="message"
                      placeholder='Tell us about your specific needs...'
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 py-3 border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d57315]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-4 bg-[#232323] text-white font-medium hover:bg-[#d57315] transition-colors"
                  >
                    <Send size={18} className="mr-2" />
                    Submit Quote Request
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <div className='pt-45 lg:pt-65 pb-20 w-full px-4 bg-[#d57315]'>
        <div className='md:container flex-col lg:flex-row md:mx-auto flex justify-between items-center gap-4'>
          <div className='flex items-center gap-2 p-5 bg-white/20 w-full'>
            <UserStar size={60} className="mr-2" />
            <span>
              <h3 className='text-[32px] font-semibold'>478</h3>
              <p className="font-semibold text-sm">Happy Customers</p>
            </span>
          </div>

          <div className='flex items-center gap-2 p-5 bg-white/20 w-full'>
            <Handshake size={60} className="mr-2" />
            <span>
              <h3 className='text-[32px] font-semibold'>50k+</h3>
              <p className="font-semibold text-sm">raised chickens</p>
            </span>
          </div>

          <div className='flex items-center gap-2 p-5 bg-white/20 w-full'>
            <Egg size={60} className="mr-2" />
            <span>
              <h3 className='text-[32px] font-semibold'>15k+</h3>
              <p className="font-semibold text-sm">weekly egg production</p>
            </span>
          </div>

          <div className='flex items-center gap-2 p-5 bg-white/20 w-full'>
            <Award size={60} className="mr-2" />
            <span>
              <h3 className='text-[32px] font-semibold'>10</h3>
              <p className="font-semibold text-sm">Awards</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;