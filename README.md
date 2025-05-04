# Vulnerable Web Application for Pentesting Practice

This project is an intentionally vulnerable web application designed for practicing web penetration testing in a safe and controlled environment. It allows users to test and learn about common web vulnerabilities.

## Features

- User login and signup
- Contact form
- Admin panel
- Intentionally insecure code with vulnerabilities like:
  - SQL Injection (SQLi)
  - Cross-Site Scripting (XSS)
  - Cross-Site Request Forgery (CSRF)
  - Weak Authentication (role escalation)

## Installation

1. Clone the repository:
2. Install backend dependencies (inside /server folder): ```npm install```
3. Install frontend dependencies (inside `/client` folder ): ```npm install```
4. Create MySQL database with the name 'vulnapp'.
5. change the db user in /server/config/db.js
6. start the backend ```npm run start```
7. start the frontend ```npm run dev```
8. initialize the db by sending a POST request to: POST http://localhost:3000/api/db/reset

TODO: add docker support for setup