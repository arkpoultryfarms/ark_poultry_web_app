import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#232323] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl border-l-8 pl-2 border-[#d57315] font-bold text-white">
                Ark<span className="text-[#d57315]">Poultry</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-6">
              Quality poultry farming with sustainable practices. Providing the freshest eggs and premium chicken products.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-[#d57315] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#d57315] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#d57315] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#d57315] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg border-l-8 pl-2 border-[#d57315] font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#d57315] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-[#d57315] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#d57315] transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-[#d57315] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[#d57315] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg border-l-8 pl-2 border-[#d57315] font-semibold mb-4 text-white">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#d57315] transition-colors"
                >
                  Egg Production
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#d57315] transition-colors"
                >
                  Meat Distribution
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#d57315] transition-colors"
                >
                  Poultry Supply
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#d57315] transition-colors"
                >
                  Farm Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#d57315] transition-colors"
                >
                  Organic Feed
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg border-l-8 pl-2 border-[#d57315] font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="mr-2 mt-1 text-[#d57315] flex-shrink-0"
                />
                <span className="text-gray-300">
                  Lakonu Village, Off Oyo-Iseyin Road, Oyo Town Oyo State Nigeria
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={20}
                  className="mr-2 text-[#d57315] flex-shrink-0"
                />
                <span className="text-gray-300">09151151788</span>
              </li>
              <li className="flex items-center">
                <Mail
                  size={20}
                  className="mr-2 text-[#d57315] flex-shrink-0"
                />
                <span className="text-gray-300">sales@arkPoultry.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} arkpoultry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
