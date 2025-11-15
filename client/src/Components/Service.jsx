import React, { useContext } from "react";
import SmallCard from "./SmallCard";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext"; // 👈 Import the Theme Context

const Service = () => {
  const { theme } = useContext(ThemeContext);
  const navigateTo = useNavigate();

  const contact = () => {
    navigateTo("/contact");
  };

  return (
    <section
      className={`w-full py-16 px-6 md:px-20 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[var(--bg)] text-[var(--text)]"
          : "bg-gradient-to-l from-orange-100 via-white to-orange-200"
      }`}
    >
      {/* Heading Section */}
      <div className="max-w-6xl mx-auto text-center md:text-left mb-12">
        <h4
          className={`font-semibold text-lg mb-2 ${
            theme === "dark" ? "text-orange-400" : "text-orange-600"
          }`}
        >
          Service
        </h4>
        <h2
          className={`text-3xl md:text-4xl font-extrabold mb-4 ${
            theme === "dark" ? "text-white" : "text-orange-900"
          }`}
        >
          Why Select Us?
        </h2>
        <p
          className={`text-md md:text-lg max-w-3xl mx-auto md:mx-0 mb-6 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Choosing us for your needs is backed by expertise, reliability, and
          dedication.
        </p>

        <Link to={"/consultation"}>
          <Button
            sx={{
              backgroundColor: "#f97316",
              color: "#fff",
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "8px",
              padding: "10px 28px",
              "&:hover": { backgroundColor: "#ea580c" },
            }}
          >
            Free Consultation
          </Button>
        </Link>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <SmallCard
          src={"data:image/png;base64,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"}
          title="Expert Lawyers"
          description="Expert lawyers bring knowledge & experience to provide insightful guidance and effective legal strategies."
          className={`hover:scale-105 transition-transform duration-300 shadow-lg rounded-xl p-6 ${
            theme === "dark"
              ? "bg-gray-900 border border-gray-700 text-gray-200"
              : "bg-white border border-gray-200 text-gray-900"
          }`}
        />
        <SmallCard
          src={"https://png.pngtree.com/png-vector/20230316/ourmid/pngtree-case-study-line-icon-vector-png-image_6650565.png"}
          title="Case Strategy"
          description="Our best case strategy combines research, strategic thinking, and proactive problem-solving for optimal results."
          className={`hover:scale-105 transition-transform duration-300 shadow-lg rounded-xl p-6 ${
            theme === "dark"
              ? "bg-gray-900 border border-gray-700 text-gray-200"
              : "bg-white border border-gray-200 text-gray-900"
          }`}
        />
        <SmallCard
          src={"https://png.pngtree.com/png-vector/20191021/ourmid/pngtree-scales-of-justice-icon-simple-style-png-image_1837209.jpg"}
          title="Fight for Justice"
          description="We advocate tirelessly for clients' rights and hold accountable those who violate them."
          className={`hover:scale-105 transition-transform duration-300 shadow-lg rounded-xl p-6 ${
            theme === "dark"
              ? "bg-gray-900 border border-gray-700 text-gray-200"
              : "bg-white border border-gray-200 text-gray-900"
          }`}
        />
      </div>
    </section>
  );
};

export default Service;
