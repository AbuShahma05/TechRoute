import React from 'react'

const Skills = ({ activeSection, setActiveSection }) => {
  return (
    <div>
      <p className="font-bold text-2xl pt-4">2. Fundamentals:</p>

      {/* Buttons & Content in Column */}
      <div className="mt-4 flex flex-col space-y-3 pl-6">
        {/* HTML Section */}
        <div>
          <button
            className={`bg-orange-500 text-white h-14 w-80  rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
                  ${activeSection === "HTML" ? "bg-orange-700" : ""}`}
            onClick={() =>
              setActiveSection(activeSection === "HTML" ? null : "HTML")
            }
          >
            HTML
          </button>
          {activeSection === "HTML" && (
            <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
              <p className="text-white font-semibold">
                HTML (HyperText Markup Language) is the foundation of web
                pages. It structures content with elements like headings,
                paragraphs, and links.
              </p>
            </div>
          )}
        </div>

        {/* CSS Section */}
        <div>
          <button
            className={`bg-blue-500 text-white h-14 w-80   rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "CSS" ? "bg-blue-700" : ""}`}
            onClick={() =>
              setActiveSection(activeSection === "CSS" ? null : "CSS")
            }
          >
            CSS
          </button>
          {activeSection === "CSS" && (
            <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
              <p className="text-white font-semibold">
                CSS (Cascading Style Sheets) is used to style web pages. It
                controls colors, fonts, layout, and responsiveness.
              </p>
            </div>
          )}
        </div>

        {/* JavaScript Section */}
        <div>
          <button
            className={`bg-yellow-500 text-white h-14 w-80  rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
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
        3. Advanced Concepts:
      </p>
      <div className="mt-6 flex-col space-y-3 pl-6">
        {/* BootStrap */}
        <div>
          <button
            className={`bg-violet-500 text-white h-14 w-80 pt-2 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
            ${activeSection === "BootStrap" ? "bg-violet-900" : ""}`}
            onClick={() =>
              setActiveSection(
                activeSection === "BootStrap" ? null : "BootStrap"
              )
            }
          >
            BootStrap
          </button>
          {activeSection === "BootStrap" && (
            <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
              <p className="text-white font-semibold">
                Bootstrap is a popular open-source CSS framework that helps
                you build responsive and mobile-first websites quickly and
                easily.
              </p>
            </div>
          )}
        </div>

        {/* Tailwind CSS  */}
        <div>
          <button
            className={`bg-cyan-600 text-white h-14 w-80 pt-2 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
            ${activeSection === "Tailwind CSS" ? "bg-cyan-900" : ""}`}
            onClick={() =>
              setActiveSection(
                activeSection === "Tailwind CSS" ? null : "Tailwind CSS"
              )
            }
          >
            Tailwind CSS
          </button>
          {activeSection === "Tailwind CSS" && (
            <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
              <p className="text-white font-semibold">
                Tailwind CSS is a utility-first CSS framework that helps you
                build modern and responsive user interfaces quickly. Instead
                of writing custom CSS, you use predefined utility classes
                directly in your HTML to style elements.
              </p>
            </div>
          )}
        </div>

        {/* Version control */}
        <div>
          <button
            className={`bg-indigo-500 text-white  h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
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
      <div className="mt-6 flex-col space-y-3 pl-6">
        {/* react */}
        <div>
          <button
            className={`bg-blue-400 h-14 w-80 font-semibold text-lg text-white rounded-xl cursor-pointer transition-all hover:scale-110 focus:outline-none
            ${activeSection === "React.js" ? "bg-blue-900" : ""}`}
            onClick={() =>
              setActiveSection(
                activeSection === "React.js" ? null : "React.js"
              )
            }
          >
            React.js
          </button>
          {activeSection === "React.js" && (
            <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
              <p className="text-white font-semibold">
                React is a popular JavaScript library used for building user
                interfaces, especially single-page applications. It lets you
                create reusable components, manage the UI efficiently with a
                virtual DOM, and update parts of the page without reloading.
                <br />
                <br />
                My suggestion is to choose this because it is very good in
                every aspect. It offers fast rendering, reusable
                components, and strong community support—making it ideal
                for building modern, scalable web applications.

              </p>
            </div>
          )}
        </div>

        {/* next js */}
        <div>
          <button
            className={`bg-gray-600 h-14 w-80 rounded-xl font-semibold text-lg text-white cursor-pointer transition-all hover:scale-110 focus:outline-none
            ${activeSection === "Next.js" ? "bg-gray-800" : ""}`}
            onClick={() =>
              setActiveSection(
                activeSection === "Next.js" ? null : "Next.js"
              )
            }
          >
            Next.js
          </button>
          {activeSection === "Next.js" && (
            <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
              <p className="text-white font-semibold">
                Next.js: A powerful React framework for building fast,
                SEO-friendly, and scalable web applications with server-side
                rendering and static site generation.
              </p>
            </div>
          )}
        </div>

        {/* Alternative */}
        <div>
          <button
            className={`bg-stone-700 text-white h-14 w-80  p-2 font-semibold text-lg rounded-xl cursor-pointer transition-all hover:scale-110 focus:outline-none
           ${activeSection === "Alternative frameworks" ? "bg-neutral-900" : ""}`}
            onClick={() =>
              setActiveSection(
                activeSection === "Alternative frameworks"
                  ? null
                  : "Alternative frameworks"
              )
            }
          >
            Alternative frameworks
          </button>
          {activeSection === "Alternative frameworks" && (
            <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
              <p className="text-white font-semibold">
                1. Angular
                <br />
                2. Vue.js (optional)
              </p>
            </div>
          )}
        </div>
      </div>
      <p className="font-bold text-2xl pt-4 ">5. Tooling & Optimization</p>
      <div className="mt-6 flex-col space-y-3 pl-6">
        <div>
          <button className='bg-amber-200 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none'>
            Package Managers - npm, yarn</button>
        </div>
        <div>
          <button className='bg-amber-200 h-14 w-80 p-2 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none'>
            Build Tools - Webpack, Vite</button>
        </div>
        <div>
          <button className='bg-amber-200 h-14 w-80 p-2 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none'>
            Testing - Jest, React Testing Library</button>
        </div>
        <div>
          <button className='bg-amber-200 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none'>
            Performance - Lazy Loading, Code Splitting</button>
        </div>
      </div>
    </div>
  )
}

export default Skills
