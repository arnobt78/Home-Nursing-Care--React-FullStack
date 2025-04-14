import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const handleLogin = () => {
    const hashedPassword = jwt.sign(password, process.env.VITE_JWT_SECRET); // Hash the password using JWT
    if (
      email === process.env.VITE_ADMIN_EMAIL &&
      hashedPassword ===
        jwt.sign(process.env.VITE_ADMIN_PASSWORD, process.env.VITE_JWT_SECRET)
    ) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid email or password");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      // Fetch application data from the backend
      axios
        .get("http://localhost:5000/api/applications")
        .then((response) => setApplications(response.data))
        .catch((error) => console.error("Error fetching applications:", error));
    }
  }, [isLoggedIn]);

  return (
    <div className="container mx-auto py-12">
      {!isLoggedIn ? (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
          />
          <button
            onClick={handleLogin}
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Login
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Applications</h2>
          <table className="w-full border-collapse border border-gray-300">
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
              {applications.map((app) => (
                <tr key={app.id}>
                  <td className="border border-gray-300 p-2">
                    {new Date(app.createdAt).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {app.firstName}
                  </td>
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

          {selectedApplication && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
              <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
                <button
                  onClick={() => setSelectedApplication(null)}
                  className="text-red-500 font-bold text-lg float-right"
                >
                  ✕
                </button>
                <h3 className="text-xl font-bold mb-4">Application Details</h3>
                <pre className="text-sm">
                  {JSON.stringify(selectedApplication, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Admin;
