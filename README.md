Creative Agency Portfolio Showcase

A modern, responsive, and dynamic React application for showcasing a creative agency’s projects. This platform allows the agency to add, search, and display projects dynamically, providing a seamless experience for potential clients and collaborators.

🚀 Features

Landing Page with Projects – Displays all projects in a clean, visually appealing layout.

Add New Projects – Dynamically add new projects using a user-friendly form.

Search & Filter – Quickly search for projects by name or keywords.

Responsive Design – Fully responsive for desktop, tablet, and mobile screens.

Dynamic State Management – Managed via React useState; scalable architecture for future enhancements.

Polished User Experience – Smooth interactions, hover effects, and accessible design.

Tested Components – Unit tests with Jest and React Testing Library ensure reliability.

🏗️ Project Structure
creative-agency-portfolio/
├─ public/
│  ├─ index.html
├─ src/
│  ├─ components/
│  │  ├─ ProjectCard.jsx
│  │  ├─ ProjectList.jsx
│  │  ├─ AddProjectForm.jsx
│  │  ├─ SearchBar.jsx
│  ├─ hooks/
│  │  └─ useProjects.js
│  ├─ styles/
│  │  ├─ App.css
│  │  ├─ ProjectCard.css
│  ├─ tests/
│  │  └─ ProjectList.test.jsx
│  ├─ App.jsx
│  └─ main.jsx
├─ package.json
└─ README.md

⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/yourusername/creative-agency-portfolio.git
cd creative-agency-portfolio


Install dependencies:

npm install


Start the development server:

npm run dev


Open your browser and navigate to http://localhost:5173 (Vite default) or http://localhost:3000 if using CRA.

Run tests:

npm test

🎨 Technologies Used

React – Component-based UI framework

Vite / Create React App – Fast project bundling and development

CSS Modules / Tailwind / Material UI – Styling options for responsive design

Jest & React Testing Library – Unit testing and user interaction tests

📐 Design Notes

Layout inspired by the provided landing page mock-up.

Components built for reusability and clarity.

State is lifted to the nearest common parent for shared data management.

Responsive breakpoints cover mobile, tablet, and desktop screens.

Styling incorporates subtle hover effects, clean typography, and spacing for readability.

🧪 Testing

Project Rendering – Ensures all projects display correctly.

Add Project Form – Tests form validation and dynamic updates to project list.

Search Functionality – Validates filtering logic in real-time.

Component Isolation – Each component is tested individually for expected behavior.