import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    jmedia,
    txw,
    osc,
    dice,
    ieee,
    memehub,
    dicewebsite,
    meditation,
    threejs,
    nextjs,
    prismadb,
    php,
    mysql,
    firebase,
    vite,
    python,
    c,
    cpp,
    chairman,
    aryan,
    preksha,
    skillmingle,
    hackwithher,
    storeit
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "UI/UX Designer",
      icon: mobile,
    },
    
    {
      title: "MERN Stack Developer",
      icon: creator,
    },
    {
      title: "Project Manager",
      icon: backend,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Prisma DB",
      icon: prismadb,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Vite",
      icon: vite,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cpp,
    }
  ];
  
  const experiences = [
    {
      title: "Front End Developer Intern | Senior Software Developer",
      company_name: "JMedia Corp.",
      icon: jmedia,
      iconBg: "#383E56",
      date: "February 2024 - Present",
      points: [
        "Developed and maintained 8+ web applications using React.js and related technologies, contributing 40% to project success",
        "Collaborated with AI/ML and Cybersecurity teams to create high-quality products, improving cross-functional efficiency by 25%",
        "Participated in code reviews, providing constructive feedback and enhancing code quality by 80%",
        "Managed teams efficiently leading to timely completion of projects"
      ],
    },
    {
      title: "Technical Head",
      company_name: "IEEE",
      icon: ieee,
      iconBg: "#383E56",
      date: "July 2024 - Present",
      points:[
        "Leading a team in the development and optimization of IEEE's website and app, focusing on delivering a modern and user-friendly experience",
        "Overseeing ongoing updates and maintenance to ensure our site remains cutting-edge and fully functional",
        "Committed to enhancing IEEE’s digital and event experiences through strategic leadership and technical expertise"
      ]
    },
    {
      title: "Technical Team",
      company_name: "The Xiting Way",
      icon: txw,
      iconBg: "#E6DEDD",
      date: "Apr 2023 - Dec 2023",
      points: [
        "Developed components for the main website, enhancing user experience and functionality",
        "Collaborated with the team to develop an AI chatbot, improving customer interaction and support efficiency by 30%"
      ],
    },
    {
      title: "Technical Team",
      company_name: "Open Source Chandigarh",
      icon: osc,
      iconBg: "#383E56",
      date: "Sep 2023 - June 2024",
      points: [
        "Organizing events, seminars and workshops for the community.",
        "Part of the Programming and DSA team."
      ],
    },
    {
      title: "Core Team Member",
      company_name: "Department of Interdisciplinary Courses in Engineering",
      icon: dice,
      iconBg: "#E6DEDD",
      date: "Dec 2022 - July 2024",
      points: [
        "Received government funding of 2 Lakh INR for the E-Bike project",
        "Won national level award for the project",
        "Developing the department's official website increasing user reach by 350%",
        "Managing and organizing successful events"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "He has shown a great amount of responsiblity, leadership skills and a zeal to take on new challenges.",
      name: "Anasthasia Short",
      designation: "Chairman",
      company: "JMedia Corp.",
      image: chairman,
    },
    {
      testimonial:
        "His ability to tackle complex problems with creative solutions has been invaluable to our projects.",
      name: "Aryan Inguz",
      designation: "CTO",
      company: "The Xiting Way",
      image: aryan,
    },
    {
      testimonial:
        "He possesses a deep understanding of data structures, development and software methodologies.",
      name: "Preksha Mahajan",
      designation: "Mentor",
      company: "Open Source Chandigarh",
      image: preksha,
    },
  ];
  
  const projects = [
    {
      name: "HackWithHer",
      description:
        "The all in one information platform regarding the HackWithHer hackathon organized by IEEE-CIET.",
      tags: [
        {
          name: "mern stack",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "pink-text-gradient",
        },
      ],
      image: hackwithher,
      source_code_link: "https://github.com/Soham2395/HackWithHer",
        project_link: "https://hack-with-her.in/",
    },
    {
      name: "StoreIt",
      description:
        "A modern, secure, and user-friendly cloud storage platform designed to help you store, organize, and share your files effortlessly.",
      tags: [
        {
          name: "mern stack",
          color: "blue-text-gradient",
        },
        {
          name: "appwrite",
          color: "pink-text-gradient",
        },
      ],
      image: storeit,
      source_code_link: "https://github.com/Soham2395/StoreIt",
        project_link: "https://store-it-khaki.vercel.app/",
    },
    {
      name: "DICE Department Website",
      description:
        "The official website of the Department of Interdisciplinary Courses in Engineering, Chitkara University.",
      tags: [
        {
          name: "mern stack",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: dicewebsite,
      source_code_link: "https://github.com/Soham2395/DICE-Website",
        project_link: "https://dice-website-pi.vercel.app/",
    },
    {
      name: "Meditation App",
      description:
        "A meditation app where you can relax and learn meditation techniques to improve your focus.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "framer motion",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: meditation,
      source_code_link: "https://github.com/Soham2395/Meditation-App",
      project_link: "https://meditation-app-five-sooty.vercel.app/",
    },
    {
      name: "SkillMingle",
      description:
        "An innovative solution for seamless task and project management,  real-time collaboration, and enhanced productivity.",
      tags: [
        {
          name: "mern stack",
          color: "blue-text-gradient",
        },
        {
          name: "next js",
          color: "pink-text-gradient",
        },
      ],
      image: skillmingle,
      source_code_link: "https://github.com/priyamaggarwal18/skillmingle",
        project_link: "https://skillmingle.vercel.app/",
    },
    {
      
      name: "Memehub",
      description:
        "Web application where you can turn your ideas into memes and share them with the world.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "jquery",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: memehub,
      source_code_link: "https://github.com/Soham2395/Meme-Generator",
      project_link: "https://meme-hub-azure.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };