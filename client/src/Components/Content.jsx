import React, { useContext } from "react";
import { Button } from "@mui/material";
import { SiChatbot } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext"; // 👈 import context
import Image from "../assets/LawyerImage.png";

function Content() {
  const navigateTo = useNavigate();
  const { theme } = useContext(ThemeContext); // 👈 access theme ("light" or "dark")

  const Lawyer = () => {
    navigateTo("/lawyer");
  };

  return (
    <>
    
    <section
      className={`relative w-full py-16 px-6 md:px-28 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[var(--bg)] text-[var(--text)]"
          : "bg-gradient-to-l from-orange-100 via-white to-orange-200 text-[var(--text)]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight font-display">
            Empowering Justice,
            <br />
            <span className="text-orange-600 dark:text-orange-400">
              Upholding Rights:
            </span>
            <br /> Your Trusted Legal Partner
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-lg md:w-4/5 mx-auto md:mx-0">
            Legal Sathi connects you with experienced lawyers instantly. Get
            expert advice, transparent support, and accessible justice — all in
            one place.
          </p>

          <Button
            variant="contained"
            onClick={Lawyer}
            sx={{
              backgroundColor: theme === "dark" ? "#fb923c" : "#ea580c", // orange-400 / orange-600
              color: "#fff",
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "10px",
              padding: "10px 28px",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: theme === "dark" ? "#f97316" : "#c2410c",
              },
            }}
          >
            Get Legal Advice
          </Button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={Image}
            alt="Lawyer Illustration"
            className="w-72 mt-20 md:w-96 drop-shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* CHATBOT ICON */}
      <a
        href="https://mediafiles.botpress.cloud/9e91f4a3-cac3-4288-a4fc-c5e7392239cd/webchat/bot.html"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-3 bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full shadow-xl transition-transform duration-300 hover:scale-110 z-50"
      >
        <SiChatbot size={28} />
      </a>
    </section>
    </>
  );
}

export default Content;
