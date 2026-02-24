import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ContactUs.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaCheck,
} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "PEB",
    message: "",
    attachment: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFormData({
        ...formData,
        attachment: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success animation
      setIsSubmitted(true);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "PEB",
        message: "",
        attachment: null,
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="contact-us-container">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full text-center mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#BB2929] font-EireneSansRegular text-xs md:text-sm font-semibold uppercase tracking-[0.15em] mb-4 md:mb-4"
        >
          Get in Touch
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col mb-12 md:mb-14 items-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl !font-KuraleRegular text-black leading-[0.95] tracking-tight">
            <span className="block">Contact Us</span>
          </h1>
        </motion.div>
      </div>

      <div className="contact-us-wrapper">
        {/* Left Panel - Contact Information */}
        <div className="contact-info-panel">
          <div className="contact-info-content">
            <h2 className="contact-title">Contact Information</h2>
            <p className="contact-subtitle">
              Say something to start a live chat!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+91 97112-69111</span>
              </div>

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>info@richa.in</span>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>
                  Plot No-29, DLF Industrial Area , Phase-II, Faridabad-121013,
                  Haryana India.
                </span>
              </div>
            </div>

            <div className="social-icons">
              <a
                href="https://www.facebook.com/richaindustriesltd/"
                className="social-icon"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/richaindustries.ltd"
                className="social-icon"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/richa-industries-limited/"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/@RichaIndustriesLimited"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="decorative-circles">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
          </div>
        </div>

        {/* Right Panel - Contact Form */}
        <div className="contact-form-panel relative overflow-hidden">
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm p-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-20 h-20 bg-[#BB2929] rounded-full flex items-center justify-center mb-6 shadow-lg"
                >
                  <FaCheck className="text-white text-4xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for contacting us. We will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-[#BB2929] text-white rounded-full hover:bg-[#a02323] transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="subject-label">Select Subject?</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="subject"
                    value="PEB"
                    checked={formData.subject === "PEB"}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  PEB
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="subject"
                    value="TEXTILE"
                    checked={formData.subject === "TEXTILE"}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  TEXTILE
                </label>
              </div>
            </div>

            {/* <div className="form-group">
              <label htmlFor="attachment">Attachment (Optional)</label>
              <input
                type="file"
                id="attachment"
                name="attachment"
                onChange={handleFileChange}
                className="pt-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
            </div> */}

            <div className="form-group mt-4">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message.."
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-submit">
              <button
                type="submit"
                className="submit-button"
                disabled={isUploading}
              >
                {isUploading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
