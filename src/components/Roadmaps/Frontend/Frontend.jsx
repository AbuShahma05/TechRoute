import React, { useState } from "react";
import Skills from "./Skills";
import Project from "./Project";
import SoftSkills from "../SoftSkills";
import Footer from "../Footer";


const Frontend = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <>
      <div className="w-full min-h-screen mt-32 bg-green-200 pb-20">
        <h1 className="font-semibold text-lg text-center pt-8 ">
          Step by Step Guide to Becoming a Frontend Developer
        </h1>

        {/* Main Content */}
        <div className="pl-32 pt-24">
          <p className="text-2xl font-bold pt-4 ">1. Internet:</p>

          {/* 1st question  */}
          <div className="mt-3 ml-6">
            <button
              className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "ques1" ? "bg-amber-900" : ""
                }`}
              onClick={() =>
                setActiveSection(
                  activeSection === "ques1" ? null : "ques1"
                )
              }
            >
              How does the internet work?
            </button>
            {activeSection === "ques1" && (
              <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                <p className="text-white font-semibold">
                  The internet is a global network that connects computers using a
                  system of servers, routers, and protocols...
                </p>
              </div>
            )}
          </div>

          {/* 2nd Question */}
          <div className="mt-3 ml-6">
            <button
              className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "ques2" ? "bg-amber-900" : ""
                }`}
              onClick={() =>
                setActiveSection(activeSection === "ques2" ? null : "ques2")
              }
            >
              What is HTTP?
            </button>
            {activeSection === "ques2" && (
              <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                <p className="text-white font-semibold">
                  HTTP (HyperText Transfer Protocol) is the foundation of data
                  communication on the web, enabling browsers to request and
                  receive content from servers.
                </p>
              </div>
            )}
          </div>

          {/* 3rd Question */}
          <div className="mt-3 ml-6">
            <button
              className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "ques3" ? "bg-amber-900" : ""
                }`}
              onClick={() =>
                setActiveSection(activeSection === "ques3" ? null : "ques3")
              }
            >
              What is domain name?
            </button>
            {activeSection === "ques3" && (
              <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                <p className="text-white font-semibold">
                  A domain name is the unique name used to identify a website on
                  the internet.
                </p>
              </div>
            )}
          </div>

          {/* 4th Question */}
          <div className="mt-3 ml-6">
            <button
              className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "ques4" ? "bg-amber-900" : ""
                }`}
              onClick={() =>
                setActiveSection(activeSection === "ques4" ? null : "ques4")
              }
            >
              What is hosting?
            </button>
            {activeSection === "ques4" && (
              <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                <p className="text-white font-semibold">
                  Web hosting allows your website to be live and accessible online
                  by storing it on a server.
                </p>
              </div>
            )}
          </div>

          {/* 5th Question */}
          <div className="mt-3 ml-6">
            <button
              className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "ques5" ? "bg-amber-900" : ""
                }`}
              onClick={() =>
                setActiveSection(activeSection === "ques5" ? null : "ques5")
              }
            >
              DNS and how it works?
            </button>
            {activeSection === "ques5" && (
              <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                <p className="text-white font-semibold">
                  DNS (Domain Name System) translates human-readable domain names
                  like google.com into IP addresses that computers use to locate
                  websites.
                </p>
              </div>
            )}
          </div>

          {/* 6th Question */}
          <div className="mt-3 ml-6">
            <button
              className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "ques6" ? "bg-amber-900" : ""
                }`}
              onClick={() =>
                setActiveSection(activeSection === "ques6" ? null : "ques6")
              }
            >
              Browsers and how they work?
            </button>
            {activeSection === "ques6" && (
              <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                <p className="text-white font-semibold">
                  A browser is a software application that lets you access and
                  view websites on the internet. <br /> It sends a request to a website’s
                  server, receives the content (like HTML, CSS, JS), and displays
                  the page to the user.
                </p>
              </div>
            )}
          </div>

          {/* Pass Skills in frontend file */}
          <Skills
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          {/* pass project in frontend file */}
          <Project activeSection={activeSection}
            setActiveSection={setActiveSection} />

          {/* pass softskills in frontend file */}
          <SoftSkills activeSection={activeSection}
            setActiveSection={setActiveSection} />


        </div>
      </div>
      <Footer />
    </>
  );
};

export default Frontend;
