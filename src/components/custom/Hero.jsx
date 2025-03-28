import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-[#ff9a8b] via-[#ff6a88] to-[#ff99ac] min-h-screen">
      {/* Airplane Animation */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/194/194535.png" 
        alt="Flying Airplane"
        className="absolute top-10 left-0 w-20 opacity-80"
        initial={{ x: -100, y: -20, opacity: 0 }}
        animate={{ x: [0, 300, 600], y: [-20, 0, 20], opacity: 1 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      <h1 className="text-5xl font-extrabold leading-tight text-white drop-shadow-lg">
        <span className="text-[#ffef96]">Discover Your Next Adventure with AI:</span> <br />
        Personalized Itineraries at Your Fingertips
      </h1>

      <p className="text-lg text-gray-100 mt-4 max-w-2xl">
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
      </p>

      {/* CTA Button */}
      <motion.div whileHover={{ scale: 1.1 }} className="mt-6">
        <Link to={"/create-trip"}>
          <Button className="bg-[#ffef96] text-black px-6 py-3 rounded-full shadow-lg hover:bg-[#ffe66d] transition-all duration-300">
          Plan Your Trip ✈️
          </Button>
        </Link>
      </motion.div>

      {/* Animated Location Pin */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
        alt="Location Pin"
        className="w-16 mt-8"
        initial={{ y: -10 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Clouds */}
      <motion.div
        className="absolute top-20 left-10 w-28 h-16 bg-white rounded-full opacity-50"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 200, opacity: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-36 h-20 bg-white rounded-full opacity-50"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: -200, opacity: 1 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
};

export default Hero;
