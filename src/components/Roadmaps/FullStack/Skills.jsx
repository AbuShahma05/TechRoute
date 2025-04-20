import React from 'react'

const Skills = ({ activeSection, setActiveSection }) => {
    return (
        <div>
            <p className="font-bold text-2xl pt-4">2. Fundamentals:</p>

            {/* Buttons & Content in Column */}
            <div className="mt-4 flex flex-col space-y-5 pl-6">


                {/* HTML Section */}
                <div>
                    <button
                        className={`bg-orange-500 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "html" ? "bg-orange-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "html" ? null : "html"
                            )
                        }
                    >
                        HTML
                    </button>
                    {activeSection === "html" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                HTML (HyperText Markup Language) is the foundation of web
                                pages. It structures content with elements like headings,
                                paragraphs, and links.
                            </p>
                        </div>
                    )}
                </div>


                {/*  CSS */}
                <div>
                    <button
                        className={`bg-blue-500 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "css" ? "bg-blue-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "css" ? null : "css"
                            )
                        }
                    >
                        CSS
                    </button>
                    {activeSection === "css" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                CSS (Cascading Style Sheets) is used to style web pages. It
                                controls colors, fonts, layout, and responsiveness.
                            </p>
                        </div>
                    )}
                </div>

                {/*  javascript */}
                <div>
                    <button
                        className={`bg-yellow-500 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "JavaScript" ? "bg-yellow-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "JavaScript" ? null : "JavaScript"
                            )
                        }
                    >
                        JavaScript
                    </button>
                    {activeSection === "JavaScript" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                JavaScript is a programming language that adds interactivity
                                to web pages, such as animations, dynamic content, and API
                                calls.
                            </p>
                        </div>
                    )}
                </div>
            </div>



            {/* 2nd para */}
            <p className="font-bold text-2xl pt-4">
                3. Frontend Development:
            </p>
            <div className="mt-6 flex-col space-y-5 pl-6">

                {/* advanced javascript */}
                <div>
                    <button
                        className={`bg-yellow-500 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "advncdjavascript" ? "bg-yellow-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "advncdjavascript" ? null : "advncdjavascript"
                            )
                        }
                    >
                        Advanced JavaScript
                    </button>
                    {activeSection === "advncdjavascript" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                ES6+ Features (Destructuring, Spread, Rest, Arrow Functions)
                                <br />
                                Promises, Async/Await
                                <br />
                                Fetch API / Axios
                                <br />
                                Event Loop, Call Stack, Hoisting, Closures
                            </p>
                        </div>
                    )}
                </div>

                {/* react js */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "react" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "react" ? null : "react"
                            )
                        }
                    >
                        React.js
                    </button>
                    {activeSection === "react" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                JSX, Components, Props, State
                                <br />
                                Forms, useState, useEffect
                                <br />
                                Conditional Rendering, Lists, Keys
                                <br />
                                Routing (React Router)
                                <br />
                                Context API, Hooks, redux
                            </p>
                        </div>
                    )}
                </div>

                {/* styling libraries */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "stylib" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "stylib" ? null : "stylib"
                            )
                        }
                    >
                        Styling Libraries
                    </button>
                    {activeSection === "stylib" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Tailwind CSS / Bootstrap
                                <br />
                                ShadCN / Chakra UI (optional for modern UI)
                            </p>
                        </div>
                    )}
                </div>

                {/* Version control */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black  h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "Version Control" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "Version Control"
                                    ? null
                                    : "Version Control"
                            )
                        }
                    >
                        Version Control
                    </button>
                    {activeSection === "Version Control" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Git: Git is a distributed version control system that lets
                                developers track changes in code, collaborate with others,
                                and revert to earlier versions when needed. It works locally
                                on your computer and helps manage code efficiently.
                                <br />
                                <br />
                                GitHub: GitHub is a cloud-based platform built on top of
                                Git. It allows you to store your Git repositories online,
                                collaborate with others, review code, and manage projects.
                                It adds features like pull requests, issues, and GitHub
                                Actions for automation.
                            </p>
                        </div>
                    )}
                </div>

                {/* frontend build tools */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black  h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "buildtools" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "buildtools"
                                    ? null
                                    : "buildtools"
                            )
                        }
                    >
                        Frontend Build Tools
                    </button>
                    {activeSection === "buildtools" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                NPM / Yarn
                                <br />
                                Vite / Webpack
                            </p>
                        </div>
                    )}
                </div>
            </div>



            {/* 3rd para */}
            <p className="font-bold text-2xl pt-4 ">
                4. Backend Development:
            </p>
            <div className="mt-6 flex-col space-y-5 pl-6">

                {/* express */}
                <div>
                    <button
                        className={`bg-emerald-600 h-14 w-80 font-semibold text-lg text-black rounded-xl cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "express" ? "bg-emerald-900" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "express" ? null : "express"
                            )
                        }
                    >
                        Node.js (JavaScript) with Express.js
                    </button>
                    {activeSection === "express" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">

                                Learn : REST API (CRUD)
                                <br />
                                Routing
                                <br />
                                Middleware
                                <br />
                                Environment variables
                                <br />
                                Request & Response cycle
                                <br />
                                File uploads
                                <br />
                                Error handling
                                <br />
                                API testing with Postman
                            </p>
                        </div>
                    )}
                </div>

                {/*  Python with Django/Flask */}
                <div>
                    <button
                        className={`bg-emerald-600 h-14 w-80 rounded-xl font-semibold text-lg text-black cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "django" ? "bg-emerald-950" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "django" ? null : "django"
                            )
                        }
                    >
                        Python with Django/Flask
                    </button>
                    {activeSection === "django" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Django: A high-level Python web framework with built-in features like admin panel, ORM, authentication — great for rapid development.
                                <br /> <br />
                                Flask: A lightweight, flexible Python web framework — gives you more control and is ideal for smaller or custom projects.
                                <br />
                                and same thing you have to learn like i explain in express
                            </p>
                        </div>
                    )}
                </div>

                {/*  Java with Spring Boot */}
                <div>
                    <button
                        className={`bg-emerald-600 text-black h-14 w-80 font-semibold text-lg rounded-xl cursor-pointer transition-all hover:scale-110 focus:outline-none
         ${activeSection === "springboot" ? "bg-emerald-900" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "springboot"
                                    ? null
                                    : "springboot"
                            )
                        }
                    >
                        Java with Spring Boot
                    </button>
                    {activeSection === "springboot" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Spring Boot: A powerful, production-ready Java framework that simplifies backend development by auto-configuring setup and reducing boilerplate code.
                                <br />
                                Built-in tools for REST APIs, security, databases, and more.
                                <br />
                                Ideal for enterprise-level, scalable applications.
                                <br />
                                and same thing you have to learn like i explain in express
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* database */}
            <p className="font-bold text-2xl pt-4 ">5. Database:</p>

            {/*  SQL */}
            <div className='pt-4 pl-6'>
                <button
                    className={`bg-green-700 text-black h-14 w-80  font-semibold text-lg rounded-xl cursor-pointer transition-all hover:scale-110 focus:outline-none
         ${activeSection === "sql" ? "bg-green-900" : ""}`}
                    onClick={() =>
                        setActiveSection(
                            activeSection === "sql"
                                ? null
                                : "sql"
                        )
                    }
                >
                    Relational Databases
                </button>
                {activeSection === "sql" && (
                    <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                        <p className="text-white font-semibold">
                            SQL Basics (MySQL / PostgreSQL)
                            <br />
                            Tables, Joins, Relationships
                            <br />
                            Writing SQL Queries
                            <br />
                            Normalization
                        </p>
                    </div>
                )}
            </div>


            {/*  NoSQL Databases  */}
            <div className='pt-4 pl-6'>
                <button
                    className={`bg-green-700 text-black h-14 w-80 font-semibold text-lg rounded-xl cursor-pointer transition-all hover:scale-110 focus:outline-none
         ${activeSection === "nosql" ? "bg-green-900" : ""}`}
                    onClick={() =>
                        setActiveSection(
                            activeSection === "nosql"
                                ? null
                                : "nosql"
                        )
                    }
                >
                    NoSQL Databases
                </button>
                {activeSection === "nosql" && (
                    <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                        <p className="text-white font-semibold">
                            MongoDB - the most popular NoSQL database used with Node.js
                            You should learn:
                            <br /> <br />
                            What is NoSQL & when to use it
                            <br />
                            MongoDB basic commands (CRUD)
                            <br />
                            Schema design with Mongoose
                            <br />
                            One-to-many & many-to-many relationships
                            <br />
                            Indexing
                            <br />
                            Aggregation Pipeline
                            <br />
                            MongoDB Compass (GUI for MongoDB)
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Skills
