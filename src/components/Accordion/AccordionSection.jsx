import { motion } from "framer-motion";
import SingleAccordion from "./SingleAccordion";
import accordionData from "./data";

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

const AccordionSection = () => {
  return (
    <motion.section
      className="container mx-auto px-4 py-16"
      initial="initial"
      whileInView="animate"
      viewport={{ amount: 0.2 }} // Trigger animation when 20% of the section is visible
    >
      {/* Header */}
      <motion.h2
        variants={slideUp(0.2)} // Use the slideUp animation
        initial="initial"
        whileInView="animate" // Trigger animation every time it enters the viewport
        viewport={{ amount: 0.2 }} // Trigger when 20% of the header is visible
        className="text-3xl font-bold text-center text-primary mb-10"
      >
        Common Questions, Simple Answers!
      </motion.h2>

      {/* Accordion Questions */}
      <motion.div
        className="max-w-3xl mx-auto"
        initial="initial"
        whileInView="animate" // Trigger animation every time it enters the viewport
        viewport={{ amount: 0.2 }} // Trigger when 20% of the container is visible
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.2, // Delay between each question animation
            },
          },
        }}
      >
        {accordionData.map((question, index) => (
          <motion.div
            key={question.id}
            variants={slideUp(index * 0.2)} // Apply staggered animation for each question
            initial="initial"
            whileInView="animate" // Trigger animation every time it enters the viewport
            viewport={{ amount: 0.2 }}
          >
            <SingleAccordion {...question} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AccordionSection;
