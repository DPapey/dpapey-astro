export const heroData = {
  title:
    "Hi, I'm Dean, Building Secure Networks and Scalable Data Solutions.",
  description: "My site is made entirely possible with React and 🚀 Astro.",
  ctaText: "Learn More",
  ctaLink: "/blog",
  image: "../../src/assets/Atom.png",
};

export const skills = [
  {
    title: "Full-Stack Development",
    description:
      "Expertise in designing and implementing both front-end and back-end systems optimised for performance and scalability.",
    icon: "terminal-window",
  },
  {
    title: "Network Engineering",
    description:
      "Hands-on experience configuring CISCO IOS devices, VLANs, and routing protocols to build secure, reliable networks.",
    icon: "rocket",
  },
  {
    title: "Database Design & Management",
    description:
      "Skilled in SQL and MariaDB with a focus on normalisation (3NF), data integrity, and containerised deployments using Docker.",
    icon: "database",
  },
];

export const projects = [
  {
    title: "Logistics Fleet Management Database: Eurofleet Logistics",
    description:
      "A normalised MariaDB system for managing fleet operations, staff certifications, delivery routes, and dealership logistics. Designed using 3NF for optimal integrity and scalability.",
    technologies: ["MariaDB", "SQL", "Docker", "phpMyAdmin", "Git"],
    github: "https://github.com/dpapey/eurofleet-logistics",
  },
  {
    title: "Containerized SQL Dev Environment",
    description:
      "Built local-first environments using Docker to run MariaDB and PostgreSQL servers with phpMyAdmin and pgAdmin UIs. Enables system-independent, secure development and rapid teardown.",
    technologies: ["Docker", "MariaDB", "PostgreSQL", "pgAdmin", "phpMyAdmin"],
    github: "https://github.com/dpapey/docker-db-environments",
  },
  {
    title: "Personal Portfolio & Blog (Astro)",
    description:
      "A blazing-fast developer portfolio and blog site using Astro and Tailwind. Includes content collections, MDX support, and theme toggling.",
    technologies: ["Astro", "TailwindCSS", "React", "Motion.dev"],
    github: "https://github.com/dpapey/dpapey-astro",
  },
];

export const techSkills = [
  "TypeScript",
  "TailwindCSS",
  "Astro",
  "React",
  "MariaDB",
  "PostgreSQL",
  "Docker",
  "Git",
  "CISCO IOS",
  "VLANs",
  "SQL Normalisation (3NF)",
  "Content Collections",
  "Motion.dev",
];
