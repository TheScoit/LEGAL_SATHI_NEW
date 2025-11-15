import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ThemeContext } from "./ThemeContext"; // 👈 Import the Theme Context

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const { theme } = useContext(ThemeContext); // 👈 Access theme ("light" or "dark")

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5757/api/v1/message/send",
        { firstName, lastName, email, contact, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setContact("");
      setMessage("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <section
      className={`w-full min-h-screen py-16 px-6 md:px-20 flex flex-col items-center justify-start gap-12 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[var(--bg)] text-[var(--text)]"
          : "bg-gradient-to-br from-orange-50 via-white to-orange-100"
      }`}
    >
      {/* Form Section */}
      <div
        className={`md:w-1/2 w-full rounded-xl shadow-lg p-6 sm:p-8 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-900 border border-gray-700"
            : "bg-white border border-gray-200"
        }`}
      >
        <h1
          className={`text-4xl sm:text-4xl font-extrabold mb-2 text-center ${
            theme === "dark" ? "text-orange-300" : "text-orange-900"
          }`}
        >
          Send Us a Message
        </h1>

        <p
          className={`mb-6 text-center text-sm sm:text-base ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          We would love to hear from you. Contact us anytime!
        </p>

        <form onSubmit={handleMessage} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              className={`flex-1 rounded-lg p-3 border focus:outline-none focus:ring-2 focus:ring-orange-400 transition ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-200 border-gray-700 placeholder-gray-500"
                  : "bg-white text-gray-900 border-gray-300 placeholder-gray-400"
              }`}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className={`flex-1 rounded-lg p-3 border focus:outline-none focus:ring-2 focus:ring-orange-400 transition ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-200 border-gray-700 placeholder-gray-500"
                  : "bg-white text-gray-900 border-gray-300 placeholder-gray-400"
              }`}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className={`w-full rounded-lg p-3 border focus:outline-none focus:ring-2 focus:ring-orange-400 transition ${
              theme === "dark"
                ? "bg-gray-800 text-gray-200 border-gray-700 placeholder-gray-500"
                : "bg-white text-gray-900 border-gray-300 placeholder-gray-400"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Contact Number"
            className={`w-full rounded-lg p-3 border focus:outline-none focus:ring-2 focus:ring-orange-400 transition ${
              theme === "dark"
                ? "bg-gray-800 text-gray-200 border-gray-700 placeholder-gray-500"
                : "bg-white text-gray-900 border-gray-300 placeholder-gray-400"
            }`}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />

          <textarea
            rows={6}
            placeholder="Message"
            className={`w-full rounded-lg p-3 border focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none transition ${
              theme === "dark"
                ? "bg-gray-800 text-gray-200 border-gray-700 placeholder-gray-500"
                : "bg-white text-gray-900 border-gray-300 placeholder-gray-400"
            }`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold py-3 rounded-lg shadow hover:from-orange-500 hover:to-orange-700 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
