import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <nav
        style={{
          background: "#f5f5f5",
          padding: "10px",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <main style={{ padding: "20px", textAlign: "center" }}>
        <Outlet /> {/* child pages render here */}
      </main>
    </div>
  );
}

export default AppLayout;
