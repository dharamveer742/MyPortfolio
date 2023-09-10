import {TbBrandLinkedin} from "react-icons/tb";
import { FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerc">
            <h3>
              Copyright © {new Date().getFullYear()}. All rights are reserved
            </h3>
            <div className="footerc__socials">
              <a
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/dharamveer-singh-033284229/"
              >
                <TbBrandLinkedin style={{fontSize:30}} />
              </a>
              <a
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/dharamveer742"
              >
                <FiGithub style={{fontSize:30}} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
