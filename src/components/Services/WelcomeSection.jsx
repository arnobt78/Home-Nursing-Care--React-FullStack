import React from "react";

const WelcomeSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-primary text-lg md:text-xl font-medium mb-4">
          Herzlich Willkommen bei Sernitas Care
        </h2>
        <h1 className="text-primary text-2xl md:text-3xl font-bold mb-6 leading-snug">
          Professionelle Pflege & Betreuung mit interkulturellem Verständnis
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-primary/90 mb-4">
          Mit unseren Pflege- und Betreuungsleistungen unterstützen wir Sie in
          den Bereichen, die im Alltag besonders wichtig sind:{" "}
          <span className="font-semibold text-secondary">Körperpflege</span>,{" "}
          <span className="font-semibold text-secondary">Ernährung</span> und{" "}
          <span className="font-semibold text-secondary">Mobilität</span>.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-primary/90">
          Wir sind da, um Ihnen bei den täglichen Aufgaben zur Seite zu stehen
          und sorgen mit viel Einfühlungsvermögen dafür, dass Sie sich rundum
          wohl und sicher fühlen – zu Hause eben.
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;
