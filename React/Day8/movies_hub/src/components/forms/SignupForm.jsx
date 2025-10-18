import { NavLink } from "react-router-dom";
import { useState } from "react";


export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up with:", name, email, password);
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
    >
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Create an Account
      </h2>


      {/* Name Input */}
      <input
        type="text"
        placeholder="Name"
        className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:ring focus:ring-red-500"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ marginBottom: "12px" }}
      />


      {/* Email Input */}
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:ring focus:ring-red-500"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ marginBottom: "12px" }}
      />


      {/* Password Input */}
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:ring focus:ring-red-500"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ marginBottom: "12px" }}
      />


      {/* Signup Button */}
      <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded">
        Signup
      </button>


      {/* "Already have an account?" NavLink */}
      <div className="mt-4 text-center text-gray-400">
        <span>Already have an account? </span>
        <NavLink to="/login" className="text-red-400 hover:text-red-500">
          Login
        </NavLink>
      </div>
    </form>
  );
}
