# Drizzle Starter

This is a starter project for building web applications with Next.js, Drizzle, and Turso.

## Stack

- React.js
- Next.js
- Drizzle
- Turso

## DB setup

Follow the drizzle guide below to set up your database. Most of the work is already complete. You just need to configure the environment variables.

[Link to guide](https://orm.drizzle.team/learn/tutorials/drizzle-with-turso)

## Booting up

First, install the dependencies:

```sh
pnpm i
```

Then, you can start the development server:

```sh
pnpm dev
```

Open http://localhost:3000 with your browser to see the result.

## Scripts

- `dev`: Starts the development server
- `build`: Builds the application for production
- `start`: Starts a simple server for the production build
- `lint`: Runs the linter
- `format`: Formats the code using prettier
- `dev-db`: Starts the development database
- `generate-db`: Generates a database migration
- `push-db`: Pushes the database schema changes
- `studio-db`: Opens the Drizzle studio

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
[MIT](https://choosealicense.com/licenses/mit/)
