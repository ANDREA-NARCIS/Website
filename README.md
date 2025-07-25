��#   W e b s i t e 
 
# 📝 Automatic Application System using MERN

A web-based platform to simplify and automate the process of generating and submitting formal applications. Users (students) can fill in their details, choose from multiple predefined templates (e.g., leave application, scholarship request, etc.), and generate a polished application letter in seconds. The system also tracks the status of each application through different user roles such as Admins and Authorities.

---

## 🚀 Features

- ✍️ Auto-generates professional application letters
- 🌐 Multi-language template support
- 👤 Role-based access: Students, Admins, Authorities
- 📊 Application status tracking
- 🔐 Secure form submission
- 🎯 User-friendly interface with responsive design

---

## 🛠️ Tech Stack

### 🔹 Frontend
- **React.js**
- **Tailwind CSS**
- **React Router DOM**

### 🔹 Backend
- **Node.js**
- **Express.js**

### 🔹 Database
- **MongoDB (NoSQL)**

---

## 📁 Folder Structure
/CODES
├── backend
│ ├── controllers
│ ├── models
│ ├── routes
│ ├── .env
│ └── server.js
├── frontend
│ ├── public
│ ├── src
│ │ ├── components
│ │ ├── pages
│ │ └── App.jsx
│ └── tailwind.config.js

---

## ⚙️ Setup Instructions

### ✅ Prerequisites
- Node.js and npm installed
- MongoDB (local or Atlas)

---

### 🚧 Backend Setup

```bash
cd backend
npm install
# Create a `.env` file with MongoDB URI and PORT
npm start

### Frontend Setup
cd frontend
npm install
npm run dev

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/applications
PORT=5000

