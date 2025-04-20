import React, { useState } from 'react'
import Skills from './Skills';
import Project from './Project';
import SoftSkills from '../SoftSkills'
import Footer from '../Footer';

const Android = () => {
    const [activeSection, setActiveSection] = useState(null);

    return (
        <>
            <div className="w-full min-h-screen mt-32 bg-green-200 pb-20">
                <h1 className="font-semibold text-lg text-center pt-8 ">
                    Step by Step Guide to Becoming a Android Developer
                </h1>

                {/* Main Content */}
                <div className="pl-32 pt-24">
                    <p className="text-2xl font-bold pt-4 ">1. Beginner Level:</p>

                    {/* Understand how Android works */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "uhaw" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(
                                    activeSection === "uhaw" ? null : "uhaw"
                                )
                            }
                        >
                            Understand how Android works
                        </button>
                        {activeSection === "uhaw" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    What is Android OS?
                                    <br />
                                    APK, Activities, Fragments, Intents
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Learn Kotlin Programming */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "kotlin" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(activeSection === "kotlin" ? null : "kotlin")
                            }
                        >
                            Learn Kotlin Programming
                        </button>
                        {activeSection === "kotlin" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    Variables, data types, functions
                                    <br />
                                    OOP (classes, inheritance)
                                    <br />
                                    Null safety
                                    <br />
                                    Collections and higher-order functions
                                    <br />
                                    Coroutines (basics)
                                </p>
                            </div>
                        )}
                    </div>

                    {/*  Get familiar with Android Studio */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "gfwas" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(activeSection === "gfwas" ? null : "gfwas")
                            }
                        >
                            Get familiar with Android Studio
                        </button>
                        {activeSection === "gfwas" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    Setup IDE and emulator
                                    <br />
                                    Create your first Hello World app
                                </p>
                            </div>
                        )}
                    </div>

                    {/*  Learn UI Basics  */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "uibasics" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(activeSection === "uibasics" ? null : "uibasics")
                            }
                        >
                            Learn UI Basics
                        </button>
                        {activeSection === "uibasics" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    XML layout vs Jetpack Compose
                                    <br />
                                    Buttons, TextViews, EditTexts
                                    <br />
                                    Layouts (LinearLayout, ConstraintLayout)
                                    <br />
                                    Compose basics: Column, Row, Box
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Understand Activity & Fragment Lifecycle */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "afl" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(activeSection === "afl" ? null : "afl")
                            }
                        >
                            Activity & Fragment Lifecycle
                        </button>
                        {activeSection === "afl" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    onCreate, onStart, onPause etc.
                                    <br />
                                    Navigation between screens
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

export default Android
