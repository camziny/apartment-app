# Apartment App

A Next.js application to manage apartments, including features to list, create, edit, and delete apartments, as well as search apartments by name.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (https://nodejs.org/)
- pnpm (https://pnpm.io/)
- PostgreSQL (https://www.postgresql.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/apartment-app.git
   cd apartment-app
   ```

2. Install dependencies
   `pnpm install`

3. Se up the environment variables

- Create a `.env` file in the root of your project.
- copy the contents of `.env.example` into `.env`
- Replace `your-username` and `your-password` with your PostgreSQL credentials.

4. Set up the database

- Initialize the database and run migrations
  `pnpx prisma generate`
  `pnpx prisma migrate dev --name init`

5. Start the development server

- pnpm dev

The application should no be running on `http://localhost:3000`.

## Demo

Check out the demo video below to see the application in use:

[![Application Demo](https://www.loom.com/share/529f984ccbfb4b58b3937f115580c8b1)](https://www.loom.com/share/529f984ccbfb4b58b3937f115580c8b1)
