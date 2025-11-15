import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const Consultation = () => {
  const location = useLocation();
  const state = location.state;
  const navigateTo = useNavigate();
  const gotoHome = () => navigateTo("/");

  // Form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Appointment_date, setAppointment_date] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [department, setDepartment] = useState("");
  const [attorney_firstName, setAttorney_firstName] = useState("");
  const [attorney_lastName, setAttorney_lastName] = useState("");
  const [Address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  // Attorneys
  const [attorneys, setAttorneys] = useState([]);
  const [filteredAttorneys, setFilteredAttorneys] = useState([]);
  const [selectedAttorney, setSelectedAttorney] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const departmentsArray = [
    "Criminal Lawyer",
    "Civil Lawyer",
    "Family Lawyer",
    "Employment Lawyer",
    "Contract Lawyer",
    "Corporate Lawyer",
    "Immigration Lawyer",
    "Personal injury Lawyer",
    "Intellectual property Lawyer",
    "Tax Lawyer",
    "Bankruptcy Lawyer",
    "Constitutional Lawyer",
    "DUI Lawyer",
    "Disability Lawyer",
    "Sports Lawyer",
    "International Lawyer",
    "Education Lawyer",
  ];

  // Fetch all attorneys
  useEffect(() => {
    const fetchAttorneys = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5757/api/v1/user/attorney"
        );

        // Fix API response mapping
        const data = Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data.Attorneys)
          ? res.data.Attorneys
          : [];

        setAttorneys(data);
        setError("");
      } catch (err) {
        console.error("Failed to fetch attorneys:", err);
        setError("Unable to load attorneys. Please check your backend.");
      } finally {
        setLoading(false);
      }
    };
    fetchAttorneys();
  }, []);

  // Filter attorneys by department
  useEffect(() => {
    if (!department) {
      setFilteredAttorneys([]);
      setSelectedAttorney(null);
      return;
    }
    const filtered = attorneys.filter(
      (a) => a?.attorneyDepartment?.toLowerCase() === department.toLowerCase()
    );
    setFilteredAttorneys(filtered);
    setSelectedAttorney(null);
  }, [department, attorneys]);

  useEffect(() => {
    if (state) {
      setDepartment(state.department || "");
      setAttorney_firstName(state.lawyerFirstName || "");
      setAttorney_lastName(state.lawyerLastName || "");
      setSelectedAttorney({
        _id: state.attorneyId,
        firstName: state.lawyerFirstName,
        lastName: state.lawyerLastName,
        attorneyDepartment: state.department,
        AttorneyAvatar: state.AttorneyAvatar || null,
        email: state.email || "",
        phone: state.phone || "",
      });
    }
  }, [state]);

  useEffect(() => {
    if (state && attorneys.length > 0) {
      // Find the attorney from the fetched list
      const attorney = attorneys.find((a) => a._id === state.attorneyId);
      if (attorney) {
        setDepartment(attorney.attorneyDepartment);
        setSelectedAttorney(attorney);
        setAttorney_firstName(attorney.firstName);
        setAttorney_lastName(attorney.lastName);
      }
    }
  }, [state, attorneys]);

  const handleAttorneyChange = (id) => {
    const attorney = filteredAttorneys.find((a) => a._id === id);
    setSelectedAttorney(attorney);
    if (attorney) {
      setAttorney_firstName(attorney.firstName);
      setAttorney_lastName(attorney.lastName);
    }
  };

  const handleAppointment = async (e) => {
    e.preventDefault();

    if (!selectedAttorney) {
      toast.error("Please select an attorney.");
      return;
    }

    try {
      const payload = {
        firstName,
        lastName,
        email,
        phone,
        dob,
        gender,
        Appointment_date,
        department: selectedAttorney.attorneyDepartment,
        attorney_firstName: selectedAttorney.firstName,
        attorney_lastName: selectedAttorney.lastName,
        hasVisited,
        Address,
      };

      console.log({
        firstName,
        lastName,
        email,
        phone,
        dob,
        gender,
        Appointment_date,
        department: selectedAttorney.attorneyDepartment,
        attorney_firstName,
        attorney_lastName,
        Address,
      });

      const { data } = await axios.post(
        "http://localhost:5757/api/v1/appointment/post",
        payload,
        {
          withCredentials: true,
        }
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-600">Loading attorneys...</p>
    );
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-2xl p-10 rounded-2xl mt-10">
      <h1 className="text-3xl font-bold text-orange-600 text-center mb-10">
        Book a Legal Consultation
      </h1>

      <form onSubmit={handleAppointment} className="space-y-6">
        {/* Name */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        {/* Email & Phone */}
        <div className="flex gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        {/* DOB & Gender */}
        <div className="flex gap-4">
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
            required
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Appointment Date */}
        <input
          type="date"
          value={Appointment_date}
          onChange={(e) => setAppointment_date(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
          required
        />

        {/* Department */}
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
          required
        >
          <option value="">Select Department</option>
          {departmentsArray.map((dep, idx) => (
            <option key={idx} value={dep}>
              {dep}
            </option>
          ))}
        </select>

        {/* Attorney */}
        <select
          value={selectedAttorney?._id || ""}
          onChange={(e) => handleAttorneyChange(e.target.value)}
          disabled={!department || filteredAttorneys.length === 0}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 disabled:bg-gray-100"
          required
        >
          <option value="">Select Attorney</option>
          {filteredAttorneys.map((a) => (
            <option key={a._id} value={a._id}>
              {a.firstName} {a.lastName}
            </option>
          ))}
        </select>

        {/* Selected Attorney Preview */}
        {selectedAttorney && (
          <div className="bg-orange-50 border border-orange-200 rounded-xl shadow-lg p-6 flex gap-6 mt-6">
            <img
              src={
                selectedAttorney.AttorneyAvatar?.url ||
                "https://via.placeholder.com/150"
              }
              alt={selectedAttorney.firstName}
              className="w-32 h-32 rounded-full border-4 border-orange-500 object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-orange-700">
                {selectedAttorney.firstName} {selectedAttorney.lastName}
              </h2>
              <p>
                <strong>Department:</strong>{" "}
                {selectedAttorney.attorneyDepartment}
              </p>
              <p>
                <strong>Email:</strong> {selectedAttorney.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedAttorney.phone}
              </p>
            </div>
          </div>
        )}

        {/* Address */}
        <textarea
          rows="4"
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Message"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
          required
        />

        {/* Checkbox */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={hasVisited}
            onChange={(e) => setHasVisited(e.target.checked)}
            className="h-4 w-4 accent-orange-500"
          />
          <span>Have you visited before?</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#F97316" }}
          >
            Get Appointment
          </Button>
          <Button type="button" variant="outlined" onClick={gotoHome}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Consultation;
