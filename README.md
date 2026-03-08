Project Overview

This project replicates the Netflix-style login page using React for the frontend and Node.js with Express for the backend.
It demonstrates a basic authentication flow, including form validation, API communication, and conditional navigation after login.

The goal of this project is to understand how a frontend React application interacts with a backend API.

Features
1. Netflix-Style UI

Clean and modern login interface inspired by Netflix.

Dark themed layout with centered login form.

Responsive design that works on desktop and mobile screens.

2. Form Handling

Login form collects:

Email

Password

Uses React state to store and manage user input.

3. Frontend Validation

Basic validation is implemented before sending data to the backend:

Email field cannot be empty

Password field cannot be empty

Displays error messages for missing inputs

4. Backend API (Express Server)

A simple Express server handles login requests.

Receives login data from the frontend using POST requests.

5. Mock Authentication

The backend checks login credentials using static/mock data.

No database is used for this project.

Example:

Email: user@example.com
Password: password123
6. API Integration

Frontend sends login data to the backend using Axios / Fetch API.

Backend processes the request and returns a response.

7. Error Handling

If login credentials are incorrect:

Backend sends an error response.

Frontend displays an error message like "Invalid email or password".

8. Success Redirect

If login credentials are correct:

User is redirected to a Dashboard page.

The dashboard acts as a protected page for demonstration purposes.

Technologies Used
Frontend

React

CSS / Tailwind CSS

Axios / Fetch API

Vite or Create React App

Backend

Node.js

Express.js

CORS

Body Parser / JSON middleware
