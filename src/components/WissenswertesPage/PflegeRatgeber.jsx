import { useState } from "react";
import ratgeberData from "./ratgeberData";
import RatgeberModal from "./RatgeberModal";

import CachedImage from "../CachedImage";

const PflegeRatgeber = () => {
  const [selectedRatgeber, setSelectedRatgeber] = useState(null);

  const handleOpenModal = (ratgeber) => {
    setSelectedRatgeber(ratgeber);
  };

  const handleCloseModal = () => {
    setSelectedRatgeber(null);
  };

  // Utility function to strip HTML tags from a string
  const stripHtmlTags = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  return (
    <div className="py-12 xl:py-24 px-6 lg:px-12 xl:px-44 space-y-12">
      {/* Header Section */}
      <div className="space-y-6">
        <h2 className="text-2xl xl:text-3xl font-bold text-green-700">
          PflegeRatgeber – Ihr Leitfaden für eine individuelle Pflege
        </h2>
        <p className="text-primary/90 text-justify">
          Willkommen bei unserem PflegeRatgeber – Ihrem vertrauensvollen
          Begleiter in der Welt der Pflege. Wir bei Sernitas Care wissen, dass
          Pflegebedürftigkeit eine herausfordernde Zeit für alle Betroffenen und
          deren Angehörige ist. Deshalb haben wir diesen Ratgeber
          zusammengestellt, um Ihnen eine fundierte Orientierung zu geben und
          Sie mit den nötigen Informationen zu versorgen, die Ihnen helfen, die
          besten Entscheidungen für die Pflege Ihrer Liebsten zu treffen.
        </p>
        <h3 className="text-xl font-bold text-green-700">
          Unsere Expertise für Ihre Sicherheit und Unterstützung
        </h3>
        <p className="text-primary/90 text-justify">
          Egal, ob es sich um die Grundpflege zu Hause, spezialisierte
          Behandlungspflege oder die Organisation von Verhinderungspflege
          handelt, wir bieten Ihnen wertvolle Einblicke in alle Aspekte der
          Pflege. Unser PflegeRatgeber umfasst die wichtigsten Themen rund um
          Pflegeversicherung, gesetzliche Regelungen, Pflegeformen und
          finanzielle Unterstützungsmöglichkeiten. So stellen wir sicher, dass
          Sie stets gut informiert sind und die Pflegebedürfnisse Ihrer
          Angehörigen optimal erfüllt werden.
        </p>
        <h4 className="text-lg font-bold text-green-700">
          Themen, die Sie erwarten:
        </h4>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-primary/90">
            <span className="text-green-700 font-bold">✔</span> Grundpflege und
            Behandlungspflege: Alles, was Sie über grundlegende Pflegeleistungen
            und spezialisierte medizinische Pflege wissen müssen.
          </li>
          <li className="flex items-start gap-2 text-primary/90">
            <span className="text-green-700 font-bold">✔</span>{" "}
            Pflegeversicherung und Zuschüsse: Ihre Rechte und wie Sie die
            finanziellen Hilfen optimal nutzen.
          </li>
          <li className="flex items-start gap-2 text-primary/90">
            <span className="text-green-700 font-bold">✔</span>{" "}
            Verhinderungspflege: Wie Sie durch unsere Unterstützung Entlastung
            in Ihrem Alltag finden können.
          </li>
          <li className="flex items-start gap-2 text-primary/90">
            <span className="text-green-700 font-bold">✔</span> Tipps zur
            häuslichen Pflege: Praktische Anleitungen, um die Pflege zu Hause
            sicher und effektiv zu gestalten.
          </li>
        </ul>
        <h4 className="text-lg font-bold text-green-700">
          Warum Sernitas Care?
        </h4>
        <p className="text-primary/90 text-justify">
          Als Experten in der häuslichen Pflege stehen wir Ihnen mit Rat und Tat
          zur Seite. Unsere jahrelange Erfahrung ermöglicht es uns, Ihnen
          maßgeschneiderte Lösungen anzubieten, die perfekt zu den Bedürfnissen
          Ihrer Familie passen. Lassen Sie uns gemeinsam den Weg zu einer
          würdevollen und kompetenten Pflege gehen.
        </p>
      </div>

      {/* Ratgeber Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-12">
        {ratgeberData.map((ratgeber) => (
          <div
            key={ratgeber.id}
            className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition transform hover:scale-105 duration-300 cursor-pointer"
            onClick={() => handleOpenModal(ratgeber)}
          >
            <CachedImage
              src={ratgeber.image}
              alt={ratgeber.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-primary/90 mb-2">
                {ratgeber.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stripHtmlTags(ratgeber.description).slice(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Ratgeber Modal */}
      {selectedRatgeber && (
        <RatgeberModal
          isOpen={!!selectedRatgeber}
          onClose={handleCloseModal}
          RatgeberData={selectedRatgeber}
        />
      )}
    </div>
  );
};

export default PflegeRatgeber;
