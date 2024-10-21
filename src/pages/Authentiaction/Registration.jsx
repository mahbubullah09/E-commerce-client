import React, { useState } from 'react';
import axios from 'axios';
import person from "../../assets/person.png";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
  });
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);


    try {
      const response = await axios.post('http://localhost:5001/auth/registration', formData); 
     
      toast.success(response.data ? response.data.message: "Successfull"); 

      navigate("/");
    } catch (err) {
      toast.error(err.response ? err.response.data.message : "Something went wrong"); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">

<div className="w-full max-w-sm p-6 bg-slate-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-white text-center">Registration</h2>
    

      <div className="flex justify-center my-6">
        <img  src={person} alt="" />
        </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-full px-4"
            placeholder='Enter your name '
          />
        </div>
        <div className="mb-4">
        
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-full px-4"
            placeholder='Enter your email'
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-full px-4"
            placeholder='Enter your password'
          />
        </div>
    
        <button
          type="submit"
          disabled={loading}
          className="bg-[#FB904A] text-white p-2 rounded-full w-full font-bold  "
        >
          {loading ? 'Signing up...' : 'Sign up'}
        </button>
      </form>

      <div className="flex justify-center text-white my-4">
        <h4>Already have an account? <Link to={'/login'} className="text-[#FB904A] font-bold">Login</Link></h4>
      </div>
    </div>
 </div>
  );
};

export default Registration;
