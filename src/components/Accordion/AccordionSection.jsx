// import { motion } from "framer-motion";
// import { useState } from "react";

// import accordionData from "./data";
// import SingleAccordion from "./SingleAccordion";

// // Animation function for sliding up
// const slideUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 50 },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1.2,
//       ease: "easeOut",
//       delay,
//     },
//   },
// });

// const AccordionSection = () => {
//   const [activeQuestionId, setActiveQuestionId] = useState(null); // Track the active question

//   const handleToggle = (id) => {
//     setActiveQuestionId((prevId) => (prevId === id ? null : id)); // Toggle the active question
//   };

//   return (
//     <motion.section
//       className="container mx-auto px-4 py-16"
//       initial="initial"
//       whileInView="animate"
//       viewport={{ amount: 0.2 }}
//     >
//       {/* Header */}
//       <motion.h2
//         variants={slideUp(0.2)}
//         initial="initial"
//         whileInView="animate"
//         viewport={{ amount: 0.2 }}
//         className="text-3xl font-bold text-center text-primary mb-10"
//       >
//         Fragen, die oft gestellt werden – Antworten, die helfen!
//       </motion.h2>

//       {/* Accordion Questions */}
//       <motion.div
//         className="max-w-3xl mx-auto"
//         initial="initial"
//         whileInView="animate"
//         viewport={{ amount: 0.2 }}
//         variants={{
//           animate: {
//             transition: {
//               staggerChildren: 0.2,
//             },
//           },
//         }}
//       >
//         {accordionData.map((question, index) => (
//           <motion.div
//             key={question.id}
//             variants={slideUp(index * 0.2)}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ amount: 0.2 }}
//           >
//             <SingleAccordion
//               {...question}
//               isActive={activeQuestionId === question.id} // Pass active state
//               onToggle={() => handleToggle(question.id)} // Handle toggle
//             />
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// };

// export default AccordionSection;

import { motion } from "framer-motion";
import { useState } from "react";

import accordionData from "./data";
import SingleAccordion from "./SingleAccordion";

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
  const [activeQuestionId, setActiveQuestionId] = useState(null); // Track the active question

  const handleToggle = (id) => {
    setActiveQuestionId((prevId) => (prevId === id ? null : id)); // Toggle the active question
  };

  return (
    <motion.section
      className="container mx-auto py-24 px-4 md:px-12 xl:px-44"
      initial="initial"
      animate="animate" // Trigger animation only once
    >
      {/* Header */}
      <motion.h2
        variants={slideUp(0.2)}
        initial="initial"
        animate="animate" // Trigger animation only once
        className="text-3xl font-bold text-center text-primary/90 mb-10"
      >
        Fragen, die oft gestellt werden – Antworten, die helfen!
      </motion.h2>

      {/* Parent Wrapper for Questions and Answers */}
      <div className=" p-4">
        {/* Accordion Questions */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial="initial"
          animate="animate" // Trigger animation only once
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {accordionData.map((question, index) => (
            <motion.div
              key={question.id}
              variants={slideUp(index * 0.2)}
              initial="initial"
              animate="animate" // Trigger animation only once
            >
              <SingleAccordion
                {...question}
                isActive={activeQuestionId === question.id} // Pass active state
                onToggle={() => handleToggle(question.id)} // Handle toggle
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AccordionSection;
