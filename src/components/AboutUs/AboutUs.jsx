import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideUp } from "../../utility/animation";
import AboutImg1 from "../../assets/nurse-1.jpg";
import AboutImg2 from "../../assets/nurse-2.jpg";
import AboutImg3 from "../../assets/nurse-3.jpg";

const AboutUs = () => {
  // Array of background images
  const images = [AboutImg1, AboutImg2, AboutImg3];

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
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative py-24 min-h-screen overflow-hidden"
    >
      {/* Background Image Slider */}
      <AnimatePresence>
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

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-5">
        <motion.h1
          variants={slideUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="text-4xl xl:text-5xl font-bold"
        >
          About Us
        </motion.h1>
        <motion.p
          variants={slideUp(0.5)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="mt-4 text-lg max-w-3xl"
        >
          At Sernitas Care, we are dedicated to providing expert, compassionate,
          and personalized home nursing services. Our mission is to ensure the
          comfort, dignity, and well-being of your loved ones. With a team of
          highly skilled professionals, we bring care and support directly to
          your home, fostering a sense of trust and reliability.
        </motion.p>
        <motion.p
          variants={slideUp(0.8)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="mt-4 text-lg max-w-3xl"
        >
          Our commitment to excellence and our passion for caregiving make us a
          trusted partner in home nursing. Let us help you and your family
          navigate the journey of care with compassion and professionalism.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutUs;
