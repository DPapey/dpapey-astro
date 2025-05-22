export const heroData = {
  	title: "Hi, I'm Dean, Building Robust Databases and Efficient Backend Services",
  	description: "My site is made entirely possible with React and 🚀 Astro.",
  	ctaText: "Learn More",
  	ctaLink: "/blog",
  	image: "../../src/assets/Atom.png",
};

export const skills = [
  	{
    		title: "Full-Stack Development",
    		description: "Expertise in designing and implementing both front-end and back-end systems optimised for performance and scalability.",
    		icon: "terminal-window",
  	},
  	{
    		title: "Database Design & Management",
    		description: "Skilled in SQL, PostgreSQL and MariaDB with a focus on normalisation (3NF), data integrity, and containerised deployments using Docker.",
    		icon: "database",
  	},
  	{
  	  	title: "Securing Networks",
  	  	description: "Hands-on experience configuring CISCO IOS devices, VLANs, and routing protocols to build secure, reliable networks.",
  	  	icon: "rocket",
  	},
];

export const projects = [
  	{
    		title: "Logistics Fleet Management Database: Eurofleet Logistics",
    		description: "A normalised PostgreSQL schema for managing fleet operations, staff certifications, delivery routes, and dealership logistics. Designed using 3NF for optimal integrity and scalability.",
    		technologies: ["PostgreSQL", "Docker", "pgAdmin", "Git"],
    		github: "https://github.com/dpapey/logistics-fleet-tracking",
  	},
  	{
    		title: "Containerized SQL Dev Environment",
    		description: "Built local-first environments using Docker to run MariaDB and PostgreSQL servers with phpMyAdmin and pgAdmin UIs. Enables system-independent, secure development and rapid teardown.",
    		technologies: ["Docker", "MariaDB", "PostgreSQL", "pgAdmin", "phpMyAdmin"],
    		github: "https://github.com/dpapey/docker-db-environments",
 	 },
	{
		title: "Papey's Pizza: Scalable Database Schema",
		description: "Designed a comprehensive PostgreSQL schema for a multi-location pizza parlour and arcade, focusing on robust data integrity, multi-parlour inventory tracking, and integrated customer/staff management.",
		technologies: ["PostgreSQL", "pgAdmin", "Docker", "Git"],
		github: "https://github.com/dpapey/papeys-pizza",
	},
  	{
    		title: "Personal Portfolio & Blog (Astro)",
    		description: "An immersive and exceptionally fast developer portfolio and blog site using Astro and Tailwind. Includes content collections, MDX support, and theme toggling.",
    		technologies: ["Astro", "TailwindCSS", "React", "Motion.dev", "TypeScript", "Content Collections"],
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
