import { motion } from "framer-motion";
import Img1 from "../../assets/icon/1.svg";
import Img2 from "../../assets/icon/2.svg";
import Img3 from "../../assets/icon/3.svg";
import { slideUp } from "../../utility/animation";

// Card data array
const cardsData = [
  {
    id: 1,
    title: "Kostenlose Beratung",
    description:
      "Individuelle und unverbindliche Pflegeberatung – persönlich oder telefonisch.",
    image: Img2,
    bgColor: "bg-secondary",
  },
  {
    id: 2,
    title: "24/7 Betreuung",
    description:
      "Rund-um-die-Uhr-Pflege für maximale Sicherheit und Geborgenheit.",
    image: Img1,
    bgColor: "bg-secondary",
  },
  {
    id: 3,
    title: "Medizinische Pflegezyklen",
    description:
      "Strukturierte Behandlungsabläufe für chronisch oder akut Erkrankte.",
    image: Img3,
    bgColor: "bg-secondary",
  },
  {
    id: 4,
    title: "Qualitätskontrolle",
    description:
      "Regelmäßige Überprüfungen für eine gleichbleibend hohe Pflegequalität.",
    image: Img2,
    bgColor: "bg-secondary",
  },
  {
    id: 5,
    title: "Grundpflege",
    description:
      "Hilfe bei alltäglichen Aufgaben wie Körperpflege, Ernährung und Mobilität.",
    image: Img3,
    bgColor: "bg-secondary",
  },
  {
    id: 6,
    title: "Behandlungspflege",
    description:
      "Medizinisch verordnete Leistungen wie Wundversorgung und Medikamentengabe.",
    image: Img2,
    bgColor: "bg-secondary",
  },
  {
    id: 7,
    title: "Hauswirtschaftliche Hilfe",
    description: "Unterstützung im Haushalt – vom Einkaufen bis zum Reinigen.",
    image: Img3,
    bgColor: "bg-secondary",
  },
  {
    id: 8,
    title: "Beratung nach §37.3 SGB XI",
    description:
      "Pflegeberatung für Angehörige mit Pflegegeldanspruch gemäß Gesetz.",
    image: Img1,
    bgColor: "bg-secondary",
  },
  {
    id: 9,
    title: "Verhinderungspflege",
    description:
      "Kurzzeitige Übernahme der Pflege, wenn Angehörige verhindert sind.",
    image: Img3,
    bgColor: "bg-secondary",
  },
  {
    id: 10,
    title: "Krankenpflege",
    description:
      "Pflege und Versorgung nach ärztlicher Anordnung direkt zu Hause.",
    image: Img2,
    bgColor: "bg-secondary",
  },
  {
    id: 11,
    title: "Altenpflege",
    description:
      "Wertschätzende Betreuung älterer Menschen mit Herz und Erfahrung.",
    image: Img2,
    bgColor: "bg-secondary",
  },
  {
    id: 12,
    title: "Ambulante Pflege",
    description: "Pflege zu Hause – individuell, flexibel und professionell.",
    image: Img2,
    bgColor: "bg-secondary",
  },
  {
    id: 13,
    title: "Häusliche Pflege",
    description:
      "Umfassende Versorgung in der vertrauten Umgebung des eigenen Zuhauses.",
    image: Img2,
    bgColor: "bg-secondary",
  },
  {
    id: 14,
    title: "Pflegeberatung für Angehörige",
    description:
      "Begleitung, Aufklärung und Hilfe bei der Organisation von Pflege.",
    image: Img2,
    bgColor: "bg-secondary",
  },
  {
    id: 15,
    title: "Demenzbetreuung",
    description:
      "Einfühlsame Unterstützung für Menschen mit kognitiven Einschränkungen.",
    image: Img2,
    bgColor: "bg-secondary",
  },
  {
    id: 16,
    title: "Palliativpflege",
    description:
      "Würdevolle Begleitung in der letzten Lebensphase – mit Zeit und Zuwendung.",
    image: Img2,
    bgColor: "bg-secondary",
  },
  {
    id: 17,
    title: "Mobilitätsförderung",
    description: "Gezielte Maßnahmen zur Erhaltung der Selbstständigkeit.",
    image: Img2,
    bgColor: "bg-secondary",
  },
  {
    id: 18,
    title: "Pflegeüberleitung",
    description:
      "Nahtloser Übergang von Klinikaufenthalten in die häusliche Pflege.",
    image: Img2,
    bgColor: "bg-secondary",
  },
];

const Cards = () => {
  return (
    <div className="bg-slate-100">
      <div className="container py-16">
        {/* Section Title */}
        <motion.h2
          variants={slideUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }} // Ensure animation runs only once
          className="text-3xl font-bold text-center text-primary mb-10"
        >
          Weil Fürsorge bei uns Herzenssache ist
        </motion.h2>

        {/* Sub Section*/}
        <motion.h2
          variants={slideUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }} // Ensure animation runs only once
          className="text-base text-center text-primary/90 mb-10"
        >
          Wir unterstützen Menschen mit körperlichen oder psychischen
          Beeinträchtigungen oder auch mit gesundheitlich bedingten Belastungen
          bzw. Anforderungen mit individuell angepassten Leistungen. Gerne
          beraten wir Sie!
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <motion.div
              key={card.id}
              variants={slideUp(index * 0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }} // Ensure animation runs only once
              className={`bg-primary/80 shadow-xl rounded-xl px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto `}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-16 h-16 border-2 border-bg-white rounded-full object-contain p-3"
              />
              <p className="text-lg text-white font-semibold">{card.title}</p>
              <p className="text-sm text-white/80 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
