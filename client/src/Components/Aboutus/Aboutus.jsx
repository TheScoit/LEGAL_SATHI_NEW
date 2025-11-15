import React from 'react';
import { Link } from 'react-router-dom';

const Aboutus = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 min-h-screen py-16 px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-extrabold mb-4 text-orange-800">About Us</h1>
        <p className="text-lg md:text-xl text-orange-700">
          We are a passionate team committed to providing top-notch services with integrity and excellence. Our goal is to ensure our clients have the best experience possible.
        </p>
      </div>

      {/* Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition duration-500">
          <div className="w-32 h-32 rounded-full bg-orange-200 mx-auto mb-6 flex items-center justify-center text-orange-800 font-bold text-xl">
            Image
          </div>
          <h2 className="text-2xl font-semibold text-center mb-2 text-orange-900">Farhan Shaikh</h2>
          <p className="text-center text-orange-700">Founder & CEO</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition duration-500">
          <div className="w-32 h-32 rounded-full bg-orange-200 mx-auto mb-6 flex items-center justify-center text-orange-800 font-bold text-xl">
            Image
          </div>
          <h2 className="text-2xl font-semibold text-center mb-2 text-orange-900">Mohd Saad Shaikh</h2>
          <p className="text-center text-orange-700">Operations Head</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition duration-500">
          <div className="w-32 h-32 rounded-full bg-orange-200 mx-auto mb-6 flex items-center justify-center text-orange-800 font-bold text-xl">
            Image
          </div>
          <h2 className="text-2xl font-semibold text-center mb-2 text-orange-900">Arsalan Shaikh</h2>
          <p className="text-center text-orange-700">Marketing Lead</p>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-4">Our Mission</h2>
          <p className="text-orange-700">
            To deliver excellent services with dedication and professionalism. We aim to create solutions that exceed expectations and build long-term trust.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-orange-800 mb-2">Integrity</h3>
            <p className="text-orange-700">We uphold the highest ethical standards in everything we do.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-orange-800 mb-2">Professionalism</h3>
            <p className="text-orange-700">Delivering services with knowledge, expertise, and dedication.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-orange-800 mb-2">Excellence</h3>
            <p className="text-orange-700">Striving for perfection and exceeding client expectations every time.</p>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-orange-800">Need Our Services?</h2>
        <p className="text-lg mb-6 text-orange-700">Contact us today and experience our dedication and expertise.</p>
        <Link to={'/consulation'} className="bg-orange-800 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-orange-700 transition duration-300">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Aboutus;
