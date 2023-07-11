import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = () => {
  return (
    <main>
      <h2>Ueh-Kabari Lesuuh</h2>
      <p className="role">Junior Front End Engineer</p>
      <div className="btns">
        <button>
          <FontAwesomeIcon icon={faEnvelope} />
          Email
        </button>

        <button className="btn2">
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
        </button>
      </div>
      <div>
        <div className="details">
          <h3>About</h3>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div className="details">
          <h3>Interests</h3>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
