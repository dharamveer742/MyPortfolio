import ProBox from "./ProBox";
import quizes from "../assets/images/quizes.png";
import Nike from "../assets/images/Nike.png";
import FoodHub from "../assets/images/FoodHub.png";
function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
           
            <div className="projects-grid">
              <ProBox
                title="Quizes"
                img={quizes}
                description="A quiz website is an online platform that allows users to test thier knowledge for personal or business use. The website provides an interface for selecting, participating, and score calculation with user authentication functionality."
                techno1="HTML"
                techno2="CSS"
                techno3="js"
                techno4="fireBase"
                code="https://github.com/dharamveer742/Quiz-Website"
                demo="https://dharamveer742.github.io/Quiz-Website/"
                scrollY="-83%"
                
              />

              <ProBox
                title="Nike"
                img={Nike}
                description="Nike is a shoe sellling app that allows users to explore  various type of shoes."
                techno1="React"
                techno2="Tailwind CSS"
                code="https://github.com/dharamveer742/Nike"
                demo="https://nike-7ppv.onrender.com"
                scrollY="-74%"
                cName="reversed-proj"
              />

              <ProBox
                title="FoodHub"
                img={FoodHub}
                description="A Foodhub website is a food delievery app that offers search,restaurant selection ,dish selection,cart functionality in real time "
                techno1="React"
                techno2="Redux"
                code="https://github.com/dharamveer742/FoodHub"
                demo="https://foodhub-abyv.onrender.com"
                scrollY="-89%"
              />

              
            </div>
          </div>
          {/* <h2 className="new-projects">New projects coming soon.. 🤠</h2> */}
        </div>
      </section>
    </>
  );
}

export default Projects;
