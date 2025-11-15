import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaBullseye, FaStar, FaHandshake, FaShieldAlt } from "react-icons/fa";

const Aboutus = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 py-24 px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          About Our Company
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-orange-100">
          We deliver trust, integrity and world-class professional services for our clients.
        </p>
      </div>

      {/* TEAM SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-orange-700 text-center flex justify-center items-center gap-2 mb-14">
          <FaUsers className="text-orange-600" /> Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {[
            { name: "Farhan Shaikh", role: "Founder & CEO" },
            { name: "Mohd Saad Shaikh", role: "Operations Head" },
            { name: "Arsalan Shaikh", role: "Marketing Lead" },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl border border-orange-100 p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="w-28 h-28 bg-orange-200 rounded-full mx-auto mb-5 flex items-center justify-center text-orange-700 font-bold shadow">
                IMG
              </div>
              <h3 className="text-2xl font-bold text-orange-900">{member.name}</h3>
              <p className="text-orange-600 mt-1 font-medium">{member.role}</p>
              <div className="flex justify-center mt-4">
                <span className="px-4 py-1 bg-orange-100 text-orange-700 text-sm rounded-full font-semibold shadow">
                  Team Member
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MISSION + VALUES SECTION */}
      <div className="bg-orange-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Mission */}
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-orange-100">
            <h2 className="text-3xl font-bold text-orange-700 flex items-center gap-3 mb-6">
              <FaBullseye className="text-orange-600" /> Our Mission
            </h2>
            <p className="text-orange-700 text-lg leading-relaxed">
              Our mission is to provide outstanding services with full transparency,
              integrity, and professionalism. We aim to set new industry standards
              while delivering unmatched value to our clients.
            </p>
          </div>

          {/* Values */}
          <div className="grid gap-8">
            {[
              {
                icon: <FaShieldAlt />,
                title: "Integrity",
                desc: "We believe in honesty and doing the right thing — always.",
              },
              {
                icon: <FaHandshake />,
                title: "Professionalism",
                desc: "We deliver services with accuracy, discipline, and expertise.",
              },
              {
                icon: <FaStar />,
                title: "Excellence",
                desc: "We strive to exceed expectations in every project we take.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-orange-700 flex items-center gap-3 mb-2">
                  <span className="text-orange-600 text-2xl">{value.icon}</span>
                  {value.title}
                </h3>
                <p className="text-orange-700">{value.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="py-20 text-center">
        <h2 className="text-4xl font-extrabold text-orange-700">Need Our Services?</h2>
        <p className="mt-3 text-lg text-orange-600">
          Connect with us and experience professional excellence.
        </p>
        <Link
          to={"/consulation"}
          className="mt-6 inline-block bg-orange-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-orange-700 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Aboutus;
