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
   const projects = [
    {
      name: "Pierino Ijs Gent",
      url: "https://www.pierinoijs.be",
    },
    {
      name: "Charlotte Vercruysse Interior Design",
      url: "https://charlottevercruysse.com/",
    },
    {
      name: "Cappuccino Gent",
      url: "https://www.cappuccino-gent.com/",
    },
    {
      name: "DC Outsourcing",
      url: "https://dcoutsourcing.com/",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#111] text-gray-200 relative overflow-hidden">
      <Header />

      <main className="flex flex-col items-center justify-center flex-grow px-6 sm:px-12 z-20">
        <div className="w-full max-w-5xl">
          <h1 className="text-4xl sm:text-5xl font-light tracking-wide mb-16 text-center text-gray-100">
            Projects
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <a
  key={index}
  href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    border border-gray-700
    rounded-xl
    bg-white/15
    hover:bg-white/10
    transition-all duration-300
    px-4 py-5
    sm:px-8 sm:py-7
  "
>
  <h2 className="text-base sm:text-xl font-light tracking-wide text-gray-100">
    {project.name}
  </h2>

  <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition">
    View project →
  </p>
</a>
            ))}
          </div>
        </div>
      </main>

      <Media />
      <Footer />

      <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture="true"
        preload="true"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      >
        <source src={require("../media/dusty.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default AboutPage;
