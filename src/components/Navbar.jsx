import logo from "../assets/logo4.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const navbar = () => {
  return (
    <nav className="flex items-center justify-between mr-10">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-32" src={logo} alt="logo" />
      </div>
      <div className="m-10 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/niladri-karmakar-8b3a9b220/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Niladrikrmkr">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/niladrikrmkr/">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default navbar;
