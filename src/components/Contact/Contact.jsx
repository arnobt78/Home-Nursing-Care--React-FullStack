import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query"; // Import useMutation

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";

import { z } from "zod";

// Define validation schema using zod
const schema = z.object({
  fullname: z.string().min(1, "Vollständiger Name ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  phone: z
    .string()
    .regex(/^\d+$/, "Telefonnummer darf nur Ziffern enthalten")
    .min(10, "Telefonnummer muss mindestens 10 Ziffern enthalten"),
  message: z.string().min(1, "Nachricht ist erforderlich"),
});

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefonnummer",
    description: "+49 234 966 46 480",
  },
  {
    icon: <FaEnvelope />,
    title: "E-Mail",
    description: "info@sernitas-care.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adresse",
    description: (
      <>
        Sernitas GmbH <br />
        BioMedizinZentrum Bochum <br />
        Universitätsstraße 136, <br />
        44799 Bochum
      </>
    ),
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Determine the API base URL dynamically
  const apiBaseUrl =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_BASE_URL_LOCAL // Local backend
      : import.meta.env.VITE_API_BASE_URL_RENDER; // Render backend

  // Define the mutation function
  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(`${apiBaseUrl}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok)
        throw new Error("Nachricht konnte nicht gesendet werden.");
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
      // Validate form data using zod schema
      const validatedData = schema.parse(formData);

      // Use mutation for API call
      await mutation.mutateAsync(validatedData);

      setSuccessMessage("Nachricht erfolgreich versendet!");
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        message: "",
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
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pt-24 pb-2 bg-slate-600"
    >
      <div className="container mx-auto p-4">
        {/* Use grid for larger screens and flex-col-reverse for phone screens */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] bg-slate-200 text-primary rounded-md flex justify-center items-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/70">{item.title}</p>
                    <h3 className="text-xl text-white">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-700 p-6 sm:p-8 lg:p-10 rounded-xl w-full"
          >
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <h3 className="text-3xl sm:text-4xl text-white/90">
                Wir sind für Sie da
              </h3>
              <p className="text-white/70 text-justify">
                Treten Sie mit Sernitas Care in Kontakt – wir stehen Ihnen mit
                vertrauensvoller, einfühlsamer und professioneller Pflege zur
                Seite. Gemeinsam sorgen wir für mehr Wohlbefinden, Würde und
                Geborgenheit für Ihre Liebsten. Wir freuen uns auf Ihre
                Nachricht!
              </p>
              <div className="grid gap-6">
                <Input
                  type="text"
                  name="fullname"
                  placeholder="Vor- und Nachname"
                  value={formData.fullname}
                  onChange={handleChange}
                />
                {errors.fullname && (
                  <p className="text-red-500 text-sm">{errors.fullname}</p>
                )}
                <Input
                  type="email"
                  name="email"
                  placeholder="E-Mail-Adresse"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Telefonnummer"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Ihre Nachricht"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
              {successMessage && (
                <p className="text-green-500 text-sm">{successMessage}</p>
              )}
              {errors.form && (
                <p className="text-red-500 text-sm">{errors.form}</p>
              )}
              <Button
                size="md"
                className="lg:max-w-[200px] sm:px-4 sm:py-2 bg-secondary text-white rounded-xl border-2 hover:bg-white hover:text-secondary hover:border-secondary transition duration-300 flex items-center justify-center"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Senden..." : "Nachricht senden"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
