`# User CRUD Application

This is a simple Node.js application built with TypeScript that provides CRUD functionality for user management. It allows users to register, login, view all users, update user details, and delete users. The application also implements JWT authentication to secure certain endpoints.

## Features

- User Registration
- User Login (JWT-based Authentication)
- View All Users (requires authentication)
- Update User Information (requires authentication)
- Delete User (requires authentication)
- User Logout (JWT cookie removal)
- Role-based access control (future enhancement)

## Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **MongoDB** (local or remote database, such as MongoDB Atlas)
- **TypeScript** (for development)

## Installation

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/your-username/user-crud-app.git
   cd user-crud-app
   \`\`\`

2. Install dependencies:

   \`\`\`bash
   npm install
   \`\`\`

3. Set up environment variables by creating a \`.env\` file in the root directory and adding the following:

   \`\`\`
   JWT_SECRET=your_secret_key
   MONGO_URI=your_mongodb_connection_string
   NODE_ENV=development
   \`\`\`

4. Compile the TypeScript code:

   \`\`\`bash
   npx tsc
   \`\`\`

5. Start the server:

   \`\`\`bash
   npm start
   \`\`\`

   The server will run on \`http://localhost:5000\`.

## API Endpoints

- **POST** \`/register\` - Register a new user (name, email, password)
- **POST** \`/login\` - Login with email and password (returns JWT token)
- **POST** \`/logout\` - Logout (clears JWT cookie)
- **GET** \`/\` - Get all users (requires JWT authentication)
- **PUT** \`/:id\` - Update user information (requires JWT authentication)
- **DELETE** \`/:id\` - Delete a user (requires JWT authentication)

## Example Requests

### 1. Register a New User

**POST** \`/register\`

**Request Body:**
\`\`\`json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "yourpassword"
}
\`\`\`

### 2. Login

**POST** \`/login\`

**Request Body:**
\`\`\`json
{
  "email": "johndoe@example.com",
  "password": "yourpassword"
}
\`\`\`

**Response:**
\`\`\`json
{
  "message": "Login successful"
}
\`\`\`

### 3. Get All Users

**GET** \`/\`

**Headers:**
\`\`\`json
{
  "Authorization": "Bearer <your_jwt_token>"
}
\`\`\`

### 4. Update User

**PUT** \`/userId\`

**Request Body:**
\`\`\`json
{
  "name": "Updated Name"
}
\`\`\`

### 5. Delete User

**DELETE** \`/userId\`

**Headers:**
\`\`\`json
{
  "Authorization": "Bearer <your_jwt_token>"
}
\`\`\`

## Testing with Postman

To test the API endpoints, you can use Postman:

1. Create a collection and add requests for each of the API endpoints.
2. Set the Authorization header for the requests that require authentication with the JWT token after login.

## Development

- To run the app in development mode (with live reloading), you can use \`nodemon\`:
  
  \`\`\`bash
  npm run dev
  \`\`\`

- This will automatically restart the server when you make changes to the source files.

## License

This project is open-source and available under the [MIT License](LICENSE).
`;
