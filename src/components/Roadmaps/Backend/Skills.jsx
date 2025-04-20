import React from 'react'

const Skills = ({ activeSection, setActiveSection }) => {
  return (
    <div>
      <p className="font-bold text-2xl pt-4">2. Fundamentals:</p>

      {/* Buttons & Content in Column */}
      <div className="mt-4 flex flex-col space-y-5 pl-6">


        {/* JavaScript Section */}
        <div>
          <button
            className={`bg-yellow-500 text-black h-14 w-80  rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
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
                JavaScript is a popular language mostly known for frontend, but also powerful for backend using Node.js.
                <br /> <br />
                Skills to learn:
                variables, data types
                <br />
                Conditional statements
                <br />
                Loops
                <br />
                Functions
                <br />
                Arrays/Lists, Objects/Dictionaries
                <br />
                Error handling
                <br />
                File handling
                <br />
                Modules & packages
                <br />
                Practice with basic CLI projects
                <br />
                my suggestion is to use this languages.
              </p>
            </div>
          )}
        </div>


        {/*  Python */}
        <div>
          <button
            className={`bg-blue-400 text-black h-14 w-80  rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
            ${activeSection === " Python" ? "bg-blue-700" : ""}`}
            onClick={() =>
              setActiveSection(
                activeSection === " Python" ? null : " Python"
              )
            }
          >
            Python
          </button>
          {activeSection === " Python" && (
            <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
              <p className="text-white font-semibold">
                Python is a simple and powerful programming language.
                <br /> <br />
                Why used in backend?
                <br />
                Easy to write and read
                <br />
                Fast development
                <br />
                Powerful frameworks (Django, Flask)
                <br />
                Works well with databases and APIs
              </p>
            </div>
          )}
        </div>

        {/*  java */}
        <div>
          <button
            className={`bg-red-400 text-black h-14 w-80  rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
            ${activeSection === " java " ? "bg-red-700" : ""}`}
            onClick={() =>
              setActiveSection(
                activeSection === " java " ? null : " java "
              )
            }
          >
            Java
          </button>
          {activeSection === " java " && (
            <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
              <p className="text-white font-semibold">
                Java is a powerful, object-oriented programming language.
                <br /> <br />
                Why used in backend?
                <br />
                Fast and reliable
                <br />
                Great for large, scalable apps
                <br />
                Strong frameworks (like Spring Boot)
                <br />
                Secure and widely used in enterprises
              </p>
            </div>
          )}
        </div>
      </div>



      {/* 2nd para */}
      <p className="font-bold text-2xl pt-4">
        3. Intermediate:
      </p>
      <div className="mt-6 flex-col space-y-5 pl-6">
        {/* DSA */}
        <div>
          <button
            className={`bg-indigo-500 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
            ${activeSection === "dsa" ? "bg-indigo-900" : ""}`}
            onClick={() =>
              setActiveSection(
                activeSection === "dsa" ? null : "dsa"
              )
            }
          >
            DSA
          </button>
          {activeSection === "dsa" && (
            <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
              <p className="text-white font-semibold">
                Just the basics to understand how to write optimal backend code
                <br />
                <br />
                Learn : Arrays, Stacks, Queues, Linked Lists
                <br />
                Hash Tables, Sets, Maps
                <br />
                Recursion
                <br />
                Sorting & Searching
                <br />
                Time & Space Complexity
                <br />
                Resources: LeetCode (Easy), NeetCode DSA Sheet, JavaScript/Codeforces basics
              </p>
            </div>
          )}
        </div>

        {/* Version control */}
        <div>
          <button
            className={`bg-indigo-500 text-black  h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
            ${activeSection === "Version Control" ? "bg-indigo-900" : ""}`}
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
      </div>

      {/* 3rd para */}
      <p className="font-bold text-2xl pt-4 ">
        4. Choose a framework:
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
            className={`bg-emerald-600 h-14 w-80 text-black p-2 font-semibold text-lg rounded-xl cursor-pointer transition-all hover:scale-110 focus:outline-none
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
      <p className="font-bold text-2xl pt-4 ">5. Database</p>

      {/*  SQL */}
      <div className='pt-2 pl-6'>
        <button
          className={`bg-green-700 text-black h-14 w-80   font-semibold text-lg rounded-xl cursor-pointer transition-all hover:scale-110 focus:outline-none
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
      <div className='pt-2 pl-6'>
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
