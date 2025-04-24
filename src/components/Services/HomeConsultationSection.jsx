import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { z } from "zod";

import HRImage from "../../assets/hr-1.jpg";

import CachedImage from "../CachedImage";

// Validation schema using zod
const schema = z.object({
  fullname: z.string().min(1, "Ihr Name ist erforderlich"),
  phone: z
    .string()
    .regex(/^\d+$/, "Telefonnummer darf nur Ziffern enthalten")
    .min(10, "Telefonnummer muss mindestens 10 Ziffern enthalten"),
});

const HomeConsultationSection = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Determine the API base URL dynamically
  const apiBaseUrl =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_BASE_URL_LOCAL
      : import.meta.env.VITE_API_BASE_URL_RENDER;

  // Define the mutation function
  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(`${apiBaseUrl}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok)
        throw new Error("Rückrufanfrage konnte nicht gesendet werden.");
      return response.json();
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setSuccessMessage("");

    try {
      const validatedData = schema.parse(formData);
      await mutation.mutateAsync(validatedData);

      setSuccessMessage("Rückrufanfrage erfolgreich versendet!");
      setFormData({
        fullname: "",
        phone: "",
      });
    } catch (error) {
      if (error.errors) {
        const validationErrors = {};
        error.errors.forEach((err) => {
          validationErrors[err.path[0]] = err.message;
        });
        setErrors(validationErrors);
      } else {
        setErrors({ form: "Ein unerwarteter Fehler ist aufgetreten." });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="md:col-span-2">
          <h2 className="text-primary/90 text-2xl md:text-3xl font-bold mb-4">
            Mehr Lebensqualität in den eigenen vier Wänden
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4 text-justify">
            Immer mehr Menschen entscheiden sich bewusst für eine Betreuung
            zuhause. Auch im Ruhrgebiet vertrauen viele Pflegedürftige auf die
            Vorteile der ambulanten Pflege – und damit auf mehr Selbstbestimmung
            und Geborgenheit in vertrauter Umgebung.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4 text-justify">
            Sernitas Care ist Ihr zuverlässiger Partner für die häusliche Pflege
            in Bochum und Umgebung. Unsere qualifizierten Pflegekräfte und
            geschulten Mitarbeiter:innen aus dem hauswirtschaftlichen Bereich
            sorgen dafür, dass Sie oder Ihre Angehörigen medizinisch,
            pflegerisch und alltagspraktisch bestens versorgt sind – direkt in
            Ihrem Zuhause.
          </p>
          <p className="text-gray-500 leading-relaxed text-justify">
            Mit Sernitas Care entscheiden Sie sich für einen kultursensiblen
            Pflegedienst, der nicht nur professionell, sondern auch menschlich
            und mit Respekt für Vielfalt handelt.
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-primary/90 text-lg font-bold ml-4 mb-4">
            Kostenfreie Beratung
          </h3>
          <div className="flex items-center gap-4 mb-6">
            <CachedImage
              src={HRImage}
              alt="Consultant"
              className="w-16 h-16 rounded-full object-cover border-2 border-primary/90"
            />
            <div>
              <p className="font-ephesis text-primary/90 text-2xl font-bold tracking-wide">
                Dr. Ali Yildiz
              </p>
              <p className="text-gray-400 text-sm">Mo - Fr 08:00 - 17:00</p>
              <p className="text-primary/90 font-bold">0234 / 966 46 480</p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <p className="text-primary/90 font-medium ml-4 mb-4">
              Wir rufen Sie zurück!
            </p>
            <div className="ml-4 mr-4 mb-4 text-gray-700">
              <Input
                type="text"
                name="fullname"
                placeholder="Ihr Name *"
                value={formData.fullname}
                onChange={handleChange}
                className="home-consultation-input"
              />
              {errors.fullname && (
                <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>
              )}
            </div>
            <div className="ml-4 mr-4 mb-4 text-gray-700">
              <Input
                type="tel"
                name="phone"
                placeholder="Telefonnummer *"
                value={formData.phone}
                onChange={handleChange}
                className="home-consultation-input"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            <div className="ml-4 mb-4">
              <label className="flex items-start text-sm text-gray-500">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent || false}
                  onChange={(e) =>
                    setFormData({ ...formData, consent: e.target.checked })
                  }
                  className="mr-2 mt-1"
                  required
                />
                Ja, ich habe die Datenschutzerklärung zur Kenntnis genommen und
                bin damit einverstanden, dass die von mir angegebenen Daten
                elektronisch erhoben und gespeichert werden.
              </label>
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-white py-2 rounded-2xl hover:bg-primary/80 transition shadow-xl"
            >
              {isLoading ? "Senden..." : "Rückruf anfordern"}
            </Button>
            {successMessage && (
              <p className="text-green-500 text-sm mt-4">{successMessage}</p>
            )}
            {errors.form && (
              <p className="text-red-500 text-sm mt-4">{errors.form}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomeConsultationSection;
