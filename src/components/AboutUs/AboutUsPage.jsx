import { NavLink, Routes, Route, useLocation } from "react-router-dom";

import WirSindSernitas from "./WirSindSernitas";
import Team from "./Team";
import Leitbild from "./Leitbild";
import Kooperationsnetzwerk from "./Kooperationsnetzwerk";
import MitgliedschaftBAP from "./MitgliedschaftBAP";

import wirSindSernitasImg from "../../assets/hero-1.png";
import teamImg from "../../assets/hero-4.jpg";
import leitbildImg from "../../assets/hero-3.png";
import kooperationsnetzwerkImg from "../../assets/hero-6.png";
import bapImg from "../../assets/hero-5.png";

const tabs = [
  {
    label: "Wir Sind Sernitas",
    path: "/about-us/wir-sind-sernitas",
    image: wirSindSernitasImg,
  },
  {
    label: "Team",
    path: "/about-us/team",
    image: teamImg,
  },
  {
    label: "Leitbild",
    path: "/about-us/leitbild",
    image: leitbildImg,
  },
  {
    label: "Kooperationsnetzwerk",
    path: "/about-us/kooperationsnetzwerk",
    image: kooperationsnetzwerkImg,
  },
  {
    label: "Mitgliedschaft BAP",
    path: "/about-us/mitgliedschaft-bap",
    image: bapImg,
  },
];

const ServicesPage = () => {
  const location = useLocation(); // Get the current location

  // Find the active tab based on the current path
  const activeTab = tabs.find((tab) => location.pathname.startsWith(tab.path));

  return (
    <div className="min-h-screen pt-[70px] pb-16 bg-slate-100 text-black">
      {/* Top Image */}
      <img
        src={activeTab?.image || wirSindSernitasImg} // Default to Grundpflege image
        alt="Leistungen"
        className="w-full max-h-[600px] object-cover"
      />

      {/* Tabs */}
      <div className="container mx-auto py-6 bg-gray-200">
        <div className="flex justify-center gap-12 items-center">
          {tabs.map((tab, index) => (
            <NavLink
              key={index}
              to={tab.path} // Use absolute paths here
              className={({ isActive }) =>
                `text-sm xl:text-lg font-medium pb-2 ${
                  isActive
                    ? "text-green-700 border-b-2 border-green-700"
                    : "text-gray-600 hover:text-green-700"
                }`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto mt-8 px-4">
        <Routes>
          <Route path="/wir-sind-sernitas" element={<WirSindSernitas />} />
          <Route path="/team" element={<Team />} />
          <Route path="/leitbild" element={<Leitbild />} />
          <Route
            path="/kooperationsnetzwerk"
            element={<Kooperationsnetzwerk />}
          />
          <Route path="/mitgliedschaft-bap" element={<MitgliedschaftBAP />} />
        </Routes>
      </div>
    </div>
  );
};

export default ServicesPage;
