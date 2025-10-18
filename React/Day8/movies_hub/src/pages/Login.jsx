import { NavLink } from "react-router-dom";
import { useState } from "react";




export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };




  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-10 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Login</h2>




        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 mb-5 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{marginBottom:'12px'}}
        />




        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-5 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{marginBottom:'12px'}}
        />




        {/* Submit Button */}
        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition duration-300">
          Login
        </button>




        {/* "Already registered?" NavLink */}
        <div className="mt-4 text-center text-gray-400">
          <span>Do not have an account? </span>
          <NavLink to="/signup" className="text-red-400 hover:text-red-500">
            Sign up
          </NavLink>
        </div>




        {/* "Forgot Password?" NavLink */}
        <div className="mt-4 text-center text-gray-400">
          <NavLink to="/forgot-password" className="text-red-400 hover:text-red-500">
            Forgot Password?
          </NavLink>
        </div>
      </form>
    </div>
  );
}
