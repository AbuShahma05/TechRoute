import React from 'react'

const Skills = ({ activeSection, setActiveSection }) => {
    return (
        <div>
            <p className="font-bold text-2xl pt-4">2. Intermediate Level:</p>

            {/* Buttons & Content in Column */}
            <div className="mt-4 flex flex-col space-y-5 pl-6">


                {/* learn advanced concepts */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "lac" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "lac" ? null : "lac"
                            )
                        }
                    >
                        Learn Advanced Concepts
                    </button>
                    {activeSection === "lac" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                3D coordinate systems
                                <br />
                                Shaders & Lighting
                                <br />
                                Particle systems
                                <br />
                                Animations and rigging
                            </p>
                        </div>
                    )}
                </div>


                {/*  master game engine features */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "mgef" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "mgef" ? null : "mgef"
                            )
                        }
                    >
                        Master Game Engine Features
                    </button>
                    {activeSection === "mgef" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Unity: Scriptable Objects, NavMesh, Cinemachine
                                <br />
                                Unreal: Blueprints, Level Streaming, Landscape Tools
                            </p>
                        </div>
                    )}
                </div>

                {/* version control and collaboration */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "vcandclbrtion" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "vcandclbrtion" ? null : "vcandclbrtion"
                            )
                        }
                    >
                        Version Control & Collaboration
                    </button>
                    {activeSection === "vcandclbrtion" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Learn Git + GitHub
                                <br />
                                Collaborate with designers and artists
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* 2nd para */}
            <p className="font-bold text-2xl pt-4">
                3. Advanced Level
            </p>
            <div className="mt-6 flex-col space-y-5 pl-6">

                {/* multiplayer and networking */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "manetwkng" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "manetwkng" ? null : "manetwkng"
                            )
                        }
                    >
                        Multiplayer & Networking
                    </button>
                    {activeSection === "manetwkng" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                P2P vs Client-Server
                                <br />
                                Photon, Unity Netcode, Unreal Networking
                            </p>
                        </div>
                    )}
                </div>

                {/* ai in games */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black  h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "aingames" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "aingames"
                                    ? null
                                    : "aingames"
                            )
                        }
                    >
                        AI in Games
                    </button>
                    {activeSection === "aingames" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Behavior Trees, FSM (Finite State Machines)
                                <br />
                                Pathfinding (A*)
                            </p>
                        </div>
                    )}
                </div>

                {/* game optimization */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black  h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "gameoptmztn" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "gameoptmztn"
                                    ? null
                                    : "gameoptmztn"
                            )
                        }
                    >
                        Game Optimization
                    </button>
                    {activeSection === "gameoptmztn" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Reduce draw calls
                                <br />
                                Object pooling
                                <br />
                                LOD, Occlusion Culling
                            </p>
                        </div>
                    )}
                </div>

                {/* publishing games */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black  h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "pblsinggames" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "pblsinggames"
                                    ? null
                                    : "pblsinggames"
                            )
                        }
                    >
                        Publishing Games
                    </button>
                    {activeSection === "pblsinggames" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Platforms: PC, WebGL, Android, iOS, Steam
                                <br />
                                Build installers, optimize for mobile/console
                            </p>
                        </div>
                    )}
                </div>

                {/* learn game architecture */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black  h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "sre" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "sre"
                                    ? null
                                    : "sre"
                            )
                        }
                    >
                        Learn Game Architecture
                    </button>
                    {activeSection === "sre" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                ECS (Entity Component System)
                                <br />
                                Design scalable, modular games
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Skills
