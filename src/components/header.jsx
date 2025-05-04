import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-black text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between py-2 px-8">
        <nav className="flex gap-8">
          <div className="flex items-center">
            <button
              onClick={() => navigate("/")}
              className="text-xl font-semibold hover:text-gray-400 cursor-pointer"
            >
              Home
            </button>

            <button
              onClick={() => navigate("/create")}
              className="text-xl font-semibold hover:text-gray-400 cursor-pointer ml-8"
            >
              Create Card
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;