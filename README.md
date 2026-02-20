# My Personal Portfolio

A modern, responsive, and interactive portfolio developed to showcase my projects, professional experience, and technical skills. Built with the latest technologies in the React ecosystem.

## ✨ Features

- **Multilingual (i18n):** Native support for Portuguese (PT) and English (EN), allowing you to reach a global audience.
- **Dark / Light Mode:** Seamless theme toggling persisted in the browser's `localStorage`.
- **Responsive Design:** Optimized interface for mobile devices, tablets, and desktops, including an adaptable Sidebar navigation.
- **Single Page Application (SPA):** Fast and smooth navigation between "About", "Experience", and "Projects" pages without reloading the page.
- **Centralized Data Management:** All information (projects, skills, experiences) is isolated in a single data file, making future updates much easier.

## 🛠️ Technologies Used

This project was built using the following technologies:

- **[React 19](https://react.dev/):** Main library for building the user interface.
- **[TypeScript](https://www.typescriptlang.org/):** Static typing for a more secure and maintainable code.
- **[Vite](https://vitejs.dev/):** Ultra-fast bundler and development environment.
- **[Tailwind CSS v4](https://tailwindcss.com/):** Utility-first CSS framework for rapid and consistent styling.
- **[React Router v7](https://reactrouter.com/):** Routing and navigation for the application.
- **[i18next](https://www.i18next.com/) & [react-i18next](https://react.i18next.com/):** Internationalization and content translation.
- **Context API:** Global state management for the theme (Dark/Light) and mobile menu control.

## 🚀 How to run the project locally

To run this project on your local machine, make sure you have [Node.js](https://nodejs.org/) installed.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/hectorsalg/portfolio](https://github.com/hectorsalg/portfolio)
    ```

2. **Navigate to the project folder:**
   ```bash
   cd portfolio
    ```

3. **Install the dependencies:**
   ```bash
   npm install
    ```

4. **Start the development server:**
   ```bash
   npm run dev
    ```

5. **Open in your browser:**

      The project will be available at http://localhost:5173.

## 📂 Project Structure

Below is the main organization of the source code (src/):

    src/
    ├── components/   # Reusable components (Header, Sidebar, Layout, etc.)
    ├── context/      # Global application contexts (e.g., AppContext for Theme and Menu)
    ├── data/         # Centralized data file for the portfolio (skills, projects)
    ├── locales/      # Translation JSON files (en.json, pt.json)
    ├── pages/        # Main pages (Home, Experience, Projects)
    ├── styles/       # Global CSS files (Tailwind configuration and variables)
    ├── App.tsx       # Routing configuration (React Router)
    ├── i18n.ts       # i18next configuration
    └── main.tsx      # Main entry point of the React application

## ☁️ Deployment

This project is ready to be deployed on platform [Vercel](https://hectorsalgueiros.vercel.app/).

## 🤝 Author

Developed by Hector Salgueiros.
Feel free to get in touch with me through my [Linkedin](https://www.linkedin.com/in/hectorsalg/) or check out my other repositories here on GitHub.