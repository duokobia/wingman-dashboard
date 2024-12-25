# React TypeScript Project

## Overview

This project is a frontend application built for submission for the Wingman frontend assessment using React and TypeScript. It is designed to showcase my skills in frontend development. The application features an interactive and responsive dashboard that helps users visualize data related to consultations, orders, and sales metrics across different devices.

## Features

- **Dynamic Data Visualization**: Displays various metrics using charts and graphs.
- **Responsive Design**: Built with Tailwind CSS for a modern and responsive user interface.
- **Interactive Components**: Includes dropdowns and tables for user interaction.
- **Forecasting Insights**: Provides insights into sales and consultations.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Icons**: For including icons in the UI.
- **React Chart Libraries**: For rendering charts and graphs.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
  ```
  git clone https://github.com/duokobia/wingman-dashboard.git
  cd wingman dashboard
  ```

2. Install dependencies:
 ```
 npm install
 ```


3. Start the development server:
```
npm start
```


4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Deployment

This React application has been deployed on [Vercel](https://wingman-dashboard-chi.vercel.app/). You can access the live version of the application at:

[Live Demo](https://your-deployed-app-url.com)

### Notes on Deployment
- Ensure that all environment variables are set correctly in your deployment settings.
- The build command used during deployment is `npm run build`.

## Usage

Once the application is running, you can interact with the dashboard to view various metrics:

- Use the dropdown to filter data based on different time periods.
- View detailed insights about consultations and orders.
- Explore charts that represent sales trends and forecasts.

## Code Structure

The project structure is organized as follows:


src/
├── components/ # Reusable components
│ ├── Dropdown.tsx # Dropdown component
│ ├── OrdersTable.tsx # Orders table component
│ └── ... # Other components
├── charts/ # Chart components
│ ├── ConsultationsCharts.tsx # Chart for consultations
│ └── ... # Other chart components
├── App.tsx # Main application component
├── index.tsx # Application entry point
└── ... # Other files


## Acknowledgments

- Thanks to the creators of React, TypeScript, Tailwind CSS, and all other libraries used in this project.
