import React, { useRef, useState, useEffect } from "react";
import card1 from "../assets/images/TeamMembers/bhudev.png";
import card2 from "../assets/images/TeamMembers/tushar.jpg";
import card3 from "../assets/images/TeamMembers/parshant.jpg";
import card4 from "../assets/images/TeamMembers/priyanka.jpg";
import card5 from "../assets/images/TeamMembers/krishan.jpg";

const SupportSection = () => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);
      return () => {
        slider.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };
  // Team members data
  const teamMembers = [
    { name: "Bhudev Yadav", role: "Director", image: card1 },
    { name: "Tushar", role: "CTO", image: card2 },
    { name: "Parshant Rohaj", role: "CFO", image: card3 },
    { name: "Priyanka", role: "CMO", image: card4 },
    { name: "Krishan Chamoli", role: "COO", image: card5 },
  ];

  return (
    <section
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
        position: "relative",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Roboto', sans-serif",
      }}
    >

      {/* Main Content Container */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          paddingTop: "80px",
          paddingBottom: "80px",
          paddingLeft: "40px",
          paddingRight: "40px",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        {/* Hero Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "64px",
            position: "relative",
          }}
        >
          {/* Background Grid Pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              opacity: 0.3,
              pointerEvents: "none",
            }}
          />

          {/* Heading */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: "1.1",
              color: "#111827",
              marginBottom: "24px",
              maxWidth: "900px",
              letterSpacing: "-0.03em",
              position: "relative",
              zIndex: 1,
            }}
          >
            We've got an{" "}
            <span
              style={{
                position: "relative",
                display: "inline-block",
              }}
            >
              entire
              <svg
                style={{
                  position: "absolute",
                  bottom: "-6px",
                  left: "-2px",
                  width: "calc(100% + 4px)",
                  height: "14px",
                  zIndex: -1,
                  overflow: "visible",
                }}
                viewBox="0 0 120 14"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 Q30 2, 60 8 T118 8"
                  stroke="url(#gradient)"
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            team dedicated to supporting you and your business
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "1.6",
              color: "#6B7280",
              marginBottom: "40px",
              maxWidth: "600px",
              letterSpacing: "-0.01em",
              position: "relative",
              zIndex: 1,
            }}
          >
            Get help 24/7, with our award-winning support network of payments experts.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <button
              style={{
                padding: "12px 24px",
                backgroundColor: "#FFFFFF",
                color: "#111827",
                border: "1px solid #D1D5DB",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                letterSpacing: "-0.01em",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 6.66667V10L12.5 12.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Book a call
            </button>
            <button
              style={{
                padding: "12px 24px",
                backgroundColor: "#111827",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: 500,
                cursor: "pointer",
                letterSpacing: "-0.01em",
              }}
            >
              Get in touch
            </button>
          </div>
        </div>

        {/* Team Members Slider */}
        <div
          style={{
            position: "relative",
            marginBottom: "64px",
          }}
        >
          {/* Left Navigation Button */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            style={{
              position: "absolute",
              left: "-20px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              border: "1px solid #D1D5DB",
              color: "#000000",
              backgroundImage: "linear-gradient(90deg, #BB2929 0%, #BB2929 100%)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left center",
              backgroundSize: "0% 100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: canScrollLeft ? "pointer" : "not-allowed",
              opacity: canScrollLeft ? 1 : 0.5,
              zIndex: 10,
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (canScrollLeft) {
              e.currentTarget.style.backgroundSize = "100% 100%";
              e.currentTarget.style.borderColor = "#BB2929";
                e.currentTarget.style.color = "#FFFFFF";
              }
            }}
            onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#FFFFFF";
            e.currentTarget.style.borderColor = "#D1D5DB";
            e.currentTarget.style.backgroundSize = "0% 100%";
            e.currentTarget.style.color = "#000000";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            style={{
              position: "absolute",
              right: "-20px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              border: "1px solid #D1D5DB",
              color: "#000000",
              backgroundImage: "linear-gradient(90deg, #BB2929 0%, #BB2929 100%)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left center",
              backgroundSize: "0% 100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: canScrollRight ? "pointer" : "not-allowed",
              opacity: canScrollRight ? 1 : 0.5,
              zIndex: 10,
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (canScrollRight) {
              e.currentTarget.style.backgroundSize = "100% 100%";
              e.currentTarget.style.borderColor = "#BB2929";
                e.currentTarget.style.color = "#FFFFFF";
              }
            }}
            onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#FFFFFF";
            e.currentTarget.style.borderColor = "#D1D5DB";
            e.currentTarget.style.backgroundSize = "0% 100%";
            e.currentTarget.style.color = "#000000";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            ref={sliderRef}
            style={{
              overflowX: "auto",
              overflowY: "hidden",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              cursor: "grab",
            }}
            onWheel={(e) => {
              if (e.deltaY !== 0) {
                e.preventDefault();
                e.currentTarget.scrollLeft += e.deltaY;
                checkScrollButtons();
              }
            }}
            onMouseDown={(e) => {
              const slider = e.currentTarget;
              const startX = e.pageX - slider.offsetLeft;
              const scrollLeft = slider.scrollLeft;
              let isDown = true;

              const onMouseMove = (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 2;
                slider.scrollLeft = scrollLeft - walk;
                checkScrollButtons();
              };

              const onMouseUp = () => {
                isDown = false;
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
                checkScrollButtons();
              };

              document.addEventListener("mousemove", onMouseMove);
              document.addEventListener("mouseup", onMouseUp);
            }}
          >
          <div
            style={{
              display: "flex",
              gap: "24px",
              width: "max-content",
              paddingBottom: "8px",
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                style={{
                  width: "280px",
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    width: "280px",
                    height: "280px",
                    borderRadius: "12px",
                    backgroundColor: index === 1 || index === 2 || index === 3 || index === 4 ? "#E5E7EB" : "#F3F4F6",
                    backgroundImage: member.image
                      ? `url(${member.image})`
                      : "linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* Name and Role */}
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#111827",
                      marginBottom: "4px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {member.name}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#6B7280",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {member.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Left Column - Contact Options */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "48px",
            }}
          >
            {/* Call us */}
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#111827",
                  marginBottom: "12px",
                  letterSpacing: "-0.01em",
                }}
              >
                Call us
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#6B7280",
                  marginBottom: "16px",
                  letterSpacing: "-0.01em",
                }}
              >
                Call our team Mon-Fri from 8am to 5pm.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#111827",
                  letterSpacing: "-0.01em",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M2.5 4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5H7.0387C7.45952 2.5 7.83333 2.83333 7.83333 3.25415C7.83333 3.67497 8.16667 4.00833 8.58749 4.00833H11.4125C11.8333 4.00833 12.1667 3.67497 12.1667 3.25415C12.1667 2.83333 12.5405 2.5 12.9613 2.5H15.8333C16.7538 2.5 17.5 3.24619 17.5 4.16667V15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5H4.16667C3.24619 17.5 2.5 16.7538 2.5 15.8333V4.16667Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                +91 9826000000
              </div>
            </div>

            {/* Chat with us */}
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#111827",
                  marginBottom: "12px",
                  letterSpacing: "-0.01em",
                }}
              >
                Chat with us
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#6B7280",
                  marginBottom: "24px",
                  letterSpacing: "-0.01em",
                }}
              >
                Speak to our friendly team via live chat.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#111827",
                    cursor: "pointer",
                    letterSpacing: "-0.01em",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M2.5 5L10 10L17.5 5M2.5 15L10 10M2.5 5L2.5 15L17.5 15L17.5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Shoot us an email
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#111827",
                    cursor: "pointer",
                    letterSpacing: "-0.01em",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                      fill="currentColor"
                    />
                  </svg>
                  Message us on Twitter
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {/* Name Fields */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <input
                  type="text"
                  placeholder="First name"
                  style={{
                    padding: "12px 16px",
                    border: "1px solid #D1D5DB",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#111827",
                    backgroundColor: "#FFFFFF",
                    outline: "none",
                    letterSpacing: "-0.01em",
                  }}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  style={{
                    padding: "12px 16px",
                    border: "1px solid #D1D5DB",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#111827",
                    backgroundColor: "#FFFFFF",
                    outline: "none",
                    letterSpacing: "-0.01em",
                  }}
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="your@company.com"
                style={{
                  padding: "12px 16px",
                  border: "1px solid #D1D5DB",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#111827",
                  backgroundColor: "#FFFFFF",
                  outline: "none",
                  letterSpacing: "-0.01em",
                }}
              />

              {/* Phone */}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                }}
              >
                <select
                  style={{
                    padding: "12px 16px",
                    border: "1px solid #D1D5DB",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#111827",
                    backgroundColor: "#FFFFFF",
                    outline: "none",
                    cursor: "pointer",
                    letterSpacing: "-0.01em",
                  }}
                >
                  <option value="IN">IN</option>
                </select>
                <input
                  type="tel"
                  placeholder="+91 9826000000"
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    border: "1px solid #D1D5DB",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#111827",
                    backgroundColor: "#FFFFFF",
                    outline: "none",
                    letterSpacing: "-0.01em",
                  }}
                />
              </div>

              {/* Message */}
              <textarea
                placeholder="Leave us a message..."
                rows={6}
                style={{
                  padding: "12px 16px",
                  border: "1px solid #D1D5DB",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#111827",
                  backgroundColor: "#FFFFFF",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "inherit",
                  letterSpacing: "-0.01em",
                }}
              />
            </form>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SupportSection;

