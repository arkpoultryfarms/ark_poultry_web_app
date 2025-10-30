"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isWakingUp, setIsWakingUp] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  // Function to check if server is awake
  const checkServerHealth = async (maxAttempts = 5) => {
    const healthUrl = 'https://email-service-pubv.onrender.com/health';
    
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const response = await fetch(healthUrl, {
          method: 'GET',
          signal: AbortSignal.timeout(10000) // 10 second timeout
        });
        
        if (response.ok) {
          return true;
        }
      } catch (error) {
        console.log(`Health check attempt ${attempt} failed:`, error.message);
        
        // Wait before retrying (exponential backoff)
        if (attempt < maxAttempts) {
          await new Promise(resolve => setTimeout(resolve, 2000 * attempt));
        }
      }
    }
    
    return false;
  };

  // Function to send email with retries
  const sendEmailWithRetry = async (data, maxAttempts = 3) => {
    const apiUrl = 'https://email-service-pubv.onrender.com/send-email';
    
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          signal: AbortSignal.timeout(15000) 
        });

        if (response.ok) {
          const result = await response.json();
          return { success: true, data: result };
        }

        const errorData = await response.json().catch(() => ({}));
        
        if (response.status >= 400 && response.status < 500) {
          return { 
            success: false, 
            error: errorData.message || 'Invalid request. Please check your information.' 
          };
        }

        if (attempt === maxAttempts) {
          return { 
            success: false, 
            error: errorData.message || 'Server error. Please try again later.' 
          };
        }

      } catch (error) {
        console.log(`Send email attempt ${attempt} failed:`, error.message);
        
        if (attempt === maxAttempts) {
          return { 
            success: false, 
            error: 'Network error. Please check your connection and try again.' 
          };
        }

        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setIsWakingUp(true);

    try {
      const isServerReady = await checkServerHealth();
      
      if (!isServerReady) {
        setError('Unable to connect to the email service. Please try again in a moment.');
        setIsSubmitting(false);
        setIsWakingUp(false);
        return;
      }

      setIsWakingUp(false);

      const result = await sendEmailWithRetry({
        fullname: formData.fullname,
        email: formData.email,
        service: formData.service,
        message: formData.message
      });

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          fullname: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 8000);
      } else {
        setError(result.error || 'Failed to send message. Please try again.');
      }

    } catch (error) {
      console.error('Unexpected error:', error);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
      setIsWakingUp(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>
            <div className="bg-gray-50 p-6">
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <MapPin className="text-[#d57315]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">
                    Our Location
                  </h4>
                  <p className="text-gray-600">Lakonu Village, Off Oyo-Iseyin Road, Oyo Town</p>
                  <p className="text-gray-600">Oyo State, Nigeria</p>
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
                  <p className="text-gray-600">sales@arkPoultry.com</p>
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

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 p-4 mb-6 rounded">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-red-700">{error}</p>
                </div>
              </div>
            )}

            {/* Success Message */}
            {isSubmitted ? (
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
              <form onSubmit={handleSubmit} className="bg-gray-50 text-gray-700 p-8">
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                {/* {isSubmitting && (
                  <div className="mb-4 text-center text-gray-600">
                    {isWakingUp ? (
                      <p className="text-sm">Connecting to email service...</p>
                    ) : (
                      <p className="text-sm">Sending your message...</p>
                    )}
                  </div>
                )} */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center w-full px-6 py-3 bg-[#d57315] text-white font-semibold hover:bg-[#b35d12] transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      {isWakingUp ? 'Connecting...' : 'Sending...'}
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}