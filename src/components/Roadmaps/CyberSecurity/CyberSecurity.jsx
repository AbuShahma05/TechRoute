import React, { useState } from 'react'
import Skills from './Skills';
import Project from './Project';
import SoftSkills from '../SoftSkills'

import Footer from '../Footer';
const CyberSecurity = () => {
    const [activeSection, setActiveSection] = useState(null);

    return (
        <>
            <div className="w-full min-h-screen mt-32 bg-green-200 pb-20">
                <h1 className="font-semibold text-lg text-center pt-8 ">
                    Step by Step Guide to Becoming a Cyber Security
                </h1>

                {/* Main Content */}
                <div className="pl-32 pt-24">
                    <p className="text-2xl font-bold pt-4 ">1. Beginner Level:</p>

                    {/* it and computer systems */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "itandcomputer" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(
                                    activeSection === "itandcomputer" ? null : "itandcomputer"
                                )
                            }
                        >
                            IT & Computer Systems
                        </button>
                        {activeSection === "itandcomputer" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    Operating Systems (Windows, Linux, MacOS)
                                    <br />
                                    File systems, processes, memory
                                    <br />
                                    Command Line (especially Linux terminal)
                                </p>
                            </div>
                        )}
                    </div>

                    {/* networking fundamentals */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "ntwkingfundamentls" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(activeSection === "ntwkingfundamentls" ? null : "ntwkingfundamentls")
                            }
                        >
                            Networking Fundamentals
                        </button>
                        {activeSection === "ntwkingfundamentls" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    OSI Model & TCP/IP Stack
                                    <br />
                                    IP Addressing, Subnetting, MAC, DNS, DHCP
                                    <br />
                                    Protocols: HTTP/S, FTP, SSH, ICMP, ARP
                                </p>
                            </div>
                        )}
                    </div>

                    {/* security concepts */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "secrtyconcpts" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(activeSection === "secrtyconcpts" ? null : "secrtyconcpts")
                            }
                        >
                            Security Concepts
                        </button>
                        {activeSection === "secrtyconcpts" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    CIA Triad (Confidentiality, Integrity, Availability)
                                    <br />
                                    Types of threats: Malware, Phishing, DoS/DDoS, SQL Injection
                                    <br />
                                    Firewalls, VPNs, Antivirus, IDS/IPS basics
                                </p>
                            </div>
                        )}
                    </div>

                    {/* linux and bash scripting */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "linuxandbash" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(activeSection === "linuxandbash" ? null : "linuxandbash")
                            }
                        >
                            Linux & Bash Scripting
                        </button>
                        {activeSection === "linuxandbash" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    File permissions, users & groups, networking tools (netstat, nmap)
                                    <br />
                                    Write small shell scripts to automate tasks
                                </p>
                            </div>
                        )}
                    </div>

                    {/* virtualixation and set up a lab */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "vrtlztn" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(activeSection === "vrtlztn" ? null : "vrtlztn")
                            }
                        >
                            Virtualization & Set Up a Lab
                        </button>
                        {activeSection === "vrtlztn" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    Install VirtualBox or VMware
                                    <br />
                                    Create virtual labs (Kali Linux, Windows)
                                    <br />
                                    Learn to work in isolated environments safely
                                </p>
                            </div>
                        )}
                    </div>

                    {/* skills file */}
                    <Skills activeSection={activeSection}
                        setActiveSection={setActiveSection} />

                    {/* project file */}
                    <Project activeSection={activeSection}
                        setActiveSection={setActiveSection} />

                    {/* softskills */}
                    <SoftSkills activeSection={activeSection}
                        setActiveSection={setActiveSection} />

                </div>
            </div>
            <Footer />
        </>
    )
}

export default CyberSecurity
