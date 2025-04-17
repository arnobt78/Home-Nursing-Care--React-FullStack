import PropTypes from "prop-types";
import { useState } from "react";

const ApplicantDetails = ({ application, onClose, onStatusChange }) => {
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false); // State for confirmation popup
  const [statusToChange, setStatusToChange] = useState(null); // Track the status to change

  if (!application) return null;

  // Handle confirmation for status change
  const handleConfirmStatusChange = () => {
    onStatusChange(application.id, statusToChange); // Change the status
    setShowConfirmationPopup(false); // Close confirmation popup
    onClose(); // Close the ApplicantDetails popup
  };

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
            <strong>E-mail:</strong> {application.email}
          </p>
          <p>
            <strong>Telephone:</strong> {application.telephone}
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
          <p>
            <strong>Status:</strong>{" "}
            <span
              className={`px-2 py-1 rounded text-white ${
                application.status === "Pending"
                  ? "bg-orange-500"
                  : application.status === "Approved"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            >
              {application.status}
            </span>
          </p>
          {/* Buttons for Approve, Decline, and Close */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            <button
              onClick={() => {
                setStatusToChange("Approved");
                setShowConfirmationPopup(true);
              }}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Approve
            </button>
            <button
              onClick={() => {
                setStatusToChange("Declined");
                setShowConfirmationPopup(true);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Decline
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 text-black px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Popup */}
      {showConfirmationPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <p className="text-lg font-medium mb-4 text-center">
              Are you sure you want to change the status to{" "}
              <span className="font-bold">{statusToChange}</span>?
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <button
                onClick={handleConfirmStatusChange}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Yes
              </button>
              <button
                onClick={() => setShowConfirmationPopup(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded-lg"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ApplicantDetails.propTypes = {
  application: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export default ApplicantDetails;
