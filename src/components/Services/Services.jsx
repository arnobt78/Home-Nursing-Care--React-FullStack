import { motion } from "framer-motion";

import Cards from "../Cards/Cards";

import teamImage from "../../assets/service-3.jpg";

// const fadeIn = (delay = 0) => ({
//   initial: { opacity: 0, y: 20 },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       ease: "easeIn",
//       delay,
//     },
//   },
// });

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-2 px-4 md:px-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Image */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
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
            viewport={{ once: false, amount: 0.2 }}
          >
            <h1 className="text-primary text-2xl md:text-3xl font-bold mb-4 leading-snug">
              Willkommen bei Sernitas Care – Ihre vertrauensvolle Unterstützung
              im Alltag
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-primary/90">
              Bei Sernitas Care bieten wir Ihnen eine Vielzahl an
              Dienstleistungen, die individuell auf Ihre Bedürfnisse abgestimmt
              sind. Unser Ziel ist es, Ihnen ein selbstbestimmtes, würdevolles
              Leben in Ihrer gewohnten Umgebung zu ermöglichen – ganz gleich, ob
              es um kleine Alltagshelfer oder um umfassende Pflege geht.
              <br />
              <br />
              Unsere Grundpflege unterstützt Sie in den Bereichen, die im Alltag
              besonders wichtig sind: Körperpflege, Ernährung und Mobilität. Wir
              sind da, um Ihnen bei alltäglichen Aufgaben zur Seite zu stehen
              und sorgen mit viel Einfühlungsvermögen dafür, dass Sie sich
              rundum wohl und sicher fühlen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards Section */}
      <Cards />
    </>
  );
};

export default Services;
