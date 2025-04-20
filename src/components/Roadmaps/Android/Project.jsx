import React from 'react'

const Project = ({ activeSection, setActiveSection }) => {
    return (
        <div>
            <p className="text-2xl font-bold pt-3 ">4. Project:</p>

            {/* project section */}
            <p className="text-lg font-bold pl-6 pt-3">
                Beginner Projects:
            </p>

            {/* 1st beginner project */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-lime-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "proj1" ? "bg-lime-900" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "proj1" ? null : "proj1")
                    }
                >
                    Daily To-Do App
                </button>
                {activeSection === "proj1" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Add, edit, delete tasks
                            <br /> <br />
                            Mark tasks as completed
                            <br />
                            Save using SharedPreferences or Room (optional)
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
                    BMI Calculator
                </button>
                {activeSection === "proj2" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Input height and weight
                            <br /> <br />
                            Simple logic for BMI and health status
                            <br />
                            Basic UI with buttons and text
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
                    Simple Quiz App
                </button>
                {activeSection === "proj3" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Multiple-choice questions
                            <br /> <br />
                            Score tracking
                            <br />
                            Basic navigation between questions
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
                    Weather Forecast App
                </button>
                {activeSection === "projint1" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Fetch weather data from OpenWeatherMap API using Retrofit
                            <br /> <br />
                            Display current and upcoming forecasts
                            <br />
                            Use ViewModel, LiveData, and location permission
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
                    Notes App with Room DB
                </button>
                {activeSection === "projint2" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Add/edit/delete notes
                            <br />
                            Local storage using Room
                            <br />
                            Search and sort functionality
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
                    Firebase Auth Chat App
                </button>
                {activeSection === "projint3" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Login/Signup with Firebase Authentication
                            <br />
                            Realtime chat using Firestore DB
                            <br />
                            Recyclerview for messages
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
                    Expense Tracker App
                </button>
                {activeSection === "projint4" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Track daily income/expenses
                            <br />
                            Pie chart/Bar chart visualizations
                            <br />
                            Room DB or Firebase backend
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
                    E-Commerce App
                </button>
                {activeSection === "projadvnd1" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Product listing, cart system, checkout
                            <br />
                            Firebase backend or mock server
                            <br />
                            Jetpack Compose UI + MVVM + Clean Architecture
                            <br />
                            Stripe or Razorpay for payment (optional)
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
                    Instagram Clone

                </button>
                {activeSection === "projadvnd2" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Post photos, like, comment, and follow
                            <br />
                            Firebase Auth + Storage + Firestore
                            <br />
                            Jetpack Compose + Paging + Glide
                        </p>
                    </div>
                )}
            </div>

            {/* advanced 3rd project name */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-emerald-400 h-14 w-80 rounded-xl font-semibold  cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "projadvnd3" ? "bg-emerald-800" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "projadvnd3" ? null : "projadvnd3")
                    }
                >
                    Meditation App
                </button>
                {activeSection === "projadvnd3" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Background audio, daily goals
                            <br />
                            Timer, animations, calming visuals
                            <br />
                            Compose + Room + WorkManager
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
                    News Aggregator App
                </button>
                {activeSection === "projadvnd4" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Fetch news from NewsAPI
                            <br />
                            Categories, bookmarks, search functionality
                            <br />
                            Retrofit + Compose + Paging
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
                    AI Fitness App
                </button>
                {activeSection === "projadvnd5" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Daily workouts, BMI calculator, step tracker
                            <br />
                            ML Kit for pose detection (optional)
                            <br />
                            Firebase + Sensor integration + Notifications
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Project
