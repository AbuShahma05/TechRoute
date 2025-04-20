import React, { useState } from 'react'
import Skills from './Skills';
import Project from './Project';
import SoftSkills from '../SoftSkills'
import Footer from '../Footer';

const GameDeveloper = () => {
    const [activeSection, setActiveSection] = useState(null);

    return (
        <>
            <div className="w-full min-h-screen mt-32 bg-green-200 pb-20">
                <h1 className="font-semibold text-lg text-center pt-8 ">
                    Step by Step Guide to Becoming a Game Developer
                </h1>

                {/* Main Content */}
                <div className="pl-32 pt-24">
                    <p className="text-2xl font-bold pt-4 ">1. Beginner Level:</p>

                    {/* learn programming fundamentals */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "lpf" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(
                                    activeSection === "lpf" ? null : "lpf"
                                )
                            }
                        >
                            Learn Programming Fundamentals
                        </button>
                        {activeSection === "lpf" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    Language: C++, C#, or Python
                                    <br />
                                    Topics: Loops, conditionals, functions, OOP (Object-Oriented Programming)
                                    <br />
                                    Tools: Visual Studio / VS Code
                                </p>
                            </div>
                        )}
                    </div>

                    {/* explore game engines */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "explrgameengns" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(activeSection === "explrgameengns" ? null : "explrgameengns")
                            }
                        >
                            Explore Game Engines (Pick One)
                        </button>
                        {activeSection === "explrgameengns" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    Unity (C#) – beginner-friendly & widely used
                                    <br />
                                    Unity (C#) – beginner-friendly & widely used
                                    <br />
                                    Godot (GDScript or C#) – lightweight and open-source
                                </p>
                            </div>
                        )}
                    </div>

                    {/* understand basic game concepts */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "ubgc" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(activeSection === "ubgc" ? null : "ubgc")
                            }
                        >
                            Understand Basic Game Concepts
                        </button>
                        {activeSection === "ubgc" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    Game loop
                                    <br />
                                    Sprites, Textures, Assets
                                    <br />
                                    Physics basics
                                    <br />
                                    Input handling
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

export default GameDeveloper
