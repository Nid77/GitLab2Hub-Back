# GitLab2Hub-Back

## Configuration
Make sure to create a `.env` file with the following content:
```bash
AUTH_TOKEN=your_github_token
```

## Launch

```bash
npm install
npm start
```

## Docker

```bash
docker build -t gitlab2hub-back .
docker run --env-file .env -p 3000:3000 gitlab2hub-back
```
