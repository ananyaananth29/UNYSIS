# 🧩 AB Suite Canvas — No-Code Tool for Agile Website Development

### 🚀 Developed as part of the **Academia–Industry Collaboration** between  
**Nitte Meenakshi Institute of Technology (NMIT)** and **Unisys Corporation**

---

## 📘 Overview

**AB Suite Canvas** is a **no-code web development platform** that empowers **non-coders** to design and deploy fully functional websites using an **intuitive drag-and-drop interface**.  
Built using **GrapesJS**, **Node.js**, **Express**, **MongoDB**, and **Bootstrap**, the tool allows rapid prototyping and agile development without writing a single line of code.

This project bridges the gap between **non-technical users** and **agile web development**, providing a lightweight, scalable, and easily deployable solution for academic and enterprise environments.

---

## 🏗️ System Architecture

The system is composed of:
```
UNYSIS-main/
│
├── model/ # Mongoose models (User schema)
├── public/ # Static frontend assets
│ ├── uix/ # Auto-generated HTML pages
│ ├── js/ # Core frontend scripts (GrapesJS, Bootstrap)
│ ├── css/ # Styling (main.css, Bootstrap, GrapesJS themes)
│ └── fonts/ # Custom UI font files
│
├── ui/
│ └── ui.route.js # Express routes for editor and data persistence
│
├── views/ # Handlebars templates for rendering UI
│ ├── home.hbs
│ ├── editor.hbs
│ └── 404.hbs
│
├── server.js # Express server setup
├── index.js # GrapesJS initialization
├── blocks.js, traits.js, components.js
│ # Custom GrapesJS extensions
│
├── package.json # Dependencies and scripts
└── README.md # Project documentation
```
---

## 🧠 Core Features

### 🔹 Visual Editor (Powered by GrapesJS)
- Drag-and-drop components: text, images, videos, forms, and tabs  
- Live HTML/CSS preview  
- Multi-page management and navigation  
- Integrated Bootstrap 4/5 blocks and responsive grid  

### 🔹 Custom Template Management
- Prebuilt JSON templates (`form-1.json`) dynamically loaded into GrapesJS  
- Create, edit, and persist reusable UI blocks  

### 🔹 Dynamic Deployment
- Automatically generates HTML pages into `/public/uix`  
- Injects Bootstrap & JS scripts dynamically on save  
- Supports form data submission to MongoDB via Express API  

### 🔹 Backend Integration
- Node.js + Express handles routes, file generation, and persistence  
- MongoDB + Mongoose for flexible storage of user input and project data  

### 🔹 Error Handling
- Custom `404.hbs` template for missing routes  
- Validation and confirmation prompts for safe publishing  

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | GrapesJS, Bootstrap 4/5, jQuery, SCSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ORM) |
| **Templating** | Handlebars (HBS) |
| **Deployment** | Localhost (Node runtime) |
| **Languages** | JavaScript, HTML5, CSS3, JSON |

---

## 🧩 Key Modules

### 🖥️ `/ui/ui.route.js`
Defines all Express routes:
- `/` → Renders **home.hbs**  
- `/editor` → Renders the GrapesJS-based builder  
- `/sendData` → Saves form input to MongoDB  
- `/objAddition` → Adds new components to `form-1.json`  
- `/elementContent` → Writes generated HTML into `/public/uix/`

---

### 🧰 `/public/js/deploy.js`
Controls page-level behavior after deployment:
- Captures all form submissions  
- Sends form data and metadata to the backend  
- Dynamically redirects based on user actions  

---

### 🧠 `/public/js/main.js`
- Configures GrapesJS editor  
- Loads plugins (`grapesjs-blocks-bootstrap4`, `grapesjs-tabs`, etc.)  
- Manages page addition, renaming, and saving to the backend  
- Exports HTML code and injects runtime scripts  

---

## 📊 Efficiency Metrics (from Research)

| Parameter | Traditional Development | AB Suite Canvas |
|------------|------------------------|-----------------|
| **Development Time** | 100% baseline | ↓ Reduced by up to **70%** |
| **Decision-making Efficiency** | Moderate | ↑ Improved by **60%** |
| **Resource Usage** | High | ↓ Optimized (β > 1) |
| **Scalability (γ)** | Limited | ↑ Linear growth with users |

Mathematical modeling shows efficiency constants **α, β, γ > 1**, demonstrating improvements in speed, resource optimization, and scalability.

---

## 🧪 Case Study: Banking Application (AB-Bank)

A **fully functional banking UI** (login, transfer, payments, credit card, investment pages) was created entirely through drag-and-drop components.

### Highlights:
- 12+ interconnected HTML pages (e.g., `Home.html`, `Transfers.html`, `Pay.html`)  
- Forms automatically linked to MongoDB  
- UI designed entirely in GrapesJS  
- No manual coding required  

---

## 🧱 Folder-Wise Role Summary

| Folder | Description |
|--------|--------------|
| **views/** | Server-rendered templates using Handlebars |
| **ui/** | Express routing and UI logic |
| **model/** | Mongoose schemas for user and page data |
| **public/** | All static frontend assets and generated pages |
| **uix/** | Auto-deployed pages from GrapesJS exports |

---

## ⚡ Installation Guide

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)
- npm or yarn

### Steps
```bash
# Clone repository
git clone https://github.com/yourusername/AB-Suite-Canvas.git
cd AB-Suite-Canvas

# Install dependencies
npm install

# Start MongoDB service
mongod

# Run server
npm start
```

Access the app at:
👉 http://localhost:8085
| Endpoint          | Method | Description                            |
| ----------------- | ------ | -------------------------------------- |
| `/`               | GET    | Renders home page                      |
| `/editor`         | GET    | Launches visual editor                 |
| `/sendData`       | POST   | Stores form data in MongoDB            |
| `/objAddition`    | POST   | Adds new block to `form-1.json`        |
| `/elementContent` | POST   | Writes generated page to `/public/uix` |

## 🧪 Testing and Validation

- ✅ Unit and integration tests for **GrapesJS components**  
- 👥 Usability tests conducted on **non-coder participants**  
- ⚡ Achieved **70% faster prototyping** compared to traditional HTML workflows  

---

## 🔮 Future Enhancements

- 🤖 Integration of **AI-assisted design recommendations**  
- 👩‍💻 Real-time **collaborative editing** for teams  
- ☁️ **Cloud deployment** (AWS/Azure) and multi-user architecture  
- 🗣️ Add support for **voice** and **AR-based UI creation**

---

## 👩‍💻 Authors & Contributors

- **Ananya Ananth**, **Monisha M**, **Pragati Priya**, **Praneetha D. Rai**, **Vachana Mahadevappa**  
  *In collaboration with Unisys Corporation, Bangalore.*  

**Mentors:**  
- *Dr. Prashanth B.S.*  
- *Dr. Manoj Kumar M.V.*

---

## 🧾 Reference

Published at **IEEE IC3IT 2025**  
> **“Development of No-Code Tool for Agile Website Development for Non-Coders”**  
> DOI: *[IEEE Xplore link pending]*

---

## 📜 License

This project is released under the **MIT License**.  
You are free to **use**, **modify**, and **distribute** it for **educational and research purposes**.

---

## 🧠 AB Suite Canvas

> _Empowering Non-Coders to Build the Web — One Drag-and-Drop at a Time._
