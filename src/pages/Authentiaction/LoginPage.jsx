import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import axiosInstance from "../../Api/axiosInstance";
import { AuthContext } from "../../contextApi/AuthContex";
import person from "../../assets/person.png";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      const { user, token } = response.data;

      login(user, token);

      navigate("/");
    } catch (err) {
      toast.error(err.response ? err.response.data.msg : "Server error"); 
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm p-6 bg-slate-900 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center  text-white">
          Login
        </h2>
        

        <div className="flex justify-center my-6">
        <img  src={person} alt="" />
        </div>

        
        <form onSubmit={handleLogin}>
          <div className="mb-4 ">
            
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-full"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-full"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-[#FB904A] text-white py-2 hover:bg-[#FB904A] font-bold"
          >
            Login
          </button>
        </form>
        <div className="flex justify-center text-white my-4">
        <h4>Don't have an account? <Link to={'/registration'} className="text-[#FB904A] font-bold">Sign Up</Link></h4>
      </div>
      </div>

 
    </div>
  );
};

export default LoginPage;
