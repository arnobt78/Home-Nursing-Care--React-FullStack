import { motion } from "framer-motion";

import BPA from "../../assets/bpa.png";
import KABS from "../../assets/kabs.png";
import Dr from "../../assets/hirler.png";
import Klinikum from "../../assets/klinikum.png";
import Burger from "../../assets/burger.png";
import LMU from "../../assets/lmu.png";

import Goethe from "../../assets/goethe.png";
import Nicc from "../../assets/nicc.png";
import IEC from "../../assets/iec.png";
import Markische from "../../assets/markische.png";
import American from "../../assets/american.png";
import Ankara from "../../assets/ankara.png";
import Timer from "../../assets/timer.png";
import LWL from "../../assets/lwl.png";

import CachedImage from "../CachedImage";

const affiliates = [
  {
    id: 1,
    img: BPA,
    alt: "BPA",
    link: "/",
  },
  {
    id: 2,
    img: KABS,
    alt: "KABS",
    link: "/",
  },
  {
    id: 3,
    img: Dr,
    alt: "Dr. med. Erwin Hirler",
    link: "/",
  },
  {
    id: 4,
    img: Klinikum,
    alt: "Klinikum Dritter Orden",
    link: "/",
  },
  {
    id: 5,
    img: Burger,
    alt: "Burger",
    link: "/",
  },
  {
    id: 6,
    img: LMU,
    alt: "LMU",
    link: "/",
  },

  {
    id: 7,
    img: Goethe,
    alt: "Goethe Institut",
    link: "https://www.goethe.de/de/index.html",
  },
  {
    id: 8,
    img: Nicc,
    alt: "Nice Education",
    link: "https://www.nice-education.de/",
  },
  {
    id: 9,
    img: IEC,
    alt: "International Education Centers",
    link: "https://internationaleducationcenters.de/?v=a4b7f41804b0",
  },
  {
    id: 10,
    img: Markische,
    alt: "Märkische Kliniken",
    link: "https://www.maerkische-kliniken.de/home.html",
  },
  {
    id: 11,
    img: American,
    alt: "American Life",
    link: "https://www.americanlife.com.tr/",
  },
  {
    id: 12,
    img: Ankara,
    alt: "Ankara University",
    link: "https://www.ankara.edu.tr/",
  },
  {
    id: 13,
    img: Timer,
    alt: "TÖMER Ankara University",
    link: "https://tomer.ankara.edu.tr/",
  },
  {
    id: 14,
    img: LWL,
    alt: "LWL Psychiatry Verbund",
    link: "https://www.lwl-psychiatrieverbund.de/de/",
  },
];

const AffiliatesSection = () => {
  return (
    <motion.div
      className="w-full bg-white py-4 shadow-md z-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center gap-4 flex-wrap">
        {affiliates.map((affiliate) => (
          <motion.a
            key={affiliate.id}
            href={affiliate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex justify-center items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <CachedImage
              src={affiliate.img}
              alt={affiliate.alt}
              className="w-20 h-auto md:w-28 lg:w-32 object-contain"
            />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default AffiliatesSection;
