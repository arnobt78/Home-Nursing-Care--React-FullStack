import HeroImg1 from "../../assets/nurse-1.jpg";
import HeroImg2 from "../../assets/nurse-2.jpg";
import HeroImg3 from "../../assets/nurse-3.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { slideUp } from "../../utility/animation";

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
            className="text-4xl xl:text-5xl font-bold"
          >
            Trusted Home Nursing Professionals{" "}
            <span className="text-gray-300 underline">Sernitas Care</span>
          </motion.h1>
          <motion.p
            variants={slideUp(0.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="mt-4 text-lg"
          >
            Providing expert, compassionate, and personalized home nursing
            services to ensure comfort, dignity, and well-being for your loved
            ones.
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
              className="primary-btn border-2 border-white hover:border-primary hover:bg-secondary hover:text-white transition-transform duration-300 shadow-md hover:shadow-lg"
            >
              More News
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }} // Enlarge button on hover
              whileTap={{ scale: 0.95 }} // Slightly shrink button on tap
              className="primary-btn border-2 border-white hover:border-primary hover:bg-secondary hover:text-white transition-transform duration-300 shadow-md hover:shadow-lg"
            >
              Start Application
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
