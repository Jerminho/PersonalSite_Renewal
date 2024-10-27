import React from "react";
import LinkedInIcon from "../media/linkedin-svg.svg";
import InstagramIcon from "../media/insta-svg.svg";
import GitHubIcon from "../media/github-svg.svg";
import EmailIcon from "../media/email-svg.svg";

const Media = () => {
  return (
    <div className="flex justify-center space-x-4 p-4 z-20 mt-6">
      <a
        href="https://www.linkedin.com/in/pierre-jérémie-ryan-njiné-happy-552a26206"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={LinkedInIcon}
          alt="LinkedIn"
          className="h-6 w-6 text-blue-700 hover:text-blue-900"
        />
      </a>

      <a
        href="https://www.instagram.com/still.nh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={InstagramIcon}
          alt="Instagram"
          className="h-6 w-6 text-purple-600 hover:text-purple-800"
        />
      </a>

      <a
        href="https://github.com/Jerminho"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={GitHubIcon}
          alt="GitHub"
          className="h-6 w-6 text-gray-900 hover:text-gray-700"
        />
      </a>

      <a href="mailto:pierre.wy@outlook.fr">
        <img
          src={EmailIcon}
          alt="Email"
          className="h-6 w-6 text-red-600 hover:text-red-800"
        />
      </a>
    </div>
  );
};

export default Media;
