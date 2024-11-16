import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const handleNameClick = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500); // Reset shake after animation
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  const shakeVariants = {
    shake: {
      x: [0, -5, 5, -5, 5, 0],
      transition: { duration: 0.5 },
    },
  };

  const pageTransitionVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div
        className="max-w-[1300px] mx-auto flex justify-between text-gray-200
        text-xl items-center px-12 h-20"
      >
        <motion.a
          href="#"
          onClick={handleNameClick}
          className="text-gray-200 text-2xl font-bold"
          animate={isShaking ? "shake" : ""}
          variants={shakeVariants}
        >
          YOHITHA S
        </motion.a>

        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="skills" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="portfolio" smooth={true} offset={50} duration={500}>
              Portfolio
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </motion.li>
        </ul>

        <motion.div
          onClick={toggleNav}
          className="md:hidden z-50 text-gray-200"
          whileTap="shake"
          variants={shakeVariants}
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </motion.div>

        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40"
        >
          <ul className="font-semibold text-4xl space-y-8 mt-24 text-center">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                to="skills"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                to="portfolio"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                Portfolio
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                to="contact"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      </div>

      {/* Page Transition animation wrapper */}
      <motion.div
        variants={pageTransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Content of your sections goes here */}
      </motion.div>
    </div>
  );
};

export default Navbar;
