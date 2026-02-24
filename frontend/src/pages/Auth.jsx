import React, { useState } from "react";
import { toast } from "react-toastify";
import axiosInstnace from "../api/axios.api";
import { Link, useNavigate } from "react-router-dom";
import { UseLoader } from "../provider/LoaderProvider";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { startLoading, stopLoading } = UseLoader();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      startLoading();
      try {
        const { data } = await axiosInstnace.post("/auth/login", {
          email,
          password,
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
        localStorage.setItem("accessToken", data.accessToken);
        toast.success("Successfully");
        navigate("/");
      } catch (error) {
        toast.error(error.message || "Email or Password is incorrect");
        localStorage.clear();
      } finally {
        stopLoading();
      }
    } else {
      try {
        startLoading();
        const { data } = await axiosInstnace.post("/auth/register", {
          username,
          email,
          password,
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
        localStorage.setItem("accessToken", data.accessToken);
        toast.success("Successfully");
        navigate("/");
      } catch (error) {
        toast.error(error.message || "Email or Password is incorrect");
        localStorage.clear();
      } finally {
        stopLoading();
      }
    }
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center animate-zoom"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="flex justify-center items-center h-full">
        <div className="bg-gray-950 text-white w-full max-w-md shadow-lg p-8 rounded-md animate-fadeIn">
          <h1 className="text-3xl font-bold mb-6">
            {isLogin ? "Sign In" : "Sign Up"}
          </h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                placeholder="Username"
                className="p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-600 bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-600 bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-red-600 py-3 rounded font-semibold hover:bg-red-700 transition"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <label className="flex items-center gap-1">
                <input type="checkbox" className="w-4 h-4" /> Remember me
              </label>
              <p className="hover:underline cursor-pointer">Need help?</p>
            </div>
          </form>

          <div className="flex items-center justify-between">
            <p className="text-gray-400 text-sm mt-6">
              New to Netflix?{" "}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="text-white hover:underline cursor-pointer"
              >
                {isLogin ? "Sign Up Now" : "Sign In Now"}
              </span>
            </p>
            <Link to={"/forgot-password"} className="cursor-pointer hover:underline hover:text-red-500 text-xs">Forgot Password?</Link>
          </div>
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

export default Auth;
