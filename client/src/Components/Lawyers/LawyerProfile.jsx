import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  Briefcase,
  Mail,
  Phone,
  Calendar,
  User,
  ArrowLeft,
} from "lucide-react";

const LawyerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lawyer, setLawyer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLawyer = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5757/api/v1/user/attorney/${id}`
        );
        setLawyer(res.data.attorney);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchLawyer();
  }, [id]);

  if (loading)
    return (
      <p className="text-center mt-20 text-gray-500 text-lg">
        Loading portfolio...
      </p>
    );
  if (!lawyer)
    return (
      <p className="text-center mt-20 text-red-500 text-lg">Lawyer not found</p>
    );

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-orange-400 h-64 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative flex flex-col items-center text-center text-white z-10">
          <img
            src={
              lawyer.AttorneyAvatar?.url ||
              "https://via.placeholder.com/200x200.png?text=No+Image"
            }
            alt={lawyer.firstName}
            className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg mb-4"
          />
          <h1 className="text-3xl font-bold">
            {lawyer.firstName} {lawyer.lastName}
          </h1>
          <p className="text-lg">{lawyer.attorneyDepartment || "Attorney"}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto bg-white shadow-xl mt-10 rounded-2xl p-10 relative z-20">
        {/* About Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed">
            {lawyer.bio ||
              `Adv. ${lawyer.firstName} ${lawyer.lastName} is a dedicated and experienced lawyer specializing in ${lawyer.attorneyDepartment}. 
              With a proven track record of delivering justice, they have built trust with numerous clients through professionalism, integrity, and deep legal knowledge.`}
          </p>
        </section>

        {/* Details Section */}
        <section className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="flex items-center gap-3">
            <Mail className="text-orange-500" />
            <p>
              <span className="font-semibold">Email:</span> {lawyer.email}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-orange-500" />
            <p>
              <span className="font-semibold">Phone:</span> {lawyer.phone}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="text-orange-500" />
            <p>
              <span className="font-semibold">DOB:</span>{" "}
              {new Date(lawyer.dob).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <User className="text-orange-500" />
            <p>
              <span className="font-semibold">Gender:</span> {lawyer.gender}
            </p>
          </div>
        </section>

        {/* Experience / Education */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            Experience & Education
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              • 10+ years of experience in handling civil and criminal cases.
            </li>
            <li>• Former legal advisor at “Supreme Legal Associates”.</li>
            <li>• Graduated from National Law University, Delhi.</li>
          </ul>
        </section>

        {/* Practice Areas */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            Practice Areas
          </h2>
          <div className="flex flex-wrap gap-3">
            {lawyer.attorneyDepartment ? (
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium shadow-sm">
                {lawyer.attorneyDepartment}
              </span>
            ) : (
              <>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium shadow-sm">
                  Civil Law
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium shadow-sm">
                  Corporate Law
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium shadow-sm">
                  Family Law
                </span>
              </>
            )}
          </div>
        </section>

        {/* Contact / CTA */}
        <div className="flex justify-center mt-8">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-orange-600 transition-all shadow-md">
            <Link
              to={"/consulation"}
              state={{
                attorneyId: lawyer._id,
                lawyerFirstName: lawyer.firstName,
                lawyerLastName: lawyer.lastName,
                department: lawyer.attorneyDepartment,
              }}
            >
              Book a Consultation
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LawyerProfile;
