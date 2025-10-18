import { NavLink } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="w-full bg-gray-950 text-gray-400 text-center py-4">
      <p>&copy; 2025 MovieHub. All Rights Reserved.</p>
      <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6 mt-2">
        <NavLink
          to="/about"
          className="hover:text-white"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="hover:text-white"
        >
          Contact
        </NavLink>
        <NavLink
          to="/privacy-policy"
          className="hover:text-white"
        >
          Privacy Policy
        </NavLink>
      </div>
    </footer>
  );
}
