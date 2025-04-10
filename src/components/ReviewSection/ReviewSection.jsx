import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

import ReviewImg1 from "../../assets/hr-1.jpg";
import ReviewImg2 from "../../assets/hr-2.jpg";
import ReviewImg3 from "../../assets/hr-3.jpg";
import ReviewImg4 from "../../assets/hr-4.jpg";

// Dummy data for reviews
const reviews = [
  {
    id: 1,
    name: "Dr. Ali Yildiz",
    job: "CEO",
    image: ReviewImg1,
    text: "„Wir sind ein weltoffenes und multikulturelles Team mit einem klaren Auftrag und exzellentem Know-how, das zusammen über rund ein halbes Jahrhundert Berufserfahrung verfügt.“",
  },
  {
    id: 2,
    name: "Summyaah Yildiz",
    job: "Angehörige/r eines Pflegebedürftigen",
    image: ReviewImg2,
    text: "„Sernitas Care hat unser Leben verändert. Die Pflegerinnen sind nicht nur professionell, sondern auch unglaublich einfühlsam. Meine Mutter fühlt sich endlich wieder wohl und gut betreut – fast wie in einer zweiten Familie.“",
  },
  {
    id: 3,
    name: "Andre Piper",
    job: "Klient/in",
    image: ReviewImg3,
    text: "„Ich bin dankbar für die Unterstützung von Sernitas Care. Die Betreuung ist liebevoll, respektvoll und genau auf meine Bedürfnisse abgestimmt. Endlich fühle ich mich zu Hause sicher und verstanden.“",
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "Angehörige/r",
    image: ReviewImg4,
    text: "„Die Mitarbeiter*innen von Sernitas Care nehmen sich wirklich Zeit. Man merkt, dass hier mit Herz gearbeitet wird. Die Kommunikation ist klar, freundlich und immer lösungsorientiert – so wünscht man sich das!“",
  },
];

// Animation function for sliding up
const slideUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay,
    },
  },
});

const ReviewSection = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  // Wrap nextPerson in useCallback to avoid dependency issues
  const nextPerson = useCallback(() => {
    setIndex((index) => {
      let newIndex = index + 1;
      return newIndex >= reviews.length ? 0 : newIndex;
    });
  }, []);

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return newIndex < 0 ? reviews.length - 1 : newIndex;
    });
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextPerson();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval
  }, [nextPerson]);

  // Framer Motion variants for smooth transitions
  const variants = {
    initial: { opacity: 0, x: 100 }, // Start off-screen to the right
    animate: { opacity: 1, x: 0, transition: { ease: "easeIn", duration: 1 } }, // Slide in with ease-in
    exit: { opacity: 0, x: -100, transition: { ease: "easeOut", duration: 1 } }, // Slide out with ease-out
  };

  // Framer Motion variants for section appearance
  const sectionVariants = {
    initial: { opacity: 0, y: 50 }, // Start slightly below the viewport
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2, // Smooth transition duration
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.main
      className="py-16 bg-gray-100 relative"
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the section is visible
    >
      {/* Header */}
      <motion.h2
        variants={slideUp(0.2)} // Use the slideUp animation
        initial="initial"
        whileInView="animate"
        className="text-3xl font-bold text-center text-primary mb-10"
      >
        Worte, die Mut machen. Rückmeldungen, die zählen.
      </motion.h2>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-primary text-3xl hover:text-white hover:bg-secondary hover:scale-110 cursor-pointer lg:left-4 z-10 transition-all duration-300 ease-in-out"
        onClick={prevPerson}
        style={{
          zIndex: 10, // Ensure the left arrow is above other layers
        }}
      >
        <FaChevronLeft />
      </button>

      {/* Review Section */}
      <article
        className="review mx-4 lg:mx-16 bg-white p-6 shadow-lg text-center relative"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Apply clipPath directly to the main card
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Image Container */}
            <div className="img-container relative w-36 h-36 mx-auto mb-6">
              {/* Main Image */}
              <img
                src={image}
                alt={name}
                className="person-img w-full h-full rounded-full object-cover"
              />
              {/* Quote Icon */}
              <span className="quote-icon absolute top-2 left-1 bg-primary/70 text-white p-2 rounded-full">
                <FaQuoteRight />
              </span>
              {/* Background Circle */}
              <div
                className="absolute bottom-1 left-2 w-full h-full bg-primary/70 rounded-full"
                style={{
                  clipPath: "circle(100% at 75% 25%)", // Show only the non-overlapping part of the background circle
                  zIndex: -1, // Ensure it stays behind the main image
                }}
              ></div>
            </div>

            <h4 className="author text-lg font-semibold text-primary/90">
              {name}
            </h4>
            <p className="job text-sm uppercase text-primary/90 mb-4">{job}</p>
            <p className="info text-primary/90 italic leading-relaxed">
              {text}
            </p>
          </motion.div>
        </AnimatePresence>
      </article>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-primary text-3xl hover:text-white hover:bg-secondary hover:scale-110 cursor-pointer lg:right-4 z-10 transition-all duration-300 ease-in-out"
        onClick={nextPerson}
        style={{
          zIndex: 10, // Ensure the right arrow is above other layers
        }}
      >
        <FaChevronRight />
      </button>
    </motion.main>
  );
};

export default ReviewSection;
