import { Link } from "react-router-dom";
import Media from "../components/Media";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen justify-between relative overflow-hidden">
      <main className="flex flex-col items-center justify-center flex-grow text-center relative z-20 px-4 sm:px-6 md:px-8 lg:px-12 mt-7">
        <div className="relative z-20 p-6 text-2xl text-white bg-black bg-opacity-50 rounded-xl w-full mx-auto max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Hi there, I’m Pierre, <br /> Full-Stack Developer
          </h1>

          {/* Typewriter effect */}
          <p className=" sm:text-lg text-gray-400 mb-4 typing-animation text-sm">
            I create dynamic web and desktop applications.
          </p>

          {/* Navigation Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/about"
              className="w-full sm:w-1/2 btn bg-gradient-to-r from-purple-600 to-indigo-800 hover:from-purple-500 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-1/2 btn bg-gradient-to-r from-purple-600 to-indigo-800 hover:from-purple-500 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Contact
            </Link>
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
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      >
        <source src={require("../media/starrynight.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default HomePage;
