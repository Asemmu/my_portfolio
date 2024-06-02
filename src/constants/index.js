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
    docker,
    extensya,
    carrent,
    jobit,
    tripguide,
    threejs,
    php,
    mysql,
    express,
    laravel
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
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
  
    {
      title: "REST APIS and Third Party Integrations Expert",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "expressjs",
      icon: express
    },
    {
      name:"laravel",
      icon: laravel
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Mysql",
      icon: mysql,
    },
    
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },

    
    {
      name: "React JS",
      icon: reactjs,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
    },

    {
      name: "docker",
      icon: docker,
    },

    {
      name: "git",
      icon: git,
    },

  ];
  
  const experiences = [
    {
      title: "Systems Development Team Leader",
      company_name: "extensya",
      icon: extensya,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developed open adn professional relashionships with team members enabling more effictive issue resolution.",
        "Manging job assignment on a day-to-day basis and following up on tasks.",
        "Participated in systems design and architecture.",
        "Leading external and internal teams projects to achive the desired requirments",
      ],
    },
    {
      title: "Senior Systems Developer",
      company_name: "extensya",
      icon: extensya,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Completing the copmany's projects from requirements gatharing to go live stage",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing integrations with all social media platforms.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "System Devlopment Officer",
      company_name: "extensya",
      icon: extensya,
      iconBg: "#E6DEDD",
      date: "Feb 2020 - Jan 2022",
      points: [
        "Developing and maintaining web applications using PHP, HTML, CSS, Javascript and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Dealing with Windows and linux servers"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };