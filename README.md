# Portfolio Site

This project is a single-page application (SPA) built with React. It features a landing page with five sections: Home, About, Projects, Skills, and Contact. Each section occupies the full browser viewport, and smooth scrolling functionality allows users to navigate between sections seamlessly.

## Project Structure

The project is organized as follows:

```
portfolioSite
├── public
│   └── index.html          # Main HTML file serving as the entry point
├── src
│   ├── components          # Contains all React components
│   │   ├── App             # Main application component
│   │   ├── NavBar          # Navigation bar component
│   │   ├── GoHome          # Component to return to the top of the page
│   │   ├── Home            # Home section component
│   │   ├── About           # About section component
│   │   ├── Projects        # Projects section component
│   │   ├── Skills          # Skills section component
│   │   └── Contact         # Contact section component
│   ├── App.css             # Styles for the application
│   └── index.js            # Entry point for the React application
├── package.json            # Configuration file for npm
└── README.md               # Documentation for the project
```

## Features

- **Full-Viewport Sections**: Each section of the application takes up the entire browser viewport, providing a clean and focused user experience.
- **Smooth Scrolling**: Users can scroll down to navigate between sections, enhancing the overall usability of the application.
- **Responsive Design**: The application is designed to be responsive and works well on various screen sizes.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd portfolioSite
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.