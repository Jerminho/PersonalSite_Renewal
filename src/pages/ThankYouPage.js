import React from "react";
import { Link } from "react-router-dom";
import Media from "../components/Media";
import Footer from "../components/Footer";
import Header from "../components/Header";

function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen justify-between relative overflow-hidden">
      <Header />

      <main className="flex flex-col items-center justify-center flex-grow text-center relative z-20 p-6">
        <div className="relative z-20 p-5 text-white bg-black bg-opacity-50 rounded-xl mx-2 sm:mx-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Thank You!</h1>

          <p className="text-base sm:text-lg text-gray-400 mb-6">
            Your message has been sent successfully. I'll get back to you soon!
          </p>

          <Link
            to="/"
            className="btn bg-gradient-to-r from-purple-600 to-indigo-800 hover:from-purple-500 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            ← Back to Homepage
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
        <source src={require("../media/starrynight.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default ThankYouPage;
