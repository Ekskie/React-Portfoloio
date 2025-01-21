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
    python,
    tailwind,
    nodejs,
    mongodb,
    mysql,
    figma,
    godot,
    upwork,
    famy,
    bpo,
    lspu,
    carrent,
    jobit,
    tripguide,
    threejs,
    clement,
    lawrence,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Game Developer",
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
      name: "Python",
      icon: python,
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
      name: "mysql",
      icon: mysql,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "godot",
      icon: godot,
    },
  ];
  
  const experiences = [
    {
      title: "Student Teacher",
      company_name: "Self-Employed",
      icon: famy,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Teaching and guiding students in Java, HTML, and CSS to build foundational programming skills.",
        "Collaborating with learners to develop their problem-solving abilities and understanding of web development concepts.",
        "Ensuring a hands-on learning experience through practical coding exercises and projects.",
        "Providing feedback and support to help students improve their coding techniques and logical thinking.",
      ],
    },
    {
      title: "Encoder",
      company_name: "Laguna de Bay / BPO",
      icon: bpo,
      iconBg: "#062037",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Accurately inputting and processing data into company systems with a focus on efficiency and precision.",
        "Ensuring the integrity and confidentiality of sensitive information while adhering to company policies.",
        "Collaborating with team members to meet daily and monthly productivity targets.",
        "Performing quality checks to verify data accuracy and resolve discrepancies promptly.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Student",
      icon: lspu,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using Html5 and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Freelance",
      icon: upwork,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Designing, developing, and maintaining web applications using Python Flask and related technologies to meet client requirements.",
        "Managing all aspects of the development process, from planning and coding to deployment and maintenance.",
        "Ensuring responsive design and cross-browser compatibility for optimal user experience across various devices.",
        "Continuously improving code quality through self-review and staying updated with industry best practices.",
        "Communicating directly with clients to gather requirements, provide updates, and deliver tailored solutions.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Dennrick’s a hardworking guy who people think is just naturally talented, but it’s really his dedication that sets him apart. He’s great at programming, mostly because he taught himself, but when it comes to design, I’m definitely two steps ahead!",
      name: "Clement Fernandez",
      designation: "CEO",
      company: "Kakupalan",
      image: clement,
    },
    {
      testimonial:
        "Dennrick is one of the most skilled people I've met in both back-end and game development, as well as other fields. You should hire Dennrick now!",
      name: "Lawrence Celis",
      designation: "COO",
      company: "DEF Corp",
      image: lawrence,
    },
    {
      testimonial:
        "After Denn optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Veranda",
      description:
        "A restaurant website designed to showcase Veranda, a newly opened eatery in Valenzuela, Philippines, offering a variety of sari-sari-style dishes such as pika-pika, lomi, mami, and silog.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "RapidApi",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Savior of Filipino Cuisine",
      description:
        "A Windows Forms application developed in C# that serves as a comprehensive digital recipe book for Filipino dishes, offering step-by-step instructions and ingredient lists for a variety of traditional meals.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Windows Form",
          color: "green-text-gradient",
        },
        {
          name: "Mysql",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "SafeSuite",
      description:
        "A comprehensive website that allows users to scan and analyze links or websites to detect potential malicious content or viruses, ensuring a safer browsing experience.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "RapidApi",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };