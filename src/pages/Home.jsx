import React from "react";
import Navbar from "../Components/NavBar.jsx";
import Hero from "../Components/Hero.jsx"; 
import AboutMe from "../Components/AboutMe.jsx";
import Projects from "../Components/Projects.jsx";
import Contact from "../Components/Contact.jsx";
import Footer from "../Components/Footer.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default Home;
