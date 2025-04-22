// import { useState } from "react";
// import { motion } from "framer-motion";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import PropTypes from "prop-types";

// const SingleAccordion = ({ title, info, isActive, onToggle }) => {
//   return (
//     <motion.article
//       className="question shadow-lg mb-4"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//     >
//       {/* Question Header */}
//       <div className="bg-primary p-4 rounded-lg">
//         <header className="flex justify-between items-center">
//           <h5 className="text-lg font-semibold text-white">{title}</h5>
//           <button
//             className="bg-white text-primary rounded-full w-8 h-8 flex items-center justify-center"
//             onClick={onToggle} // Call the toggle function
//           >
//             {isActive ? (
//               <AiOutlineMinus className="text-xl font-bold" />
//             ) : (
//               <AiOutlinePlus className="text-xl font-bold" />
//             )}
//           </button>
//         </header>
//       </div>

//       {/* Answer Content */}
//       {isActive && (
//         <motion.div
//           className="border-2 border-primay bg-slate-200  tup-4 rounded-lg p-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <p className="text-primary/90 text-justify">{info}</p>
//         </motion.div>
//       )}
//     </motion.article>
//   );
// };

// // Add PropTypes for props validation
// SingleAccordion.propTypes = {
//   title: PropTypes.string.isRequired,
//   info: PropTypes.string.isRequired,
//   isActive: PropTypes.bool.isRequired, // Whether the accordion is active
//   onToggle: PropTypes.func.isRequired, // Function to toggle the accordion
// };

// export default SingleAccordion;

import { motion } from "framer-motion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import PropTypes from "prop-types";

const SingleAccordion = ({ title, info, isActive, onToggle }) => {
  return (
    <motion.article
      className="question shadow-lg mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Question Header */}
      <div className="bg-primary p-4 rounded-lg">
        <header className="flex justify-between items-center">
          <h5 className="text-lg font-semibold text-white">{title}</h5>
          <button
            className="bg-white text-primary rounded-full w-8 h-8 flex items-center justify-center"
            onClick={onToggle} // Call the toggle function
          >
            {isActive ? (
              <AiOutlineMinus className="text-xl font-bold" />
            ) : (
              <AiOutlinePlus className="text-xl font-bold" />
            )}
          </button>
        </header>
      </div>

      {/* Answer Content */}
      {isActive && (
        <motion.div
          className="border-2 border-primary/90 bg-slate-200 rounded-lg p-4" // Fixed typo in border-primary
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-primary/90 text-justify">{info}</p>
        </motion.div>
      )}
    </motion.article>
  );
};

// Add PropTypes for props validation
SingleAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired, // Whether the accordion is active
  onToggle: PropTypes.func.isRequired, // Function to toggle the accordion
};

export default SingleAccordion;
