import React from 'react'

const Skills2 = ({ activeSection, setActiveSection }) => {
    return (
        <div>
            {/* authentication and security */}
            <p className="font-bold text-2xl pt-4">6. Authentication & Security:</p>
            <div className='pt-2 pl-6'>
                <button className={`bg-gray-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
            ${activeSection === "Security" ? "bg-gray-700" : ""}`}
                    onClick={() => setActiveSection(activeSection === "Security" ? null : "Security")}
                >
                    Security
                </button>
                {activeSection === "Security" && (
                    <div className='bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4'>
                        <p className='text-white font-semibold'>
                            Learn: JWT (JSON Web Tokens)
                            <br />
                            OAuth (optional for social login)
                            <br />
                            Bcrypt (password hashing)
                            <br />
                            Sessions vs Tokens
                            <br />
                            CORS
                            <br />
                            Rate limiting
                            <br />
                            Environment variables for secrets
                        </p>
                    </div>
                )}
            </div>

            {/* advanced backend skills */}
            <p className="font-bold text-2xl pt-4">7. Advanced Backend Skills:</p>
            <div className='pt-2 pl-6'>
                <button className={`bg-gray-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
            ${activeSection === "backeneadvanced" ? "bg-gray-700" : ""}`}
                    onClick={() => setActiveSection(activeSection === "backeneadvanced" ? null : "backeneadvanced")}
                >
                    Advanced Backend Skills
                </button>
                {activeSection === "backeneadvanced" && (
                    <div className='bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4'>
                        <p className='text-white font-semibold'>
                            Learn:
                            <br />
                            MVC Architecture
                            <br />
                            Service-based or layered architecture
                            <br />
                            Caching (Redis, Memory cache)
                            <br />
                            WebSockets (for real-time features like chat)
                            <br />
                            Rate limiting (API protection)
                            <br />
                            Throttling
                            <br />
                            Queues (RabbitMQ, BullMQ)
                            <br />
                            Background jobs (Cron jobs)
                            <br />
                            Microservices (later stage)
                        </p>
                    </div>
                )}
            </div>

            {/* system design */}
            <p className="font-bold text-2xl pt-4">8. System Design:</p>
            <div className='pt-2 pl-6'>
                <button className={`bg-gray-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
            ${activeSection === "systemdesign" ? "bg-gray-700" : ""}`}
                    onClick={() => setActiveSection(activeSection === "systemdesign" ? null : "systemdesign")}
                >
                    High-Level Concepts
                </button>
                {activeSection === "systemdesign" && (
                    <div className='bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4'>
                        <p className='text-white font-semibold'>
                            Learn:
                            <br />
                            Load balancing
                            <br />
                            Scaling (horizontal vs vertical)
                            <br />
                            Monolith vs Microservices
                            <br />
                            CDN
                            <br />
                            Proxy servers
                            <br />
                            Database sharding
                            <br />
                            Caching strategies
                            <br />
                            API Gateway
                        </p>
                    </div>
                )}
            </div>

            {/* full stack integration */}
            <p className="font-bold text-2xl pt-4">9. Full Stack Integration:</p>
            <div className='pt-2 pl-6'>
                <button className={`bg-gray-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
            ${activeSection === "merge" ? "bg-gray-700" : ""}`}
                    onClick={() => setActiveSection(activeSection === "merge" ? null : "merge")}
                >
                    Connect Frontend & Backend
                </button>
                {activeSection === "merge" && (
                    <div className='bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4'>
                        <p className='text-white font-semibold'>
                            Axios/fetch API to send requests
                            <br />
                            Handle responses and display data
                            <br />
                            Error handling and loading states
                            <br />

                        </p>
                    </div>
                )}
            </div>

            {/* testing */}
            <p className="font-bold text-2xl pt-4">10. Testing:</p>
            <div className='pt-2 pl-6'>
                <button className={`bg-gray-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
            ${activeSection === "testing" ? "bg-gray-700" : ""}`}
                    onClick={() => setActiveSection(activeSection === "testing" ? null : "testing")}
                >
                    Testing
                </button>
                {activeSection === "testing" && (
                    <div className='bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4'>
                        <p className='text-white font-semibold'>
                            Types of testing:
                            <br />
                            Unit Testing
                            <br />
                            Integration Testing
                            <br />
                            End-to-End Testing (E2E)
                            <br /> <br />
                            Tools:
                            <br />
                            Jest (Node.js)
                            <br />
                            Mocha + Chai
                            <br />
                            Postman (for API testing)
                        </p>
                    </div>
                )}
            </div>

            {/* devops */}
            <p className="font-bold text-2xl pt-4">11. DevOps Basics:</p>
            <div className='pt-2 pl-6'>
                <button className={`bg-gray-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
            ${activeSection === "deployment" ? "bg-gray-700" : ""}`}
                    onClick={() => setActiveSection(activeSection === "deployment" ? null : "deployment")}
                >
                    Deployment
                </button>
                {activeSection === "deployment" && (
                    <div className='bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4'>
                        <p className='text-white font-semibold'>
                            Skills:
                            <br />
                            Deploy backend using: <br />
                            Render
                            <br />
                            Railway
                            <br />
                            Vercel (only for frontend)
                            <br />
                            Netlify (frontend)
                            <br />
                            CORS
                            <br />
                            Cyclic (Node.js backend)
                            <br />
                            Basic Linux commands
                            <br />
                            Environment setup (env variables, .env files)
                            <br />
                            GitHub Actions (basic CI/CD)
                        </p>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Skills2

