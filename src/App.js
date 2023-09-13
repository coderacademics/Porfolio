import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Components/HomePage";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Introduction from "./Components/Introduction";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";
function App() {
    return <div className="App">
        <Router basename="/Porfolio">
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/aboutme" element={<AboutMe />}></Route>
                <Route path="/contactme" element={<ContactMe />}></Route>
                <Route path="/intro" element={<Introduction />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/skills" element={<Skills />}></Route>
                <Route path="/resume" element={<Resume />}></Route>
            </Routes>
        </Router>
    </div>
}
export default App;