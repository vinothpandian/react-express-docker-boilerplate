# React, Express and Docker starter

React 16 with Redux, server rendering, client hydration, Vite, and an Express server on port 8080. Requires Node.js 22.12+; the Docker image uses Node 24.

- `npm ci`: install the locked dependencies.
- `npm start`: build the server/client and serve the app on port 8080.
- `npm run dev`: build once, then watch client/server source and restart the server on changes.
- `npm run dev:client`: run the standalone Vite frontend on port 8081.
- `npm run build:prod`: generate `dist/server/app.cjs` and `dist/client/`.
- `npm run serve`: serve an existing production build.
- `npm test`: run component, Redux, and server-rendering tests with coverage, then lint.
- `npm run test:watch`: watch tests.
- `npm run standard`: lint source with Biome (the legacy command name remains available).

Vite replaces Webpack and esbuild compiles the Node entrypoint. React and Redux are bundled into the browser build; no external CDN globals are required. Express renders the greeting and store message into the built HTML and serves its assets. Vitest and Testing Library replace Jest/Enzyme; the Redux behavior checks remain in place.

Build the container with `docker build -t react-express-demo .`, then run `docker run --rm -p 8080:8080 react-express-demo`. Docker installs dependencies, builds the app, and removes development dependencies before serving. `docker compose up --build` is also supported. Source mounts require rebuilding to update the production container; use `npm run dev` for local watch mode.
