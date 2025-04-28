import { motion } from "framer-motion";
import { useState } from "react";
import { slideUp } from "../../utility/animation";
import CachedImage from "../CachedImage";
import CardModal from "./CardModal";
import { cardsData } from "./cardData"; // Import card data

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpenModal = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="bg-slate-100">
      <div className="container py-24 px-6 md:px-12 xl:px-72">
        {/* Section Title */}
        <h2 className="text-center text-primary/90 text-lg md:text-xl font-medium mb-4">
          Zuhause in besten Händen
        </h2>
        <motion.h1
          variants={slideUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-primary/90 mb-12"
        >
          Unsere Leistungen auf einen Blick
        </motion.h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <motion.div
              key={card.id}
              variants={slideUp(index * 0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-primary/80 shadow-2xl rounded-2xl px-4 py-10 text-center flex flex-col justify-center items-center md:max-w-[350px] mx-auto"
            >
              <CachedImage
                src={card.image}
                alt={card.title}
                className="w-16 h-16 border-2 border-bg-white rounded-full object-contain p-3"
              />
              <p className="text-lg text-white font-semibold">{card.title}</p>
              <p className="text-sm text-white/80 leading-relaxed ">
                {card.description}
              </p>
              <button
                onClick={() => handleOpenModal(card)}
                className="mt-4 bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                WEITERLESEN
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <CardModal
          isOpen={!!selectedCard}
          onClose={handleCloseModal}
          cardData={selectedCard}
        />
      )}
    </div>
  );
};

export default Cards;

// import { motion } from "framer-motion";
// import { useState } from "react";
// import { slideUp } from "../../utility/animation";
// import CachedImage from "../CachedImage";
// import CardModal from "./CardModal";
// import { cardsData } from "./cardData"; // Import card data

// const Cards = () => {
//   const [selectedCard, setSelectedCard] = useState(null);

//   const handleOpenModal = (card) => {
//     setSelectedCard(card);
//   };

//   const handleCloseModal = () => {
//     setSelectedCard(null);
//   };

//   return (
//     <div className="bg-slate-100">
//       <div className="container py-16">
//         {/* Section Title */}
//         <motion.h2
//           variants={slideUp(0.2)}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className="text-3xl font-bold text-center text-primary mb-10"
//         >
//           Weil Fürsorge bei uns Herzenssache ist
//         </motion.h2>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {cardsData.map((card, index) => (
//             <motion.div
//               key={card.id}
//               variants={slideUp(index * 0.2)}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//               className="bg-primary/90 shadow-xl rounded-xl p-4 flex items-center gap-4"
//             >
//               {/* Icon Section */}
//               <div className="flex-shrink-0">
//                 <CachedImage
//                   src={card.image}
//                   alt={card.title}
//                   className="w-16 h-16 border-2 border-white rounded-full object-contain p-3"
//                 />
//               </div>

//               {/* Text Section */}
//               <div className="flex-1">
//                 <p className="text-lg text-white font-semibold">{card.title}</p>
//                 <p className="text-sm text-slate-100 leading-relaxed">
//                   {card.description}{" "}
//                   <span
//                     onClick={() => handleOpenModal(card)} // Open modal on click
//                     className="italic font-semibold text-white cursor-pointer hover:underline   hover:text-slate-200 transition-transform duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
//                   >
//                     Weiterlesen...
//                   </span>
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedCard && (
//         <CardModal
//           isOpen={!!selectedCard}
//           onClose={handleCloseModal}
//           cardData={selectedCard}
//         />
//       )}
//     </div>
//   );
// };

// export default Cards;
