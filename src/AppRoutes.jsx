import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmaps/Roadmap";
import Theory from "./components/Theory/Theory";
import Review from "./components/AiResumeRev/Review";
import About from "./components/About/About";
import Dbms from "./components/Theory/Dbms";
import Os from "./components/Theory/Os";
import Cn from "./components/Theory/Cn";
import Sd from "./components/Theory/Sd";
import Frontend from "./components/Roadmaps/Frontend/Frontend";
import Backend from "./components/Roadmaps/Backend/Backend";
import FullStack from "./components/Roadmaps/FullStack/FullStack";
import DevOps from "./components/Roadmaps/DevOps/DevOps";
import Ios from "./components/Roadmaps/IOS/Ios";
import Android from "./components/Roadmaps/Android/Android";
import DataAnalyst from "./components/Roadmaps/DataAnalyst/DataAnalyst";
import CyberSecurity from "./components/Roadmaps/CyberSecurity/CyberSecurity";
import GameDeveloper from "./components/Roadmaps/GameDeveloper/GameDeveloper";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Roadmap />} />
        <Route path="/theory" element={<Theory />} />
        <Route path="/ai-resume" element={<Review />} />
        <Route path="/about" element={<About />} />
        <Route path="/theory/dbms" element={<Dbms />} />
        <Route path="/theory/os" element={<Os />} />
        <Route path="/theory/cn" element={<Cn />} />
        <Route path="/theory/sd" element={<Sd />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/fullstack" element={<FullStack />} />
        <Route path="/devops" element={<DevOps />} />
        <Route path="/ios" element={<Ios />} />
        <Route path="/android" element={<Android />} />
        <Route path="/datanlyst" element={<DataAnalyst />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/gamedeveloper" element={<GameDeveloper />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
