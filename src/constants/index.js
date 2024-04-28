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
    memehub,
    realestate,
    meditation,
    threejs,
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
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "MERN Stack Developer",
      icon: creator,
    },
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
    }
  ];
  
  const experiences = [
    {
      title: "Frontend Web Developer",
      company_name: "JMedia Corp.",
      icon: jmedia,
      iconBg: "#383E56",
      date: "February 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams like AI/ML, Cybersecurity to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Technical Team",
      company_name: "The Xiting Way",
      icon: txw,
      iconBg: "#E6DEDD",
      date: "Apr 2023 - Dec 2023",
      points: [
        "Developing components for the main website.",
        "Working with the team to develop AI chatbot",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Technical Team",
      company_name: "Open Source Chandigarh",
      icon: osc,
      iconBg: "#383E56",
      date: "Sep 2023 - Present",
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
      date: "Dec 2022 - Present",
      points: [
        "Received a government funding of 2 Lakh INR for our E-Bike project.",
        "Won national level award for our project.",
        "Responsible for developing the project and maintaining all the paperworks related to it."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Soham proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Soham does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Soham optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
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
    {
      name: "Real Estate",
      description:
        "A real estate web application where you can find your dream home or even list your property for rent and sale.",
      tags: [
        {
          name: "mern stack",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: realestate,
      source_code_link: "https://github.com/Soham2395/RealEstate",
        project_link: "https://aanjullienterprises.co.in/",
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
  ];
  
  export { services, technologies, experiences, testimonials, projects };