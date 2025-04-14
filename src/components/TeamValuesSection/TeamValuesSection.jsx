import { motion } from "framer-motion";

import teamImage from "../../assets/hero-4.jpg";

import CachedImage from "../CachedImage";

const TeamValuesSection = () => {
  return (
    <section className="bg-white py-2 px-4 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }} // Trigger animation every time it enters the viewport
        >
          <CachedImage
            src={teamImage}
            alt="Sernitas Team"
            className="rounded-xl shadow-lg object-cover w-full"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }} // Trigger animation every time it enters the viewport
        >
          <h2 className="text-primary text-2xl md:text-3xl font-bold mb-4 leading-snug">
            Unsere Philosophie – Pflege, die den Menschen in den Mittelpunkt
            stellt
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-primary/90">
            Bei Sernitas Care verstehen wir Pflege als Berufung – getragen von
            Menschlichkeit, Respekt und einem ganzheitlichen Blick auf den
            Menschen. Wir begleiten unsere Pflegekund*innen mit Würde,
            Einfühlungsvermögen und individueller Aufmerksamkeit, um ein
            selbstbestimmtes Leben in vertrauter Umgebung zu ermöglichen.
            Körperliche, seelische, soziale und spirituelle Bedürfnisse sehen
            wir als untrennbar verbunden – deshalb begegnen wir jedem Menschen
            in seiner Gesamtheit.
            <br />
            <br />
            Unser Handeln ist geprägt von ethischen Grundsätzen, Toleranz und
            kultureller Sensibilität. Dabei orientieren wir uns an modernen
            pflegewissenschaftlichen Standards und arbeiten eng mit Angehörigen
            und anderen Pflegebeteiligten zusammen, um Vertrauen und Transparenz
            zu schaffen. Wir glauben daran, dass echte Fürsorge durch Herz und
            Verstand entsteht – mit dem Ziel, Lebensqualität, Sicherheit und
            Menschlichkeit tagtäglich zu fördern.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamValuesSection;
