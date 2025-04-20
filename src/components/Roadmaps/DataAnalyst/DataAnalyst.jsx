import React, { useState } from 'react'
import Skills from './Skills';
import Project from './Project';
import SoftSkills from '../SoftSkills'
import Footer from '../Footer';

const DataAnalyst = () => {
    const [activeSection, setActiveSection] = useState(null);

    return (
        <>
            <div className="w-full min-h-screen mt-32 bg-green-200 pb-20">
                <h1 className="font-semibold text-lg text-center pt-8 ">
                    Step by Step Guide to Becoming a Data Analyst
                </h1>

                {/* Main Content */}
                <div className="pl-32 pt-24">
                    <p className="text-2xl font-bold pt-4 ">1. Beginner Level:</p>

                    {/* understand the role */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "undrstndtherole" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(
                                    activeSection === "undrstndtherole" ? null : "undrstndtherole"
                                )
                            }
                        >
                            Understand the Role
                        </button>
                        {activeSection === "undrstndtherole" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    What a data analyst does
                                    <br />
                                    Differences between data analyst, data scientist, data engineer
                                    <br />
                                    Typical tools used
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Learn basic excel or google sheets */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "excelandgooglesheets" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(activeSection === "excelandgooglesheets" ? null : "excelandgooglesheets")
                            }
                        >
                           Excel or Google Sheets
                        </button>
                        {activeSection === "excelandgooglesheets" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    Data filtering, sorting
                                    <br />
                                    VLOOKUP, INDEX-MATCH
                                    <br />
                                    Pivot Tables
                                    <br />
                                    Charts & dashboards
                                    <br />
                                    Formulas (SUM, AVERAGE, IF)
                                </p>
                            </div>
                        )}
                    </div>

                    {/* grasp basic statistics and math */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "graspbasics" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(activeSection === "graspbasics" ? null : "graspbasics")
                            }
                        >
                            Grasp Basic Statistics & Math
                        </button>
                        {activeSection === "graspbasics" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    Mean, median, mode
                                    <br />
                                    Range, variance, standard deviation
                                    <br />
                                    Probability basics
                                    <br />
                                    Data distributions
                                </p>
                            </div>
                        )}
                    </div>

                    {/* start python for data analysis */}
                    <div className="mt-3 ml-6">
                        <button
                            className={`bg-amber-300 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "pythondataanalysis" ? "bg-amber-900" : ""
                                }`}
                            onClick={() =>
                                setActiveSection(activeSection === "pythondataanalysis" ? null : "pythondataanalysis")
                            }
                        >
                            Start Python for Data Analysis
                        </button>
                        {activeSection === "pythondataanalysis" && (
                            <div className="bg-amber-900 rounded-xl w-96 shadow-md mt-3 p-4">
                                <p className="text-white font-semibold">
                                    Python basics (variables, data types, functions, loops)
                                    <br />
                                    Libraries:
                                    <br />
                                    pandas for data manipulation
                                    <br />
                                    matplotlib for basic visualizations
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

export default DataAnalyst
