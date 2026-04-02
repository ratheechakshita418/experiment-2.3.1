# 🛒 Full Stack MERN Shopping Cart Application

A full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). This project demonstrates how to integrate a React frontend with an Express backend using Axios and RESTful APIs.

---

## 📘 Course Outcome Mapping

* **CO3**: Implement RESTful APIs and integrate databases (MongoDB/MySQL) with backend server using Node.js and Express.js
* **CO4**: Debug, test, and optimize full-stack applications by analyzing performance and security aspects
* **CO5**: Design and deploy a full-stack web application with frontend, backend, authentication, and database integration

---

## 🎯 Aim

To connect a React frontend with an Express backend and fetch data using Axios.

---

## 🎯 Objectives

* Create RESTful API endpoints in Express
* Develop React components for data display
* Implement Axios for HTTP requests
* Handle loading and error states
* Style UI using Bootstrap

---

## 🏗️ Tech Stack

### Frontend

* React.js
* Axios
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB

---

## 📂 Project Structure

```
shopping-cart-app/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── App.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/shopping-cart-app.git
cd shopping-cart-app
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Server will run on:
👉 http://localhost:5000

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

App will run on:
👉 http://localhost:3000

---

## 🔗 API Endpoints

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| GET    | /products     | Fetch all products |
| POST   | /products     | Add new product    |
| DELETE | /products/:id | Delete product     |

---

## 📊 Features

* Fetch products from MongoDB
* Display products in responsive grid
* Loading indicator while fetching data
* Error handling for failed API calls
* Clean UI using Bootstrap

---

## 🧪 Sample Data

```json
{
  "name": "Laptop",
  "price": 50000,
  "image": "https://via.placeholder.com/150"
}
```

---

## ❓ Viva Voce Questions

### 1. How does Axios simplify HTTP requests compared to fetch?

* Automatic JSON conversion
* Better error handling
* Cleaner syntax

---

### 2. What is CORS and how do you handle it in Express?

* Allows communication between different origins
* Handled using `cors` middleware

---

### 3. Explain useEffect cleanup function

* Prevents memory leaks
* Cleans subscriptions or API calls

---

### 4. How to implement JWT authentication?

* Generate token on login
* Store token on frontend
* Verify using middleware

---

### 5. What are React Hooks rules?

* Only call hooks at top level
* Only call inside React functions
* Avoid loops and conditions

---

## 🔐 Future Improvements

* JWT Authentication
* Add to Cart functionality
* Payment integration
* Admin dashboard

---

## 👨‍💻 Author

Your Name

---

## ⭐ Conclusion

This project demonstrates full-stack integration using the MERN stack and provides hands-on experience with API communication, database integration, and responsive UI design.

---
