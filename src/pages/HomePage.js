import { Link } from "react-router-dom";
import Media from "../components/Media";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#111] text-gray-200 relative overflow-hidden">
      <main className="flex flex-col items-center justify-center flex-grow text-center relative z-20 px-6">
        <div className="bg-white/10 border border-gray-700 rounded-xl px-6 py-7 sm:px-10 sm:py-10 w-full max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-light tracking-wide mb-3 text-gray-100">
            Built.By.NH
          </h1>
        
          <p className="text-sm sm:text-base text-gray-400 mb-6">
            Crafting modern web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/about"
              className="w-full border border-gray-700 rounded py-2 text-sm tracking-wide hover:bg-white/10 transition"
            >
              Projects
            </Link>

            <Link
              to="/contact"
              className="w-full border border-gray-700 rounded py-2 text-sm tracking-wide hover:bg-white/10 transition"
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

export default HomePage;
