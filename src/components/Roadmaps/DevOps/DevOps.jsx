import React, { act, useState } from 'react'
import Skills from './Skills';
import Project from './Project';
import SofSkills from '../SoftSkills';
import Footer from '../Footer';

const DevOps = () => {
    const [activeSection, setActiveSection] = useState(null);

    return (
        <>
            <div className="w-full min-h-screen mt-32 bg-green-200 pb-20">
                <h1 className="font-semibold text-lg text-center pt-8 ">
                    Step by Step Guide to Becoming a DevOps Engineer
                </h1>

                {/* Main Content */}
                <div className="pl-32 pt-24">
                    <p className="text-2xl font-bold pt-4 ">1.  Beginner Level:</p>

                    {/* 1st question */}
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
                            Understand Software Development
                        </button>
                        {activeSection === "ques1" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    Agile, Waterfall, Scrum, Kanban
                                    <br />
                                    CI/CD (Continuous Integration & Delivery)
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
                            Basic Command Line (Linux/Unix)
                        </button>
                        {activeSection === "ques2" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    File system navigation, permissions, basic networking commands
                                    <br />
                                    Shell scripting (Bash)
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
                            Version Control System
                        </button>
                        {activeSection === "ques3" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    Git & GitHub
                                    <br />
                                    Clone, branch, merge, rebase, pull requests
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
                            Basic Networking Concepts
                        </button>
                        {activeSection === "ques4" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    IP, DNS, TCP/UDP, Firewall, Proxy
                                    <br />
                                    HTTP/HTTPS, ports, load balancing
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
                            Programming Knowledge
                        </button>
                        {activeSection === "ques5" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    Learn at least one scripting language:
                                    <br />
                                    Python, Shell scripting, or Go (optional)
                                </p>
                            </div>
                        )}
                    </div>

                    {/* passing skills file in devops file */}
                    <Skills activeSection={activeSection}
                        setActiveSection={setActiveSection} />

                    {/* passing project file in devops file */}
                    <Project activeSection={activeSection}
                        setActiveSection={setActiveSection} />

                    {/* softskills file*/}
                    <SofSkills activeSection={activeSection}
                        setActiveSection={setActiveSection} />

                </div>
            </div>
            <Footer />
        </>
    )
}

export default DevOps
