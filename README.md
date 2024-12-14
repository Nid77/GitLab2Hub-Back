# GitLab2Hub-Back

This is the backend part of the GitLab2Hub project.

> **Note**: This project is **not** meant to be run as a standalone application. It is designed to work in conjunction with the [frontend part](https://github.com/Nid77/GitLab2Hub-Front).

## Requirements

To run this backend project, you need the following:

-   **Node.js** version 20.x or higher
-   **npm** (Node Package Manager)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Nid77/GitLab2Hub-Back.git
    ```

2. Navigate to the project directory:

    ```bash
     cd GitLab2Hub-Front
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Configuration

Make sure to create a `.env` file with the following content:

```bash
FRONTEND_URL=your_frontend_url
AUTH_TOKEN=your_auth_token
```

## Running the Application

Start the server in development mode:

```bash
npm run dev
```

Start the server in production mode:

```bash
npm run build
npm start
```

## Use Docker

```bash
docker build -t gitlab2hub-back .
docker run --env-file .env -p 3000:3000 gitlab2hub-back
```
