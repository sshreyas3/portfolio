import React from "react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-colorSomeBlack to-colorSomeBlack"
    >
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
        <form className="max-w-2xl mx-auto space-y-5">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 bg-colorSomeGrey text-colorBronze rounded-lg focus:ring-2 focus:ring-colorBronze focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-colorSomeGrey text-colorBronze rounded-lg focus:ring-2 focus:ring-colorBronze focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full px-4 py-2 bg-colorSomeGrey text-colorBronze rounded-lg focus:ring-2 focus:ring-colorBronze focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-colorBronze rounded-lg text-colorSomeBlack hover:bg-colorSomeGrey hover:text-customOffWhite transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
