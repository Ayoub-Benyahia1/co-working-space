import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const container = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      delayChildren: 1.3,
      staggerChildren: 0.2,
      ease: "easeInOut",
      type: "spring",
    },
  },
};
const item = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      variants={container}
      initial="hidden"
      animate="visible"
      className="h-[10dvh] flex justify-between items-center px-6 md:px-10 lg:px-32"
    >
      <motion.h1 variants={item} className="text-xl font-bold">
        Worky
      </motion.h1>
      {/* Icône du menu pour les petits écrans */}
      <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className={`lg:flex gap-6 py-10 font-semibold transition-all duration-300 ${
          isOpen ? "flex" : "hidden"
        } flex-col lg:flex-row absolute lg:static top-[8dvh] left-0 w-full lg:w-auto bg-white lg:bg-transparent items-center`}
      >
        <motion.li variants={item} className="cursor-pointer">
          About us
        </motion.li>
        <motion.li variants={item} className="cursor-pointer">
          Features
        </motion.li>
        <motion.li variants={item} className="cursor-pointer">
          Membership
        </motion.li>

        <motion.li variants={item} className="cursor-pointer">
          Location
        </motion.li>
        <motion.button
          variants={item}
          className="w-[40dvw] md:w-[25dvw] lg:w-[10dvw] h-[5dvh] bg-black text-white"
        >
          Book Now
        </motion.button>
      </motion.ul>
    </motion.nav>
  );
}

export default Navbar;
