import PropTypes from "prop-types";

const CardModal = ({ isOpen, onClose, cardData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg max-w-7xl w-full max-h-[90vh] p-24 relative overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={onClose}
            className="text-primary/90 font-semibold hover:text-secondary hover:border-b-2 hover:border-secondary transition duration-300"
          >
            ← Zurück zu Services
          </button>
          <button
            onClick={onClose}
            className="text-red-500 font-semibold text-2xl p-2 transition duration-300 bg-red-300/10 hover:bg-red-300/20"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div
          className="text-primary/90 text-justify leading-relaxed space-y-4 styled-content"
          dangerouslySetInnerHTML={{ __html: cardData.details }}
        ></div>

        {/* Footer Buttons */}
        <div className="flex justify-between mt-6">
          <a
            href="/contact"
            className="bg-primary/90 text-white px-4 py-2 rounded-lg hover:bg-secondary"
          >
            Unverbindlich Kontakt aufnehmen
          </a>
          <a
            href="/services/grundpflege"
            className="bg-gray-200 text-primary/90 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Zurück zu Services
          </a>
        </div>
      </div>
    </div>
  );
};

CardModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  cardData: PropTypes.object.isRequired,
};

export default CardModal;
