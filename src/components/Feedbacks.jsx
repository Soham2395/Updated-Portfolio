import React, { useState, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  showAll,
  isAdditional,
}) => (
  <motion.div
    key={`feedback-${name}-${showAll}`}
    variants={fadeIn("right", "spring", isAdditional ? 0.3 + index * 0.1 : index * 0.3, 0.75)}
    initial="hidden"
    animate="show"
    exit="hidden"
    whileHover={{ 
      scale: 1.05,
      transition: { duration: 0.2 }
    }}
  >
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[320px] w-full"
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
          scale: 1.1, 
          rotate: 2,
          filter: "brightness(1.1)"
        }}
        dragElastic={0.2}
        className="w-full bg-gradient-to-b from-blue-800 via-purple-700 to-red-700 p-[2px] rounded-3xl shadow-card select-none hover:shadow-xl transition-all duration-300 ease-in-out cursor-grab active:cursor-grabbing will-change-transform hero-animation"
      >
        <div className="bg-tertiary p-10 rounded-3xl w-full h-full hover:bg-opacity-90 transition-all duration-300 relative overflow-hidden">
          <motion.p 
            className='text-white font-black text-[48px] leading-none'
            animate={{ 
              textShadow: [
                "0 0 10px rgba(147, 94, 255, 0.3)",
                "0 0 20px rgba(147, 94, 255, 0.5)",
                "0 0 10px rgba(147, 94, 255, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            "
          </motion.p>

          <div className='mt-1'>
            <p className='text-white tracking-wider text-[18px] leading-relaxed'>
              {testimonial}
            </p>

            <div className='mt-7 flex justify-between items-center gap-1'>
              <div className='flex-1 flex flex-col'>
                <motion.p 
                  className='text-white font-medium text-[16px] transition-all duration-300'
                  whileHover={{
                    background: "linear-gradient(to right, #14b8a6, #a855f7, #f97316)",
                    backgroundClip: "text",
                    color: "transparent",
                    transition: { duration: 0.3 }
                  }}
                >
                  <span className='blue-text-gradient'>@</span> {name}
                </motion.p>
                <p className='mt-1 text-secondary text-[12px]'>
                  {designation} of {company}
                </p>
              </div>

              <motion.img
                src={image}
                alt={`feedback_by-${name}`}
                className='w-10 h-10 rounded-full object-cover'
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.9 }}
              />
            </div>
          </div>

          {/* Floating overlay on hover */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl opacity-0 transition-all duration-300 pointer-events-none"
            whileHover={{ opacity: 1 }}
          >
            <motion.div
              className="text-white text-sm font-bold text-center px-4"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col items-center gap-1">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-2xl"
                >
                  ⭐
                </motion.div>
                <span>Trusted Feedback</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </Tilt>
  </motion.div>
);

const Feedbacks = () => {
  const [showAll, setShowAll] = useState(false);
  const feedbacksRef = useRef(null);

  const handleToggleShowAll = () => {
    setShowAll((prev) => {
      if (prev) {
        // On "Show Less", scroll to the top of the feedbacks section
        feedbacksRef.current.scrollIntoView({ behavior: "smooth" });
      }
      return !prev;
    });
  };

  const initialCount = 3; // Show first 3 testimonials initially

  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex gap-3 items-center justify-center mb-4">
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-[#915eff] animate-pulse"></div>
            <div className="w-1 h-20 violet-gradient"></div>
          </div>
          <h2 className={`${styles.sectionHeadText} text-center bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent`}>
            Testimonials.
          </h2>
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-[#915eff] animate-pulse"></div>
            <div className="w-1 h-20 violet-gradient"></div>
          </div>
        </div>
      </motion.div>

      <div className='w-full flex justify-center mb-10'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl leading-[30px] text-center'
        >
          What others say about my work and professional approach. These testimonials 
          reflect the quality of collaboration and the impact of delivered solutions.
        </motion.p>
      </div>

      <motion.div 
        className="flex flex-wrap gap-7 justify-center relative"
        ref={feedbacksRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Always show the first testimonials without re-rendering */}
        {testimonials.slice(0, initialCount).map((testimonial, index) => (
          <FeedbackCard
            key={`testimonial-${testimonial.name}`}
            index={index}
            showAll={false}
            isAdditional={false}
            {...testimonial}
          />
        ))}
        {/* Show additional testimonials with animation when showAll is true */}
        <AnimatePresence>
          {showAll &&
            testimonials.slice(initialCount).map((testimonial, index) => (
              <FeedbackCard
                key={`testimonial-${testimonial.name}-${index + initialCount}`}
                index={index}
                showAll={showAll}
                isAdditional={true}
                {...testimonial}
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

      {testimonials.length > initialCount && (
        <motion.div 
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={handleToggleShowAll}
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
            aria-label={showAll ? "Show fewer testimonials" : "Show more testimonials"}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-purple-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              layoutId="buttonHover"
            />
            <span className="relative z-10 flex items-center gap-2">
              {showAll ? "Show Less" : "Show More"}
              <motion.span
                animate={{ rotate: showAll ? 180 : 0 }}
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

export default SectionWrapper(Feedbacks, "");