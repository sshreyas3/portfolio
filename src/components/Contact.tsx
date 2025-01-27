import React from "react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
        <form className="max-w-2xl mx-auto space-y-5">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-500 rounded-lg text-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
