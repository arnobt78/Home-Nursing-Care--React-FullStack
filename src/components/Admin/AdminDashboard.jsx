import React, { useState, useEffect } from "react";
import axios from "axios";
import ApplicantDetails from "./ApplicantDetails";
import PaginationSelection from "./PaginationSelection";

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 8,
  });

  useEffect(() => {
    // Fetch application data from the backend
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/applications`)
      .then((response) => setApplications(response.data))
      .catch((error) => console.error("Error fetching applications:", error));
  }, []);

  // Calculate paginated data
  const paginatedApplications = applications.slice(
    pagination.pageIndex * pagination.pageSize,
    (pagination.pageIndex + 1) * pagination.pageSize
  );

  return (
    <div className="container mx-auto py-24">
      <h2 className="text-2xl text-center font-bold mb-4">Application Lists</h2>

      {/* Row for Number of Applications and Pagination Selection */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-600 text-sm">
          Number of Applicants: {applications.length}
        </div>
        <PaginationSelection
          pagination={pagination}
          setPagination={setPagination}
        />
      </div>

      <table className="w-full border-collapse border border-gray-300 text-center mt-4">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Created Date</th>
            <th className="border border-gray-300 p-2">First Name</th>
            <th className="border border-gray-300 p-2">Last Name</th>
            <th className="border border-gray-300 p-2">Age</th>
            <th className="border border-gray-300 p-2">Gender</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedApplications.map((app) => (
            <tr key={app.id}>
              <td className="border border-gray-300 p-2">
                {new Date(app.createdAt).toLocaleDateString()}
              </td>
              <td className="border border-gray-300 p-2">{app.firstName}</td>
              <td className="border border-gray-300 p-2">{app.lastName}</td>
              <td className="border border-gray-300 p-2">
                {new Date().getFullYear() -
                  new Date(app.birthDate).getFullYear()}
              </td>
              <td className="border border-gray-300 p-2">{app.gender}</td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => setSelectedApplication(app)}
                  className="bg-secondary text-white px-2 py-1 rounded"
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() =>
            setPagination((prev) => ({
              ...prev,
              pageIndex: Math.max(prev.pageIndex - 1, 0),
            }))
          }
          disabled={pagination.pageIndex === 0}
          className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm text-gray-500">
          Page {pagination.pageIndex + 1} of{" "}
          {Math.ceil(applications.length / pagination.pageSize)}
        </span>
        <button
          onClick={() =>
            setPagination((prev) => ({
              ...prev,
              pageIndex: Math.min(
                prev.pageIndex + 1,
                Math.ceil(applications.length / pagination.pageSize) - 1
              ),
            }))
          }
          disabled={
            pagination.pageIndex >=
            Math.ceil(applications.length / pagination.pageSize) - 1
          }
          className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Use ApplicantDetails component for the popup */}
      <ApplicantDetails
        application={selectedApplication}
        onClose={() => setSelectedApplication(null)}
      />
    </div>
  );
};

export default AdminDashboard;
