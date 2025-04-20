import React from 'react'

const Skills = ({ activeSection, setActiveSection }) => {
    return (
        <div>
            <p className="font-bold text-2xl pt-4">2. Intermediate Level:</p>

            {/* Buttons & Content in Column */}
            <div className="mt-4 flex flex-col space-y-5 pl-6">


                {/* advanced excel */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "advncdexcel" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "advncdexcel" ? null : "advncdexcel"
                            )
                        }
                    >
                        Advanced Excel
                    </button>
                    {activeSection === "advncdexcel" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                VLOOKUP, INDEX-MATCH
                                <br />
                                Pivot Tables
                                <br />
                                Conditional Formatting
                                <br />
                                Basic dashboard creation
                            </p>
                        </div>
                    )}
                </div>


                {/*  intermediate sql */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "intmerdtsql" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "intmerdtsql" ? null : "intmerdtsql"
                            )
                        }
                    >
                        Intermediate SQL
                    </button>
                    {activeSection === "intmerdtsql" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Nested queries
                                <br />
                                CASE statements
                                <br />
                                HAVING, GROUP BY with JOIN
                                <br />
                                Window functions (RANK, ROW_NUMBER, OVER)
                            </p>
                        </div>
                    )}
                </div>

                {/* python for data anaysis */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "pythonfordataanlysis" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "pythonfordataanlysis" ? null : "pythonfordataanlysis"
                            )
                        }
                    >
                        Python for Data Analysis
                    </button>
                    {activeSection === "pythonfordataanlysis" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                numpy, pandas (merging, filtering, grouping)
                                <br />
                                seaborn for richer visualizations
                                <br />
                                Handling missing values, outliers
                                <br />
                                Data cleaning
                            </p>
                        </div>
                    )}
                </div>

                {/* start data visualization tools */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "strtdatavslzn" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "strtdatavslzn" ? null : "strtdatavslzn"
                            )
                        }
                    >
                        Start Data Visualization Tools
                    </button>
                    {activeSection === "strtdatavslzn" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Choose one:
                                <br />
                                Power BI or Tableau
                                <br />
                                Building dashboards
                                <br />
                                Data connections and filters
                                <br />
                                Interactivity & calculated fields
                            </p>
                        </div>
                    )}
                </div>

                {/* Git and Github */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "gitandgithub" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "gitandgithub" ? null : "gitandgithub"
                            )
                        }
                    >
                        Git & GitHub
                    </button>
                    {activeSection === "gitandgithub" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Track changes in notebooks/scripts
                                <br />
                                Upload projects to GitHub
                                <br />
                                Learn basic version control commands
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
                {/* DSA */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "datacleaning" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "datacleaning" ? null : "datacleaning"
                            )
                        }
                    >
                        Data Cleaning & Manipulation
                    </button>
                    {activeSection === "datacleaning" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Feature engineering
                                <br />
                                Encoding categorical data
                                <br />
                                Scaling/normalization
                                <br />
                                Working with date & time
                            </p>
                        </div>
                    )}
                </div>

                {/* Business intelligence and data pipelines */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black  h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "bianddatapipelns" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "bianddatapipelns"
                                    ? null
                                    : "bianddatapipelns"
                            )
                        }
                    >
                        Business Intelligence & Data Pipelines
                    </button>
                    {activeSection === "bianddatapipelns" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                ETL (Extract, Transform, Load) concepts
                                <br />
                                Data warehouse basics (Snowflake, BigQuery concepts)
                                <br />
                                Understanding KPIs & metrics
                                <br />
                                Basic data modeling (star schema, fact/dimension tables)
                            </p>
                        </div>
                    )}
                </div>

                {/* advanced data visualization */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black  h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "advncddatavsnlzn" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "advncddatavsnlzn"
                                    ? null
                                    : "advncddatavsnlzn"
                            )
                        }
                    >
                        Advanced Data Visualizations
                    </button>
                    {activeSection === "advncddatavsnlzn" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Dynamic & interactive dashboards (filters, slicers, drill-downs)
                                <br />
                                Real-time dashboard basics
                                <br />
                                Storytelling with data (narratives for stakeholders)
                            </p>
                        </div>
                    )}
                </div>

                {/* statistics for business decisions */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black  h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "statsbusnsdecsn" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "statsbusnsdecsn"
                                    ? null
                                    : "statsbusnsdecsn"
                            )
                        }
                    >
                        Statistics for Business Decisions
                    </button>
                    {activeSection === "statsbusnsdecsn" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Hypothesis testing (A/B testing)
                                <br />
                                Correlation & regression
                                <br />
                                Statistical significance
                            </p>
                        </div>
                    )}
                </div>

                {/* bonus */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black  h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "bonusskls" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "bonusskls"
                                    ? null
                                    : "bonusskls"
                            )
                        }
                    >
                        Bonus skills
                    </button>
                    {activeSection === "bonusskls" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                APIs for data extraction
                                <br />
                                Web scraping basics
                                <br />
                                Introduction to time series analysis
                                <br />
                                Intro to machine learning (classification/regression)
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Skills
