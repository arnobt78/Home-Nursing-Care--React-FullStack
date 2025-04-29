// import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";

// const RatgeberModal = ({ isOpen, onClose, RatgeberData }) => {
//   const navigate = useNavigate();

//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto"
//       style={{ marginTop: "4rem" }} // Adjust this value based on your navbar height
//     >
//       <div
//         className="bg-white rounded-lg shadow-lg w-full max-w-7xl overflow-hidden py-12 xl:py-24 px-6 md:px-16 lg:px-36 xl:px-44 space-y-12"
//         style={{ paddingTop: "350rem" }} // Adjust this value based on your navbar height
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-red-500 hover:text-red-800 text-3xl p-1 transition duration-300 bg-red-300/10 hover:bg-red-300/20"
//         >
//           ✕
//         </button>

//         {/* Ratgeber Image */}
//         <div className="w-full flex justify-center items-center">
//           <img
//             src={RatgeberData.image}
//             alt={RatgeberData.title}
//             className="w-full bg-cover bg-center"
//           />
//         </div>

//         {/* Ratgeber Content */}
//         <div className="space-y-12">
//           <h2 className="text-2xl font-bold text-primary/90 text-center">
//             {RatgeberData.title}
//           </h2>

//           {/* Content */}
//           <div
//             className="text-primary/90 text-justify leading-relaxed space-y-4 styled-content"
//             dangerouslySetInnerHTML={{ __html: RatgeberData.description }}
//           ></div>
//         </div>

//         {/* Footer Buttons */}
//         <div className="flex justify-between mt-6">
//           <button
//             onClick={() => navigate("/contact")}
//             className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary"
//           >
//             Unverbindlich Kontakt aufnehmen
//           </button>
//           <button
//             type="button"
//             onClick={onClose}
//             className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
//           >
//             Zurück zu Pflege-Ratgeber
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// RatgeberModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   RatgeberData: PropTypes.shape({
//     image: PropTypes.string,
//     title: PropTypes.string,
//     description: PropTypes.string,
//   }).isRequired,
// };

// export default RatgeberModal;

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const RatgeberModal = ({ isOpen, onClose, RatgeberData }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-start overflow-y-auto"
      style={{ marginTop: "4rem" }} // Ensure modal starts below the navbar
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-7xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 hover:text-red-800 text-3xl p-1 transition duration-300 bg-red-300/10 hover:bg-red-300/20"
        >
          ✕
        </button>

        {/* Ratgeber Image */}
        <div className="w-full h-96 flex justify-center items-center bg-gray-100">
          <img
            src={RatgeberData.image}
            alt={RatgeberData.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Ratgeber Content */}
        <div className="p-6 md:p-12 space-y-6">
          <h2 className="text-2xl font-bold text-primary/90 text-center">
            {RatgeberData.title}
          </h2>

          {/* Content */}
          <div
            className="text-primary/90 text-justify leading-relaxed space-y-4 styled-content"
            dangerouslySetInnerHTML={{ __html: RatgeberData.description }}
          ></div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between p-6 md:p-12">
          <button
            onClick={() => navigate("/contact")}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary"
          >
            Unverbindlich Kontakt aufnehmen
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            Zurück zu Pflege-Ratgeber
          </button>
        </div>
      </div>
    </div>
  );
};

RatgeberModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  RatgeberData: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default RatgeberModal;
