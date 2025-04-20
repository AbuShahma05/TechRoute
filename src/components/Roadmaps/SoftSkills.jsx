import React, { useState } from 'react'

const SofSkills = () => {
    const [activeSection, setActiveSection] = useState(null);

    return (
        <div>
            <p className="text-lg font-bold pl-6 pt-5">Bonus:</p>
            <div className='pt-2 pl-6'>
                <button className={`bg-neutral-400 text-black h-14 w-80 pt-2 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
            ${activeSection === "bonus" ? "bg-neutral-600" : ""}`}
                    onClick={() => setActiveSection(activeSection === "bonus" ? null : "bonus")}
                >
                    Soft Skills + Career Prep
                </button>
                {activeSection === "bonus" && (
                    <div className='bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4'>
                        <p className='text-white font-semibold'>
                            Resume building
                            <br />
                            Communication skills
                            <br />
                            GitHub ReadMe writing
                            <br />
                            How to explain projects in interviews
                            <br />
                            LinkedIn presence
                            <br />
                            Apply on Internshala, LinkedIn, AngelList, etc.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SofSkills
