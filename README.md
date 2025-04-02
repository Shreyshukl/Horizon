AI Trip Planner 🌍✈️

A React-based AI-powered trip planning web application that helps users generate personalized trip plans using Google’s Generative AI and Places API.

Tech Stack 🛠️

Frontend:
React (JSX & Hooks) – For building the user interface.
React Router – For handling navigation.
Tailwind CSS – For styling.
Framer Motion – For animations and smooth transitions.
clsx & tailwind-merge – For class merging and optimizing Tailwind classes.
Authentication:
Google OAuth API (@react-oauth/google) – Handles user authentication.
APIs & External Services:
Google Generative AI (Gemini API) – Generates personalized trip plans.
Google Places API – Fetches place details, including images.
Axios – For making API requests.
Database:
Firebase Firestore – Stores user trips and related data.
Build & Development Tools:
Vite – Fast development environment for React.
ESLint – Ensures code quality and best practices.
PostCSS & Autoprefixer – Optimizes CSS for cross-browser compatibility.
Project Overview

This project allows users to:
✅ Log in with Google OAuth.
✅ Enter trip preferences (destination, budget, number of days).
✅ Get AI-generated trip plans.
✅ View and manage saved trips.
✅ Fetch location details and images via Google Places API.



Installation & Setup

Clone the repository:
git clone https://github.com/AdityaMittal333/Ai-Trip-Planner.git
cd Ai-Trip-Planner
Install dependencies:
npm install
Add environment variables in a .env file:
VITE_GOOGLE_GEMINI_API=your_gemini_api_key
VITE_GOOGLE_PLACE_API_KEY=your_google_places_api_key
Run the project:
npm run dev
