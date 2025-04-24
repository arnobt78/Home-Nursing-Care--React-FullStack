import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ScrollToTop from "../ScrollToTop"; // Import ScrollToTop
import { slideUp } from "../../utility/animation";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaXing,
} from "react-icons/fa";
import Logo from "../../assets/logo-bg.png";
import PartnersSection from "./PartnersSection"; // Import the PartnersSection component
import AffiliatesSection from "./AffiliatesSection"; // Import the AffiliatesSection component

import CachedImage from "../CachedImage";

const Footer = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Scroll to top and navigate function
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the desired route
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  // Framer Motion Variants for row animations
  const rowVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.2, // Staggered animation for each row
      },
    }),
  };

  return (
    <>
      <ScrollToTop /> {/* Ensure ScrollToTop is included */}
      <AffiliatesSection /> {/* Add AffiliatesSection above the footer */}
      <footer className="bg-primary text-white py-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Column 1: Logo and Social Links */}
          <motion.div
            custom={0}
            variants={rowVariants}
            className="space-y-4 text-center md:text-left"
          >
            <CachedImage
              src={Logo}
              alt="Sernitas Logo"
              className="w-[200px] mx-auto md:mx-0"
            />
            <p className="text-lg">Wir globalisieren die Gesundheit!</p>
            <p className="text-lg font-medium">Folgen Sie uns</p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.facebook.com/sernitasglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-secondary transition-transform duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/sernitashrturkey?igsh=MWphd210cjVod3hjbg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-secondary transition-transform duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="hover:scale-110 hover:text-secondary transition-transform duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="hover:scale-110 hover:text-secondary transition-transform duration-300"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/sernitas/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-secondary transition-transform duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.xing.com/pages/sernitas-gmbh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-secondary transition-transform duration-300"
              >
                <FaXing size={24} />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Menu */}
          <motion.div
            custom={1}
            variants={rowVariants}
            className="space-y-4 text-center md:text-left"
          >
            <h4 className="text-xl font-bold">Menü</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/")} // Use handleNavigation
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Willkommen
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/services")} // Use handleNavigation
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Was wir tun
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/about-us")} // Use handleNavigation
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Über uns
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")} // Use handleNavigation
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Links */}
          <motion.div
            custom={2}
            variants={rowVariants}
            className="space-y-4 text-center md:text-left"
          >
            <h4 className="text-xl font-bold">Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/imprint"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Datenschutz
                </a>
              </li>
              <li>
                <a
                  href="/general-terms"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  AGB
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div
            custom={3}
            variants={rowVariants}
            className="space-y-4 text-center md:text-left"
          >
            <h4 className="text-xl font-bold">Kontakt aufnehmen</h4>
            <p>
              <span className="font-bold">E-mail:</span> info@sernitas-care.com
            </p>
            <p>
              Sernitas GmbH
              <br />
              BioMedizinZentrum Bochum
              <br />
              Universitätsstraße 136
              <br />
              44799 Bochum
            </p>
            <p>
              <span className="font-bold">Telefon:</span> +49 234 966 46 480
              <br />
              <span className="font-bold">Fax:</span> +49 234 966 45 602
            </p>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          variants={slideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-center mt-10"
        >
          <p className="text-lg">
            Made with <span className="text-red-500">❤️</span>
          </p>
          <p className="text-sm font-medium">
            COPYRIGHT &copy; 2025 Sernitas GmbH
          </p>
        </motion.div>
      </footer>
      <PartnersSection /> {/* Add PartnersSection below the footer */}
    </>
  );
};

export default Footer;
