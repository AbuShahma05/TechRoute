import React from 'react'

const Skills = ({ activeSection, setActiveSection }) => {
    return (
        <div>
            <p className="font-bold text-2xl pt-4">2. Intermediate Level:</p>

            {/* Buttons & Content in Column */}
            <div className="mt-4 flex flex-col space-y-4 pl-6">


                {/* cryptography basics */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "cryptobasics" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "cryptobasics" ? null : "cryptobasics"
                            )
                        }
                    >
                        Cryptography Basics
                    </button>
                    {activeSection === "cryptobasics" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Symmetric vs Asymmetric encryption
                                <br />
                                Hashing (SHA, MD5), SSL/TLS, Certificates
                                <br />
                                Digital Signatures, Public Key Infrastructure (PKI)
                            </p>
                        </div>
                    )}
                </div>


                {/*  cybersecurity tools */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "cybersectools" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "cybersectools" ? null : "cybersectools"
                            )
                        }
                    >
                        Cybersecurity Tools
                    </button>
                    {activeSection === "cybersectools" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Kali Linux tools: Nmap, Wireshark, Burp Suite, Hydra, Metasploit
                                <br />
                                Network scanning, vulnerability assessment, password cracking
                            </p>
                        </div>
                    )}
                </div>

                {/*  web security fundamentals */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "websecrtyfundmentals" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "websecrtyfundmentals" ? null : "websecrtyfundmentals"
                            )
                        }
                    >
                        Web Security Fundamentals
                    </button>
                    {activeSection === "websecrtyfundmentals" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Learn OWASP Top 10 vulnerabilities (XSS, CSRF, SQLi, etc.)
                                <br />
                                How websites are attacked and secured
                            </p>
                        </div>
                    )}
                </div>

                {/* incident response and log analysis */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "infracode" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "infracode" ? null : "infracode"
                            )
                        }
                    >
                        Incident Response & Log Analysis
                    </button>
                    {activeSection === "infracode" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Understand log formats: syslog, event viewer
                                <br />
                                Learn to analyze logs for signs of intrusion
                            </p>
                        </div>
                    )}
                </div>

                {/* system hardening and security configuration */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "infracode" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "infracode" ? null : "infracode"
                            )
                        }
                    >
                        System Hardening & Security Configurations
                    </button>
                    {activeSection === "infracode" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Disable unused services
                                <br />
                                Apply OS patches and updates
                                <br />
                                Configure firewalls and security policies
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* 2nd para */}
            <p className="font-bold text-2xl pt-4">
                3. Advanced Level:
            </p>
            <div className="mt-6 flex-col space-y-4 pl-6">

                {/* penetration testing and ethical hacking */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "penetrationtesting" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "penetrationtesting" ? null : "penetrationtesting"
                            )
                        }
                    >
                        Penetration Testing & Ethical Hacking
                    </button>
                    {activeSection === "penetrationtesting" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Full pentesting methodology (recon → exploit → post-exploit → report)
                                <br />
                                Use tools like Metasploit, Nikto, John the Ripper, Gobuster, etc.
                            </p>
                        </div>
                    )}
                </div>

                {/* explore red team vs blue team skills */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black  h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "redteamvsblueteam" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "redteamvsblueteam"
                                    ? null
                                    : "redteamvsblueteam"
                            )
                        }
                    >
                        Explore Red Team vs Blue Team Skills
                    </button>
                    {activeSection === "redteamvsblueteam" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Red Team: Offensive techniques (social engineering, phishing, payloads)
                                <br />
                                Blue Team: Defensive tactics (SIEM, threat hunting, monitoring, detection)
                            </p>
                        </div>
                    )}
                </div>

                {/* threat intelligence and malware analysis */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black  h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "theratintelligence" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "theratintelligence"
                                    ? null
                                    : "theratintelligence"
                            )
                        }
                    >
                        Threat Intelligence & Malware Analysis
                    </button>
                    {activeSection === "theratintelligence" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Understand IOCs (Indicators of Compromise)
                                <br />
                                Analyze malware behavior (static & dynamic analysis)
                            </p>
                        </div>
                    )}
                </div>

                {/* understand operations center */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black  h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "soc" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "soc"
                                    ? null
                                    : "soc"
                            )
                        }
                    >
                        Security Operations Center (SOC)
                    </button>
                    {activeSection === "soc" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Learn how SOCs function
                                <br />
                                Work with tools like Splunk, QRadar, ELK Stack
                            </p>
                        </div>
                    )}
                </div>

                {/* prepare for certifications */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black  h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "prepareforcertfications" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "prepareforcertfications"
                                    ? null
                                    : "prepareforcertfications"
                            )
                        }
                    >
                        Prepare for Certifications
                    </button>
                    {activeSection === "prepareforcertfications" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                CompTIA Security+ (Beginner)
                                <br />
                                CEH – Certified Ethical Hacker
                                <br />
                                OSCP – Offensive Security Certified Professional
                                <br />
                                CISSP – Advanced
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Skills
