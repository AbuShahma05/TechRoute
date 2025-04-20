import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Roadmaps/Footer";

const Theory = () => {
  const navigate = useNavigate();

  const topics = [
    { path: "/theory/dbms", label: "DBMS" },
    { path: "/theory/os", label: "Operating System" },
    { path: "/theory/cn", label: "Computer Network" },
    { path: "/theory/sd", label: "System Design" },
  ];

  return (
    <>
      <div className="w-full h-screen mt-32 bg-green-200">
        <h1 className="text-xl font-semibold pl-96 pt-8">
          Learn essential theory to excel in internships, jobs, and college.
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-8 pt-20">
            {topics.map((topic) => (
              <button
                key={topic.path}
                onClick={() => navigate(topic.path)}
                className="border-2 border-blue-400 px-6 py-3 w-36 text-center rounded-xl bg-emerald-400 shadow-md hover:bg-gray-100 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-120 hover:-translate-y-1"
              >
                <span className="text-xl font-semibold">{topic.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Theory;