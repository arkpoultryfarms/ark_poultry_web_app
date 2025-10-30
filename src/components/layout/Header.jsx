"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Facebook, Twitter, Mail, Linkedin, Phone, ShoppingCart, ClipboardList } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    // { name: "Blog", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      {/* <div className="hidden md:flex items-center bg-[#232323] pl-12 2xl:pl-4 justify-between h-13">
        <span className="flex">
          <p>Your Trusted 24 Hours Service Provider!</p>
        </span>
        <span className="flex items-center h-full">
          <span className="flex items-center gap-5 mr-4">
            <Facebook size={18} />
            <Twitter size={18} />
            <Mail size={18} />
            <Linkedin size={18} />
          </span>
          <span className="bg-[#d57315] flex gap-2 items-center font-semibold h-full pl-5 pr-12 22xl:pr-4"><Phone size={18} /> <p>Talk To Expert : 0 (143) 456 7897</p></span>
        </span>
      </div> */}

      <header
        className={`transition-all duration-300 ${
          isScrolled ? 'fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3' : 'bg-white backdrop-blur-lg py-7'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="hidden md:flex items-center">
            <span className="text-2xl font-bold text-[#d57315]">
              <span className="text-white bg-[#d57315] p-1">Ark</span><span className="text-[#d57315]">Poultry</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-md font-semibold transition-colors hover:text-[#d57315] ${
                  pathname === link.path ? "text-[#d57315]" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* <div className="hidden md:flex gap-5 pl-5 border-l-2 border-gray-700 items-center">
              <Link
                href="/contact"
                className="text-gray-700 rounded-full bg-gray-100 p-3"
              >
                <ShoppingCart size={18} />
              </Link>

              <Link
                href="/contact"
                className="hidden sm:flex text-gray-700 rounded-full bg-gray-100 p-3"
              >
                <ClipboardList size={18} />
              </Link>
            </div> */}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link href="/" className="flex md:hidden items-center">
            <span className="text-2xl font-bold text-[#d57315]">
              <span className="text-white bg-[#d57315] p-1">Ark</span><span className="text-[#d57315]">Poultry</span>
            </span>
          </Link>

          <div className="md:hidden flex gap-4 pl-5 items-center">
            {/* <Link
              href="/contact"
              className="hidden md:flex text-gray-700 rounded-full bg-gray-100 p-2"
            >
              <ShoppingCart size={18} />
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 rounded-full bg-gray-100 p-2"
            >
              <ClipboardList size={18} />
            </Link> */}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-base font-medium transition-colors hover:text-[#d57315] ${
                    pathname === link.path ? "text-[#d57315]" : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/contact"
                className="inline-block px-5 py-2.5 bg-[#d57315] text-white font-medium hover:bg-[#d57315] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
