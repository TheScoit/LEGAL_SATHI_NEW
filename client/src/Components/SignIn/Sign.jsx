import React, { useContext, useState } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Context } from '../main';
import { toast } from 'react-toastify';
import axios from 'axios';

function SignIn() {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();
  const signup = () => navigateTo('/signup');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5757/api/v1/user/login",
        { email, password, confirmPassword, role: "Litigant" },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold text-orange-700 text-center mb-4">Legal Sathi</h2>

        <p className="text-center text-gray-600 text-sm mb-4">
          Don't have an account?{" "}
          <Link
            to={"/signup"}
            variant="text"
            onClick={signup}
            className="text-orange-600 hover:text-orange-800 font-semibold p-0"
          >
            Sign Up
          </Link>
        </p>

        <form onSubmit={handleLogin} className="space-y-3">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
            required
          />

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
            required
          />

          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#F97316", color: "#fff" }}
            className="w-full py-2 mt-2 rounded-md text-sm"
          >
            Login
          </Button>
        </form>

        <footer className="mt-4 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Legal Sathi, Inc. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}

export default SignIn;
