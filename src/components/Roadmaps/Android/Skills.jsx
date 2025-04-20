import React from 'react'

const Skills = ({ activeSection, setActiveSection }) => {
    return (
        <div>
            <p className="font-bold text-2xl pt-4">2. Intermediate Level:</p>

            {/* Buttons & Content in Column */}
            <div className="mt-4 flex flex-col space-y-5 pl-6">


                {/*  Kotlin Advanced */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80  rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "kotlinadvcd" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "kotlinadvcd" ? null : "kotlinadvcd"
                            )
                        }
                    >
                        Kotlin Advanced
                    </button>
                    {activeSection === "kotlinadvcd" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Extension functions
                                <br />
                                Sealed & Data Classes
                                <br />
                                Coroutines + Flow for async tasks
                            </p>
                        </div>
                    )}
                </div>


                {/*  Explore Jetpack Components */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "ejc" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "ejc" ? null : "ejc"
                            )
                        }
                    >
                        Explore Jetpack Components
                    </button>
                    {activeSection === "ejc" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                ViewModel
                                <br />
                                LiveData & StateFlow
                                <br />
                                Room Database
                                <br />
                                Navigation Component
                                <br />
                                Paging & WorkManager
                            </p>
                        </div>
                    )}
                </div>

                {/* Networking */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "netwrking" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "netwrking" ? null : "netwrking"
                            )
                        }
                    >
                        Networking
                    </button>
                    {activeSection === "netwrking" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Retrofit (API calls)
                                <br />
                                GSON / Moshi (JSON parsing)
                                <br />
                                Coil / Glide for image loading
                            </p>
                        </div>
                    )}
                </div>

                {/* App Architecture */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "apparchitec" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "apparchitec" ? null : "apparchitec"
                            )
                        }
                    >
                        App Architecture
                    </button>
                    {activeSection === "apparchitec" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                MVVM pattern (Model-View-ViewModel)
                                <br />
                                Repository pattern
                                <br />
                                Dependency Injection (Hilt)
                            </p>
                        </div>
                    )}
                </div>

                {/*  Firebase Integration */}
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
                        Firebase Integration
                    </button>
                    {activeSection === "infracode" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Firebase Auth (Login/Signup)
                                <br />
                                Firestore DB
                                <br />
                                Firebase Cloud Messaging (Push notifications)
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

                {/* Jetpack Compose Deep Dive */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black h-14 w-80  rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "jetcompose" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "jetcompose" ? null : "jetcompose"
                            )
                        }
                    >
                        Jetpack Compose Deep Dive
                    </button>
                    {activeSection === "jetcompose" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                States, recomposition, theming
                                <br />
                                Custom components
                                <br />
                                Animations
                            </p>
                        </div>
                    )}
                </div>

                {/* tesing */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "testing" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "testing"
                                    ? null
                                    : "testing"
                            )
                        }
                    >
                        Testing
                    </button>
                    {activeSection === "testing" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Unit Testing (JUnit)
                                <br />
                                UI Testing (Espresso)
                                <br />
                                Mocking with Mockito
                            </p>
                        </div>
                    )}
                </div>

                {/* advanced tools and concepts */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "advancedtools" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "advancedtools"
                                    ? null
                                    : "advancedtools"
                            )
                        }
                    >
                        Advanced Tools & Concepts
                    </button>
                    {activeSection === "advancedtools" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Modularization
                                <br />
                                Clean Architecture
                                <br />
                                CI/CD pipelines (GitHub Actions or Firebase App Distribution)
                                <br />
                                App performance optimization
                            </p>
                        </div>
                    )}
                </div>

                {/* plat store deplyoment */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "playstoredeployment" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "playstoredeployment"
                                    ? null
                                    : "playstoredeployment"
                            )
                        }
                    >
                        Play Store Deployment
                    </button>
                    {activeSection === "playstoredeployment" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Signing APKs
                                <br />
                                Creating store listing
                                <br />
                                Upload & publish to Google Play
                            </p>
                        </div>
                    )}
                </div>

                {/* tools and libraries */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "sre" ? "bg-indigo-900" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "sre"
                                    ? null
                                    : "sre"
                            )
                        }
                    >
                        Tools & Libraries
                    </button>
                    {activeSection === "sre" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Android Studio
                                <br />
                                Kotlin
                                <br />
                                Jetpack Compose (UI toolkit)
                                <br />
                                Retrofit (API calls)
                                <br />
                                Room (local database)
                                <br />
                                Firebase (backend)
                                <br />
                                Hilt (Dependency Injection)
                                <br />
                                Coroutines & Flow (async programming)
                                <br />
                                Git + GitHub
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Skills
