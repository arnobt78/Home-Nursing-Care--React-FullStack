import HeroImg1 from "../../assets/hero-1.jpg";
import HeroImg2 from "../../assets/hero-2.jpg";
import HeroImg3 from "../../assets/hero-3.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { slideUp } from "../../utility/animation";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  // Array of background images
  const images = [HeroImg1, HeroImg2, HeroImg3];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  // Framer Motion Variants for Background Animation
  const backgroundVariants = {
    initial: { opacity: 0, scale: 1.1 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5, // Smooth transition duration
        ease: "easeOut",
      },
    },
    exit: { opacity: 0, scale: 1.1, transition: { duration: 1.5 } },
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="container relative min-h-[600px] md:min-h-[700px] overflow-hidden">
        <AnimatePresence>
          {/* Background Image Slider */}
          <motion.div
            key={currentImageIndex} // Ensure unique key for each image
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </AnimatePresence>

        {/* Overlay for Text */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-5">
          <motion.h1
            variants={slideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="text-4xl xl:text-5xl font-bold leading-tight text-center"
          >
            Verlässliche Pflegekräfte für Ihr Zuhause <br />
            <span className="">Sernitas Care</span>
          </motion.h1>

          <motion.p
            variants={slideUp(0.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="mt-4 text-lg xl:text-xl text-center leading-relaxed"
          >
            Mit Herz, Kompetenz und Fürsorge begleiten wir Ihre Liebsten im
            Alltag – individuell, persönlich und in vertrauter Umgebung. <br />
            Weil Würde, Geborgenheit und Lebensqualität an erster Stelle stehen.
          </motion.p>

          {/* Bullet Points */}
          <motion.ul
            variants={slideUp(0.8)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="mt-6 text-slate-300 flex flex-row justify-center items-center text-lg xl:text-xl text-center list-disc list-inside gap-x-4"
          >
            <li>Pflege, die ankommt.</li>
            <li>Zu Hause.</li>
            <li>Mit Liebe.</li>
          </motion.ul>

          {/* Optional Subtitle/Slogan */}
          <motion.p
            variants={slideUp(1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="mt-8 text-md xl:text-lg text-center italic text-gray-200"
          >
            Ihre vertrauensvolle Pflegepartnerin für ein selbstbestimmtes Leben
            daheim.
          </motion.p>
          <motion.div
            variants={slideUp(0.8)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="flex gap-4 mt-6"
          >
            <motion.button
              whileHover={{ scale: 1.1 }} // Enlarge button on hover
              whileTap={{ scale: 0.95 }} // Slightly shrink button on tap
              onClick={() => navigate("/services")}
              className="primary-btn border-2 border-white hover:border-primary hover:bg-secondary hover:text-white transition-transform duration-300 shadow-md hover:shadow-lg"
            >
              Mehr erfahren
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }} // Enlarge button on hover
              whileTap={{ scale: 0.95 }} // Slightly shrink button on tap
              onClick={() => navigate("/application-form")}
              className="primary-btn border-2 border-white hover:border-primary hover:bg-secondary hover:text-white transition-transform duration-300 shadow-md hover:shadow-lg"
            >
              Kostenlos beraten lassen
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
