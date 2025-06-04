---
title: "The Beginning of the Eurofleet Logistics Project"
description: "How I am utilising my technical skills to design a scalable logistics fleet system using PostgreSQL, Docker and more."
author: "DPapey"
cover: "./images/datastack.png"
coverAlt: "Temp Image"
pubDate: "2025-06-04"
tags: ["docker", "sql", "mariadb", "postgresql", "linux", "c++"]
featured: true
draft: true
---


# The Beginning of the Eurofleet Logistics Project

Over the past few weeks, I’ve been developing a backend logistics system called **Eurofleet Logistics**. The project simulates core infrastructure for managing a commercial vehicle fleet across the UK and EU. It focuses entirely on backend logic, with **no frontend interface**, and is built around PostgreSQL, PL/pgSQL, and a C++ command-line interface.

This is a backend-first, data-driven architecture that handles route planning, staff certification tracking, supplier contracts, and general fleet operations — all through efficient SQL and CLI tooling.

## Project Goals

- Design and implement a fully normalised relational schema for logistics data.
- Write procedural logic using PL/pgSQL to handle business rules within the database.
- Build CLI tools in C++ to interact with the database for key workflows (e.g., staff onboarding, vehicle status updates, delivery tracking).
- Deploy the system in a containerised environment for portability and ease of use.

## Tech Stack

- **Database**: PostgreSQL (with MariaDB compatibility considered for future abstraction)
- **Procedural Logic**: PL/pgSQL
- **Interface**: C++ CLI applications
- **Containerisation**: Docker & Docker Compose
- **OS Environment**: Linux (Debian/Ubuntu base)
- **Dev Tools**: Adminer/pgAdmin (for visualisation), Make, bash scripts

## Progress So Far

- Designed the core database schema using third normal form (3NF)
- Created and documented entity relationships (vehicles, staff, contracts, etc.)
- Set up Docker containers for PostgreSQL and database tooling
- Started initial CLI interface logic in C++ for interacting with core schema elements

[View the Repository on GitHub](https://github.com/DPapey/eurofleet-logistics-system)

## Why Backend-Only?

This project is intended as a study in systems programming and backend design. By excluding any frontend, all focus remains on performance, data integrity, and the quality of the internal logic. The C++ CLI approach ensures tight control over database interactions and reflects real-world backend service patterns used in logistics and infrastructure companies.

## What’s Next?

- Expand stored procedures and triggers in PL/pgSQL for automated validation and workflow handling
- Develop more CLI tools to simulate realistic use cases (e.g., scheduled deliveries, staff certifications expiring)
- Add robust test data sets for meaningful testing and querying
- Begin integrating automated logging and error handling across the CLI tools

## Lessons Learnt So Far

- Good schema planning early on avoids painful rework later
- Containerising DB environments accelerates testing and repeatability
- Writing backend logic in PL/pgSQL can keep business rules close to the data — improving reliability and performance
- A CLI-first approach simplifies interactions and keeps the system lean

---

Thanks for following the early stages of the Eurofleet Logistics project. Future posts will explore specific implementations in PL/pgSQL and C++, including performance optimisations, indexing strategies, and deployment workflows for production-like environments.
