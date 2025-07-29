# OMS Frontend

A simple Order Management System (OMS) frontend built with **React**, **TypeScript**, **Axios**, and **Socket.IO**.

---

## 📌 Features

- 📦 **Create Order** — Fill out a form to create a new order.
- 🔍 **Lookup Order** — Find an order by ID and view its details.
- 📊 **Admin Dashboard** — See total orders, revenue, and recent activity.
- ⚡ **API Connected** — Uses Axios to connect to a backend API.
- 🔌 **Socket.IO Ready** — Supports real-time updates (if your backend sends them).

---

## 🗂️ **Project Structure**

```
src/
├── api/                     # Axios instance (api.ts)
├── components/              # Reusable React components
│   ├── OrderForm.tsx
│   ├── CustomerLookup.tsx
│   └── AdminDashboard.tsx
├── pages/                   # Page-level routes
│   ├── index.tsx           # (Home)
│   ├── create-order.tsx
│   ├── lookup-order.tsx
│   └── admin-dashboard.tsx
├── socket.ts               # Socket.IO client
├── App.tsx                 # Routes config
└── index.css              # Tailwind / global styles
```

---

## 🚀 **Getting Started**

**1️⃣ Install dependencies**

```bash
npm install
# or
yarn install
```

**2️⃣ Run the development server**

```bash
npm run dev
# or
yarn dev
```

**3️⃣ Open your browser**

Visit http://localhost:5173 (or your Vite dev port).

---

## ⚙️ API Configuration

Axios is set up in `src/api/api.ts`:

```typescript
const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});
```

Make sure your backend is running on `localhost:8000` (or change the URL).

---

## 🔌 Socket.IO

A Socket.IO client is included:

```typescript
import { io } from 'socket.io-client';
const socket = io('http://localhost:8000');
```

Use `socket` to handle real-time updates if your backend supports them.

---

## 📚 Tech Stack

- ⚛️ **React + TypeScript**
- 🎨 **Tailwind CSS**
- 📡 **Axios**
- 🔌 **Socket.IO Client**
- ⚡ **Vite**


---

## 👨‍💻 Author

**Your Name**  
Contact: [aswaletinku@gmail.com]

Happy coding! 🚀