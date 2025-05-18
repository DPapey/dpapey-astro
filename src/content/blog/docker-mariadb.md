---
title: "Creating a Local, System-Independent SQL Environment with Docker"
description: "How I use Docker to run MariaDB and PostgreSQL locally without tying them to my system."
author: "DPapey"
cover: "./images/image1.jpg"
coverAlt: "Temp Image"
pubDate: "2025-05-18"
tags: ["docker", "sql", "mariadb", "postgresql", "linux", "networking"]
featured: true
draft: false
---

# Creating a Local, System-Independent SQL Environment with Docker

As someone who works across both **data systems** and **network infrastructure**, I often need access to SQL environments without relying on my OS to manage those services directly. I wanted something:

- Fast to spin up  
- Easy to stop when not in use  
- Secure (no services running on open ports 24/7)  
- Fully portable across systems

The answer? **Docker.**

---

## Why Go System-Independent?

Most developers install MySQL, MariaDB, or PostgreSQL directly on their OS. That works... until:

- You want to switch between multiple versions  
- You’re working on multiple projects with different DB needs  
- Your local services eat up CPU, RAM, and ports—even when idle

By containerizing your databases, you get **isolated, on-demand environments**. It’s a best practice that mimics real-world deployment.

---

## My Setup: MariaDB and PostgreSQL with Docker

I keep all my SQL containers organised in `~/Docker` on my Linux system.

```txt
~/Docker/
├── mariadb/
│   └── docker-compose.yml
└── postgresql/
    └── docker-compose.yml
