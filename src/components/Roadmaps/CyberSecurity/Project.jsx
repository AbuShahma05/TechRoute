import React from 'react'

const Project = ({ activeSection, setActiveSection }) => {
    return (
        <div>
            <p className="text-2xl font-bold pt-3 ">4. Project:</p>

            {/* project section */}
            <p className="text-lg font-bold pl-6 pt-3">
                Beginner Projects:
            </p>

            <div className="mt-3 ml-6">
                <button
                    className={`bg-lime-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "proj1" ? "bg-lime-900" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "proj1" ? null : "proj1")
                    }
                >
                    Port Scanner using Python
                </button>
                {activeSection === "proj1" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Build a tool like Nmap using socket & threading
                            <br />
                            Scan open ports on a given IP address
                            <br />
                            Learn about port states and common services
                        </p>
                    </div>
                )}
            </div>

            {/* 2nd beginer */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-lime-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "proj2" ? "bg-lime-900" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "proj2" ? null : "proj2")
                    }
                >
                    Password Strength Checker
                </button>
                {activeSection === "proj2" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Build a CLI or web tool that evaluates password strength
                            <br />
                            Use rules: length, uppercase/lowercase, special characters, dictionary words
                            <br />
                            Teaches basics of brute-force and password security
                        </p>
                    </div>
                )}
            </div>

            {/* 3rd beginer */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-lime-400 h-14 w-80 rounded-xl  font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "proj3" ? "bg-lime-900" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "proj3" ? null : "proj3")
                    }
                >
                    Basic Network Packet Sniffer
                </button>
                {activeSection === "proj3" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Use Python + Scapy to capture and analyze live traffic
                            <br />
                            See headers: source IP, destination, protocols, etc.
                            <br />
                            Understand how tools like Wireshark work
                        </p>
                    </div>
                )}
            </div>

            {/* intermediate */}
            <p className="text-lg font-bold pl-6 pt-5">
                Intermediate Projects:
            </p>

            {/* intermediate first project name */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-teal-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "projint1" ? "bg-teal-900" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "projint1" ? null : "projint1")
                    }
                >
                    OWASP Vulnerability Lab Setup
                </button>
                {activeSection === "projint1" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Set up DVWA (Damn Vulnerable Web App) or Juice Shop
                            <br />
                            Practice SQL Injection, XSS, CSRF, etc.
                            <br />
                            Learn web app penetration testing
                        </p>
                    </div>
                )}
            </div>

            {/* intermediate 2nd project name */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-teal-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "projint2" ? "bg-teal-900" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "projint2" ? null : "projint2")
                    }
                >
                    Keylogger (Ethical Use Only)
                </button>
                {activeSection === "projint2" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Create a Python-based keylogger for learning
                            <br />
                            Store keystrokes in logs securely
                            <br />
                            Understand how spyware works and how to defend against it
                        </p>
                    </div>
                )}
            </div>

            {/* intermediate 3rd project name */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-teal-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "projint3" ? "bg-teal-900" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "projint3" ? null : "projint3")
                    }
                >
                    Log Analyzer for Intrusion Detection
                </button>
                {activeSection === "projint3" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Parse and analyze server logs (Apache/Nginx/Windows)
                            <br />
                            Detect brute-force, suspicious login attempts, or traffic spikes
                            <br />
                            Bonus: send alerts via email or dashboard
                        </p>
                    </div>
                )}
            </div>

            {/* intermediate 4th project name */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-teal-400 h-14 w-80  rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "projint4" ? "bg-teal-900" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "projint4" ? null : "projint4")
                    }
                >
                    Firewall Using IPTables or UFW
                </button>
                {activeSection === "projint4" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Create and test custom firewall rules in Linux
                            <br />
                            Block IPs, restrict ports, log dropped traffic
                            <br />
                            Simulate DoS and apply protections
                        </p>
                    </div>
                )}
            </div>

            {/* advanced */}
            <p className="text-lg font-bold pl-6 pt-5">
                Advanced Projects:
            </p>

            {/* advanced 1st project name */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-emerald-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "projadvnd1" ? "bg-emerald-800" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "projadvnd1" ? null : "projadvnd1")
                    }
                >
                    Automated Penetration Testing Toolkit
                </button>
                {activeSection === "projadvnd1" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Combine tools (Nmap + Nikto + Gobuster + Dirbuster + Hydra) into a script
                            <br />
                            Automate vulnerability scanning and reporting
                            <br />
                            Build a customizable recon/scan tool
                        </p>
                    </div>
                )}
            </div>

            {/* advanced 2nd project name */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-emerald-400 h-14 w-80  rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "projadvnd2" ? "bg-emerald-800" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "projadvnd2" ? null : "projadvnd2")
                    }
                >
                    SIEM (Security Information and Event Management) Simulation

                </button>
                {activeSection === "projadvnd2" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Set up a basic SIEM using ELK Stack or Splunk
                            <br />
                            Collect logs from systems, monitor live alerts, visualize dashboards
                            <br />
                            Perform threat hunting using search queries
                        </p>
                    </div>
                )}
            </div>

            {/* advanced 3rd project name */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-emerald-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "projadvnd3" ? "bg-emerald-800" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "projadvnd3" ? null : "projadvnd3")
                    }
                >
                    Malware Detection Engine
                </button>
                {activeSection === "projadvnd3" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Build a Python tool to analyze files
                            <br />
                            Detect malware using hashes, YARA rules, or behavioral traits
                            <br />
                            Integrate VirusTotal API for threat comparison
                        </p>
                    </div>
                )}
            </div>

            {/* advanced 4th project name */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-emerald-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none 
            ${activeSection === "projadvnd4" ? "bg-emerald-800" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "projadvnd4" ? null : "projadvnd4")
                    }
                >
                    Red Team vs Blue Team Lab (VM-based)
                </button>
                {activeSection === "projadvnd4" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Set up a test environment with vulnerable machines
                            <br />
                            Red Team: Exploit using Metasploit, payloads, phishing
                            <br />
                            Blue Team: Detect, analyze, and patch the exploited systems
                        </p>
                    </div>
                )}
            </div>

            {/* advanced 5th project name */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-emerald-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none 
            ${activeSection === "projadvnd5" ? "bg-emerald-800" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "projadvnd5" ? null : "projadvnd5")
                    }
                >
                    Ransomware Simulation and Defense
                </button>
                {activeSection === "projadvnd5" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            (Ethical only!) Build a ransomware simulation (file encryption tool)
                            <br />
                            Learn how encryption works, and how to build countermeasures
                            <br />
                            Understand detection, backup policies, and response strategies
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Project
