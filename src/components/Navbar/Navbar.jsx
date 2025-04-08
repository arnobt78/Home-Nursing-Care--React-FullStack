// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Logo from "../../assets/logo.png";
// import { motion } from "framer-motion";
// import { slideBottom } from "../../utility/animation";

// import { Link as ScrollLink } from "react-scroll";

// const NavbarLinks = [
//   { id: 1, title: "Home", link: "/" },
//   { id: 2, title: "Services", link: "#" },
//   { id: 3, title: "Magazine", link: "/magazine" },
//   { id: 4, title: "About Us", link: "/about-us" },
//   { id: 5, title: "FAQ", link: "faq-section" }, // Use the ID of the Accordion Section
// ];

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleContactClick = () => {
//     navigate("/contact");
//   };

//   return (
//     <>
//       <motion.div
//         variants={slideBottom(0.2)}
//         initial="initial"
//         animate="animate"
//         className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black bg-opacity-30 py-4 shadow-lg"
//       >
//         <div className="container flex justify-between items-center">
//           <div className="flex items-center">
//             <img
//               src={Logo}
//               alt="Logo"
//               className="w-[180px] md:w-[200px] hover:scale-105 transition-transform duration-300"
//             />
//           </div>

//           <div className="hidden md:flex items-center gap-10">
//             <ul className="flex gap-7 xl:gap-10">
//               {NavbarLinks.map((link) => (
//                 <li key={link.id} className="relative">
//                   {link.id === 5 ? ( // Check if the link is FAQ
//                     <ScrollLink
//                       to={link.link} // Scroll to the ID
//                       smooth={true}
//                       duration={500}
//                       offset={-80} // Adjust for fixed navbar height
//                       className="relative text-white hover:text-secondary uppercase text-sm xl:text-base font-medium tracking-wide hover: transition-shadow duration-300 cursor-pointer"
//                     >
//                       {link.title}
//                     </ScrollLink>
//                   ) : (
//                     <motion.a
//                       href={link.link}
//                       className="relative text-white hover:text-secondary uppercase text-sm xl:text-base font-medium tracking-wide hover: transition-shadow duration-300"
//                       whileHover={{
//                         scale: 1.2,
//                       }}
//                       style={{
//                         display: "inline-block",
//                       }}
//                     >
//                       {link.title}
//                       <motion.span
//                         className="absolute left-0 bottom-0 h-[2px] bg-secondary w-0"
//                         style={{
//                           backgroundColor: "#24836d",
//                           height: "2px",
//                           position: "absolute",
//                           bottom: "0",
//                           left: "50%",
//                           transform: "translateX(-50%)",
//                         }}
//                         whileHover={{
//                           width: "100%",
//                           left: "0",
//                           transform: "translateX(0)",
//                           transition: { duration: 0.3 },
//                         }}
//                       />
//                     </motion.a>
//                   )}
//                 </li>
//               ))}
//             </ul>

//             <div>
//               <button
//                 onClick={handleContactClick}
//                 className="primary-btn border-2 border-white hover:border-primary hover:bg-secondary hover:text-white transition-transform duration-300 shadow-md hover:shadow-lg"
//               >
//                 Contact Us
//               </button>
//             </div>
//           </div>

//           <div className="md:hidden flex justify-end w-full">
//             <button
//               onClick={toggleMenu}
//               className="text-white focus:outline-none hover:shadow-md transition-shadow duration-300"
//             >
//               <div className="space-y-1">
//                 <span className="block w-6 h-0.5 bg-white"></span>
//                 <span className="block w-6 h-0.5 bg-white"></span>
//                 <span className="block w-6 h-0.5 bg-white"></span>
//               </div>
//             </button>
//           </div>
//         </div>
//       </motion.div>

//       {isMenuOpen && (
//         <div className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-md flex flex-col items-center justify-center text-white shadow-lg">
//           <button
//             onClick={toggleMenu}
//             className="absolute top-5 right-5 text-white text-2xl hover:shadow-md transition-shadow duration-300"
//           >
//             &times;
//           </button>
//           <ul className="flex flex-col md:flex-row gap-6 text-lg uppercase font-medium tracking-wide justify-center text-center">
//             {NavbarLinks.map((link) => (
//               <li key={link.id}>
//                 {link.id === 5 ? (
//                   <ScrollLink
//                     to={link.link}
//                     smooth={true}
//                     duration={500}
//                     offset={-80}
//                     onClick={toggleMenu}
//                     className="hover:shadow-md transition-shadow duration-300 cursor-pointer"
//                   >
//                     {link.title}
//                   </ScrollLink>
//                 ) : (
//                   <a
//                     href={link.link}
//                     onClick={toggleMenu}
//                     className="hover:shadow-md transition-shadow duration-300"
//                   >
//                     {link.title}
//                   </a>
//                 )}
//               </li>
//             ))}
//           </ul>

//           <div className="mt-6">
//             <button
//               onClick={() => navigate("/contact")}
//               className="primary-btn border-2 border-secondary hover:border-primary hover:bg-secondary hover:text-white transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
//             >
//               Contact Us
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { slideBottom } from "../../utility/animation";

const NavbarLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Services", link: "#" },
  // { id: 3, title: "Magazine", link: "/magazine" },
  { id: 4, title: "About Us", link: "/about-us" },
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

  return (
    <>
      <motion.div
        variants={slideBottom(0.2)}
        initial="initial"
        animate="animate"
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black bg-opacity-30 py-4 shadow-lg"
      >
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className="w-[180px] md:w-[200px] hover:scale-105 transition-transform duration-300"
            />
          </div>

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
                className="primary-btn border-2 border-white hover:border-primary hover:bg-secondary hover:text-white transition-transform duration-300 shadow-md hover:shadow-lg"
              >
                Contact Us
              </button>
            </div>
          </div>

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
    </>
  );
};

export default Navbar;
