import React, { useState } from 'react'
import Skills from "./Skills";
import Skills2 from './Skills2';
import Project from "./Project";
import SofSkills from '../SoftSkills';
import Footer from "../Footer";

const Backend = () => {
    const [activeSection, setActiveSection] = useState(null);

    return (
        <>
            <div className="w-full min-h-screen mt-32 bg-green-200 pb-20">
                <h1 className="font-semibold text-lg text-center pt-8 ">
                    Step by Step Guide to Becoming a Backend Developer
                </h1>

                {/* Main Content */}
                <div className="pl-32 pt-24">
                    <p className="text-2xl font-bold pt-4 ">1. Internet:</p>

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
                            What is HTTP / HTTPS?
                        </button>
                        {activeSection === "ques2" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    HTTP (HyperText Transfer Protocol): A protocol used for transferring data between a web browser and a server in plain text.
                                    <br /> <br />
                                    HTTPS (HyperText Transfer Protocol Secure): A secure version of HTTP that encrypts the data using SSL/TLS to protect it from attackers.
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

                    {/* 7th Question */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "ques7" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(activeSection === "ques7" ? null : "ques7")
                            }
                        >
                            Client vs Server
                        </button>
                        {activeSection === "ques7" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    Client: A device or application that requests data or services (e.g., a web browser).
                                    <br /> <br />
                                    Server: A system that provides data or services in response to client requests.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* 8th Question */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "ques8" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(activeSection === "ques8" ? null : "ques8")
                            }
                        >
                            IP, TCP, UDP basics
                        </button>
                        {activeSection === "ques8" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    IP (Internet Protocol):
                                    Identifies devices on a network and routes data between them using IP addresses.
                                    <br /> <br />
                                    TCP (Transmission Control Protocol):
                                    Reliable, connection-based protocol that ensures data is delivered in order without errors.

                                    <br />
                                    <br />
                                    UDP (User Datagram Protocol):
                                    Fast, connectionless protocol that sends data without guaranteeing delivery or order (used in video streaming, gaming, etc.).
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Pass skills in backend file*/}
                    <Skills
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}
                    />

                    {/* add because there is too much code in first skills file thats why */}
                    <Skills2 activeSection={activeSection}
                        setActiveSection={setActiveSection} />

                    {/* pass project in backend file */}
                    <Project activeSection={activeSection}
                        setActiveSection={setActiveSection} />

                    {/* softskills file  */}
                    <SofSkills activeSection={activeSection}
                        setActiveSection={setActiveSection} />

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Backend
