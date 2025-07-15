Commot 1
# Sabko AI

## Project Overview
Sabko AI is a modern AI-powered web application that offers various AI tools such as article writing, blog title generation, AI image generation, and resume reviewing. The frontend is built with React, and the backend (to be added) will use Node.js and Express.

## Features
- AI Article Writer
- Blog Title Generator
- AI Image Generation
- Background & Object Removal
- Resume Reviewer
- User-friendly UI with responsive design

## Project Structure

**What I did in Commit 1 — Initial Setup and UI Design**
In the first commit of the project, I focused on laying down the foundation for the client-side (frontend) of Sabko AI by doing the following:

Project Initialization & Package Installation

Created a new React app using create-react-app (or your chosen setup).

Installed essential packages for smooth routing and UI development:

react-router-dom for handling client-side routing and navigation between pages.

lucide-react for using clean, customizable SVG icons in the UI.

Tailwind CSS for quick, responsive, and modern styling of components.

Implemented Client-Side Routing

Set up React Router in the project to enable navigation without full page reloads.

Configured main routes such as the homepage and placeholders for future AI tool pages.

Created the <Navbar /> component with clickable logo and a call-to-action button, wired to navigate programmatically using React Router’s useNavigate hook.

Designed Core UI Components

Developed the initial Navbar component that stays fixed at the top and includes:

A clickable logo that routes users back to the homepage.

A visually appealing, responsive call-to-action button styled with Tailwind CSS and enhanced with smooth hover animations.

Created a responsive, visually clean layout for the navbar with backdrop blur and shadow effects to enhance usability and aesthetics.

Asset Management Setup

Organized all image assets (logos, icons, backgrounds) into an assets folder.

Created an assets.js file to centralize and export these assets for easier imports across components.

Prepared the Codebase for Future Expansion

Structured the project folder to clearly separate assets and components.

Added comments and organized imports to maintain clarity and scalability.

Added initial .gitignore to prevent committing unnecessary files like node_modules.

Why This Is Important
This initial setup:

Provides a strong, scalable foundation for adding multiple AI tool pages and features.

Ensures users have smooth navigation and a modern user experience.

Makes future development faster and easier by establishing clear structure and styling conventions.


