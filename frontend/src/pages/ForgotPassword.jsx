// src/components/ResetPassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bu yerda backendga reset link yuborish logicini qo'shish mumkin
    console.log('Reset link sent to:', email);
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center animate-zoom"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="flex justify-center items-center h-full">
        <div className="bg-black/75 text-white w-full max-w-md p-8 rounded-md animate-fadeIn">
          <h1 className="text-3xl font-bold mb-6">Forgot Password</h1>
          <p className="text-gray-400 mb-6">
            Enter your email address and we will send you a link to reset your password.
          </p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-red-600 py-3 rounded font-semibold hover:bg-red-700 transition"
            >
              Send Reset Link
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

      {/* Tailwind animatsiyalar */}
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

export default ForgotPassword;