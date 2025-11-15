import { useEffect, useState } from "react";
import Layerscard from "./Layerscard";
import axios from "axios";

const Lawyers = () => {
  const [lawyers, setLawyers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter values
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");

  // Dropdown toggle
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5757/api/v1/user/attorney"
        );
        const array = Array.isArray(res.data?.Attorneys)
          ? res.data.Attorneys
          : [];

        setLawyers(array);
        setFiltered(array);
      } catch (error) {
        console.error("Failed to fetch lawyers:", error);
        setLawyers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLawyers();
  }, []);

  // Unique departments
  const departments = [...new Set(lawyers.map((l) => l.attorneyDepartment))];

  // Apply filters
  // Apply filters
useEffect(() => {
  let data = [...lawyers];

  if (department) {
    data = data.filter((l) => l.attorneyDepartment === department);
  }

  if (gender) {
    data = data.filter(
      (l) => l.gender?.toLowerCase() === gender.toLowerCase()
    );
  }

  setFiltered(data);
}, [department, gender, lawyers]);


  return (
    <div className="min-h-screen bg-orange-50 py-12 px-4 md:px-10">

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-2">
          Our Expert Lawyers
        </h2>
        <p className="text-gray-600 text-lg">Professional and experienced legal team</p>

        
      </div>

      {/* Small Filter Button */}
        <div className="max-w-7xl mx-auto flex justify-end mb-6 relative ">
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-700"
        >
          Filter
        </button>

      
      

        {/* Dropdown menu */}
        {showFilter && (
          <div className="absolute top-12 right-0 bg-white border shadow-lg rounded-lg p-4 w-60 z-10">
            {/* Department */}
            <label className="block text-sm font-medium mb-1">Department</label>
            <select
              className="w-full border px-3 py-2 rounded mb-4"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="">All</option>
              {departments.map((dep) => (
                <option key={dep} value={dep}>
                  {dep}
                </option>
              ))}
            </select>

            {/* Gender */}
            <label className="block text-sm font-medium mb-1">Gender</label>
            <select
              className="w-full border px-3 py-2 rounded"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        )}
      </div>

      {/* Result Grid */}
      {loading ? (
        <p className="text-center text-gray-500">Loading lawyers...</p>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-500">No lawyers found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6 gap-6">
          {filtered.map((lawyer) => (
            <Layerscard
              key={lawyer._id}
              id={lawyer._id}
              src={lawyer.AttorneyAvatar?.url}
              name={`${lawyer.firstName} ${lawyer.lastName}`}
              occupation={lawyer.attorneyDepartment}
              email={lawyer.email}
              phone={lawyer.phone}
              dob={lawyer.dob}
              gender={lawyer.gender}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Lawyers;
