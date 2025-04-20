import React, { useState } from 'react';
import Skills from './Skills';
import Project from './Project';
import SoftSkills from "../SoftSkills";
import Footer from '../Footer';

const Ios = () => {
    const [activeSection, setActiveSection] = useState(null);

    return (
        <>
            <div className="w-full min-h-screen mt-32 bg-green-200 pb-20">
                <h1 className="font-semibold text-lg text-center pt-8 ">
                    Step by Step Guide to Becoming a IOS Developer
                </h1>

                {/* Main Content */}
                <div className="pl-32 pt-24">
                    <p className="text-2xl font-bold pt-4 ">1. Beginner Level:</p>

                    {/* Learn Swift (Core Language) */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "swift" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(
                                    activeSection === "swift" ? null : "swift"
                                )
                            }
                        >
                            1. Learn Swift (Core Language)
                        </button>
                        {activeSection === "swift" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    Variables, Constants, Data types
                                    <br />
                                    Control Flow (if, switch, loops)
                                    <br />
                                    Functions
                                    <br />
                                    Optionals
                                    <br />
                                    Collections (Arrays, Dictionaries, Sets)
                                    <br />
                                    Structs & Classes
                                    <br />
                                    Closures & Enums
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Xcode & Interface Builder */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "xcode" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(activeSection === "xcode" ? null : "xcode")
                            }
                        >
                            Xcode & Interface Builder
                        </button>
                        {activeSection === "xcode" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    Install and get familiar with Xcode
                                    <br />
                                    Learn how to use Interface Builder
                                    <br />
                                    Learn Auto Layout and Storyboards
                                </p>
                            </div>
                        )}
                    </div>

                    {/* SwiftUI or UIKit (Pick One Initially) */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "swiftui" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(activeSection === "swiftui" ? null : "swiftui")
                            }
                        >
                            SwiftUI or UIKit (Pick One Initially)
                        </button>
                        {activeSection === "swiftui" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    Start with SwiftUI (preferred for beginners)
                                    <br />
                                    Views, Modifiers
                                    <br />
                                    Navigation
                                    <br />
                                    Lists & Forms
                                    <br />
                                    State Management (State, Binding, ObservedObject)
                                </p>
                            </div>
                        )}
                    </div>

                    {/*  Understand MVC Pattern */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "mvc" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(activeSection === "mvc" ? null : "mvc")
                            }
                        >
                            Understand MVC Pattern
                        </button>
                        {activeSection === "mvc" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    Learn Model-View-Controller (common iOS pattern)
                                    <br />
                                    Apply it in small apps
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

                    {/* softskills file */}
                    <SoftSkills activeSection={activeSection}
                        setActiveSection={setActiveSection} />

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Ios
