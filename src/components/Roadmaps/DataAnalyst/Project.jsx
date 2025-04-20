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
                    Sales Data Analysis
                </button>
                {activeSection === "proj1" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Analyze monthly sales
                            <br />
                            Use pivot tables, bar/line charts, conditional formatting
                            <br />
                            Calculate KPIs like revenue, profit, growth
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
                    COVID-19 Data Exploration
                </button>
                {activeSection === "proj2" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Import dataset (CSV)
                            <br />
                            Clean, filter, and summarize data
                            <br />
                            Plot graphs using Matplotlib or Seaborn
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
                    SQL Query Practice
                </button>
                {activeSection === "proj3" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Use SELECT, WHERE, JOIN, GROUP BY
                            <br />
                            Write queries to answer business questions (e.g., top-selling products)
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
                    Customer Segmentation
                </button>
                {activeSection === "projint1" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Use clustering to group customers based on behavior (RFM analysis)
                            <br />
                            Visualize segments
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
                    E-commerce Data Dashboard
                </button>
                {activeSection === "projint2" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Import sales data
                            <br />
                            Create slicers, filters, drill-down charts
                            <br />
                            Show KPIs like conversion rate, cart abandonment
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
                    Churn Prediction Analysis
                </button>
                {activeSection === "projint3" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Use historical data to predict which customers are likely to leave
                            <br />
                            Train/test model and explain results
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
                    Airbnb/Netflix Dataset
                </button>
                {activeSection === "projint4" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Complex queries with CTEs, Window Functions
                            <br />
                            Answer analytics questions like "Most-booked city in last 6 months"
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
                    End-to-End BI Project
                </button>
                {activeSection === "projadvnd1" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Collect data from APIs or CSVs
                            <br />
                            Clean using Python
                            <br />
                            Load into SQL database
                            <br />
                            Visualize in Power BI/Tableau
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
                    A/B Testing Analysis

                </button>
                {activeSection === "projadvnd2" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Analyze two groups (control vs variant)
                            <br />
                            Use hypothesis testing (p-values, t-test)
                            <br />
                            Report business recommendation
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
                    YouTube Trending Data Tracker
                </button>
                {activeSection === "projadvnd3" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Scrape trending videos
                            <br />
                            Clean & analyze categories, views, tags
                            <br />
                            Create interactive dashboard
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
                    Data Pipeline Project
                </button>
                {activeSection === "projadvnd4" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Automate data cleaning & loading every day
                            <br />
                            Use Apache Airflow (or Prefect)
                            <br />
                            Update a Power BI or Tableau dashboard automatically
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
                    Business Insights for a Startup
                </button>
                {activeSection === "projadvnd5" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Pick a public dataset (e.g., Zomato, Flipkart)
                            <br />
                            Ask business questions
                            <br />
                            Use SQL + Python + Dashboard + Report (simulate real job task)
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Project
