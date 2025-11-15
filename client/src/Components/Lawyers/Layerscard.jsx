import React from "react";
import { Mail, Phone, Calendar, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Layerscard = ({ src, name, occupation, email, phone, dob, gender, id }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-200 overflow-hidden">
      
      {/* Header */}
      <div className="bg-orange-600 h-28 w-full relative">
        <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2">
          <img
            src={src}
            alt={name}
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Body */}
      <div className="pt-14 px-6 pb-6 text-center">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-orange-600 font-medium text-sm mt-1">{occupation}</p>

        <div className="mt-5 space-y-3 text-gray-700 text-sm">
          <div className="flex justify-center gap-2"><Mail size={16} className="text-orange-500"/> {email}</div>
          <div className="flex justify-center gap-2"><Phone size={16} className="text-orange-500"/> {phone}</div>
          <div className="flex justify-center gap-2"><Calendar size={16} className="text-orange-500"/> {dob}</div>
          <div className="flex justify-center gap-2"><User size={16} className="text-orange-500"/> {gender}</div>
        </div>

        <button
          onClick={() => navigate(`/lawyer/${id}`)}
          className="mt-6 w-full py-2 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 shadow-md transition"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Layerscard;
