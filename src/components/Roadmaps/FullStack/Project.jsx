import React from 'react'

const Project = ({ activeSection, setActiveSection }) => {
  return (
    <div>
      <p className="text-2xl font-bold pt-3 ">12. Project:</p>

      {/* project section */}
      <p className="text-lg font-bold pl-6 pt-3">
        Beginner project:
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
          Notes App (Full Stack)
        </button>
        {activeSection === "proj1" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Stack: MERN (MongoDB, Express, React, Node.js)
              <br />
              <br />
              Features:
              <br />
              Create, Read, Update, Delete notes
              <br />
              Login/Register with JWT Auth
              <br />
              Filter and Search notes
              <br />
              Markdown support (optional)
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
          Simple E-Commerce App
        </button>
        {activeSection === "proj2" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Stack: MERN / React + Firebase (if no backend setup)
              <br />
              <br />
              Features:
              <br />
              Product listing page
              <br />
              Cart system (add/remove/update quantity)
              <br />
              User login/signup
              <br />
              Checkout (dummy or Razorpay/Stripe integration)
            </p>
          </div>
        )}
      </div>

      {/* 3rd beginer */}
      <div className="mt-3 ml-6">
        <button
          className={`bg-lime-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "proj3" ? "bg-lime-900" : ""
            }`}
          onClick={() =>
            setActiveSection(activeSection === "proj3" ? null : "proj3")
          }
        >
          To-Do List Manager
        </button>
        {activeSection === "proj3" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Stack: MERN
              <br /> <br />
              Features:
              <br />
              Auth system
              <br />
              Task creation with tags, categories, priority
              <br />
              Due date reminders (just date-based for now)
              <br />
              Status: Pending / Completed
            </p>
          </div>
        )}
      </div>

      {/* intermediate */}
      <p className="text-lg font-bold pl-6 pt-5">
        Intermediate project:
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
          Blogging Platform
        </button>
        {activeSection === "projint1" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Stack: MERN + Rich Text Editor (React Quill)
              <br />
              <br />
              Features:
              <br />
              Users can register, login, create/edit/delete posts
              <br />
              Like, comment on posts
              <br />
              Author dashboard
              <br />
              Admin to manage users/posts
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
          Online Course Platform
        </button>
        {activeSection === "projint2" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Stack: MERN + Stripe
              <br />
              <br />
              Features:
              <br />
              Instructor can create courses (video, description, price)
              <br />
              Students can view free/paid content
              <br />
              Payment with Stripe or Razorpay
              <br />
              Progress tracking
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
          Inventory Management System
        </button>
        {activeSection === "projint3" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Stack: MERN
              <br />
              <br />
              Features:
              <br />
              Product list, quantity, categories
              <br />
              Admin dashboard
              <br />
              CRUD for products
              <br />
              Stock alerts and analytics
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
          Portfolio Builder App
        </button>
        {activeSection === "projint4" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Stack: MERN or Next.js + Express
              <br />
              <br />
              Features:
              <br />
              Login/signup
              <br />
              Fill in details like skills, projects, experience
              <br />
              Choose from 2-3 templates
              <br />
              Preview and publish a personal portfolio
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
          Job Portal App
        </button>
        {activeSection === "projadvnd1" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Stack: MERN + PostgreSQL (optional for practice)
              <br />
              <br />
              Features:
              <br />
              Job posting by employers
              <br />
              Job search and apply for users
              <br />
              Resume upload & status tracking
              <br />
              Admin to verify job posts
              <br />
              Filters: location, salary, type, etc.
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
          Real-Time Chat App
        </button>
        {activeSection === "projadvnd2" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Stack: MERN + WebSockets (Socket.io)
              <br />
              <br />
              Features:
              <br />
              1:1 and group chat
              <br />
              Online/offline indicators
              <br />
              Message seen/delivered status
              <br />
              Notifications
              <br />
              Auth + friend requests
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
          Video Streaming Platform
        </button>
        {activeSection === "projadvnd3" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Stack: MERN + AWS S3 + Mux/Cloudinary for videos
              <br />
              <br />
              Features:
              <br />
              Upload video lectures
              <br />
              Stream videos with thumbnails, descriptions
              <br />
              Like, comment, playlist creation
              <br />
              Admin dashboard to manage videos
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
          SaaS Dashboard + Subscription App
        </button>
        {activeSection === "projadvnd4" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Stack: MERN + Stripe
              <br />
              <br />
              Features:
              <br />
              User authentication + multiple plans
              <br />
              Admin panel to manage users
              <br />
              Payment history and plan upgrades
              <br />
              Email notifications
            </p>
          </div>
        )}
      </div>

      {/* advanced 5th project name */}
      <div className="mt-3 ml-6">
        <button
          className={`bg-emerald-400 h-14 w-80  rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none 
            ${activeSection === "projadvnd5" ? "bg-emerald-800" : ""
            }`}
          onClick={() =>
            setActiveSection(activeSection === "projadvnd5" ? null : "projadvnd5")
          }
        >
          Productivity & Habit Tracker App
        </button>
        {activeSection === "projadvnd5" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Stack: MERN + Redis (for caching reminders) + Cron Jobs
              <br />
              <br />
              Features:
              <br />
              Auth (Sign up, login, reset password)
              <br />
              Daily, Weekly & Monthly Habit Setup
              <br />
              Reminder system (cron jobs + email)
              <br />
              Pomodoro timer + productivity stats
              <br />
              Dashboard with streaks, stats, completion rate
              <br />
              Priority & tagging system for tasks
              <br />
              Report generator (Weekly/Monthly PDF)
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Project

