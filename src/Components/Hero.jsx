import Waving from "../assets/images/waving.png";


import Html from "../assets/icons/html.svg";
import Css from "../assets/icons/css3.svg";
import Js from "../assets/icons/javascript.svg";
import React from "../assets/icons/react-js.svg";
import Redux from "../assets/icons/redux.svg";
import Tailwind from "../assets/icons/tailwind.svg";



import {TbBrandLinkedin} from "react-icons/tb";
import { FiGithub } from "react-icons/fi";

function Hero(){
  const skillsIcons = [
    {
      img: Html,
      title: "HTML5",
    },
    {
      img: Css,
      title: "CSS3",
    },
    {
      img: Js,
      title: "Java Script",
    },
    {
      img: React,
      title: "React",
    },
    {
      img:Redux ,
      title: "Redux",
    },
    {
      img:Tailwind,
      title: "Tailwind CSS",
    },
  ];

  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Front-End React Developer</h1>
                <img src={Waving} alt="waving_hand" />
                <p>
                  Hi, I'm Dharamveer. A passionate front-End developer
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/dharamveer-singh-033284229/"
                  >
                    <TbBrandLinkedin width={32} height={32} />
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/dharamveer742"
                  >
                    <FiGithub width={32} height={32} />
                  </a>
                </span>
              </div>

              <div className="hero-img"></div>
            </div>

            {/*  */}
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.title}>
                      <img src={icon.img} title={icon.title } alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
