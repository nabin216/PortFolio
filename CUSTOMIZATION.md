# Customization Guide for Asadur Zaman Nabin's Portfolio

This document provides guidance on how to customize various aspects of your portfolio website.

## Table of Contents
1. [Personal Information](#personal-information)
2. [Theme Colors](#theme-colors)
3. [Projects](#projects)
4. [Research Publications](#research-publications)
5. [Experience](#experience)
6. [Images](#images)
7. [AI Chatbot Responses](#ai-chatbot-responses)

## Personal Information

Most of your personal information is stored in the component files. Here are the main files to edit:

- **src/components/sections/Hero.tsx**: Update your name, tagline, and introduction
- **src/components/sections/About.tsx**: Update your background, education, and skills
- **src/components/layout/Footer.tsx**: Update your contact information and social media links
- **src/components/layout/Navbar.tsx**: Update your name in the navigation bar

## Theme Colors

The theme colors are defined in the `tailwind.config.js` file. The main colors are:

- **primary**: Dark blue color used for backgrounds and text (#0f172a)
- **secondary**: Slightly lighter blue for hover states and accents (#1e293b)
- **accent**: Bright blue for buttons and highlights (#3b82f6)

To change these colors, edit the `tailwind.config.js` file.

## Projects

Your projects are defined in the `src/components/sections/Projects.tsx` file. Each project has the following properties:

```typescript
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  category: 'web' | 'cybersecurity' | 'blockchain';
}
```

To add or modify projects, edit the `projects` array in this file.

## Research Publications

Your research publications are defined in the `src/components/sections/Research.tsx` file. Each publication has the following properties:

```typescript
interface Publication {
  id: number;
  title: string;
  authors: string;
  conference: string;
  year: number;
  abstract: string;
  pdfLink?: string;
  doiLink?: string;
}
```

To add or modify publications, edit the `publications` array in this file.

## Experience

Your professional experience is defined in the `src/components/sections/Experience.tsx` file. Each experience item has the following properties:

```typescript
interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  icon: 'briefcase' | 'code' | 'shield' | 'microphone';
}
```

To add or modify experience items, edit the `experiences` array in this file.

## Images

Replace the placeholder images with your actual images:

- **Profile Photo**: Replace `public/images/profile-photo.jpg` with your actual profile photo
- **Project Images**: Add your project images to `public/images/projects/` directory
- **Publication PDFs**: Add your publication PDFs to `public/images/publications/` directory

## AI Chatbot Responses

The AI chatbot responses are defined in the `src/components/sections/AIChatbot.tsx` file. To customize the responses, edit the `generateBotResponse` function.

The function takes a user input string and returns a response based on pattern matching. You can add more patterns and responses to make the chatbot more helpful.

---

If you need further assistance with customization, please refer to the React and Tailwind CSS documentation, or contact the developer who set up this portfolio template. 