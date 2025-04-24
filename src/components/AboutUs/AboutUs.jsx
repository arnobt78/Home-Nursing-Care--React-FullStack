// import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { FaCheckCircle } from "react-icons/fa";

import AboutImg1 from "../../assets/hr-1.jpg";
import AboutImg2 from "../../assets/hr-2.jpg";
import AboutImg3 from "../../assets/hr-3.jpg";
import AboutImg4 from "../../assets/hero-1.jpg";

import { MotionCachedImage } from "../CachedImage";
// import CachedImage from "../CachedImage";

const team = [
  {
    name: "Dr. Ali Yildiz",
    title: "CEO",
    img: AboutImg1,
    link: "https://www.linkedin.com/in/ali-yildiz-09376a157/", // Add the link for this member
  },
  {
    name: "Sümeyya Yildiz",
    title: "Personalbuchhalterin",
    img: AboutImg2,
    link: "https://www.linkedin.com/in/s%C3%BCmeyya-yildiz-9117272a4/", // Add the link for this member
  },
  {
    name: "Andre Piper",
    title: "Betriebsleiter",
    img: AboutImg3,
    link: "https://www.linkedin.com/in/andre-pieper-7b208b24b/", // Add the link for this member
  },
];

const services = [
  "24/7 Pflege und Betreuung zu Hause",
  "Individuelle Pflegepläne für Senior*innen",
  "Rehabilitation und Unterstützung nach Operationen",
  "Palliativ- und Hospizbegleitung mit Würde",
  "Kostenlose Beratung und persönliche Pflegeeinschätzung",
  "Unterstützung für Angehörige und enge Zusammenarbeit",
  "Pflege mit Respekt, ohne Diskriminierung – unabhängig von Herkunft oder Religion",
  "Bereitstellung notwendiger Pflegehilfsmittel und Alltagshilfen",
];

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 py-24 md:px-16 max-w-7xl mx-auto space-y-16"
    >
      {/* Mission Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        {/* <motion.img
          src={AboutImg4}
          alt="Company Mission"
          className="w-full rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }} 
        /> */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MotionCachedImage
            src={AboutImg4}
            alt="Company Mission"
            className="w-full rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Unsere Mission
          </h2>
          <p className="text-primary/90 leading-relaxed">
            Bei Sernitas Care ist es unsere Herzensaufgabe, Menschen mit
            Mitgefühl, Respekt und individueller Fürsorge zu begleiten. Wir
            möchten pflegebedürftigen Menschen und ihren Familien Kraft und
            Vertrauen schenken – und gleichzeitig professionelle Pflege auf
            Klinikniveau direkt in die Geborgenheit des eigenen Zuhauses
            bringen.
          </p>
        </motion.div>
      </section>

      {/* Unique Section */}
      <section className="bg-primary/10 rounded-2xl p-10 shadow-inner">
        <motion.h2
          className="text-3xl font-semibold text-primary mb-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Was uns besonders macht
        </motion.h2>
        <motion.p
          className="text-primary/90 max-w-4xl mx-auto text-center text-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Bei Sernitas Care steht nicht nur die Pflege im Mittelpunkt – sondern
          der Mensch in seiner Ganzheit. Mit Herz, Verstand und tiefem Respekt
          begleiten wir unsere Pflegekund*innen auf ihrem individuellen Weg. Wir
          nehmen uns Zeit, hören zu und gestalten Pflege, die nicht nur
          professionell, sondern auch menschlich ist.
          <br />
          <br />
          Unsere Stärke liegt in der Verbindung aus fachlicher Kompetenz, echter
          Nähe und einem tiefen Verständnis für die Bedürfnisse jedes Einzelnen.
          Wir glauben daran, dass würdevolle Pflege zu Hause möglich ist – mit
          Vertrauen, Empathie und einem Team, das seine Arbeit als Berufung
          versteht.
          <br />
          <br />
          Was uns besonders macht? Wir pflegen mit dem Herzen. Fürsorge ist bei
          uns kein Service – sie ist unsere Herzenssache.
        </motion.p>
      </section>

      {/* Team Section */}
      {/* <section>
        <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
          Lernen Sie unser Team kennen
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <CachedImage
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center bg-primary/10">
                <h3 className="text-lg font-semibold text-primary/90">
                  {member.name}
                </h3>
                <p className="text-md text-primary/90">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}
      <section>
        <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
          Lernen Sie unser Team kennen
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.a
              key={index}
              href={member.link} // Add the link for each team member
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-xl group relative block"
            >
              {/* Background Image */}
              <div
                className="w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${member.img})` }}
              ></div>

              {/* Overlay with Name and Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 pb-2 text-white text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-md">{member.title}</p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
          Was wir anbieten
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <FaCheckCircle className="text-primary text-2xl flex-shrink-0" />
              <p className="text-primary/90 font-semibold text-sm">{service}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUs;
