import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { z } from "zod";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

// // Zod validation schema in English
// const ApplicationFormSchema = z.object({
//   firstName: z.string().min(2, "First name must be at least 2 characters"),
//   lastName: z.string().min(2, "Last name must be at least 2 characters"),
//   birthDate: z.string().nonempty("Birth date is required"),
//   gender: z.enum(["Male", "Female", "Other"], "Gender is required"),
//   streetName: z.string().min(2, "Street name must be at least 2 characters"),
//   houseNumber: z.string().min(1, "House number is required"),
//   postalCode: z.string().min(4, "Postal code must be at least 4 characters"),
//   city: z.string().min(2, "City must be at least 2 characters"),
//   occupation: z.string().min(2, "Occupation must be at least 2 characters"),
//   emergencyContactName: z
//     .string()
//     .min(2, "Emergency contact name must be at least 2 characters"),
//   emergencyContactNumber: z
//     .string()
//     .regex(/^\d+$/, "Emergency contact number must contain only digits")
//     .min(10, "Emergency contact number must be at least 10 digits"),
//   primaryPhysician: z.string().optional(),
//   insuranceProvider: z.string().optional(),
//   insurancePolicyNumber: z.string().optional(),
//   allergies: z.string().optional(),
//   currentMedication: z.string().optional(),
//   familyMedicalHistory: z.string().optional(),
//   pastMedicalHistory: z.string().optional(),
//   identificationType: z.enum([
//     "Passport",
//     "National ID",
//     "Driving License",
//     "Other",
//   ]),
//   identificationNumber: z.string().optional(),
//   remarks: z.string().optional(),
//   privacyConsent: z.boolean().refine((val) => val, {
//     message: "You must agree to the privacy policy",
//   }),
// });

// Zod validation schema (messages in German)
const ApplicationFormSchema = z.object({
  firstName: z.string().min(2, "Vorname muss mindestens 2 Zeichen lang sein"),
  lastName: z.string().min(2, "Nachname muss mindestens 2 Zeichen lang sein"),
  birthDate: z.string().nonempty("Geburtsdatum ist erforderlich"),
  gender: z.enum(["Male", "Female", "Other"], {
    errorMap: () => ({ message: "Geschlecht ist erforderlich" }),
  }),
  streetName: z
    .string()
    .min(2, "Straßenname muss mindestens 2 Zeichen lang sein"),
  houseNumber: z.string().min(1, "Hausnummer ist erforderlich"),
  postalCode: z
    .string()
    .min(4, "Postleitzahl muss mindestens 4 Zeichen lang sein"),
  city: z.string().min(2, "Stadt muss mindestens 2 Zeichen lang sein"),
  occupation: z.string().min(2, "Beruf muss mindestens 2 Zeichen lang sein"),
  emergencyContactName: z
    .string()
    .min(2, "Name der Kontaktperson muss mindestens 2 Zeichen lang sein"),
  emergencyContactNumber: z
    .string()
    .regex(/^\d+$/, "Notfallnummer darf nur Ziffern enthalten")
    .min(10, "Notfallnummer muss mindestens 10 Ziffern enthalten"),
  primaryPhysician: z.string().optional(),
  insuranceProvider: z.string().optional(),
  insurancePolicyNumber: z.string().optional(),
  allergies: z.string().optional(),
  currentMedication: z.string().optional(),
  familyMedicalHistory: z.string().optional(),
  pastMedicalHistory: z.string().optional(),
  identificationType: z.enum([
    "Passport",
    "National ID",
    "Driving License",
    "Other",
  ]),
  identificationNumber: z.string().optional(),
  remarks: z.string().optional(),
  privacyConsent: z.boolean().refine((val) => val, {
    message: "Sie müssen der Datenschutzerklärung zustimmen",
  }),
});

const ApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ApplicationFormSchema),
  });

  // Determine the API base URL dynamically
  const apiBaseUrl =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_BASE_URL_LOCAL // Local backend
      : import.meta.env.VITE_API_BASE_URL_RENDER; // Render backend

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${apiBaseUrl}/api/applications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      const result = await response.json();
      console.log("Application submitted successfully:", result);
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application. Please try again.");
    }
  };

  return (
    <motion.div
      className="container mx-auto py-24 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl text-primary font-bold text-center mb-6">
        Bewerbungsformular
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 max-w-3xl mx-auto bg-primary text-white p-6 rounded-lg shadow-lg"
      >
        {/* First Name and Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium mb-1">Vorname</label>
            <Input
              type="text"
              placeholder="John"
              {...register("firstName")}
              className="w-full"
            />
            {errors.firstName && (
              <p className="text-red-500 text-md mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">Nachname</label>
            <Input
              type="text"
              placeholder="Doe"
              {...register("lastName")}
              className="w-full"
            />
            {errors.lastName && (
              <p className="text-red-500 text-md mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Birth Date and Gender */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium mb-1">
              Geburtsdatum
            </label>
            <Input
              type="date"
              {...register("birthDate")}
              className="w-full justify-between"
            />
            {errors.birthDate && (
              <p className="text-red-500 text-md mt-1">
                {errors.birthDate.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">Geschlecht</label>
            <select
              {...register("gender")}
              className="w-full h-[48px] text-white bg-[#436b6c] rounded-md p-2"
            >
              <option value="">Geschlecht wählen</option>
              <option value="Male">Männlich</option>
              <option value="Female">Weiblich</option>
              <option value="Other">Divers</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-md mt-1">
                {errors.gender.message}
              </p>
            )}
          </div>
        </div>

        {/* Address Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium mb-1">
              Straßenname
            </label>
            <Input
              type="text"
              placeholder="Beispielstraße"
              {...register("streetName")}
              className="w-full"
            />
            {errors.streetName && (
              <p className="text-red-500 text-md mt-1">
                {errors.streetName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">Hausnummer</label>
            <Input
              type="text"
              placeholder="12A"
              {...register("houseNumber")}
              className="w-full"
            />
            {errors.houseNumber && (
              <p className="text-red-500 text-md mt-1">
                {errors.houseNumber.message}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium mb-1">
              Postleitzahl
            </label>
            <Input
              type="text"
              placeholder="12345"
              {...register("postalCode")}
              className="w-full"
            />
            {errors.postalCode && (
              <p className="text-red-500 text-md mt-1">
                {errors.postalCode.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">Stadt</label>
            <Input
              type="text"
              placeholder="Berlin"
              {...register("city")}
              className="w-full"
            />
            {errors.city && (
              <p className="text-red-500 text-md mt-1">{errors.city.message}</p>
            )}
          </div>
        </div>

        {/* Occupation */}
        <div>
          <label className="block text-lg font-medium mb-1">Beruf</label>
          <Input
            type="text"
            placeholder="Pflegekraft"
            {...register("occupation")}
            className="w-full"
          />
          {errors.occupation && (
            <p className="text-red-500 text-md mt-1">
              {errors.occupation.message}
            </p>
          )}
        </div>

        {/* Emergency Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium mb-1">
              Name der Kontaktperson für Notfälle
            </label>
            <Input
              type="text"
              placeholder="Jane Doe"
              {...register("emergencyContactName")}
              className="w-full"
            />
            {errors.emergencyContactName && (
              <p className="text-red-500 text-md mt-1">
                {errors.emergencyContactName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">
              Telefonnummer der Kontaktperson
            </label>
            <Input
              type="text"
              placeholder="0123456789"
              {...register("emergencyContactNumber")}
              className="w-full"
            />
            {errors.emergencyContactNumber && (
              <p className="text-red-500 text-md mt-1">
                {errors.emergencyContactNumber.message}
              </p>
            )}
          </div>
        </div>

        {/* Primary Physician */}
        <div>
          <label className="block text-lg font-medium mb-1">
            Hausarzt / Hausärztin
          </label>
          <Input
            type="text"
            placeholder="Dr. Schmidt"
            {...register("primaryPhysician")}
            className="w-full"
          />
        </div>

        {/* Insurance Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium mb-1">
              Krankenkasse
            </label>
            <Input
              type="text"
              placeholder="AOK, TK, etc."
              {...register("insuranceProvider")}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">
              Versichertennummer
            </label>
            <Input
              type="text"
              placeholder="XYZ123456"
              {...register("insurancePolicyNumber")}
              className="w-full"
            />
          </div>
        </div>

        {/* Medical History */}
        <div>
          <label className="block text-lg font-medium mb-1">
            Allergien oder Erkrankungen
          </label>
          <Textarea
            placeholder="Bitte Allergien oder bekannte Krankheiten angeben"
            {...register("allergies")}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">
            Aktuelle Medikamente
          </label>
          <Textarea
            placeholder="Liste der derzeit eingenommenen Medikamente"
            {...register("currentMedication")}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">
            Medizinische Familiengeschichte
          </label>
          <Textarea
            placeholder="Relevante Informationen zur Familienanamnese"
            {...register("familyMedicalHistory")}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">
            Frühere Krankheiten
          </label>
          <Textarea
            placeholder="Bisherige gesundheitliche Beschwerden oder Diagnosen"
            {...register("pastMedicalHistory")}
            className="w-full"
          />
        </div>

        {/* Identification */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium mb-1">Ausweisart</label>
            <select
              {...register("identificationType")}
              className="w-full h-[48px] text-white bg-[#436b6c] rounded-md p-2"
            >
              <option value="">Ausweisart wählen</option>
              <option value="Passport">Reisepass</option>
              <option value="National ID">Personalausweis</option>
              <option value="Driving License">Führerschein</option>
              <option value="Other">Sonstige</option>
            </select>
            {errors.identificationType && (
              <p className="text-red-500 text-md mt-1">
                {errors.identificationType.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">
              Ausweisnummer
            </label>
            <Input
              type="text"
              placeholder="123456789"
              {...register("identificationNumber")}
              className="w-full"
            />
            {errors.identificationNumber && (
              <p className="text-red-500 text-md mt-1">
                {errors.identificationNumber.message}
              </p>
            )}
          </div>
        </div>

        {/* Remarks */}
        <div>
          <label className="block text-lg font-medium mb-1">
            Bemerkungen / Kommentare
          </label>
          <Textarea
            placeholder="Zusätzliche Informationen oder Hinweise"
            {...register("remarks")}
            className="w-full"
          />
          {errors.remarks && (
            <p className="text-red-500 text-md mt-1">
              {errors.remarks.message}
            </p>
          )}
        </div>

        {/* Privacy Consent */}
        <div className="flex items-center">
          <input
            type="checkbox"
            {...register("privacyConsent")}
            className="mr-2"
          />
          <label className="text-md">
            Ich stimme der Datenschutzerklärung zu
          </label>
        </div>
        {errors.privacyConsent && (
          <p className="text-red-500 text-md mt-1">
            {errors.privacyConsent.message}
          </p>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-auto border-white border-2 bg-secondary text-white py-2 rounded-md hover:bg-secondary/30 hover:border-slate-500 transition duration-200"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Wird gesendet..." : "Bewerbung absenden"}
        </Button>
      </form>
    </motion.div>
  );
};

export default ApplicationForm;
