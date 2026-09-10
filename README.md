# 🛒 Insta-Grocery

> A full-stack grocery delivery web application built with a modern
> React + TypeScript frontend and a Node.js/TypeScript backend.

**Live Demo:** https://grocery-delivery-ashen-five.vercel.app/

------------------------------------------------------------------------

## 📌 About the Project

**Insta-Grocery** is a full-stack grocery delivery application designed
to provide a smooth online grocery-shopping experience.

The project is organized into separate **client** and **server**
applications, making the codebase easier to maintain and scale.

The frontend is built with **React and TypeScript**, while the backend
follows a structured API architecture with controllers, routes,
middleware, configuration, and **Prisma** for database access.

This project was built as a practical full-stack application to
understand how a modern frontend communicates with a backend API,
manages application state, handles authentication-related concerns, and
works with persistent data.

------------------------------------------------------------------------

## ✨ Key Features

-   🛍️ Grocery-focused shopping experience
-   ⚛️ React + TypeScript frontend
-   🧩 Reusable and organized component structure
-   🗂️ Page-based frontend architecture
-   🔄 Context-based application state management
-   🔌 Separate REST-style backend architecture
-   🧭 Organized API routes and controllers
-   🛡️ Middleware layer for backend request handling
-   🗄️ Prisma-based database integration
-   🔐 Environment-variable based configuration
-   📦 TypeScript types shared across application areas
-   🚀 Deployment-ready project structure
-   ☁️ Live deployment available on Vercel

------------------------------------------------------------------------

## 🏗️ Project Architecture

The project is divided into two major parts:

``` text
INSTA-GROCERY/
│
├── client/                         # Frontend application
│   ├── public/
│   └── src/
│       ├── assets/                 # Images and static assets
│       ├── components/             # Reusable UI components
│       ├── config/                 # Frontend configuration
│       ├── context/                # React Context/state management
│       ├── pages/                  # Application pages
│       ├── types/                  # TypeScript types
│       ├── App.tsx
│       ├── App.css
│       ├── index.css
│       └── main.tsx
│
└── server/                         # Backend application
    ├── config/                     # Server configuration
    ├── controller/                 # Request/business logic
    ├── generated/                  # Generated code
    ├── ingest/                     # Backend data/ingestion related code
    ├── middleware/                 # Request middleware
    ├── prisma/                     # Prisma schema/database layer
    ├── routes/                     # API routes
    ├── types/                      # Backend TypeScript types
    ├── .env
    ├── prisma.config.ts
    ├── seed.ts                     # Database seed script
    ├── server.ts                   # Server entry point
    └── vercel.json                 # Deployment configuration
```

------------------------------------------------------------------------

## 🧰 Tech Stack

### Frontend

-   **React**
-   **TypeScript**
-   **Vite**
-   **CSS**
-   **React Context API**
-   **ESLint**

### Backend

-   **Node.js**
-   **TypeScript**
-   **Express-style API architecture**
-   **Prisma ORM**
-   **REST API**
-   **Middleware-based request handling**

### Database

-   **Prisma**
-   Database configuration through environment variables

### Deployment

-   **Vercel**

------------------------------------------------------------------------

## 📂 Folder Responsibilities

### `client/src/components`

Contains reusable UI components that can be used across different pages
of the application.

### `client/src/pages`

Contains page-level components representing different screens/routes of
the grocery application.

### `client/src/context`

Contains React Context logic used for sharing application state between
components without unnecessary prop drilling.

### `client/src/config`

Contains frontend configuration and application-level settings.

### `client/src/types`

Contains TypeScript type definitions used to keep frontend data strongly
typed.

### `server/controller`

Contains backend request handlers and application/business logic.

### `server/routes`

Defines backend API endpoints and connects routes with their respective
controllers.

### `server/middleware`

Contains middleware used during request processing, such as request
validation, authentication-related processing, or other reusable
server-side logic.

### `server/prisma`

Contains the Prisma database layer/schema and related database
configuration.

### `server/generated`

Contains generated code produced by project tooling.

------------------------------------------------------------------------

## 🔄 Application Flow

A simplified request flow looks like this:

``` text
User
  │
  ▼
React / TypeScript Frontend
  │
  ▼
Pages + Components + Context
  │
  ▼
API Request
  │
  ▼
Backend Routes
  │
  ▼
Middleware
  │
  ▼
Controllers
  │
  ▼
Prisma
  │
  ▼
Database
```

The response then travels back through the backend API to the frontend,
where the UI is updated accordingly.

------------------------------------------------------------------------

## 🚀 Getting Started

### 1. Clone the repository

``` bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd INSTA-GROCERY
```

### 2. Install frontend dependencies

``` bash
cd client
npm install
```

### 3. Install backend dependencies

Open another terminal:

``` bash
cd server
npm install
```

### 4. Configure environment variables

Create the required `.env` files based on the variables used by your
application.

For example:

``` env
DATABASE_URL="your_database_connection_string"
```

> Keep secret keys and database credentials out of Git. Use
> `.env.example` to document required variables without exposing real
> credentials.

### 5. Configure Prisma

From the `server` directory, run the Prisma commands required by your
database setup.

A common development workflow is:

``` bash
npx prisma generate
npx prisma migrate dev
```

If your project uses a seed script:

``` bash
npx prisma db seed
```

### 6. Start the frontend

From `client`:

``` bash
npm run dev
```

### 7. Start the backend

From `server`:

``` bash
npm run server
```

> The exact script names depend on the `package.json` files in the
> project. If your scripts use a different command, use the
> corresponding script defined in each package.

------------------------------------------------------------------------

## 🌐 Live Demo

Try the deployed application:

**https://grocery-delivery-ashen-five.vercel.app/**

------------------------------------------------------------------------

## 📚 Learning Reference

This project was developed as a hands-on learning project with guidance from the following YouTube tutorial:

🔗 [YouTube Tutorial](https://www.youtube.com/watch?v=saiDl2Qacm8&t=32404s)

------------------------------------------------------------------------

## 🔐 Environment Variables

Do not commit private credentials to GitHub.

Recommended approach:

``` text
.env
.env.local
```

should remain private, while:

``` text
.env.example
```

can contain the names of required variables with placeholder values.

Example:

``` env
DATABASE_URL=
JWT_SECRET=
API_URL=
```

Only include variables that are actually required by your project.

------------------------------------------------------------------------

## 🧪 Development

Before pushing changes, it is good practice to check:

``` bash
npm run lint
```

and build the application:

``` bash
npm run build
```

Run these commands inside the relevant `client` or `server` directory
according to the scripts defined in that package.

------------------------------------------------------------------------

## 📈 What I Learned

Working on Insta-Grocery helped me strengthen practical full-stack
development skills, including:

-   Building interfaces with React and TypeScript
-   Creating reusable React components
-   Managing shared state with Context API
-   Structuring a frontend application into components and pages
-   Designing a backend using routes, controllers, and middleware
-   Connecting an application to a database through Prisma
-   Working with TypeScript across frontend and backend
-   Managing environment variables securely
-   Understanding frontend--backend communication
-   Preparing a full-stack application for deployment

------------------------------------------------------------------------

## 👨‍💻 Author

**Ankit Saini**

Full-Stack Web Development Project  
Built with React, TypeScript, Node.js, and Prisma.

---

## 📄 License

This project was created for learning and portfolio purposes.

Please respect the licensing terms of the original tutorial, third-party libraries, assets, and other resources used in this project.
