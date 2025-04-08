import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import PropTypes from "prop-types";

const SingleAccordion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

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
            onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? (
              <AiOutlineMinus className="text-xl font-bold" /> // Apply bold styling to the icon
            ) : (
              <AiOutlinePlus className="text-xl font-bold" /> // Apply bold styling to the icon
            )}
          </button>
        </header>
      </div>

      {/* Answer Content */}
      {showInfo && (
        <motion.div
          className="bg-primary/70 p-4 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white text-justify">{info}</p>
        </motion.div>
      )}
    </motion.article>
  );
};

// Add PropTypes for props validation
SingleAccordion.propTypes = {
  title: PropTypes.string.isRequired, // 'title' must be a string and is required
  info: PropTypes.string.isRequired, // 'info' must be a string and is required
};

export default SingleAccordion;