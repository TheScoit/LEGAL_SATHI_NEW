import React from "react";
import { useNavigate } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";

const Insurance = () => {
  const navigateTo = useNavigate();
  const gotoHome = () => {
    navigateTo("/");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12">
      {/* Text Content */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-800">
          Insurance Law
        </h1>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold text-orange-600">Insurance law </span>
          encompasses a set of regulations and principles that govern the insurance industry's operations. These laws are designed to protect policyholders, ensure fair practices by insurance companies, and promote stability in the insurance market.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold text-orange-600">Policy Formation: </span>
          Insurance law governs how insurance policies are created, including the terms, conditions, and coverage details outlined in the policy documents.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold text-orange-600">Regulatory Compliance: </span>
          Insurance companies must adhere to various regulatory requirements set by government agencies.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold text-orange-600">Claims Processing: </span>
          Insurance law establishes procedures and timelines for handling insurance claims, defining responsibilities for both policyholders and insurers.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold text-orange-600">Bad Faith Practices: </span>
          Insurance law prohibits insurers from engaging in bad faith practices like unreasonably denying claims or delaying processing.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold text-orange-600">International Insurance Law: </span>
          Extends to cross-border transactions, treaties, and conventions impacting contract enforcement across jurisdictions.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold text-orange-600">State vs. Federal Regulation: </span>
          In the United States, insurance law is primarily regulated at the state level.
        </p>

        {/* Back Button */}
        <button
          onClick={gotoHome}
          className="flex items-center gap-2 mt-4 px-6 py-3 border border-orange-500 text-orange-600 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition"
        >
          <IoReturnUpBack size={20} /> Back to Home
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 w-full">
        <img
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2023/03/pexels-kampus-production-8439685_1-scaled.jpg"
          alt="Insurance"
          className="rounded-2xl shadow-2xl w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Insurance;
