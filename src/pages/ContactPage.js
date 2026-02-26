import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Media from "../components/Media";
import Footer from "../components/Footer";
import Header from "../components/Header";

function ContactPage() {
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "8661fa52-27ac-4ad7-9c82-459d860bdf53");
    formData.append("recipient", "pierre.wy@outlook.fr");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        event.target.reset();
        navigate("/thank-you");
      } else {
        setResult("An error occurred. Please try again later.");
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#111] text-gray-200 relative overflow-hidden">
      <Header />

      <main className="flex flex-col items-center justify-center flex-grow px-6 z-20">
        <div className="w-full max-w-md bg-white/10 border border-gray-700 rounded-xl px-5 py-6 sm:px-8 sm:py-8">
          <h1 className="text-3xl sm:text-4xl boldfont-light tracking-wide mb-4 text-center">
            Contact
          </h1>

          <p className="text-sm sm:text-base text-gray-400 mb-6 text-center">
            Have a project in mind? Let’s talk.
          </p>

          <form
            onSubmit={onSubmit}
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="px-3 py-2 bg-white/5 border border-gray-700 rounded text-gray-200 placeholder-gray-500 outline-none focus:border-gray-500 transition"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="px-3 py-2 bg-white/5 border border-gray-700 rounded text-gray-200 placeholder-gray-500 outline-none focus:border-gray-500 transition"
              required
            />

            <textarea
              name="message"
              placeholder="Your message"
              rows="4"
              className="px-3 py-2 bg-white/5 border border-gray-700 rounded text-gray-200 placeholder-gray-500 outline-none focus:border-gray-500 transition"
              required
            />

            <button
              type="submit"
              className="mt-2 py-2 bg-white/10 hover:bg-white/20 border border-gray-700 rounded text-sm tracking-wide transition"
            >
              Send message
            </button>

            {result && (
              <p className="text-center text-xs text-gray-500 mt-2">{result}</p>
            )}
          </form>

          <div className="mt-6 text-center">
            <Link to="/" className="text-gray-500 hover:text-gray-300 transition">
              ← Back home
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

export default ContactPage;
