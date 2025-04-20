import React, { useState } from 'react'
import Footer from '../Roadmaps/Footer'

const About = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <>
      <div className='w-full min-h-screen mt-32 bg-green-200 pb-20'>

        {/* about techroute */}
        <h1 className='flex justify-center pt-5 text-xl font-semibold hover:underline'>About Techroute</h1>

        {/* faqs */}
        <div className='pl-32 pt-24'>

          {/* 1st question */}
          <div className='mt-3 ml-6'>
            <button className={`bg-neutral-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "ques1" ? "bg-slate-600" : ""}`}
              onClick={() => setActiveSection(activeSection === "ques1" ? null : "ques1")}>
              What is TechRoute?
            </button>
            {activeSection === "ques1" && (
              <div className='bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4'>
                <p className='text-white font-semibold'>
                  TechRoute is a web platform designed to help students and aspiring developers find the right path in the tech industry.
                  <br /><br />
                  Whether you're aiming to become a Frontend Developer, Backend Developer,
                  Full Stack Developer, or a Software Engineer, TechRoute provides well-structured
                  roadmaps, project ideas, resources, and interview prep material to guide you at
                  every step.
                </p>
              </div>
            )}
          </div>

          {/* 2nd question */}
          <div className='mt-3 ml-6'>
            <button className={`bg-neutral-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "ques2" ? "bg-slate-600" : ""}`}
              onClick={() => setActiveSection(activeSection === "ques2" ? null : "ques2")}>
              Is TechRoute free to use?
            </button>
            {activeSection === "ques2" && (
              <div className='bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4'>
                <p className='text-white font-semibold'>
                  Yes, TechRoute is completely free. Some features like resume reviews
                  or mock interviews may be upgraded in the future, but the core resources
                  are accessible to everyone.
                </p>
              </div>
            )}
          </div>

          {/* 3rd question */}
          <div className='mt-3 ml-6'>
            <button className={`bg-neutral-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "ques3" ? "bg-slate-600" : ""}`}
              onClick={() => setActiveSection(activeSection === "ques3" ? null : "ques3")}>
              Will TechRoute help me <br /> build real-world projects?
            </button>
            {activeSection === "ques3" && (
              <div className='bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4'>
                <p className='text-white font-semibold'>
                  Yes! It includes project ideas, feature breakdowns,
                  and step-by-step guidance to help you build industry-relevant,
                  real-world applications.
                </p>
              </div>
            )}
          </div>

          {/* 4th question */}
          <div className='mt-3 ml-6'>
            <button className={`bg-neutral-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "ques4" ? "bg-slate-600" : ""}`}
              onClick={() => setActiveSection(activeSection === "ques4" ? null : "ques4")}>
              Can I use TechRoute to prepare <br /> for internships or placements?
            </button>
            {activeSection === "ques4" && (
              <div className='bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4'>
                <p className='text-white font-semibold'>
                  Absolutely! TechRoute includes placement prep materials,
                  mock interview tips, and project-building guidance to help
                  you land internships and PPOs.
                </p>
              </div>
            )}
          </div>

          {/* 5th question */}
          <div className='mt-3 ml-6'>
            <button className={`bg-neutral-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "ques5" ? "bg-slate-600" : ""}`}
              onClick={() => setActiveSection(activeSection === "ques5" ? null : "ques5")}>
              What makes TechRoute different <br /> from other learning websites?
            </button>
            {activeSection === "ques5" && (
              <div className='bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4'>
                <p className='text-white font-semibold'>
                  TechRoute focuses on clarity and direction.
                  Instead of overwhelming you with endless tutorials,
                  it provides structured roadmaps, practical projects,
                  and the “why” behind every step.
                </p>
              </div>
            )}
          </div>

          {/* 6th question  */}
          <div className='mt-4 ml-6'>
            <button className={`bg-neutral-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "ques6" ? "bg-slate-600" : ""}`}
              onClick={() => setActiveSection(activeSection === "ques6" ? null : "ques6")}>
              How do I choose the  right  career <br /> path in tech?
            </button>
            {activeSection === "ques6" && (
              <div className='bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4'>
                <p className='text-white font-semibold'>
                  TechRoute offers curated roadmaps for various roles like frontend,
                  backend, full-stack, and DevOps. Each roadmap includes learning paths,
                  resources, and project ideas tailored to that role.
                </p>
              </div>
            )}
          </div>

          {/* 7th question  */}
          <div className='mt-4 ml-6'>
            <button className={`bg-neutral-400 h-14 w-80  rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "ques7" ? "bg-slate-600" : ""}`}
              onClick={() => setActiveSection(activeSection === "ques7" ? null : "ques7")}>
              Do I need to know programming <br /> before using TechRoute?
            </button>
            {activeSection === "ques7" && (
              <div className='bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4'>
                <p className='text-white font-semibold'>
                  Not at all! TechRoute is beginner-friendly. It starts from the
                  basics and gradually moves toward advanced topics.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
