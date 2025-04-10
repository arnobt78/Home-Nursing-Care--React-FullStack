import { motion } from "framer-motion";
import CountUp from "react-countup";
import PropTypes from "prop-types";

const stats = [
  { value: 27, label: "Partnerkliniken" },
  { value: 20000, label: "Bewerber" },
  { value: 280, label: "Vermittlungen" },
];

const AnimatedCounter = ({ value }) => {
  return (
    <div className="flex items-center">
      <CountUp
        start={0}
        end={value}
        duration={5}
        separator=","
        className="text-4xl font-bold text-primary/90"
      />
      <motion.span
        className="text-4xl font-bold text-primary/90 ml-1"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        +
      </motion.span>
    </div>
  );
};

AnimatedCounter.propTypes = {
  value: PropTypes.number.isRequired, // Validate that 'value' is a number and required
};

const StatsCounterSection = () => {
  return (
    <section className="bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
          >
            <AnimatedCounter value={stat.value} />
            <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-primary/90">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounterSection;
