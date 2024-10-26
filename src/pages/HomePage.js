import { Link } from "react-router-dom";
import Media from "../components/Media";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen justify-between relative  overflow-hidden">
      <main className="flex flex-col items-center justify-center flex-grow text-center relative z-20">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        >
          <source src={require("../media/starrynight.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-20 p-5 text-2xl text-white bg-black bg-opacity-50 rounded-xl mx-2 sm:mx-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Hi there, I’m Pierre, <br /> Full-Stack Developer
          </h1>

          {/* Typewriter effect */}
          <p className="text-base sm:text-lg text-gray-400 typing-animation">
            I create dynamic and responsive web applications.
          </p>

          {/* Navigation Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/about"
              className="btn bg-gradient-to-r from-purple-600 to-indigo-800 hover:from-purple-500 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              About Me
            </Link>
            <Link
              to="/projects"
              className="btn bg-gradient-to-r from-purple-600 to-indigo-800 hover:from-purple-500 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="btn bg-gradient-to-r from-purple-600 to-indigo-800 hover:from-purple-500 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Contact
            </Link>
          </div>
        </div>
      </main>

      {/* Media Links */}
      <Media />

      {/* Footer */}
      <footer className=" p-4 text-center shadow-inner z-20">
        <p className="text-gray-300">
          © 2024 built by NH - All Rights Reserved
        </p>
      </footer>
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

export default HomePage;
