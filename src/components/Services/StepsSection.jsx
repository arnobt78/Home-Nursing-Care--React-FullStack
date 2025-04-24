import { FaPhoneAlt, FaCar, FaFileAlt, FaHome } from "react-icons/fa";

const StepsSection = () => {
  return (
    <section className="bg-gray-50 py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-primary text-2xl md:text-3xl font-bold mb-2">
          Sie brauchen einen Pflegedienst?
        </h2>
        <p className="text-secondary font-ephesis text-3xl tracking-wide italic font-bold mb-8">
          So einfach geht’s
        </p>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/90 text-white rounded-full flex items-center justify-center mb-4">
              <FaPhoneAlt className="text-2xl" />
            </div>
            <p className="text-primary/90 text-base md:text-lg">
              Rufen Sie uns an: <br />
              <span className="font-bold">0234 / 966 46 480</span>
            </p>
          </div>

          {/* Curvy Arrow */}
          <div className="hidden md:block relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 50"
              className="w-24 h-12 text-primary/90"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M0 25 Q50 50, 100 25" />
            </svg>
            <div className="absolute right-0 top-1/2 transform translate-x-3 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-primary/90"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/90 text-white rounded-full flex items-center justify-center mb-4">
              <FaCar className="text-2xl" />
            </div>
            <p className="text-primary/90 text-base md:text-lg">
              Wir kommen sofort <br />
              bei Ihnen vorbei
            </p>
          </div>

          {/* Curvy Arrow */}
          <div className="hidden md:block relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 50"
              className="w-24 h-12 text-primary/90"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M0 25 Q50 50, 100 25" />
            </svg>
            <div className="absolute right-0 top-1/2 transform translate-x-3 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-primary/90"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/90 text-white rounded-full flex items-center justify-center mb-4">
              <FaFileAlt className="text-2xl" />
            </div>
            <p className="text-primary/90 text-base md:text-lg">
              Sie bekommen <br />
              ein Angebot
            </p>
          </div>

          {/* Curvy Arrow */}
          <div className="hidden md:block relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 50"
              className="w-24 h-12 text-primary/90"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M0 25 Q50 50, 100 25" />
            </svg>
            <div className="absolute right-0 top-1/2 transform translate-x-3 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-primary/90"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/90 text-white rounded-full flex items-center justify-center mb-4">
              <FaHome className="text-2xl" />
            </div>
            <p className="text-primary/90 text-base md:text-lg">
              Ihr Pflegedienst kommt <br />
              schon am nächsten Tag!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
