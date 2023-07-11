
import {
     faLinkedin,
     faGithub,
     faTwitter,
    } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Footer() {
  return (
    <footer>
    <a
        href="https://github.com/lesuuh"
    >
        <FontAwesomeIcon icon={faGithub} className="footer--icon"/>
    </a>
    <a
        href="https://www.linkedin.com/in/lesuuh/"
    >
        <FontAwesomeIcon icon={faLinkedin} className="footer--icon"/>
    </a>
    <a
        href="https://twitter.com/UKLesuuh"
    >
        <FontAwesomeIcon icon={faTwitter} className="footer--icon"/>
    </a>

    </footer>
      

  );
}


// const Footer = ()=> {
//     return (
//         <div>
// <h1>this is the footer<BsFacebook /></h1>
//         </div>
//     )
// }


export default Footer