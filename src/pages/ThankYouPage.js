import React from "react";
import { Link } from "react-router-dom";
import Media from "../components/Media";
import Footer from "../components/Footer";
import Header from "../components/Header";

function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#111] text-gray-200 relative overflow-hidden">
      <Header />

      <main className="flex flex-col items-center justify-center flex-grow px-6 text-center z-20">
        <div className="bg-white/10 border border-gray-700 rounded-xl px-6 py-7 sm:px-10 sm:py-10 max-w-md w-full">
          <h1 className="text-3xl sm:text-4xl font-light tracking-wide mb-4 text-gray-100">
            Thank you
          </h1>

          <p className="text-sm sm:text-base text-gray-400 mb-6">
            Your message has been sent.
          </p>

          <Link
            to="/"
            className="inline-block border border-gray-700 rounded py-2 px-6 text-sm tracking-wide hover:bg-white/10 transition"
          >
            ← Back home
          </Link>
        </div>
      </main>
      <Media />

      <Footer />

      {/* Background Video */}
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

export default ThankYouPage;
