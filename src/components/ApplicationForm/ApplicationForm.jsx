import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { z } from "zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

// Zod validation schema
const ApplicationFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  birthDate: z.string().nonempty("Birth date is required"),
  gender: z.enum(["Male", "Female", "Other"], "Gender is required"),
  streetName: z.string().min(2, "Street name must be at least 2 characters"),
  houseNumber: z.string().min(1, "House number is required"),
  postalCode: z.string().min(4, "Postal code must be at least 4 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  occupation: z.string().min(2, "Occupation must be at least 2 characters"),
  emergencyContactName: z
    .string()
    .min(2, "Emergency contact name must be at least 2 characters"),
  emergencyContactNumber: z
    .string()
    .regex(/^\d+$/, "Emergency contact number must contain only digits")
    .min(10, "Emergency contact number must be at least 10 digits"),
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
    message: "You must agree to the privacy policy",
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

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log("Form Data:", data);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Application submitted successfully!");
    }, 2000);
  };

  return (
    <motion.div
      className="container mx-auto py-24 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl text-primary font-bold text-center mb-6">
        Application Form
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 max-w-3xl mx-auto bg-primary text-white p-6 rounded-lg shadow-lg"
      >
        {/* First Name and Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium mb-1">First Name</label>
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
            <label className="block text-lg font-medium mb-1">Last Name</label>
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
            <label className="block text-lg font-medium mb-1">Birth Date</label>
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
            <label className="block text-lg font-medium mb-1">Gender</label>
            <select
              {...register("gender")}
              className="w-full h-[48px] text-white bg-[#436b6c] rounded-md p-2"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
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
              Street Name
            </label>
            <Input
              type="text"
              placeholder="Main Street"
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
            <label className="block text-lg font-medium mb-1">
              House Number
            </label>
            <Input
              type="text"
              placeholder="123"
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
              Postal Code
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
            <label className="block text-lg font-medium mb-1">City</label>
            <Input
              type="text"
              placeholder="New York"
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
          <label className="block text-lg font-medium mb-1">Occupation</label>
          <Input
            type="text"
            placeholder="Software Engineer"
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
              Emergency Contact Name
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
              Emergency Contact Number
            </label>
            <Input
              type="text"
              placeholder="1234567890"
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
            Primary Physician
          </label>
          <Input
            type="text"
            placeholder="Dr. Smith"
            {...register("primaryPhysician")}
            className="w-full"
          />
        </div>

        {/* Insurance Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium mb-1">
              Insurance Provider
            </label>
            <Input
              type="text"
              placeholder="BlueCross"
              {...register("insuranceProvider")}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">
              Insurance Policy Number
            </label>
            <Input
              type="text"
              placeholder="123456789"
              {...register("insurancePolicyNumber")}
              className="w-full"
            />
          </div>
        </div>

        {/* Medical History */}
        <div>
          <label className="block text-lg font-medium mb-1">
            Allergies/Disease
          </label>
          <Textarea
            placeholder="List any allergies or diseases"
            {...register("allergies")}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">
            Current Medication
          </label>
          <Textarea
            placeholder="List any current medications"
            {...register("currentMedication")}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">
            Family Medical History
          </label>
          <Textarea
            placeholder="Describe family medical history"
            {...register("familyMedicalHistory")}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">
            Past Medical History
          </label>
          <Textarea
            placeholder="Describe past medical history"
            {...register("pastMedicalHistory")}
            className="w-full"
          />
        </div>

        {/* Identification */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium mb-1">
              Identification Type
            </label>
            <select
              {...register("identificationType")}
              className="w-full h-[48px] text-white bg-[#436b6c] rounded-md p-2"
            >
              <option value="">Select Identification Type</option>
              <option value="Passport">Passport</option>
              <option value="National ID">National ID</option>
              <option value="Driving License">Driving License</option>
              <option value="Other">Other</option>
            </select>
            {errors.identificationType && (
              <p className="text-red-500 text-md mt-1">
                {errors.identificationType.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">
              Identification Number
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
            Remarks/Comments
          </label>
          <Textarea
            placeholder="Additional comments or remarks"
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
          <label className="text-md">I agree to the privacy policy</label>
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
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </motion.div>
  );
};

export default ApplicationForm;
