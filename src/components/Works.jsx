import React, { useState, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github, view } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link,
  showAll,
  isAdditional,
}) => {
  return (
    <motion.div
      key={`project-${name}-${showAll}`}
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
        className="xs:w-[350px] w-full"
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
          className="w-full bg-gradient-to-b from-blue-800 via-purple-700 to-red-700 p-[2px] rounded-2xl shadow-card select-none hover:shadow-xl transition-all duration-300 ease-in-out cursor-grab active:cursor-grabbing will-change-transform hero-animation"
        >
          <div className="bg-tertiary p-5 rounded-2xl w-full h-full hover:bg-opacity-90 transition-all duration-300 relative overflow-hidden">
            <div className='relative w-full'>
              <motion.img
                src={image}
                alt='project_image'
                className='w-full h-40 object-cover rounded-2xl'
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />

              <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                <motion.div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2'
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={github}
                    alt='source code'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </motion.div>
                <motion.div
                  onClick={() => window.open(project_link, "_blank")}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={view}
                    alt='project link'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </motion.div>
              </div>
            </div>

            <div className='mt-5'>
              <motion.h3 
                className='text-white font-bold text-[24px] transition-all duration-300'
                whileHover={{
                  background: "linear-gradient(to right, #14b8a6, #a855f7, #f97316)",
                  backgroundClip: "text",
                  color: "transparent",
                  transition: { duration: 0.3 }
                }}
              >
                {name}
              </motion.h3>
              <p className='mt-2 text-secondary text-[14px] leading-relaxed'>{description}</p>
            </div>

            <div className='mt-4 flex flex-wrap gap-2'>
              {tags.map((tag) => (
                <motion.p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color} px-2 py-1 rounded-md bg-black-200 cursor-pointer`}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  #{tag.name}
                </motion.p>
              ))}
            </div>

            {/* Floating overlay on hover */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl opacity-0 transition-all duration-300 pointer-events-none"
              whileHover={{ opacity: 1 }}
            >
              <motion.div
                className="text-white text-sm font-bold text-center px-4"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex gap-2 items-center">
                  <span>View Project</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [showAll, setShowAll] = useState(false);
  const projectsRef = useRef(null);

  const handleToggleShowAll = () => {
    setShowAll((prev) => {
      if (prev) {
        // On "Show Less", scroll to the top of the projects section
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
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
            Projects.
          </h2>
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-[#915eff] animate-pulse"></div>
            <div className="w-1 h-20 violet-gradient"></div>
          </div>
        </div>
      </motion.div>

      <div className='w-full flex justify-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <motion.div 
        className='mt-20 flex flex-wrap gap-7 justify-center relative' 
        ref={projectsRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Always show the first 3 projects without re-rendering */}
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard
            key={`project-${project.name}`}
            index={index}
            showAll={false}
            isAdditional={false}
            {...project}
          />
        ))}
        {/* Show additional projects with animation when showAll is true */}
        <AnimatePresence>
          {showAll &&
            projects.slice(3).map((project, index) => (
              <ProjectCard
                key={`project-${project.name}-${index + 3}`}
                index={index}
                showAll={showAll}
                isAdditional={true}
                {...project}
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

      {projects.length > 3 && (
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
            aria-label={showAll ? "Show fewer projects" : "Show more projects"}
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

export default SectionWrapper(Works, "");