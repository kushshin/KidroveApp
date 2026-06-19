## AI & Robotics Summer Workshop Landing Page

This project is a responsive workshop landing page developed using the MERN stack for the **AI & Robotics Summer Workshop**. The landing page is designed to provide parents and students with complete information about the workshop while encouraging registrations through an intuitive and visually appealing interface.

The application features a modern Hero section with a clear call-to-action, a Workshop Details section highlighting key information such as age group, duration, mode, fee, and start date, a Learning Outcomes section showcasing the skills students will gain, an interactive FAQ section with expandable answers, and a fully responsive Registration Form.

The frontend is built with **React.js** and **Tailwind CSS**, following a component-based architecture for better reusability and maintainability. The registration form includes client-side validation and submits data to an **Express.js** backend API. The backend validates the request, stores enquiry details in **MongoDB**, and returns appropriate success or error responses. The application is fully responsive across desktop, tablet, and mobile devices, providing a smooth and engaging user experience.



### Approach

I have built the project using the MERN stack with a component-based architecture in React to keep the code modular, reusable, and easy to maintain. The frontend includes responsive sections such as the Hero, Workshop Details, Learning Outcomes, FAQ, and Registration Form, styled using Tailwind CSS for a modern user interface. On the backend, I created an Express.js API endpoint (`POST /api/enquiry`) to accept registration data, perform server-side validation, and return appropriate responses. I also implemented client-side form validation in React to improve the user experience by preventing invalid submissions before making API requests.

### Improvements with More Time

If given more time, I would integrate MongoDB to persist registration data, add loading indicators and success/error notifications, implement stronger validation using React Hook Form and Yup, enhance accessibility, add animations using Framer Motion, optimize performance, write unit tests, and deploy the application with proper environment configuration. I would also include authentication and an admin dashboard to manage workshop enquiries.

### Registration Form and API Workflow

The registration form is built using React with controlled components, where the user's name, email, and phone number are managed through React state. Before submitting, the form performs client-side validation to ensure all required fields are filled and that the email and phone number are in the correct format. Once validation passes, the form sends a POST request to the Express.js backend API (/api/enquiry) using Axios. The backend receives the request, validates the data again for security, and stores the enquiry details in the MongoDB database using a Mongoose model. After a successful save, the API returns a success response, which is displayed to the user. This workflow ensures reliable data validation, secure communication between the frontend and backend, and persistent storage of workshop registration enquiries.