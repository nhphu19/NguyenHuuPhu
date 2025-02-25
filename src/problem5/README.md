# A Crude Server - Code Challenge

This project is a simple backend server built with **Express.js** and **TypeScript**, using **MySQL** as the database and **Sequelize** as the ORM.

---

## Features

- ✅ Create a resource
- ✅ List resources with basic filters (by name, type)
- ✅ Get details of a resource
- ✅ Update resource details
- ✅ Delete a resource
- ✅ MySQL database integration with Sequelize

---

## Project Structure

src/
├── controllers/ # Express controllers for handling requests
├── dbs/ # Init connection to database
├── models/ # Sequelize models (database schema)
├── routes/ # Express route definitions
├── services/ # Business logic and database operations
├── server.ts # Entry point of the application

---

## Install Dependencies

npm install

---

## Start the Server

npm run dev

---

## API Endpoints

Postman link refers: https://www.postman.com/galactic-crater-243609/code-challenge/collection/hlm7lim/resources

📌 1. Create a Resource
POST /api/resources
Request Body:
{
"name": "test 03",
"type": "mp4",
"size": 200
}

📌 2. Get All Resources (With Filters)
GET /api/resources
Supports filters:

- ?name=test → Filter by name
- ?type=mp3 → Filter by type

📌 3. Get a Single Resource
GET /api/resources/:id

📌 4. Update a Resource
PUT /api/resources/:id
Request Body:
{
"name": "Updated Name"
}

📌 5. Delete a Resource
DELETE /api/resources/:id
