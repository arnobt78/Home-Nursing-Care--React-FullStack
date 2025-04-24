import { useNavigate } from "react-router-dom";
import Image from "../../assets/service-5.png";

const Grundpflege = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="space-y-6 px-12">
      {/* Text and Image Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-green-700">
            Grundpflege: Wenn der Alltag schwer fällt, sind wir für Sie da
          </h2>
          <p className="text-primary/90 text-justify">
            Unsere Grundpflege hilft bei den ganz alltäglichen Dingen – wie
            Körperpflege, Ernährung oder Mobilität – mit Herz, Verstand und dem
            Blick fürs Wesentliche. So bleibt das Leben zuhause lebenswert,
            sicher und vertraut. Denn jeder von uns kann durch Krankheit oder
            einen Unfall plötzlich auf Unterstützung angewiesen sein – manchmal
            nur vorübergehend, manchmal dauerhaft. Dann sind unsere Pflegekräfte
            ohne lange Wartezeiten für Sie einsatzbereit und helfen dort, wo
            Hilfe gebraucht wird.
          </p>
          <p className="text-primary/90 text-justify">
            Die Grundpflege ist eine Leistung der Pflegeversicherung nach dem
            Sozialgesetzbuch XI (SGB XI) und richtet sich an Menschen mit
            anerkanntem Pflegegrad. Sie umfasst sogenannte Pflegesachleistungen,
            die wir individuell und bedarfsgerecht im häuslichen Umfeld
            erbringen. Das Team von Sernitas Care steht Ihnen zuverlässig und
            einfühlsam zur Seite, um gemeinsam den Alltag zu meistern – in Ihrer
            gewohnten Umgebung und ganz nach Ihren Bedürfnissen.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src={Image}
            alt="Grundpflege"
            className="w-full max-h-[300px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-green-700">
          Leistungsspektrum der Grundpflege
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
          <div className="text-white bg-secondary/80 p-4 rounded-2xl text-center shadow-2xl">
            Körperpflege
          </div>
          <div className="text-white bg-secondary/80 p-4 rounded-2xl text-center shadow-2xl">
            Betten und Lagern
          </div>
          <div className="text-white bg-secondary/80 p-4 rounded-2xl text-center shadow-2xl">
            An- und Auskleiden
          </div>
          <div className="text-white bg-secondary/80 p-4 rounded-2xl text-center shadow-2xl">
            Hilfe bei der Nahrungs- & Flüssigkeitsaufnahme
          </div>
          <div className="text-white bg-secondary/80 p-4 rounded-2xl text-center shadow-2xl">
            Verwendung von Inkontinenzprodukten
          </div>
          <div className="text-white bg-secondary/80 p-4 rounded-2xl text-center shadow-2xl">
            Prävention von Dekubitus, Thrombose, usw.
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <h3 className="text-lg font-bold text-green-700">
          Wir sind für Sie da!
        </h3>
        <p className=" text-primary/90 mt-2">
          Gerne beraten wir Sie, welche Leistungen für Sie passen. Auf diese
          Weise erhalten Sie eine individuell auf Sie oder Ihre Angehörigen
          abgestimmte Grundpflege. Sie haben Fragen? Auch die beantworten Ihnen
          unsere Mitarbeiter gerne. Rufen Sie uns an!
        </p>
        <button
          className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 mt-4"
          onClick={() => navigate("/contact")} // Navigate to /contact on click
        >
          Jetzt Kontakt aufnehmen →
        </button>
      </div>
    </div>
  );
};

export default Grundpflege;
