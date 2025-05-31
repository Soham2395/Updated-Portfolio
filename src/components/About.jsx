import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      drag 
      dragConstraints={{
        left: -100,
        top: -100,
        right: 100,
        bottom: 100
      }}
      whileDrag={{ scale: 1.1, rotate: 5 }}
      dragElastic={0.2}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-gradient-to-b from-blue-800 via-purple-700 to-red-700 p-[2px] rounded-[20px] shadow-card hero-animation will-change-transform'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:bg-opacity-90 transition-all duration-300'
      >
        <motion.img
          src={icon}
          alt='service-icon'
          className='w-16 h-16 object-contain'
          whileHover={{ 
            rotate: 360,
            transition: { duration: 0.6 }
          }}
        />

        <h3 className='text-white text-[20px] font-bold text-center bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex gap-3 items-center mb-4">
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
            <div className="w-1 h-20 violet-gradient"></div>
          </div>
          <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent`}>
            Overview.
          </h2>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 relative'
      >
        <motion.p
          drag
          dragConstraints={{
            left: -50,
            top: -50,
            right: 50,
            bottom: 50
          }}
          whileDrag={{ scale: 1.02 }}
          dragElastic={0.1}
          className='text-secondary text-[17px] max-w-3xl leading-[30px] bg-gradient-to-r from-gray-800/20 to-purple-800/20 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-grab active:cursor-grabbing will-change-transform'
        >
          I'm a passionate web developer skilled in front-end development with expertise in{" "}
          <span className="bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent font-semibold">
            MERN stack
          </span>{" "}
          and also committed to creating innovative and user-friendly digital experiences that exceed expectations. 
          Up-to-date with the latest industry trends and technologies, I am a strong collaborator with excellent 
          communication and problem-solving abilities. You can trust me to provide{" "}
          <span className="bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent font-semibold">
            high-quality solutions
          </span>.
        </motion.p>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className="absolute right-10 top-20 opacity-20">
        <div className="w-3 h-3 rounded-full bg-[#915eff] animate-pulse"></div>
      </div>
      <div className="absolute left-20 bottom-20 opacity-20">
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 animate-pulse"></div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");