"use client";

import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const FORMSUBMIT_ACTION = "https://formsubmit.co/info@arkpoultry.com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [formSubmitNext, setFormSubmitNext] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const url = new URL(window.location.href);
    if (url.searchParams.get("contact") === "sent") {
      setShowThankYou(true);
      url.searchParams.delete("contact");
      const path = url.pathname + (url.search || "");
      window.history.replaceState(null, "", `${path}#contact-form`);
    }

    const returnTo = `${window.location.origin}${window.location.pathname}?contact=sent`;
    setFormSubmitNext(returnTo);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact-form" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>
            <div className="bg-gray-50 p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-4">
                Our Locations
              </h4>
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <MapPin className="text-[#d57315]" size={24} />
                  </div>
                  <p className="text-gray-600 pt-1">
                    Lagos address: 21 Johnson Oguntuyo Street Atunrase Estate Gbagada Lagos
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <MapPin className="text-[#d57315]" size={24} />
                  </div>
                  <p className="text-gray-600 pt-1">
                    Oyo address: Lakonu Village, Off Oyo-Iseyin Road, Oyo Town Oyo State, Nigeria
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6">
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <Phone className="text-[#d57315]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">
                    Phone Number
                  </h4>
                  <p className="text-gray-600">Main: 09151151788</p>
                  <p className="text-gray-600">Support: 08062880195</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6">
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <Mail className="text-[#d57315]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">
                    Email Address
                  </h4>
                  <p className="text-gray-600">info@arkPoultry.com</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6">
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <Clock className="text-[#d57315]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">
                    Working Hours
                  </h4>
                  <p className="text-gray-600">
                    Weekdays 7am - 4pm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>

            {showThankYou ? (
              <div className="bg-[#f5cda7] border border-[#fcbd82] p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-[#d57315] mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">
                  Thank You!
                </h4>
                <p className="text-gray-600">
                  Your message has been sent successfully. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form
                action={FORMSUBMIT_ACTION}
                method="POST"
                className="bg-gray-50 text-gray-700 p-8"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Contact form — Ark Poultry website"
                />
                <input type="hidden" name="_template" value="table" />
                {formSubmitNext ? (
                  <input type="hidden" name="_next" value={formSubmitNext} />
                ) : null}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#d57315]"
                      required
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#d57315]"
                      required
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#d57315]"
                      placeholder="Phone Number"
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
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="services">Services Information</option>
                      <option value="quote">Request a Quote</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-3 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d57315]"
                    placeholder="Please describe how we can help you..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-6 py-3 bg-[#d57315] text-white font-semibold hover:bg-[#b35d12] transition-colors"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}