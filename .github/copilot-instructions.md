# Copilot Instructions

## Project Overview
- This is a simple JavaScript SPA served by a Node.js + Express backend.
- Frontend files are in `public/`.
- Backend entrypoint is `server.js`.

## Dev Commands
- Install dependencies: `npm install`
- Run app locally: `npm start`
- App URL: `http://localhost:3000`

## API Contract
- Login endpoint: `POST /api/login`
- Request body JSON:
  - `username` (string, required)
  - `password` (string, required)
- Response:
  - `200` with `{ success: true, message, user }` on success
  - `400` when required fields are missing
  - `401` when credentials are invalid

## Code Guidelines
- Keep the app dependency-light and beginner-friendly.
- Prefer small, readable functions and clear variable names.
- Preserve existing API response shape unless explicitly asked to change it.
- Do not add frameworks (React/Vue/etc.) unless requested.
- Keep styles in `public/styles.css` and behavior in `public/app.js`.

## Security Notes
- Current credentials are demo-only and in-memory.
- If asked to improve auth, prefer environment variables and hashed passwords.
- Never commit secrets or tokens.

## Git Hygiene
- Do not commit `node_modules/`.
- Keep pull requests focused to one feature or fix.
