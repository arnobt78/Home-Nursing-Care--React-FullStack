import { motion } from "framer-motion";

const Services = () => {
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeIn",
        delay,
      },
    },
  });

  return (
    <section className="bg-white py-24 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center"
          {...fadeIn(0.1)}
        >
          Willkommen bei Sernitas Care – Ihre vertrauensvolle Unterstützung im
          Alltag
        </motion.h1>

        {/* Paragraphs */}
        <motion.p
          className="text-base md:text-lg text-gray-700 leading-relaxed mb-8"
          {...fadeIn(0.2)}
        >
          Bei Sernitas Care bieten wir Ihnen eine Vielzahl an Dienstleistungen,
          die individuell auf Ihre Bedürfnisse abgestimmt sind. Unser Ziel ist
          es, Ihnen ein selbstbestimmtes, würdevolles Leben in Ihrer gewohnten
          Umgebung zu ermöglichen – ganz gleich, ob es um kleine Alltagshelfer
          oder um umfassende Pflege geht.
        </motion.p>

        {/* Section: Grundpflege */}
        <motion.div className="mb-8" {...fadeIn(0.3)}>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Grundpflege mit Herz und Hingabe
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Unsere Grundpflege unterstützt Sie in den Bereichen, die im Alltag
            besonders wichtig sind: Körperpflege, Ernährung und Mobilität. Wir
            sind da, um Ihnen bei alltäglichen Aufgaben zur Seite zu stehen und
            sorgen mit viel Einfühlungsvermögen dafür, dass Sie sich rundum wohl
            und sicher fühlen.
          </p>
        </motion.div>

        {/* Section: Medizinische Pflege */}
        <motion.div className="mb-8" {...fadeIn(0.4)}>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Medizinische Pflege – professionell und vertrauensvoll
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Für Ihre medizinische Betreuung bieten wir Ihnen eine umfassende
            Behandlungspflege. Das umfasst unter anderem die Wundversorgung,
            Medikamentengabe und das Messen von Vitalwerten. Unsere
            qualifizierten Fachkräfte arbeiten eng mit Ärzten und Therapeuten
            zusammen, um sicherzustellen, dass Sie stets die bestmögliche
            Versorgung erhalten – mit viel Sorgfalt und Präzision.
          </p>
        </motion.div>

        {/* Section: Haushaltshilfe */}
        <motion.div className="mb-8" {...fadeIn(0.5)}>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Haushaltshilfe – Ihr Zuhause in besten Händen
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Neben der Pflege kümmern wir uns auch um Ihr Zuhause. Unsere
            Mitarbeiter helfen Ihnen bei alltäglichen Aufgaben wie Einkäufen,
            Kochen und der Hauswirtschaft, damit Sie sich in Ihrem Umfeld rundum
            wohlfühlen können. Wir wissen, wie wichtig ein gepflegtes Zuhause
            für Ihr Wohlbefinden ist, und nehmen Ihnen diese Sorge gerne ab.
          </p>
        </motion.div>

        {/* Section: Unterstützung für Ihre Familie */}
        <motion.div {...fadeIn(0.6)}>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Unterstützung für Ihre Familie – Wir sind für Sie da
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Pflege betrifft nicht nur die Person, die betreut wird, sondern auch
            die Angehörigen. Wir wissen, dass diese Aufgabe viele Fragen und
            Unsicherheiten mit sich bringen kann. Deshalb stehen wir Ihnen und
            Ihren Lieben jederzeit beratend zur Seite, klären über wichtige
            Schritte auf und helfen Ihnen dabei, sich in der Pflege sicher zu
            bewegen. Bei Bedarf bieten wir auch Schulungen für Angehörige an,
            damit Sie die Pflege mit Vertrauen und Kompetenz gestalten können.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
