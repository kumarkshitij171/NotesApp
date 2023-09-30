# Notes App Backend

Welcome to the backend application of the Notes App! This repository contains the Node.js and Express.js server that powers the backend of your notes management system. It's designed to work seamlessly with a MongoDB database to store and manage your notes.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
- [Database](#database)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will guide you through setting up and running the Notes App backend on your local machine.

### Prerequisites

Before you begin, make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Make sure the MongoDB server is up and running)

### Installation

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/kumarkshitij171/NotesApp.git
   ```

2. Navigate to the project folder:

   ```shell
   cd inotebook-backend
   ```

3. Install the required npm packages:

   ```shell
   npm install-all
   ```

## Usage

To run the Notes App backend, use the following command:

```shell
npm start
```

The server will start at `http://localhost:5000` by default. You can change the port in the configuration if needed.

### API Endpoints

The Notes App backend provides the following API endpoints:

- **POST /api/auth/createuser**: Create an user.
- **POST /api/auth/login**: User Login.
- **POST /api/auth/dashboard**: Showing dashboard to the user.
- **GET /api/notes/fetchallnotes**: Fetch all notes.
- **POST /api/notes/addnote**: Create a new note.
- **PUT /api/notes/updatenote/:id**: Update a specific note by ID.
- **DELETE /api/notes/deletenote/:id**: Delete a specific note by ID.

### Authentication

To secure your API endpoints, consider implementing authentication mechanisms like JWT (JSON Web Tokens) or OAuth. You can configure authentication middleware in the `fetchUser.js` file.

---

Feel free to reach out if you have any questions or need further assistance. Happy coding!
