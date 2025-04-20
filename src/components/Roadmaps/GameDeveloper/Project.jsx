import React from 'react'

const Project = ({ activeSection, setActiveSection }) => {
    return (
        <div>
            <p className="text-2xl font-bold pt-3 ">4. Project:</p>

            {/* project section */}
            <p className="text-lg font-bold pl-6 pt-3">
                Beginner Projects:
            </p>

            {/* 1st beginer project */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-lime-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "proj1" ? "bg-lime-900" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "proj1" ? null : "proj1")
                    }
                >
                    2D Platformer Game
                </button>
                {activeSection === "proj1" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Player runs, jumps, and collects coins
                            <br />
                            Add levels, score counter, and obstacles
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
                    Tic Tac Toe or Snake Game
                </button>
                {activeSection === "proj2" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Learn game loops, input, and logic
                            <br />
                            Use basic UI and grid systems
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
                    Simple Racing Game
                </button>
                {activeSection === "proj3" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Top-down view
                            <br />
                            Control speed, turns, collisions
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
                    First-Person Shooter (FPS)
                </button>
                {activeSection === "projint1" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Basic shooting, health, and enemy AI
                            <br />
                            Add multiple levels and weapons
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
                    3D Endless Runner
                </button>
                {activeSection === "projint2" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Use procedural generation for obstacles
                            <br />
                            Add increasing difficulty
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
                    Multiplayer Turn-Based Game
                </button>
                {activeSection === "projint3" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Use Photon/Netcode for Unity
                            <br />
                            Chat or leaderboard system
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
                    Zombie Survival Game
                </button>
                {activeSection === "projint4" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            AI-controlled enemies
                            <br />
                            Resource and inventory system
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
                    Open World Adventure Game
                </button>
                {activeSection === "projadvnd1" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Large terrain, day-night cycle, quests
                            <br />
                            Save/load system
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
                    Multiplayer Battle Royale
                </button>
                {activeSection === "projadvnd2" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Real-time multiplayer, shrinking zone
                            <br />
                            Voice or chat communication
                            <br />

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
                    Game Engine Plugin or Tool
                </button>
                {activeSection === "projadvnd3" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Build a Unity editor tool or asset (e.g., terrain generator)
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
                    AI-Based Puzzle Game
                </button>
                {activeSection === "projadvnd4" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Smart NPCs using advanced pathfinding or decision trees
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
                    VR/AR Game
                </button>
                {activeSection === "projadvnd5" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Build using Unity or Unreal for Oculus/Meta or ARKit
                            <br />
                            Immersive interaction & physics
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Project
