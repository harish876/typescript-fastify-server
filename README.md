# Multi-Tenanted RBAC Authentication API

This project is a multi-tenanted Role-Based Access Control (RBAC) authentication API built with Node.js, Drizzle ORM, TypeScript, PostgreSQL, and Neon. It provides a secure and scalable solution for managing user authentication and authorization within a multi-tenant environment.

## Features

- User registration and authentication with email and password
- Role-based access control (RBAC) for managing user permissions
- Support for multi-tenant architecture with isolated user data
- Token-based authentication using JSON Web Tokens (JWT)
- Secure password hashing and salting using bcrypt
- Integration with Drizzle ORM for database management
- Written in TypeScript for enhanced maintainability and type safety
- PostgreSQL database for reliable data storage
- Neon for interacting with native libraries and achieving high performance

## Prerequisites

To run this project locally, you need to have the following installed on your machine:

- Node.js (version X.X.X)
- PostgreSQL (version X.X.X)

## Installation

1. Clone the repository:
2. Navigate to the project directory:
3. Install the dependencies:
4. Set up the database:
- Create a new PostgreSQL database for the project.
- Update the database configuration in the `src/db/index.ts` file.

5. Build the project:
6. Start the server:

7. The API will now be running at `http://localhost:3000`. You can send requests to the endpoints using a tool like Postman.

## Usage

Please refer to the API documentation provided in the `docs` directory for detailed information on the available endpoints, request/response formats, and authentication requirements.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request. Make sure to follow the contribution guidelines outlined in the `CONTRIBUTING.md` file.

## License

This project is licensed under the [MIT License](LICENSE).
