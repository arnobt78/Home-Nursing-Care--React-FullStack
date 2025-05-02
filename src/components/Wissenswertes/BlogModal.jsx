import PropTypes from "prop-types";
import { useState } from "react";
import { z } from "zod";

import CachedImage from "../CachedImage";

const BlogModal = ({ isOpen, onClose, blogData }) => {
  // State for form data, errors, and success message
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    comment: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  // Validation schema using zod
  const schema = z.object({
    fullname: z.string().min(1, "Ihr Name ist erforderlich"),
    email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
    comment: z.string().min(1, "Kommentar ist erforderlich"),
    consent: z
      .boolean()
      .refine((val) => val, "Bitte stimmen Sie der Speicherung zu"),
  });

  // Determine the API base URL dynamically
  const apiBaseUrl =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_BASE_URL_LOCAL
      : import.meta.env.VITE_API_BASE_URL_RENDER;

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setSuccessMessage("");

    try {
      // Validate form data
      const validatedData = schema.parse(formData);

      // Send comment to the server
      const response = await fetch(`${apiBaseUrl}/api/send-comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });

      if (!response.ok) {
        throw new Error("Kommentar konnte nicht gesendet werden.");
      }

      // Show success message
      setSuccessMessage("Kommentar erfolgreich abgeschickt!");
      setFormData({
        fullname: "",
        email: "",
        comment: "",
        consent: false,
      });
    } catch (error) {
      if (error.errors) {
        // Handle validation errors
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
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto"
      style={{ marginTop: "4rem" }} // Adjust this value based on your navbar height
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-7xl overflow-hidden py-12 xl:py-24 px-6 md:px-16 lg:px-36 xl:px-44 space-y-12"
        style={{ paddingTop: "120rem" }} // Add extra padding to ensure the headline is visible
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 hover:text-red-800 text-3xl p-1 transition duration-300 bg-red-300/10 hover:bg-red-300/20"
        >
          ✕
        </button>

        {/* Blog Image */}
        <div className="w-full flex justify-center items-center">
          <CachedImage
            src={blogData.image}
            alt={blogData.title}
            className="w-full  bg-cover bg-center"
          />
        </div>

        {/* Blog Content */}
        <div className="space-y-12">
          <h2 className="text-2xl font-bold text-primary/90 text-center">
            {blogData.title}
          </h2>

          {/* Content */}
          <div
            className="text-primary/90 text-justify leading-relaxed space-y-4 styled-content"
            dangerouslySetInnerHTML={{ __html: blogData.description }}
          ></div>

          {/* Comments Section */}
          <div className="mt-8">
            <h3 className="text-xl lg:text-2xl font-bold text-primary/90 mb-8">
              Schreibe Einen Kommentar
            </h3>
            <form onSubmit={handleSubmit}>
              <textarea
                name="comment"
                placeholder="Kommentar *"
                className="w-full border border-gray-300 rounded-lg p-3 mb-4"
                rows="4"
                value={formData.comment}
                onChange={handleChange}
                required
              ></textarea>
              {errors.comment && (
                <p className="text-red-500 text-sm">{errors.comment}</p>
              )}
              <input
                type="text"
                name="fullname"
                placeholder="Name *"
                className="w-full border border-gray-300 rounded-lg p-3 mb-4"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
              {errors.fullname && (
                <p className="text-red-500 text-sm">{errors.fullname}</p>
              )}
              <input
                type="email"
                name="email"
                placeholder="E-Mail *"
                className="w-full border border-gray-300 rounded-lg p-3 mb-4"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
              <label className="flex items-start text-sm text-gray-500 mb-4">
                <input
                  type="checkbox"
                  name="consent"
                  className="mr-2 mt-1"
                  checked={formData.consent}
                  onChange={handleChange}
                />
                Meinen Namen, meine E-Mail-Adresse und meine Website in diesem
                Browser für die nächste Kommentierung speichern.
              </label>
              {errors.consent && (
                <p className="text-red-500 text-sm">{errors.consent}</p>
              )}
              <div className="flex justify-between mt-12">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
                >
                  {isLoading ? "Senden..." : "Kommentar Abschicken"}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
                >
                  Zurück zu Pflege-Blog
                </button>
              </div>
              {successMessage && (
                <p className="text-green-500 text-sm mt-4">{successMessage}</p>
              )}
              {errors.form && (
                <p className="text-red-500 text-sm mt-4">{errors.form}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  blogData: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default BlogModal;
