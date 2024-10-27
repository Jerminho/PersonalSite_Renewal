import React from "react";
import { Link } from "react-router-dom";
import Media from "../components/Media";
import Footer from "../components/Footer";
import Header from "../components/Header";

function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen justify-between relative overflow-hidden">
      <Header />

      <main className="flex flex-col items-center justify-center flex-grow text-center relative z-20 p-6">
        <div className="relative z-20 p-5 text-white bg-black bg-opacity-50 rounded-xl mx-2 sm:mx-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h1>

          <p className="text-base sm:text-lg text-gray-400 mb-6">
            I’m excited to connect! Feel free to reach out if you’d like to
            collaborate or have any questions.
          </p>

          <form
            action="https://formsubmit.co/pierre.wy@outlook.fr?redirect=success.html"
            method="POST"
            className="flex flex-col space-y-4 w-full max-w-md mx-auto border border-indigo-400"
          >
            {/* Disable reCAPTCHA */}
            <input type="hidden" name="_captcha" value="false" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 bg-black bg-opacity-60 text-white placeholder-gray-400 rounded outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 bg-black bg-opacity-60 text-white placeholder-gray-400 rounded outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="p-3 bg-black bg-opacity-60 text-white placeholder-gray-400 rounded outline-none"
            ></textarea>
            <button
              type="submit"
              className="btn bg-gradient-to-r from-purple-600 to-indigo-800 hover:from-purple-500 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>

          {/* Back to Homepage Button */}
          <div className="mt-6">
            <Link to="/" className="text-indigo-400 hover:text-indigo-300">
              ← Back to Homepage
            </Link>
          </div>
        </div>
      </main>

      {/* Social Media Links */}
      <Media />

      {/* Footer */}
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

export default ContactPage;
