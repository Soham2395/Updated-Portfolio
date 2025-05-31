import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 20
      }
    }
  };

  const menuVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: -20 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200
      }
    })
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-10 transition-all duration-500 ${
        scrolled 
          ? "bg-gradient-to-r from-gray-900/95 via-purple-900/90 to-gray-900/95 backdrop-blur-lg border-b border-purple-500/20 shadow-lg shadow-purple-500/10" 
          : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <motion.img 
              src={logo} 
              alt='logo' 
              className='w-12 h-12 object-contain'
              whileHover={{ 
                rotate: 360,
                transition: { duration: 0.6 }
              }}
            />
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>
              <span className="bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Soham
              </span>
              &nbsp;
              <span className='sm:block hidden text-white'> | Portfolio</span>
            </p>
          </Link>
        </motion.div>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav, index) => (
            <motion.li
              key={nav.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              className={`${
                active === nav.title 
                  ? "text-white bg-gradient-to-r from-purple-600/20 to-blue-600/20 px-4 py-2 rounded-lg border border-purple-500/30" 
                  : "text-secondary hover:text-white"
              } text-[18px] font-medium cursor-pointer transition-all duration-300 relative group`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="relative z-10">
                {nav.title}
              </a>
              {active !== nav.title && (
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId="navHover"
                />
              )}
            </motion.li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <motion.img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: toggle ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          />

          <AnimatePresence>
            {toggle && (
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="p-6 bg-gradient-to-b from-blue-800/90 via-purple-700/90 to-red-700/90 backdrop-blur-lg absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border border-purple-500/30 shadow-xl shadow-purple-500/20"
              >
                <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                  {navLinks.map((nav, index) => (
                    <motion.li
                      key={nav.id}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      whileHover={{ 
                        scale: 1.05,
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                      className={`font-poppins font-medium cursor-pointer text-[16px] px-3 py-1 rounded-lg transition-all duration-300 ${
                        active === nav.title 
                          ? "text-white bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-purple-400/30" 
                          : "text-secondary hover:text-white hover:bg-white/5"
                      }`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {scrolled && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            className="absolute left-10 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#915eff] animate-pulse"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            className="absolute right-10 top-1/2 transform -translate-y-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 animate-pulse"
          />
        </>
      )}
    </motion.nav>
  );
};

export default Navbar;