import { useEffect, useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Consultation = () => {
  const navigateTo = useNavigate();
  const location = useLocation();
  const state = location.state;

  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Appointment_date, setAppointment_date] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [department, setDepartment] = useState("");
  const [Address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  // Attorneys
  const [attorneys, setAttorneys] = useState([]);
  const [filteredAttorneys, setFilteredAttorneys] = useState([]);
  const [selectedAttorney, setSelectedAttorney] = useState(null);
  const [loading, setLoading] = useState(true);

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

  // Fetch Attorneys
  useEffect(() => {
    const fetchAtt = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5757/api/v1/user/attorney"
        );
        setAttorneys(res.data.Attorneys || []);
      } catch (err) {
        toast.error("Error fetching attorneys");
      } finally {
        setLoading(false);
      }
    };
    fetchAtt();
  }, []);

  // Filter attorneys by department
  useEffect(() => {
    if (!department) return setFilteredAttorneys([]);

    const filtered = attorneys.filter(
      (a) => a.attorneyDepartment?.toLowerCase() === department.toLowerCase()
    );
    setFilteredAttorneys(filtered);
    setSelectedAttorney(null);
  }, [department, attorneys]);

  // Handle Appointment Submit
  const handleAppointment = async (e) => {
    e.preventDefault();

    if (!selectedAttorney) return toast.error("Please select an attorney");

    try {
      const payload = {
        firstName,
        lastName,
        email,
        phone,
        dob,
        gender,
        Appointment_date,
        hasVisited,
        Address,
        department: selectedAttorney.attorneyDepartment,
        attorney_firstName: selectedAttorney.firstName,
        attorney_lastName: selectedAttorney.lastName,
      };

      const { data } = await axios.post(
        "http://localhost:5757/api/v1/appointment/post",
        payload,
        { withCredentials: true }
      );

      toast.success(data.message);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-14 px-6">
      {/* HEADER */}
      <h1 className="text-center text-4xl font-extrabold text-orange-600 tracking-tight">
        Book Your Consultation
      </h1>
      <p className="text-center text-gray-600 mt-2 mb-10">
        Fill your details and choose the right attorney for your case.
      </p>

      {/* FORM CARD */}
      <div className="bg-white p-10 rounded-2xl shadow-xl border border-orange-100">
        {/* FORM */}
        <form onSubmit={handleAppointment} className="space-y-8">
          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FloatingInput
              label="First Name"
              value={firstName}
              onChange={setFirstName}
            />
            <FloatingInput
              label="Last Name"
              value={lastName}
              onChange={setLastName}
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FloatingInput
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
            />
            <FloatingInput
              label="Phone Number"
              value={phone}
              onChange={setPhone}
            />
          </div>

          {/* DOB & Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!dob) e.target.type = "text";
              }}
              placeholder="Select DOB"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
              required
            />

            <SelectInput
              label="Gender"
              value={gender}
              onChange={setGender}
              options={["Male", "Female", "Other"]}
            />
          </div>

          {/* Appointment Date */}
          <input
            type="text"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!Appointment_date) e.target.type = "text";
            }}
            placeholder="Appointment Date"
            value={Appointment_date}
            onChange={(e) => setAppointment_date(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
            required
          />

          {/* Department */}
          <SelectInput
            label="Choose Department"
            value={department}
            onChange={setDepartment}
            options={departmentsArray}
          />

          {/* Attorney */}
          <SelectInput
            label="Choose Attorney"
            value={selectedAttorney?._id || ""}
            onChange={(id) => {
              const att = filteredAttorneys.find((x) => x._id === id);
              setSelectedAttorney(att || null);
            }}
            options={filteredAttorneys.map((a) => ({
              label: `${a.firstName} ${a.lastName}`,
              value: a._id,
            }))}
            disabled={!department}
          />

          {/* Attorney Preview */}
          {selectedAttorney && (
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 flex items-center gap-6 mt-4 shadow-sm">
              <img
                src={
                  selectedAttorney.AttorneyAvatar?.url ||
                  "https://via.placeholder.com/150"
                }
                className="w-24 h-24 rounded-full border-4 border-orange-500 object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-orange-700">
                  {selectedAttorney.firstName} {selectedAttorney.lastName}
                </h3>
                <p className="text-gray-700">
                  {selectedAttorney.attorneyDepartment}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  {selectedAttorney.email}
                </p>
              </div>
            </div>
          )}

          {/* Address */}
          <FloatingTextArea
            label="Message / Additional Details"
            value={Address}
            onChange={setAddress}
          />

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={hasVisited}
              onChange={(e) => setHasVisited(e.target.checked)}
              className="w-4 h-4 accent-orange-600"
            />
            <span className="text-gray-700">Have you visited before?</span>
          </div>

          {/* buttons */}
          <div className="flex gap-4 pt-4 justify-center">
            <button
              type="submit"
              className="p-3 bg-orange-600 text-white rounded-3xl hover:bg-orange-700 transition"
            >
              Book Appointment
            </button>

            <button className="px-5 rounded-lg bg-slate-300  transition"  onClick={() => navigateTo("/")}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const FloatingInput = ({ label, value, onChange, type = "text" }) => (
  <div className="relative">
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="peer w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
      required
    />
    <label
      className="absolute left-4 top-3 text-gray-500 transition-all peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-orange-600
      peer-valid:text-xs peer-valid:-top-2 peer-valid:bg-white peer-valid:px-1"
    >
      {label}
    </label>
  </div>
);

const FloatingTextArea = ({ label, value, onChange }) => (
  <div className="relative">
    <textarea
      rows="4"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="peer w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
      required
    />
    <label
      className="absolute left-4 top-3 text-gray-500 transition-all peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-orange-600
      peer-valid:text-xs peer-valid:-top-2 peer-valid:bg-white peer-valid:px-1"
    >
      {label}
    </label>
  </div>
);

const SelectInput = ({ label, value, onChange, options, disabled }) => (
  <div className="relative">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className="peer w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-orange-400 outline-none disabled:bg-gray-100"
      required
    >
      <option value="">{label}</option>
      {options.map((opt, i) =>
        typeof opt === "string" ? (
          <option key={i} value={opt}>
            {opt}
          </option>
        ) : (
          <option key={i} value={opt.value}>
            {opt.label}
          </option>
        )
      )}
    </select>
  </div>
);

export default Consultation;
