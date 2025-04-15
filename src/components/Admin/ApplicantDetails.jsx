import React from "react";
import PropTypes from "prop-types";

const ApplicantDetails = ({ application, onClose }) => {
  if (!application) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center pt-24">
      <div
        className="bg-white p-6 rounded shadow-lg max-w-lg w-full"
        style={{
          maxHeight: "90vh", // Limit the height to 90% of the viewport
          overflowY: "auto", // Enable vertical scrolling if content overflows
        }}
      >
        <button
          onClick={onClose}
          className="text-red-500 font-bold text-lg float-right"
        >
          ✕
        </button>
        <h3 className="text-xl font-bold mb-4 border-b-2 pb-2">
          Applicant&apos;s Details
        </h3>
        <div className="space-y-4">
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(application.createdAt).toLocaleString()}
          </p>
          <p>
            <strong>Full Name:</strong> {application.firstName}{" "}
            {application.lastName}
          </p>
          <p>
            <strong>Date of Birth:</strong>{" "}
            {new Date(application.birthDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Gender:</strong> {application.gender}
          </p>
          <p>
            <strong>Address:</strong> {application.streetName},{" "}
            {application.houseNumber}, {application.city},{" "}
            {application.postalCode}
          </p>
          <p>
            <strong>Occupation:</strong> {application.occupation}
          </p>
          <p>
            <strong>Emergency Contact:</strong>{" "}
            {application.emergencyContactName} (
            {application.emergencyContactNumber})
          </p>
          <p>
            <strong>Primary Physician:</strong> {application.primaryPhysician}
          </p>
          <p>
            <strong>Insurance Provider:</strong> {application.insuranceProvider}
          </p>
          <p>
            <strong>Insurance Policy Number:</strong>{" "}
            {application.insurancePolicyNumber}
          </p>
          <p>
            <strong>Allergies:</strong> {application.allergies}
          </p>
          <p>
            <strong>Current Medication:</strong> {application.currentMedication}
          </p>
          <p>
            <strong>Family Medical History:</strong>{" "}
            {application.familyMedicalHistory}
          </p>
          <p>
            <strong>Past Medical History:</strong>{" "}
            {application.pastMedicalHistory}
          </p>
          <p>
            <strong>Identification Type:</strong>{" "}
            {application.identificationType}
          </p>
          <p>
            <strong>Identification Number:</strong>{" "}
            {application.identificationNumber}
          </p>
          <p>
            <strong>Remarks:</strong> {application.remarks}
          </p>
          <p>
            <strong>Privacy Consent:</strong>{" "}
            {application.privacyConsent ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
};

ApplicantDetails.propTypes = {
  application: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default ApplicantDetails;
