import React, { useState, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const TechCard = ({ index, icon, name, showMore, isAdditional }) => {
  return (
    <motion.div
      key={`tech-${name}-${showMore}`}
      variants={fadeIn("right", "spring", isAdditional ? 0.3 + index * 0.1 : index * 0.3, 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="w-32 h-32"
      >
        <motion.div 
          drag
          dragConstraints={{
            left: -50,
            top: -50,
            right: 50,
            bottom: 50
          }}
          whileDrag={{ 
            scale: 1.2, 
            rotate: 5,
            filter: "brightness(1.2)"
          }}
          dragElastic={0.2}
          className="w-full bg-gradient-to-b from-blue-800 via-purple-700 to-red-700 p-[2px] rounded-full shadow-card select-none hover:shadow-xl transition-all duration-300 ease-in-out cursor-grab active:cursor-grabbing will-change-transform hero-animation"
        >
          <div className="bg-tertiary rounded-full p-5 flex justify-center items-center hover:bg-opacity-90 transition-all duration-300 relative overflow-hidden group">
            {/* Floating tech name on hover, above the image */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-600/90 to-blue-600/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
              whileHover={{ opacity: 1 }}
            >
              <span className="text-white text-xs font-bold text-center px-2">
                {name}
              </span>
            </motion.div>
            <motion.img
              src={icon}
              alt={`${name} technology icon`}
              className="w-20 h-20 object-contain relative z-10"
              whileHover={{ 
                rotate: 360,
                transition: { duration: 0.6 }
              }}
            />
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

const Tech = () => {
  const [showMore, setShowMore] = useState(false);
  const techRef = useRef(null);

  const handleToggleShowMore = () => {
    setShowMore((prev) => {
      if (prev) {
        // On "Show Less", scroll to the top of the tech section
        techRef.current.scrollIntoView({ behavior: "smooth" });
      }
      return !prev;
    });
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex gap-3 items-center justify-center mb-4">
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-[#915eff] animate-pulse"></div>
            <div className="w-1 h-20 violet-gradient"></div>
          </div>
          <h2 className={`${styles.sectionHeadText} text-center bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent`}>
            Technologies.
          </h2>
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-[#915eff] animate-pulse"></div>
            <div className="w-1 h-20 violet-gradient"></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-20 justify-center relative"
        ref={techRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Always show the first 12 technologies without re-rendering */}
        {technologies.slice(0, 12).map((technology, index) => (
          <TechCard
            key={`tech-${technology.name}`}
            index={index}
            showMore={false}
            isAdditional={false}
            {...technology}
          />
        ))}
        {/* Show additional technologies with animation when showMore is true */}
        <AnimatePresence>
          {showMore &&
            technologies.slice(12).map((technology, index) => (
              <TechCard
                key={`tech-${technology.name}-${index + 12}`}
                index={index}
                showMore={showMore}
                isAdditional={true}
                {...technology}
              />
            ))}
        </AnimatePresence>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute -top-10 left-10 w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 opacity-30"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute -bottom-10 right-10 w-2 h-2 rounded-full bg-[#915eff] opacity-40"
          animate={{
            y: [0, 10, 0],
            scale: [1, 0.7, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className="absolute top-1/3 -right-5 w-1 h-1 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 opacity-50"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </motion.div>

      {technologies.length > 12 && (
        <motion.div 
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={handleToggleShowMore}
            className="relative overflow-hidden bg-gradient-to-r from-blue-800 via-purple-700 to-red-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(147, 94, 255, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            drag
            dragConstraints={{
              left: -20,
              top: -20,
              right: 20,
              bottom: 20
            }}
            dragElastic={0.1}
            aria-label={showMore ? "Show fewer technologies" : "Show more technologies"}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-purple-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              layoutId="buttonHover"
            />
            <span className="relative z-10 flex items-center gap-2">
              {showMore ? "Show Less" : "Show More"}
              <motion.span
                animate={{ rotate: showMore ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-lg"
              >
                ↓
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      )}

      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-teal-600/10 to-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");