import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
    const getNavLinkStyle = ({isActive}) => {
        return{
            color: isActive ? "orange":"white",
        }
    }
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-950 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <NavLink to="/" className="text-3xl font-bold text-red-500">
          🎬 MovieHub
        </NavLink>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            className={({isActive})=>isActive?`hover:text-red-400 active`:`hover:text-red-400`}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({isActive})=>isActive?`hover:text-red-400 active`:`hover:text-red-400`}
          >
            Movies
          </NavLink>
          <NavLink
            to="/about"
            className={({isActive})=>isActive?`hover:text-red-400 active`:`hover:text-red-400`}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({isActive})=>isActive?`hover:text-red-400 active`:`hover:text-red-400`}
          >
            Contact
          </NavLink>


          <div className="flex space-x-4">
            <NavLink
              to="/login"
              className="px-5 py-2 text-white border border-red-500 rounded-full transition hover:bg-red-500 hover:text-white"


            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="px-5 py-2 text-white border border-red-500 rounded-full transition hover:bg-red-500 hover:text-white"


            >
              Signup
            </NavLink>
          </div>
        </nav>


        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>


      {/* Mobile Navigation */}
      <nav className={`absolute top-16 left-0 w-full bg-gray-950 transition-all ${menuOpen ? "block" : "hidden"} md:hidden`}>
        <ul className="flex flex-col items-center space-y-4 py-4">
          <NavLink
            to="/"
            className={({isActive})=>isActive?`hover:text-red-400 active`:`hover:text-red-400`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            // className={({isActive})=>isActive?`hover:text-red-400 active`:`hover:text-red-400`}
            style={({isActive})=>{
                return{
                    color: isActive ? "yellow":"white",
                }
            }}
            onClick={() => setMenuOpen(false)}
          >
            Movies
          </NavLink>
          <NavLink
            to="/about"
            // className={({isActive})=>isActive?`hover:text-red-400 active`:`hover:text-red-400`}
            style={getNavLinkStyle}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({isActive})=>isActive?`hover:text-red-400 active`:`hover:text-red-400`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>


          <NavLink
            to="/login"
            className="w-3/4 text-center px-5 py-2 text-white border border-red-500 rounded-full transition hover:bg-red-500 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="w-3/4 text-center px-5 py-2 text-white border border-red-500 rounded-full transition hover:bg-red-500 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Signup
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
