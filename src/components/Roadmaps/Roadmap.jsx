import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Roadmap = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-center pt-20">
        <h1 className="text-3xl font-semibold">Welcome to TechRoute</h1>
        <p className="font-semibold pt-2">Your problem finds its solution here.</p>
      </div>

      {/* Main Content */}
      <div className="w-full h-screen mt-8 bg-green-200">
        <p className="font-semibold text-lg flex justify-center pt-8">
          Explore the latest, community-driven tech roadmaps
        </p>

        {/* Roadmap Categories */}
        <div className="pt-16 flex justify-center">
          <div className="grid grid-cols-3 gap-8">
            {[
              { path: "/frontend", label: "Frontend" },
              { path: "/backend", label: "Backend" },
              { path: "/fullstack", label: "Full Stack" },
              { path: "/devops", label: "DevOps" },
              { path: "/ios", label: "IOS" },
              { path: "/android", label: "Android" },
              { path: "/datanlyst", label: "Data Analyst" },
              { path: "/cybersecurity", label: "Cyber Security" },
              { path: "/gamedeveloper", label: "Game Developer" },
            ].map(({ path, label }, index) => (
              <button
                key={index}
                onClick={() => navigate(path)}
                className="border-2 border-blue-400 px-6 py-3 w-40 text-center rounded-xl bg-emerald-400 shadow-md hover:bg-gray-100 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
              >
                <span className="text-xl font-semibold">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Roadmap;