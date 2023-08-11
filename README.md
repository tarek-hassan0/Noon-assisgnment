```
---
title: Noon Technical Assignment
author: Tarek Hassan
---
```

## Introduction:

This Next.js 13 project serves as a technical assignment for Noon.com, aimed at creating a single-page responsive web application. The primary objective is to utilize Next.js to develop a user-friendly interface that aligns with the provided image from the associated PDF document. The project's key focus is on demonstrating proficiency in building responsive web applications using Next.js.

**Main Features and Functionalities:**

-   Development of a single-page responsive web application using Next.js.
-   Implementation of the design and layout guidelines outlined in the provided image from the PDF document.

Live version demo can be found [HERE](https://noon-assisgnment.vercel.app/) 

## Design System and Composition
Used Figma to compose the main components and to create a simple design system to follow
Project on Figma can be found [HERE](https://www.figma.com/file/ArVzFb0we0O2cyz1XVGgT2/Noon-Technical-assignment?type=design&mode=design&t=ITf8iBnyZvzRNPhh-1)

## Installation

To set up the project on your local machine, follow these steps:

**Prerequisites:** Ensure you have Node.js and npm (Node Package Manager) installed on your system.

**Installation Process:**

1.  Navigate to the project directory.
    
2.  Install the required dependencies:
	```bash
	npm install
	```
3.  Start the development server:
	```bash
	npm run dev
	```
4. Open your web browser and visit [http://localhost:3000](http://localhost:3000/) to see the running application.

**Note:** If you encounter any issues during the installation process, please refer to the "Troubleshooting" section or reach out to [contact information] for assistance.


## Configuration

This section outlines the key configuration files and their purposes within the project:

**Configuration Files:**

1.  `package.json`: This file contains metadata about the project and its dependencies. It also includes scripts for various tasks, such as starting the development server or building the project for production.
    
2.  `next.config.js`: The Next.js configuration file allows you to customize various aspects of the Next.js build process, such as adding environment variables, configuring webpack, and setting up custom routing.
    

**Usage:**

The configuration files play a crucial role in setting up and customizing your Next.js project. They enable you to tailor the behavior of your application to your specific requirements.

This section gives an overview of the project's configuration and how developers can customize it to suit their needs. Next, we'll explore the project's folder structure.


## Folder Structure:

The project's folder structure is designed to maintain a clean and organized codebase. Here's an outline of the main directories and their purposes:
-   `app`: This directory contains the main pages of the application:
    
    1.  Home page
    2.  Favorites page
    
    It also houses the layout structure of the main application in `app/layout.js`, as well as the layout for the Favorites page in `app/Favorites/layout.js`.
    It also houses the `Posts-Context.jsx` Provider which is responsible of providing the posts state to the entire application
    
-   `styles`: In this directory, you'll find global stylesheets, Sass modules, or other styling-related resources. The separation of styles from components contributes to enhanced maintainability.
    
-   `components`: This directory is dedicated to housing reusable React components. Isolating components in this manner enhances modularity and simplifies overall codebase management.
- `skeletons`: This directory is dedicated to housing Reusable React components skeletons to display while the components are loading
    
-   `utils`: Here, utility functions, helper modules, and shared code find their place. Keeping utility functions distinct enhances the potential for code reuse and maintainability.


## Routing

Routing in your Next.js project allows for easy navigation between different pages. There are two main types of routing:

**File-Based Routing:** Next.js uses a file-based routing system, where each `.js` or `.jsx` file in the `app` directory or it's sub-directories corresponds to a route. For example:

-   `app/page.js` maps to the root URL `/`
-   `app/Favorites/page.js` maps to `/Favorites`

## API Integration
The requirement of this projecet described that there is no need to hook to live APIs and mock instead, and use localStorage to store favorites posts id.

## Styling

**Language**
`Sass`  language is used as described in the requiremnts

**Methododlogy**
Mobile-first  approach

 **Globals**
 1. `globals.scss`: Normalization of the html elements
 2. `design_variables.module.scss` One source of colors to easly change any color in the entire application
 3. `_mixins.scss` reusable media queries for 
 
**Modules**
`Sass` modules were used in styling components to ensure collision free class names

## State Management
Context-API is used to ensure a single source of truth and avoid props drilling
The Context `Posts-Context.jsx` wraps the entire Application inside the `RootLayout` in `app/layout.js`

## Deployment
[Vercel](https://vercel.com/) is used to demo this project live
The live version can be found [HERE](https://noon-assisgnment.vercel.app/)

If instead you would like to run a production version of the project locally, follow these steps
1. Build the Next.js application for production:
	```bash
	npm run build
	```
2. Start the production version on localhost
	```bash
	npm run start
	```
3. Open your web browser and visit [http://localhost:3000](http://localhost:3000/) to see the running production version of the application.


## Troubleshooting

Encountering issues during development or deployment is common. Here are some troubleshooting tips to help you resolve potential problems in your Next.js project:
1.  **Check Dependencies:** Ensure all required dependencies are installed and up-to-date by running `npm install`.
    
2.  **Clear Cache:** If you encounter unexpected behavior, try clearing the npm cache with `npm cache clean --force` and restarting your development server.
    
3.  **Check Logs:** Examine your terminal or browser console for error messages that provide insights into the issue.
    
4.  **Verify Paths:** Double-check file paths, especially when importing components or assets. Incorrect paths can lead to errors.
    
6.  **Deployment Errors:** When deploying, carefully review deployment logs for any error messages or warnings. They can provide valuable information about the issue.
    
7.  **Compatibility:** Ensure compatibility of third-party libraries with your Next.js version. Some libraries may require specific configurations.