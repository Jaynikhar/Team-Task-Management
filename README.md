# 🚀 Project Task Manager (MERN Stack)

A full-stack web application built using the MERN stack that allows users to manage projects and tasks efficiently. This app provides authentication, protected routes, and a clean interface for handling daily workflows.

---

## 📌 Features

* 🔐 User Authentication (Signup / Login)
* 🧑‍💼 Secure Dashboard (Protected Routes)
* 📁 Create and Manage Projects
* ✅ Add, Update, and Track Tasks
* 🔄 Real-time UI Updates
* 🚪 Logout Functionality
* 💾 Persistent Login using Local Storage

---

## 🛠️ Tech Stack

### Frontend:

* React.js
* React Router DOM
* CSS (Custom Styling)

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB

### Others:

* JWT Authentication
* REST APIs

---

## 📂 Folder Structure

```bash
project-task-manager/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Tasks.jsx
│   │   │
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles/
│   │       └── global.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Project.js
│   │   └── Task.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── projectRoutes.js
│   │   └── taskRoutes.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   │
│   └── package.json
│
├── .gitignore
├── README.md
└── .env
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/project-task-manager.git
cd project-task-manager
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Run backend:

```bash
node server.js
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Authentication Flow

1. User signs up or logs in
2. Server returns JWT token
3. Token is stored in localStorage
4. Protected routes check token before rendering pages
5. Logout clears token and redirects to login page

---

## 🌐 API Endpoints (Basic)

### Auth

* POST `/api/auth/signup`
* POST `/api/auth/login`

### Projects

* GET `/api/projects`
* POST `/api/projects`

### Tasks

* GET `/api/tasks`
* POST `/api/tasks`

---

## 🚀 Future Improvements

* ✨ Add task deadlines & reminders
* 📊 Dashboard analytics
* 📱 Mobile responsiveness
* 🌙 Dark mode
* 🔔 Notifications system

---

## 🧠 Learnings

This project helped in understanding:

* Full-stack development using MERN
* Authentication using JWT
* Routing and protected routes in React
* API integration and state management

---

## 👨‍💻 Author

**Jay Nikhar**
B.Tech (ECE) | MERN Stack Developer

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
