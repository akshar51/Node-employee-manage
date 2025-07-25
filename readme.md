# 💼 Employee Management System

A web-based CRUD (Create, Read, Update, Delete) application built with **Node.js**, **Express**, **EJS**, and **Bootstrap 5** to manage employee details and assign tasks. It allows users to **add**, **view**, **edit**, **delete** employees and **assign/review tasks**.

---

## 📁 Project Structure

```
├── public/
│   └── style.css          # Custom CSS styling
├── views/
│   ├── index.ejs          # Add employee form
│   ├── table.ejs          # Employee table
│   ├── edit.ejs           # Edit employee form
│   ├── assignTask.ejs     # Task assignment form
│   ├── reviewTask.ejs     # Task review page
│   ├── header.ejs         # Reusable navigation bar
├── app.js                 # Main server file with routing logic
├── package.json
```

---

## 🚀 Features

- Add a new employee with ID, name, department, and salary.
- View all employees in a tabular format.
- Edit existing employee details.
- Delete an employee.
- Assign tasks to employees with description.
- Review tasks if available.
- Fully responsive design using Bootstrap 5.

---

## 🧰 Technologies Used

- **Backend**: Node.js, Express.js
- **Templating**: EJS
- **Frontend**: HTML5, CSS3, Bootstrap 5
- **Data Storage**: In-memory array (can be replaced with MongoDB/Firebase)

---

## 🛠️ Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/employee-management-system.git
   cd employee-management-system
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the app:**
   ```bash
   node app.js
   ```

4. **Visit in browser:**
   ```
   http://localhost:3000/
   ```

---

## 📄 Server File Overview (`app.js`)

The `app.js` file is the heart of the project and manages:

- **Server setup** using Express
- **View engine** set to EJS
- **Middleware** for static file serving and form data parsing
- **In-memory `emp[]` array** used to store employee objects
- **Routing:**
  - `GET /` – Render new employee form
  - `GET /table` – Show employee table
  - `GET /emp/edit?id=...` – Show edit form with data prefilled
  - `POST /emp/edit?id=...` – Update employee data
  - `GET /emp/delete/:id` – Delete employee by ID
  - `POST /` – Add new employee
  - `GET /emp/task?id=...` – Assign task to employee
  - `POST /assign/task` – Save assigned task
  - `GET /emp/task/review?id=...` – Review assigned tasks

All data (employees and their tasks) are stored in a local array, and the application uses EJS templates to render forms and tables dynamically.

---

## 🖼️ Screens / Routes

| Route            | View              | Description                      |
|------------------|-------------------|----------------------------------|
| `/`              | `index.ejs`       | Add employee form                |
| `/table`         | `table.ejs`       | List all employees               |
| `/emp/edit`      | `edit.ejs`        | Edit specific employee           |
| `/emp/delete/:id`| N/A               | Deletes employee by ID           |
| `/emp/task`      | `assignTask.ejs`  | Assign a task to employee        |
| `/emp/task/review`| `reviewTask.ejs` | View assigned task (if exists)   |

---

## 📌 Example Employee Object

```js
{
  id: 123456789,
  empId: 101,
  empName: "John Doe",
  empDepartment: "Engineering",
  empSalary: 50000,
  task: [
    {
      task: "Build feature X",
      description: "Complete before Friday",
      date: "25/07/2025"
    }
  ]
}
```

---

## 📦 Future Improvements

- Use persistent storage (MongoDB, Firebase, or PostgreSQL).
- Add user authentication.
- Add role-based access (Manager vs Employee).
- Add task completion tracking and due dates.
- Pagination or search functionality on employee table.

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
