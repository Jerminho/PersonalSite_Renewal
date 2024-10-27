import React from "react";
import Media from "../components/Media";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NetIcon from "../media/dotnet.svg";
import CSharpIcon from "../media/csharp.svg";
import ReactIcon from "../media/react.svg";
import HtmlIcon from "../media/html5-svg.svg";
import CssIcon from "../media/css-svg.svg";
import JsIcon from "../media/javascript.svg";
import TailwindIcon from "../media/tailwind.svg";
function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen justify-between relative overflow-hidden bg-black bg-opacity-70 text-gray-200">
      <Header />
      {/* Main Section with Extended Width */}
      <main className="flex flex-col items-center justify-center flex-grow text-center relative z-20 px-6 sm:px-12 mt-7 w-full ">
        <div className="relative z-20 p-8 text-white bg-black bg-opacity-50  rounded-xl w-full mx-2 sm:mx-4 max-w-5xl border border-indigo-400">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h1>

          <p className="text-base sm:text-lg text-gray-300 mb-8">
            Hi, I'm Pierre, a passionate Full-Stack Developer committed to
            creating dynamic and user-friendly applications. <br /> <br />I
            built this portfolio site from scratch using primarily React and
            Tailwind Css.
          </p>

          <div className="mx-auto w-1/4 h-1 bg-gradient-to-r from-purple-600 to-indigo-800 mb-8"></div>

          {/* Skills Section with SVG Icons */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-12">
              Skills & Expertise
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Skill with SVG and Label */}
              <div className="flex flex-col items-center">
                <img src={NetIcon} alt=".NET" className="w-12 h-12" />
                <span className="mt-2 text-white">.NET</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={CSharpIcon} alt="C#" className="w-12 h-12" />
                <span className="mt-2 text-white">C#</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={ReactIcon} alt="React.js" className="w-12 h-12" />
                <span className="mt-2 text-white">React.js</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={HtmlIcon} alt="HTML" className="w-12 h-12" />
                <span className="mt-2 text-white">HTML</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={CssIcon} alt="CSS" className="w-12 h-12" />
                <span className="mt-2 text-white">CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={JsIcon} alt="JavaScript" className="w-12 h-12" />
                <span className="mt-2 text-white">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={TailwindIcon}
                  alt="Tailwind CSS"
                  className="w-12 h-12"
                />
                <span className="mt-2 text-white">Tailwind CSS</span>
              </div>
            </div>
          </section>

          <div className="mx-auto w-1/4 h-1 bg-gradient-to-r from-purple-600 to-indigo-800 mb-8"></div>

          {/* Experience & Education Section */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-4">
              Experience & Education
            </h2>
            <ul className="list-none  text-gray-300 space-y-6 text-center mt-8">
              <li>
                <strong>Bachelor's Degree:</strong> Applied Informatics
                (2024-2026)
              </li>
              <li>
                <strong>Associate Degree:</strong> Software Development
                (2022-2025)
              </li>
              <li>
                <strong>Internship:</strong> Full-Stack Developer at VIKA Ltd.
                (2023-2024)
              </li>
            </ul>
          </section>

          {/* Short Divider */}
          <div className="mx-auto w-1/4 h-1 bg-gradient-to-r from-purple-600 to-indigo-800 mb-8"></div>

          {/* Personal Interests Section */}
          <section className="mb-8 ">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Beyond Coding
            </h2>
            <p className="text-gray-300">
              Outside of work, I enjoy sports like football and swimming, and
              I’m always eager to pick up new skills.
            </p>
          </section>

          {/* Call to Action Button */}
          <section className="text-center mt-8">
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-800 hover:from-purple-500 hover:to-indigo-700 text-white font-bold py-2 px-6 rounded-full mb-6"
            >
              Get in Touch
            </a>
          </section>
        </div>
      </main>

      <Media />
      <Footer />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      >
        <source src={require("../media/starrynight.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default AboutPage;
