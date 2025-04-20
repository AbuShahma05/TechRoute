import React from "react";

const Project = ({ activeSection, setActiveSection }) => {
  return (
    <div>
      <p className="text-2xl font-bold pt-3 ">6. Project:</p>

      {/* project section */}
      <p className="text-lg font-bold pl-6 pt-3">
        Beginner project:
      </p>



      {/* 1st beginer */}
      <div className="mt-3 ml-6">
        <button
          className={`bg-lime-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "bgnr1" ? "bg-lime-900" : ""
            }`}
          onClick={() =>
            setActiveSection(activeSection === "bgnr1" ? null : "bgnr1")
          }
        >
          Landing Page Clone
        </button>
        {activeSection === "bgnr1" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Clone a brand’s landing page (e.g., Apple, Netflix, Spotify)
              <br />
              Use Tailwind or Bootstrap for quick styling
            </p>
          </div>
        )}
      </div>

      {/* 2nd beginer */}
      <div className="mt-3 ml-6">
        <button
          className={`bg-lime-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "bgnr2" ? "bg-lime-900" : ""
            }`}
          onClick={() =>
            setActiveSection(activeSection === "bgnr2" ? null : "bgnr2")
          }
        >
          To-Do List
        </button>
        {activeSection === "bgnr2" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Add, delete, mark complete
              <br />
              Local storage support
            </p>
          </div>
        )}
      </div>

      {/* 3rd beginer */}
      <div className="mt-3 ml-6">
        <button
          className={`bg-lime-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "bgnr3" ? "bg-lime-900" : ""
            }`}
          onClick={() =>
            setActiveSection(activeSection === "bgnr3" ? null : "bgnr3")
          }
        >
          Responsive Navbar + Sidebar
        </button>
        {activeSection === "bgnr3" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Toggleable menu (hamburger)
              <br />
              Sticky nav on scroll
            </p>
          </div>
        )}
      </div>

      {/* intermediate */}
      <p className="text-lg font-bold pl-6 pt-5">
        Intermediate project:
      </p>

      {/* intermediate first project  */}
      <div className="mt-3 ml-6">
        <button
          className={`bg-teal-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "intrmdt1" ? "bg-teal-900" : ""
            }`}
          onClick={() =>
            setActiveSection(activeSection === "intrmdt1" ? null : "intrmdt1")
          }
        >
          Weather App
        </button>
        {activeSection === "intrmdt1" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Fetch data using OpenWeather API
              <br />
              Show temperature, humidity, etc.
            </p>
          </div>
        )}
      </div>

      {/* intermediate 2nd project  */}
      <div className="mt-3 ml-6">
        <button
          className={`bg-teal-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "intrmdt2" ? "bg-teal-900" : ""
            }`}
          onClick={() =>
            setActiveSection(activeSection === "intrmdt2" ? null : "intrmdt2")
          }
        >
          Movie/TV Show Explorer
        </button>
        {activeSection === "intrmdt2" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Use TMDB API to show trending movies
              <br />
              Filter by genre, search bar
            </p>
          </div>
        )}
      </div>

      {/* intermediate 3rd project name */}
      <div className="mt-3 ml-6">
        <button
          className={`bg-teal-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "intrmdt3" ? "bg-teal-900" : ""
            }`}
          onClick={() =>
            setActiveSection(activeSection === "intrmdt3" ? null : "intrmdt3")
          }
        >
          Expense Tracker
        </button>
        {activeSection === "intrmdt3" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Add income/expenses
              <br />
              Dynamic chart using Chart.js or Recharts
            </p>
          </div>
        )}
      </div>

      {/* intermediate 4th project name */}
      <div className="mt-3 ml-6">
        <button
          className={`bg-teal-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "intrmdt4" ? "bg-teal-900" : ""
            }`}
          onClick={() =>
            setActiveSection(activeSection === "intrmdt4" ? null : "intrmdt4")
          }
        >
          Form Validation App
        </button>
        {activeSection === "intrmdt4" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Signup/Login UI with validation
              <br />
              Regex for email/password, show error messages
            </p>
          </div>
        )}
      </div>

      {/* advanced */}
      <p className="text-lg font-bold pl-6 pt-5">
        Advanced Projects:
      </p>

      {/* advanced 1st project  */}
      <div className="mt-3 ml-6">
        <button
          className={`bg-emerald-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "advncd1" ? "bg-emerald-800" : ""
            }`}
          onClick={() =>
            setActiveSection(activeSection === "advncd1" ? null : "advncd1")
          }
        >
          E-commerce Frontend
        </button>
        {activeSection === "advncd1" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Product listing, cart, filters, search
              <br />
              Add to cart using context or Redux
            </p>
          </div>
        )}
      </div>

      {/* advanced 2nd project  */}
      <div className="mt-3 ml-6">
        <button
          className={`bg-emerald-400 h-14 w-80  rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "advncd2" ? "bg-emerald-800" : ""
            }`}
          onClick={() =>
            setActiveSection(activeSection === "advncd2" ? null : "advncd2")
          }
        >
          Online Learning Platform
        </button>
        {activeSection === "advncd2" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Courses page, video preview, categories
              <br />
              Design using ShadCN or Tailwind UI
            </p>
          </div>
        )}
      </div>

      {/* advanced 3rd project  */}
      <div className="mt-3 ml-6">
        <button
          className={`bg-emerald-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "advncd3" ? "bg-emerald-800" : ""
            }`}
          onClick={() =>
            setActiveSection(activeSection === "advncd3" ? null : "advncd3")
          }
        >
          Chat UI with Themes
        </button>
        {activeSection === "advncd3" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Message threads, typing indicator
              <br />
              Light/Dark mode toggle
            </p>
          </div>
        )}
      </div>

      {/* advanced 4th project  */}
      <div className="mt-3 ml-6">
        <button
          className={`bg-emerald-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none 
            ${activeSection === "advncd4" ? "bg-emerald-800" : ""
            }`}
          onClick={() =>
            setActiveSection(activeSection === "advncd4" ? null : "advncd4")
          }
        >
          Frontend for AI-based App
        </button>
        {activeSection === "advncd4" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Build a UI for ChatGPT / Image Generator
              <br />
              API integrated via fetch or Axios
            </p>
          </div>
        )}
      </div>

      {/* advanced 5th project  */}
      <div className="mt-3 ml-6">
        <button
          className={`bg-emerald-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none 
            ${activeSection === "advncd5" ? "bg-emerald-800" : ""
            }`}
          onClick={() =>
            setActiveSection(activeSection === "advncd5" ? null : "advncd5")
          }
        >
          Dashboard with Charts
        </button>
        {activeSection === "advncd5" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Multiple pages (Users, Reports, Analytics)
              <br />
              Use libraries like Recharts, ApexCharts
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
