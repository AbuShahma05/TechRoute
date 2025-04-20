import React from 'react'

const Skills = ({ activeSection, setActiveSection }) => {
    return (
        <div>
            <p className="font-bold text-2xl pt-4">2. Intermediate Level:</p>

            {/* Buttons & Content in Column */}
            <div className="mt-4 flex flex-col space-y-5 pl-6">


                {/*  Networking */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80  rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "Networking" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "Networking" ? null : "Networking"
                            )
                        }
                    >
                        Networking
                    </button>
                    {activeSection === "Networking" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                URLSession, Codable, API Integration (REST)
                                <br />
                                Async/Await & error handling
                            </p>
                        </div>
                    )}
                </div>


                {/* Data Persistence */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80  rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "DataPersistence" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "DataPersistence" ? null : "DataPersistence"
                            )
                        }
                    >
                        Data Persistence
                    </button>
                    {activeSection === "DataPersistence" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                UserDefaults
                                <br />
                                CoreData
                                <br />
                                FileManager
                                <br />
                                Keychain (Basic Security)
                            </p>
                        </div>
                    )}
                </div>

                {/*  Multithreading */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80  rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "Multithreading" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "Multithreading" ? null : "Multithreading"
                            )
                        }
                    >
                        Multithreading
                    </button>
                    {activeSection === "Multithreading" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                DispatchQueue (GCD)
                                <br />
                                OperationQueue
                                <br />
                                AsyncImage (SwiftUI)
                            </p>
                        </div>
                    )}
                </div>

                {/* reactive programming */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "reactiveprogramming" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "reactiveprogramming" ? null : "reactiveprogramming"
                            )
                        }
                    >
                        Combine Reactive Programming
                    </button>
                    {activeSection === "reactiveprogramming" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Publisher, Subscriber
                                <br />
                                Combine with SwiftUI for state handling
                            </p>
                        </div>
                    )}
                </div>
            </div>



            {/* 2nd para */}
            <p className="font-bold text-2xl pt-4">
                3. Advanced Level:
            </p>
            <div className="mt-6 flex-col space-y-5 pl-6">
                {/* Architecture Patterns */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "architpattern" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "architpattern" ? null : "architpattern"
                            )
                        }
                    >
                        Architecture Patterns
                    </button>
                    {activeSection === "architpattern" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                MVVM (Model-View-ViewModel)
                                <br />
                                Clean Architecture
                                <br />
                                Dependency Injection
                            </p>
                        </div>
                    )}
                </div>

                {/*  Swift Concurrency */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black  h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === " Swift Concurrency" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === " Swift Concurrency"
                                    ? null
                                    : " Swift Concurrency"
                            )
                        }
                    >
                        Swift Concurrency
                    </button>
                    {activeSection === " Swift Concurrency" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Deep dive into Async/Await
                                <br />
                                Structured concurrency and Tasks
                            </p>
                        </div>
                    )}
                </div>

                {/*  Testing */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black  h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === " Testing" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === " Testing"
                                    ? null
                                    : " Testing"
                            )
                        }
                    >
                        Testing
                    </button>
                    {activeSection === " Testing" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Unit Testing (XCTest)
                                <br />
                                UI Testing
                                <br />
                                TDD (Test-Driven Development)
                            </p>
                        </div>
                    )}
                </div>

                {/* Working with Device Features */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black  h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "wwdf" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "wwdf"
                                    ? null
                                    : "wwdf"
                            )
                        }
                    >
                        Working with Device Features
                    </button>
                    {activeSection === "wwdf" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Camera, Maps, Sensors, Push Notifications
                                <br />
                                Integrating Siri, Widgets, HealthKit
                            </p>
                        </div>
                    )}
                </div>

                {/*  Publishing & CI/CD */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black  h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === " Publishing & CI/CD" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === " Publishing & CI/CD"
                                    ? null
                                    : " Publishing & CI/CD"
                            )
                        }
                    >
                        Publishing & CI/CD
                    </button>
                    {activeSection === " Publishing & CI/CD" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                App Store Connect: Certificates, Profiles
                                <br />
                                TestFlight Beta Testing
                                <br />
                                CI/CD with GitHub Actions or Bitrise
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Skills
