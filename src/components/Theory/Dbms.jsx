import React from "react";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { IoMdCloudDownload } from "react-icons/io";
import Footer from "../Roadmaps/Footer";

const Dbms = () => {
  // for the view pdf
  const handleView = () => {
    window.open("/DBMS.pdf", "_blank");
  };

  //  for the downlaod pdf
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/DBMS.pdf"; // Corrected file path
    link.download = "DBMS.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="w-full h-screen mt-32 bg-green-200">
        <h1 className="font-semibold  text-lg flex justify-center pt-12">
          Download essential DBMS notes to ace placements, boost knowledge, and
          excel in college studies!
        </h1>

        {/* view notes */}
        <div className="grid grid-cols-2 gap-4  mt-20 ">
          <button
            className="flex items-center gap-2 border-2 border-blue-400 px-6 py-8 h-16  w-40 ml-[30rem] rounded-2xl bg-white text-blue-900 shadow-md hover:bg-gray-300  cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            onClick={handleView}
          >
            <span className="font-semibold">View Notes</span>
            <HiOutlineViewfinderCircle size={32} />
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 border-2 border-blue-400 px-4 py-8 w-40 h-16 font-semibold rounded-2xl bg-white text-blue-900 shadow-md hover:bg-gray-300 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
          >
            Download Notes
            <IoMdCloudDownload size={32} />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dbms;
