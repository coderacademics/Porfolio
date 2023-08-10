import Navbar from "./Navbar";
import '../CSS Styling/body.css'
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Services from "./Services";
import Resume from "./Resume";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../CSS Styling/LoaderCSS.css';
function HomePage() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 3 seconds delay

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);
  return (
    <div className="HomePage">
      {isLoading ?
        <div className="loading-screen">
          <span class="loader">
            <span class="loader-inner"></span></span>
        </div>
        : <div>
            <Navbar />
            <Introduction />
            <AboutMe />
            <Skills />
            <Services />
            <Resume />
            <ContactMe />
            <Footer />
        </div>}
    </div>
  );
}

export default HomePage;
