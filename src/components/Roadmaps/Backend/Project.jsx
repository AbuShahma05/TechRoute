import React from 'react'

const Project = ({ activeSection, setActiveSection }) => {
  return (
    <div>
      <p className="text-2xl font-bold pt-3 ">11. Project:</p>

      {/* project section */}
      <p className="text-lg font-bold pl-6 pt-3">
        Beginner project:
      </p>

      {/* 1st beginner*/}
      <div className="mt-3 ml-6">
        <button
          className={`bg-lime-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "proj1" ? "bg-lime-900" : ""
            }`}
          onClick={() =>
            setActiveSection(activeSection === "proj1" ? null : "proj1")
          }
        >
          Note Keeper API
        </button>
        {activeSection === "proj1" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Users can create, read, update, delete notes.
              <br />
              Add a title, content, date, category.
              <br />
              [BONUS] Add search by title.
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
          Book Management System
        </button>
        {activeSection === "proj2" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              APIs for adding, deleting, updating, and fetching books.
              <br />
              Each book has a title, author, genre, rating, and status (read/unread).
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
          Simple Blog Backend
        </button>
        {activeSection === "proj3" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Users can write blog posts.
              <br />
              Categories, tags, comments (no auth yet).
              <br />
              Use MongoDB + Express + Postman testing.
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
          User Auth System
        </button>
        {activeSection === "projint1" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              JWT authentication (signup, login, protected routes).
              <br />
              Password hashing with bcrypt.
              <br />
              Role-based access (admin/user).
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
          2. File Upload API
        </button>
        {activeSection === "projint2" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Users can upload images, documents (use Multer).
              <br />
              Save file metadata in MongoDB.
              <br />
              [BONUS] Add cloud upload (e.g., Cloudinary)
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
          Task Manager App (with auth)
        </button>
        {activeSection === "projint3" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Create tasks with deadline, priority, and tags.
              <br />
              Users can update task status (pending, completed).
              <br />
              Protect routes with JWT tokens.
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
          REST API for an E-Commerce Store
        </button>
        {activeSection === "projint4" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Products, Categories, Users, Orders (basic structure).
              <br />
              Admin can add products, users can order.
              <br />
              Secure endpoints, validation, error handling.
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
          Chat API with WebSockets
        </button>
        {activeSection === "projadvnd1" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Real-time chat system using Socket.io.
              <br />
              Create rooms, send/receive messages.
              <br />
              Store messages in MongoDB with timestamps.
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
          Payment Integration App
        </button>
        {activeSection === "projadvnd2" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Build an order-based app where users can purchase something.
              <br />
              Integrate Stripe/Razorpay for payments.
              <br />
              Webhooks to track payment status.
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
          Job Portal Backend
        </button>
        {activeSection === "projadvnd3" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Candidates can register and apply to jobs.
              <br />
              Recruiters can post jobs.
              <br />
              Auth, search filter, pagination, file upload (CV), email notifications.
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
          Scalable URL Shortener with Analytics
        </button>
        {activeSection === "projadvnd4" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Tech: Node.js, Redis (for caching), MongoDB, JWT <br />
              <br />
              Features:
              <br />
              Shorten long URLs with custom slugs
              <br />
              Analytics: track click counts, IPs, devices
              <br />
              Caching popular URLs with Redis
              <br />
              Rate limiting using middleware
              <br />
              Custom expiration time
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
          Backend for SaaS App (Subscription-Based)
        </button>
        {activeSection === "projadvnd5" && (
          <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
            <p className="text-white font-semibold">
              Tech: Node.js, MongoDB, Stripe
              <br />
              Features:
              <br />
              Monthly/Yearly subscriptions
              <br />
              Role-based access per plan (free vs pro)
              <br />
              Payment handling with Stripe + webhook verification
              <br />
              Download invoices
              <br />
              Usage limits per user plan
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Project
