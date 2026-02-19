import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import richaLogo from "../assets/images/richa logo.png";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const [isOverHero, setIsOverHero] = useState(true);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Only check hero state on home page
    if (location.pathname !== "/") {
      setIsOverHero(false);
      return;
    }

    const heroEl = document.getElementById("hero-section");
    if (!heroEl) return;

    const updateState = () => {
      const rect = heroEl.getBoundingClientRect();
      const heroTop = window.scrollY + rect.top;
      const heroBottom = heroTop + rect.height;
      const navHeight = document.querySelector("nav")?.offsetHeight || 0;
      const currentScroll = window.scrollY;
      // Stay in "over hero" state until navbar fully clears the hero
      setIsOverHero(currentScroll + navHeight < heroBottom);
      // Hide nav when scrolling up, show when scrolling down
      const scrollingDown = currentScroll > lastScrollY.current;
      // Always show near top to avoid jitter
      const nearTop = currentScroll < 10;
      // Show while scrolling up (or near top), hide while scrolling down
      setIsNavVisible(!scrollingDown || nearTop);
      lastScrollY.current = currentScroll;
    };

    updateState();
    window.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      window.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [location.pathname]);

  const navItems = [
    { label: "Home", href: "/", isRoute: true },
    {
      label: "About Us",
      href: "/about-us",
      isRoute: true,
      dropdown: [
        { label: "Company Overview", href: "/about-us", isRoute: true },
        { label: "Our History", href: "/about-us", isRoute: true },
        { label: "Leadership Team", href: "#about-leadership", isRoute: false },
        { label: "Mission & Vision", href: "#about-mission", isRoute: false },
      ],
    },
    {
      label: "Textiles",
      href: "/textiles",
      isRoute: true,
      dropdown: [
        { label: "Product Category 1", href: "#products-category1" },
        { label: "Product Category 2", href: "#products-category2" },
        { label: "Product Category 3", href: "#products-category3" },
        { label: "All Products", href: "#products-all" },
      ],
    },
    {
      label: "PEB",
      href: "/peb",
      isRoute: true,
      dropdown: [
        { label: "Service 1", href: "#services-1" },
        { label: "Service 2", href: "#services-2" },
        { label: "Service 3", href: "#services-3" },
        { label: "Custom Solutions", href: "#services-custom" },
      ],
    },
    {
      label: "Sustainability",
      href: "#industries",
      dropdown: [
        { label: "Manufacturing", href: "#industries-manufacturing" },
        { label: "Automotive", href: "#industries-automotive" },
        { label: "Aerospace", href: "#industries-aerospace" },
        { label: "Healthcare", href: "#industries-healthcare" },
      ],
    },
    { label: "Quality and Safety", href: "#" },
    { label: "Careers", href: "/career", isRoute: true },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href, isRoute = false) => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
    // If it's a route, navigation will be handled by Link component
    // If it's an anchor link, smooth scroll to section
    if (!isRoute && href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleMobileDropdown = (index) => {
    setOpenMobileDropdown(openMobileDropdown === index ? null : index);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[99999] transition-all duration-300 border-b ${
        isOverHero
          ? "bg-white backdrop-blur-lg border-black/40 !text-white"
          : "bg-white shadow-md border-neutral-200 !text-neutral-900"
      } ${isNavVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo on the left */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={richaLogo}
                alt="Richa Industries Limited"
                className="h-10 sm:h-12 w-auto object-contain cursor-pointer"
              />
              <span
                className={`font-OnStageSerial font-bold text-sm sm:text-base md:text-2xl tracking-wide ${
                  isOverHero ? "text-[#BB2929]" : "text-[#BB2929]"
                }`}
              >
                RICHA INDUSTRIES LIMITED
              </span>
            </Link>
          </div>

          {/* Desktop Navigation items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    onClick={() => handleNavClick(item.href, true)}
                    className={`font-EireneSansRegular text-sm sm:text-base font-light relative inline-block transition-colors duration-200 ${
                      isOverHero
                        ? "text-black hover:text-[#BB2929]"
                        : "!text-neutral-900 hover:!text-[#BB2929]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, false);
                    }}
                    className={`font-NueueMontreal text-sm sm:text-base font-light relative inline-block transition-colors duration-200 ${
                      isOverHero
                        ? "text-black hover:text-[#BB2929]"
                        : "!text-neutral-900 hover:!text-[#BB2929]"
                    }`}
                  >
                    {item.label}
                  </a>
                )}

                {/* Dropdown Menu - Desktop */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-black/95 backdrop-blur-md rounded-lg shadow-xl border border-white/10 overflow-hidden">
                      {item.dropdown.map((dropdownItem, dropdownIndex) =>
                        dropdownItem.isRoute ? (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.href}
                            onClick={() =>
                              handleNavClick(dropdownItem.href, true)
                            }
                            className="block px-4 py-3 text-sm font-NueueMontreal font-light text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 border-b border-white/5 last:border-b-0"
                          >
                            {dropdownItem.label}
                          </Link>
                        ) : (
                          <a
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(dropdownItem.href, false);
                            }}
                            className="block px-4 py-3 text-sm font-NueueMontreal font-light text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 border-b border-white/5 last:border-b-0"
                          >
                            {dropdownItem.label}
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            style={{ color: isOverHero ? "white" : "black" }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 sm:top-20 left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 max-h-[calc(100vh-4rem)] overflow-y-auto ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto px-4 py-6 space-y-2">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleMobileDropdown(index)}
                    className="w-full flex items-center justify-between font-NueueMontreal text-base font-light text-white/90 hover:text-white transition-colors duration-200 py-3 border-b border-white/10"
                  >
                    <span>{item.label}</span>
                    <FaChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openMobileDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {/* Mobile Dropdown Items */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openMobileDropdown === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 py-2 space-y-1">
                      {item.dropdown.map((dropdownItem, dropdownIndex) =>
                        dropdownItem.isRoute ? (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.href}
                            onClick={() =>
                              handleNavClick(dropdownItem.href, true)
                            }
                            className="block font-NueueMontreal text-sm font-light text-white/70 hover:text-white transition-colors duration-200 py-2 border-b border-white/5 last:border-b-0"
                          >
                            {dropdownItem.label}
                          </Link>
                        ) : (
                          <a
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(dropdownItem.href, false);
                            }}
                            className="block font-NueueMontreal text-sm font-light text-white/70 hover:text-white transition-colors duration-200 py-2 border-b border-white/5 last:border-b-0"
                          >
                            {dropdownItem.label}
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                </>
              ) : item.isRoute ? (
                <Link
                  to={item.href}
                  onClick={() => handleNavClick(item.href, true)}
                  className="block font-NueueMontreal text-base font-light text-white/90 hover:text-white transition-colors duration-200 py-3 border-b border-white/10"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, false);
                  }}
                  className="block font-NueueMontreal text-base font-light text-white/90 hover:text-white transition-colors duration-200 py-3 border-b border-white/10"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
