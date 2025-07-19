import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowBigRight } from "lucide-react";
import {useClerk, UserButton, useUser} from '@clerk/clerk-react'

const Navbar = () => {

  const navigate = useNavigate();
  const {user} = useUser();
  const {openSignIn} = useClerk();


  return (
    <header className="z-20 w-full ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-10 lg:px-20 py-3">
        {/* Logo */}
        <img
          src={assets.logo}
          alt="logo"
          className="w-28 sm:w-36 transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {
          user ? <UserButton/> 
          :
          (
            <button
          onClick={openSignIn}
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white text-sm font-medium px-6 sm:px-8 py-2.5 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          Let’s do it
          <ArrowBigRight className="w-4 h-4" />
        </button>
            
          )
        }

        {/* CTA Button */}
        
      </div>
    </header>
  );
};

export default Navbar;
