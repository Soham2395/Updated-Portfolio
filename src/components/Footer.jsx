import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo } from "../assets";

import { BsGithub } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-primary relative"
    >
      {/* Gradient Border Top */}
      <div className="w-full h-[2px] bg-gradient-to-r from-blue-800 via-purple-700 to-red-700"></div>
      
      <div className={`${styles.paddingX} max-w-7xl mx-auto py-12`}>
        {/* Main Content */}
        <div className="flex flex-col items-center text-center gap-8 mb-12">
          
          {/* Logo & Name */}
          <motion.div 
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-b from-blue-800 via-purple-700 to-red-700 flex items-center justify-center shadow-lg">
              <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
            </div>
            <h3 className="text-white font-bold text-2xl">
              <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Soham Chakraborty
              </span>
            </h3>
            <p className="text-secondary max-w-2xl text-lg">
              Crafting digital experiences with passion and precision. Let's build something amazing together.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 text-[28px]"
          >
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/soham-chakraborty-108450255/"
              className="group"
            >
              <motion.div
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-full bg-tertiary hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
              >
                <BsLinkedin className="text-white" />
              </motion.div>
            </Link>

            <Link target="_blank" to="https://github.com/Soham2395" className="group">
              <motion.div
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-full bg-tertiary hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-lg"
              >
                <BsGithub className="text-white" />
              </motion.div>
            </Link>

            <Link target="_blank" to="https://discordapp.com/users/1077281126525186109" className="group">
              <motion.div
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-full bg-tertiary hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
              >
                <BsDiscord className="text-white" />
              </motion.div>
            </Link>

            <Link
              target="_blank"
              to="https://www.instagram.com/techno_phile18/"
              className="group"
            >
              <motion.div
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-full bg-tertiary hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-600 transition-all duration-300 shadow-lg"
              >
                <BsInstagram className="text-white" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Contact & Stats Row */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 w-full"
          >
            {/* Email */}
            <div className="flex items-center gap-3 text-secondary hover:text-white transition-colors duration-300 cursor-pointer group">
              <BsEnvelope className="text-[#915eff] text-xl group-hover:scale-110 transition-transform duration-300" />
              <span className="text-base">sohamchakraborty18.edu@gmail.com</span>
            </div>
            
            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-tertiary"></div>
            
            {/* Portfolio Visits - Now visible on all screen sizes */}
            <div className="flex flex-col items-center gap-2 px-6 py-4 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-secondary text-base">Portfolio Visits</span>
                <div className="block">
                  <a href="https://www.hitwebcounter.com" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://hitwebcounter.com/counter/counter.php?page=12966378&style=0001&nbdigits=5&type=page&initCount=0"
                      title="Counter Widget"
                      alt="Visit counter For Websites"
                      className="border-0"
                    />
                  </a>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>

        {/* Bottom Section - Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-tertiary flex justify-center"
        >
          <div className="flex flex-col items-center gap-4">
            <p className="text-secondary text-sm text-center">
              © 2025 Soham Chakraborty. All rights reserved.
            </p>
          </div>
        </motion.div>
        </div>
      <div className="absolute top-0 left-1/4 w-1 h-20 bg-gradient-to-b from-[#915eff] to-transparent opacity-30"></div>
      <div className="absolute top-0 right-1/3 w-1 h-16 bg-gradient-to-b from-purple-500 to-transparent opacity-20"></div>
    </motion.footer>
  );
};

export default Footer;