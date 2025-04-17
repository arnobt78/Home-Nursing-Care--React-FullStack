import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { slideBottom } from "../../utility/animation";

import Logo from "../../assets/logo.png";
import CachedImage from "../CachedImage";

const NavbarLinks = [
  { id: 1, title: "Willkommen", link: "/" },
  { id: 2, title: "Was wir tun", link: "/services" },
  // { id: 3, title: "Magazine", link: "/magazine" },
  { id: 4, title: "Über uns", link: "/about-us" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <>
      <motion.div
        variants={slideBottom(0.2)}
        initial="initial"
        animate="animate"
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black bg-opacity-30 py-4 shadow-lg"
      >
        <div className="container flex justify-between items-center">
          {/* Clickable Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <CachedImage
              src={Logo}
              alt="Logo"
              className="w-[180px] md:w-[200px] hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-7 xl:gap-10">
              {NavbarLinks.map((link) => (
                <li key={link.id} className="relative">
                  <motion.a
                    href={link.link}
                    className="relative text-white hover:text-secondary uppercase text-sm xl:text-base font-medium tracking-wide hover: transition-shadow duration-300"
                    whileHover={{
                      scale: 1.2,
                    }}
                    style={{
                      display: "inline-block",
                    }}
                  >
                    {link.title}
                    <motion.span
                      className="absolute left-0 bottom-0 h-[2px] bg-secondary w-0"
                      style={{
                        backgroundColor: "#24836d",
                        height: "2px",
                        position: "absolute",
                        bottom: "0",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                      whileHover={{
                        width: "100%",
                        left: "0",
                        transform: "translateX(0)",
                        transition: { duration: 0.3 },
                      }}
                    />
                  </motion.a>
                </li>
              ))}
            </ul>

            <div>
              <button
                onClick={handleContactClick}
                className="primary-btn border-2 border-white hover:border-primary hover:bg-secondary hover:text-white transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
              >
                Kontakt
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end w-full">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none hover:shadow-md transition-shadow duration-300"
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-md flex flex-col items-center justify-center text-white shadow-lg">
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-white text-2xl hover:shadow-md transition-shadow duration-300"
          >
            &times;
          </button>
          <ul className="flex flex-col md:flex-row gap-6 text-lg uppercase font-medium tracking-wide justify-center text-center">
            {NavbarLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  onClick={toggleMenu}
                  className="hover:shadow-md transition-shadow duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <button
              onClick={() => {
                toggleMenu();
                navigate("/contact");
              }}
              className="primary-btn border-2 border-white hover:border-primary hover:bg-secondary hover:text-white transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            >
              Kontakt
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
