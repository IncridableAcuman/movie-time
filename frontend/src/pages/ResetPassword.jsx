// src/components/ResetPassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstnace from '../api/axios.api';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.info('Passwords do not match!');
      return;
    }
    try {
      const {data} = await axiosInstnace.put("/auth/reset-password",{password})
      toast.success(data || "Successfully updated");
      navigate("/auth")
    } catch (error) {
      toast.error(error.message || 'Password is incorrect')
    }
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center animate-zoom"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="flex justify-center items-center h-full">
        <div className="bg-black/75 text-white w-full max-w-md p-8 rounded-md animate-fadeIn">
          <h1 className="text-3xl font-bold mb-6">Reset Password</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="New Password"
              className="p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-red-600 py-3 rounded font-semibold hover:bg-red-700 transition"
            >
              Reset Password
            </button>
          </form>

          <p className="text-gray-400 text-sm mt-6">
            Remembered your password?{' '}
            <span onClick={()=>navigate("/auth")} className="text-white hover:underline cursor-pointer">
              Sign In
            </span>
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.05); }
          }
          .animate-zoom { animation: zoom 20s ease-in-out infinite alternate; }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 1s ease forwards; }
        `}
      </style>
    </div>
  );
};

export default ResetPassword;