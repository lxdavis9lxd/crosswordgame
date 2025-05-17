# crosswordgame

## Project Description

This project is a crossword game that has 3 levels: easy, intermediate, and advanced. The game allows players to register, keep track of their completed games, and save their game progress. The application is built using NodeJS, Express, EJS, and a MySQL database with Sequelize REST APIs.

## Features

- User registration and authentication
- User profile management
- Three levels of crossword puzzles: easy, intermediate, and advanced
- Game saving and loading functionality
- Tracking of completed games
- Hybrid approach for crossword puzzles: predefined puzzles and dynamic puzzle generation

## Setup Instructions

### Dependencies

- NodeJS
- Express
- EJS
- MySQL
- Sequelize
- Body-parser
- Express-session
- Multer
- Connect-session-sequelize
- Bcrypt (optional, for password hashing)
- Express-validator (optional, for form validation)

### Database Configuration

1. Install MySQL and create a database for the project.
2. Update the `config/config.json` file with your database configuration settings for development, test, and production environments.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/lxdavis9lxd/crosswordgame.git
   ```
2. Navigate to the project directory:
   ```
   cd crosswordgame
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the Project

1. Start the server:
   ```
   npm start
   ```
2. Access the application in your web browser at `http://localhost:3000`.

## Usage

### User Registration

1. Navigate to the registration page.
2. Fill out the registration form with your username, email, and password.
3. Submit the form to create a new account.

### User Login

1. Navigate to the login page.
2. Enter your username and password.
3. Submit the form to log in to your account.

### User Profile Management

1. Navigate to your profile page.
2. View and update your profile information, including uploading a profile picture.

### Playing the Game

1. Select a level (easy, intermediate, or advanced) to start a new game.
2. Fill in the crossword puzzle grid with your answers.
3. Save your game progress at any time.
4. Load your saved game to continue playing.

### Tracking Completed Games

1. View your completed games and their details on your profile page.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```
   git push origin feature-name
   ```
5. Create a pull request.

## License

This project is licensed under the MIT License.
