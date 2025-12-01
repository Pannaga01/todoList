
---

## 📝 Todo List App

A full-stack Todo List application that allows users to **add**, **edit**, **delete**, **complete**, and **search** tasks. Built with **React** on the frontend and **Java Spring Boot** on the backend.

---

### 📦 Features

- ✅ Add new tasks with timestamps
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- 🔄 Toggle completion status
- 🔍 Search tasks by text
- 💾 Session storage for temporary state
- 🔗 Backend integration for persistent data

---

### 🖥️ Frontend (React)

- Built with **React + Vite**
- Uses **React Hooks** (`useState`, `useEffect`, `useMemo`, `useCallback`)
- Implements **sessionStorage** for temporary persistence
- Dynamic search and filtering
- Modular components: `SearchBar`, `ListItems`,


### ⚙️ Backend (Java Spring Boot)

- RESTful API built with **Spring Boot**
- CRUD operations via **Spring Data JPA**
- Entity: `TodoItem` with fields `id`, `text`, `createdAt`, `completed`
- Service layer handles business logic (ID generation, timestamping)
- CORS enabled for frontend integration


### 🔗 API Endpoints

| Method | Endpoint               | Description              |
|--------|------------------------|--------------------------|
| `GET`  | `/api/todos`           | Fetch all items          |
| `POST` | `/api/todos`           | Add new item             |
| `PUT`  | `/api/todos/{id}`      | Update item              |
| `PUT`  | `/api/todos/{id}/toggle` | Toggle completion status |
| `DELETE` | `/api/todos/{id}`    | Delete item              |

---

### 📚 Technologies Used

- **Frontend**: React, TypeScript, Vite
- **Backend**: Java, Spring Boot, JPA
- **Storage**: sessionStorage (frontend), in-memory or database (backend)
- **Tools**: Git, VS Code

---

### 🙌 Author

**Pannaga** — Full-stack developer passionate about clean architecture, UI/UX, and backend best practices.

---



