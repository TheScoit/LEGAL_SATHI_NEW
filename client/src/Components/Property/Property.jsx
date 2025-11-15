import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { IoReturnUpBack } from "react-icons/io5";

const Property = () => {
  const navigateTo = useNavigate();
  const gotoHome = () => {
    navigateTo("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        
        {/* Text Content */}
        <div className="flex-1 space-y-4">
          <p className="text-gray-800 text-lg">
            <span className="font-semibold text-indigo-600">Property law</span> is a branch of civil law that governs the ownership, use, transfer, and protection of real and personal property. It encompasses a wide range of legal principles and rules that define the rights and responsibilities of individuals, businesses, and other entities in relation to property.
          </p>
          <p className="text-gray-800 text-lg">
            <span className="font-semibold text-indigo-600">Types of Property:</span>
            <br />
            <span className="font-semibold">Real Property:</span> Land and anything permanently attached to it.
            <br />
            <span className="font-semibold">Personal Property:</span> Movable assets such as vehicles, furniture, electronics, and intellectual property.
          </p>
          <p className="text-gray-800 text-lg">
            <span className="font-semibold">Ownership Rights:</span>
            Fee Simple Absolute, Leasehold, Easements — defining how property can be used and transferred.
          </p>
          <p className="text-gray-800 text-lg">
            Property law is complex and varies between jurisdictions. It's important to understand your rights and seek legal advice when dealing with property matters.
          </p>
          <p className="text-gray-800 text-lg">
            <span className="font-semibold">Copyrights:</span> Exclusive rights granted to creators to reproduce, distribute, and display original works.
          </p>
          <p className="text-gray-800 text-lg">
            <span className="font-semibold">Patents:</span> Rights granted to inventors for a limited period to make, use, and sell their inventions.
          </p>
          <p className="text-gray-800 text-lg">
            <span className="font-semibold">Boundary Disputes:</span> Conflicts between property owners regarding boundaries.
          </p>
          <p className="text-gray-800 text-lg">
            <span className="font-semibold">Nuisance:</span> Legal actions addressing activities interfering with property enjoyment.
          </p>
          <p className="text-gray-800 text-lg">
            <span className="font-semibold">Remedies:</span> Legal remedies include damages, injunctions, specific performance, and partition actions.
          </p>
        </div>

        {/* Placeholder Image */}
        <div className="flex-1 flex justify-center items-center bg-gray-200 rounded-xl h-96">
          <p className="text-gray-500">
            <div className="relative">
              <img src="data:image/jpeg;base64,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" alt="" />
            </div>
          </p>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-6">
        <Button variant='outlined' onClick={gotoHome} startIcon={<IoReturnUpBack />}>
          Home
        </Button>
      </div>
    </div>
  );
};

export default Property;

