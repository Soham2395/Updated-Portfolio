import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, rgba(30, 30, 60, 0.9) 0%, rgba(60, 30, 90, 0.8) 50%, rgba(90, 30, 60, 0.9) 100%)",
        color: "#fff",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(147, 94, 255, 0.3)",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(147, 94, 255, 0.2)",
      }}
      contentArrowStyle={{ 
        borderRight: "7px solid rgba(147, 94, 255, 0.5)" 
      }}
      date={
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 + 0.3 }}
          className="bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-bold text-lg"
        >
          {experience.date}
        </motion.span>
      }
      dateClassName="text-white"
      iconStyle={{ 
        background: `linear-gradient(135deg, ${experience.iconBg} 0%, rgba(147, 94, 255, 0.8) 100%)`,
        border: "3px solid rgba(147, 94, 255, 0.5)",
        boxShadow: "0 0 20px rgba(147, 94, 255, 0.4)"
      }}
      icon={
        <motion.div 
          className='flex justify-center items-center w-full h-full'
          whileHover={{ 
            rotate: 360,
            scale: 1.1,
            transition: { duration: 0.6 }
          }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain drop-shadow-lg'
          />
        </motion.div>
      }
    >
      <motion.div
        drag
        dragConstraints={{
          left: -20,
          top: -20,
          right: 20,
          bottom: 20
        }}
        whileDrag={{ scale: 1.02, rotate: 1 }}
        dragElastic={0.1}
        className="cursor-grab active:cursor-grabbing will-change-transform"
      >
        <motion.h3 
          className='text-white text-[24px] font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {experience.title}
        </motion.h3>
        <motion.p
          className='text-secondary text-[16px] font-semibold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent'
          style={{ margin: 0 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.1 }}
        >
          {experience.company_name}
        </motion.p>
      </motion.div>

      <motion.ul 
        className='mt-5 list-none ml-0 space-y-3'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
      >
        {experience.points.map((point, pointIndex) => (
          <motion.li
            key={`experience-point-${pointIndex}`}
            className='text-white-100 text-[14px] pl-4 tracking-wider relative flex items-start gap-3'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + pointIndex * 0.05 + 0.3 }}
            whileHover={{
              x: 5,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 mt-2 flex-shrink-0"
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.2 }}
            />
            <span className="hover:text-white transition-colors duration-200">
              {point}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex gap-3 items-center justify-center mb-4">
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-[#915eff] animate-pulse"></div>
            <div className="w-1 h-20 violet-gradient"></div>
          </div>
          <h2 className={`${styles.sectionHeadText} text-center bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent`}>
            Work Experience.
          </h2>
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-[#915eff] animate-pulse"></div>
            <div className="w-1 h-20 violet-gradient"></div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className='mt-20 flex flex-col relative'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <VerticalTimeline
          lineColor="rgba(147, 94, 255, 0.3)"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 opacity-30"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-2 h-2 rounded-full bg-[#915eff] opacity-40"
          animate={{
            y: [0, 15, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className="absolute top-1/2 right-5 w-1 h-1 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 opacity-50"
          animate={{
            scale: [1, 1.5, 1],
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
    </>
  );
};

export default SectionWrapper(Experience, "work");