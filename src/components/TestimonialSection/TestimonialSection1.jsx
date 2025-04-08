import { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import TestimonialImg from "../../assets/nurse-3.jpg"; // Replace with your thumbnail image path

Modal.setAppElement("#root"); // Required for accessibility

const TestimonialSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Correct YouTube embed URL
  const videoUrl = "https://www.youtube.com/embed/5ORB8IWFxMo"; // Replace with your YouTube video ID

  return (
    <div className="bg-primary/40 py-16">
      <motion.div
        className="container flex flex-col md:flex-row items-center justify-center gap-8" // Added items-center and justify-center for alignment
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Circular Video Thumbnail with Border Animation */}
        <motion.div
          className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden cursor-pointer flex-shrink-0" // Added flex-shrink-0 to prevent resizing
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsOpen(true)}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Border Circle */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          ></motion.div>
          <img
            src={TestimonialImg} // Replace with your thumbnail image
            alt="Testimonial Thumbnail"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-full">
            <FaPlay className="text-white text-4xl" />
          </div>
        </motion.div>

        {/* Testimonial Text */}
        <motion.div
          className="flex-1 text-gray-800 text-center md:text-left" // Added text-center for small screens
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-lg text-justify leading-relaxed">
            Ich arbeite seit ca. <strong>18 Jahren</strong> als Altenpflegerin
            im Altenheim. Pflege Stellenangebote zu vergleichen ist aufwendig
            und oft nichtssagend. Bewerbungsschreiben mit allem Drum und Dran
            ist nicht meins. Also habe ich mich bei Pflegia registriert und
            meine Wünsche & Anforderungen angegeben. Per SMS habe ich passende
            Stellenangebote von Pflegeheimen in meiner Umgebung bekommen und
            konnte alle Infos der Stellen auf einen Blick sehen: Gehalt,
            Fahrtweg, Vorteile, Ansprechpartner, Schichtsystem... So habe ich
            einen Job gefunden, in dem ich sehr zufrieden bin!
          </p>
          <p className="mt-4 text-xl font-bold">Astrid</p>
          <p className="text-gray-600">Altenpflegerin im Altenheim</p>
        </motion.div>
      </motion.div>

      {/* Modal for Video */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-black/70 p-4"
        overlayClassName="fixed inset-0 bg-black/50"
      >
        <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl w-full relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-3 text-gray-600 hover:text-gray-900 text-2xl"
          >
            &times;
          </button>
          <iframe
            src={videoUrl}
            className="w-full h-80 md:h-96"
            title="Testimonial Video"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default TestimonialSection;
