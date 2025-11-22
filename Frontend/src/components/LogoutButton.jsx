import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    navigate("/login"); // redirect to login page
  };

  return (
    <button
      onClick={handleLogout}
      className="backdrop-blur-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white  px-6 py-3 rounded-full font-semibold shadow-xl border border-white/40"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
