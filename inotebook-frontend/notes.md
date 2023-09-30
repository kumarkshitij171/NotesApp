# Getting Started with Your React Project

This project is a basic setup for a React application that includes a development server. You can use the `npm run both` command to start both the React app and the server simultaneously. It's designed to work seamlessly with a MongoDB database to store and manage your notes.

## Prerequisites

Before you begin, make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download them from [nodejs.org](https://nodejs.org/).
MongoDB (Make sure the MongoDB server is up and running)
## Installation

Follow these steps to get your project up and running:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/kumarkshitij171/NotesApp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd inotebook-frontend
   ```

3. Install project dependencies:

   ```bash
   npm run install-all
   ```

## Starting the React App and Server

You can start both the React app and the server with a single command:

```bash
npm run both
```

This will concurrently run the React development server and the server. The React app will be available at [http://localhost:3000](http://localhost:3000), and the server will be available at [http://localhost:5000](http://localhost:5000).

## Available Scripts

In the project directory, you can also run the following commands:

- `npm run both`: Starts the React development server. Open [http://localhost:3000](http://localhost:3000) to view your app in the browser and starts the server.

- `npm test`: Launches the test runner in the interactive watch mode.

- `npm run build`: Builds the app for production to the `build` folder.

## Customization

Feel free to customize this project according to your needs. You can modify the React components, add additional server routes, and configure the project settings in the `package.json` and other relevant configuration files.

## Troubleshooting

If you encounter any issues or errors during the setup or development process, please refer to the official documentation for React and your server technology for troubleshooting tips and solutions.
