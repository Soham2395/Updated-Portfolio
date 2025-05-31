import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tilt } from "react-tilt";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant, fadeIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const showNotification = (type, title, message) => {
    setNotification({ type, title, message });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_f7wp4at',
        'template_p92f6cp',
        {
          from_name: form.name,
          from_email: form.email,
          to_email: form.email,
          message: form.message,
        },
        'eb5uK_BLR_sSmH_fR'
      )
      .then(
        () => {
          setLoading(false);
          showNotification(
            'success',
            'Message Sent Successfully! 🚀',
            'Thank you for reaching out! I will get back to you as soon as possible.'
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showNotification(
            'error',
            'Oops! Something went wrong 😅',
            'There was an issue sending your message. Please try again or contact me directly.'
          );
        }
      );
  };

  return (
    <>
      {/* Custom Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.8 }}
            className="fixed top-8 left-1/2 transform -translate-x-1/2 z-[9999] max-w-md w-full mx-4"
          >
            <motion.div
              className={`relative overflow-hidden rounded-2xl shadow-2xl backdrop-blur-lg border ${
                notification.type === 'success' 
                  ? 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30' 
                  : 'bg-gradient-to-r from-red-500/10 to-pink-500/10 border-red-500/30'
              }`}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 ${
                notification.type === 'success' 
                  ? 'bg-gradient-to-br from-green-400/5 to-emerald-600/5' 
                  : 'bg-gradient-to-br from-red-400/5 to-pink-600/5'
              }`} />
              
              <div className="relative p-6">
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      notification.type === 'success' 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                        : 'bg-gradient-to-r from-red-500 to-pink-500'
                    }`}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white text-lg font-bold">
                      {notification.type === 'success' ? '✓' : '✗'}
                    </span>
                  </motion.div>
                  
                  <div className="flex-1 min-w-0">
                    <motion.h3 
                      className="text-white font-bold text-lg mb-1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {notification.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-300 text-sm leading-relaxed"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {notification.message}
                    </motion.p>
                  </div>
                  
                  <motion.button
                    onClick={() => setNotification(null)}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ×
                  </motion.button>
                </div>
              </div>
              
              {/* Progress bar */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 ${
                  notification.type === 'success' 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                    : 'bg-gradient-to-r from-red-500 to-pink-500'
                }`}
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 5, ease: 'linear' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Header Section */}
      <motion.div variants={textVariant()}>
        <div className="flex gap-3 items-center justify-center mb-4">
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-[#915eff] animate-pulse"></div>
            <div className="w-1 h-20 violet-gradient"></div>
          </div>
          <h2 className={`${styles.sectionHeadText} text-center bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent`}>
            Contact.
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
          Get in touch or shoot me an email directly at{" "}
          <span className="bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-semibold">
            sohamchakraborty18.edu@gmail.com
          </span>
        </motion.p>
      </div>

      <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden relative`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] relative'
        >
          <Tilt
            options={{
              max: 15,
              scale: 1,
              speed: 450,
            }}
            className="w-full"
          >
            <motion.div
              drag
              dragConstraints={{
                left: -30,
                top: -30,
                right: 30,
                bottom: 30
              }}
              whileDrag={{ 
                scale: 1.02, 
                rotate: 1,
                filter: "brightness(1.05)"
              }}
              dragElastic={0.1}
              className="w-full bg-gradient-to-b from-blue-800 via-purple-700 to-red-700 p-[2px] rounded-2xl shadow-card select-none hover:shadow-xl transition-all duration-300 ease-in-out cursor-grab active:cursor-grabbing will-change-transform hero-animation"
            >
              <div className='bg-tertiary p-8 rounded-2xl w-full hover:bg-opacity-95 transition-all duration-300 relative overflow-hidden'>
                <motion.h3 
                  className={`${styles.sectionSubText} transition-all duration-300 mb-8`}
                  whileHover={{
                    background: "linear-gradient(to right, #14b8a6, #a855f7, #f97316)",
                    backgroundClip: "text",
                    color: "transparent",
                    transition: { duration: 0.3 }
                  }}
                >
                  Get in touch
                </motion.h3>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className='flex flex-col gap-6'
                >
                  <motion.label 
                    className='flex flex-col'
                    variants={fadeIn("right", "spring", 0.1, 0.75)}
                  >
                    <span className='text-white font-medium mb-4'>Your Name</span>
                    <motion.input
                      type='text'
                      name='name'
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What's your name?"
                      className='bg-black-200 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all duration-300 focus:bg-opacity-80 focus:ring-2 focus:ring-purple-500'
                      required
                      whileFocus={{ scale: 1.02 }}
                      whileHover={{ scale: 1.01 }}
                    />
                  </motion.label>

                  <motion.label 
                    className='flex flex-col'
                    variants={fadeIn("right", "spring", 0.2, 0.75)}
                  >
                    <span className='text-white font-medium mb-4'>Your Email</span>
                    <motion.input
                      type='email'
                      name='email'
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your email address?"
                      className='bg-black-200 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all duration-300 focus:bg-opacity-80 focus:ring-2 focus:ring-purple-500'
                      required
                      whileFocus={{ scale: 1.02 }}
                      whileHover={{ scale: 1.01 }}
                    />
                  </motion.label>

                  <motion.label 
                    className='flex flex-col'
                    variants={fadeIn("right", "spring", 0.3, 0.75)}
                  >
                    <span className='text-white font-medium mb-4'>Your Message</span>
                    <motion.textarea
                      rows={7}
                      name='message'
                      value={form.message}
                      onChange={handleChange}
                      placeholder='What do you want to say?'
                      className='bg-black-200 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none transition-all duration-300 focus:bg-opacity-80 focus:ring-2 focus:ring-purple-500'
                      required
                      whileFocus={{ scale: 1.02 }}
                      whileHover={{ scale: 1.01 }}
                    />
                  </motion.label>

                  <motion.button
                    type='submit'
                    className="relative overflow-hidden bg-gradient-to-r from-blue-800 via-purple-700 to-red-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 group w-fit disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ 
                      scale: loading ? 1 : 1.05,
                      boxShadow: "0 10px 30px rgba(147, 94, 255, 0.3)"
                    }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    disabled={loading}
                    variants={fadeIn("right", "spring", 0.4, 0.75)}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-purple-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      layoutId="contactButtonHover"
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      {loading ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>

                {/* Floating overlay effect */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm rounded-2xl opacity-0 hover:opacity-100 transition-all duration-500 pointer-events-none"
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="text-white text-center px-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360] 
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-3xl"
                      >
                        📧
                      </motion.div>
                      <span className="text-sm font-semibold">Let's Connect</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </Tilt>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative'
        >
          {/* Removed the gradient background wrapper and background styling */}
          <div className="w-full h-full overflow-hidden relative">
            <EarthCanvas />
            
            {/* Floating decorative elements on canvas */}
            <motion.div
              className="absolute top-5 right-5 w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 opacity-60"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-5 left-5 w-1 h-1 rounded-full bg-[#915eff] opacity-50"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </motion.div>

        {/* Background decorative elements */}
        <motion.div
          className="absolute -top-10 left-1/4 w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 opacity-30"
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
          className="absolute -bottom-10 right-1/4 w-2 h-2 rounded-full bg-[#915eff] opacity-40"
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
      </div>

      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-teal-600/10 to-purple-600/10 rounded-full blur-3xl"
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

export default SectionWrapper(Contact, "contact");