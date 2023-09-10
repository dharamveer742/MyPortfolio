import {FiMail} from "react-icons/fi";

 
function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              <h3>Don't be shy! Hit me up! 👉</h3>
            </div>
            <div className="contact__icon-box">
                <span>
                  <FiMail style={{fontSize:30}} />
                </span>
                <div className="contact__info">
                  <h3>Mail</h3>
                  <a href="mailto:Dharamveer827399@gmail.com">
                    Dharamveer827399@gmail.com
                  </a>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
