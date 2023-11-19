# React Whack-a-Mole Game

Welcome to the React Whack-a-Mole game! This is a fun and interactive game built using React, challenging players to test their reflexes by whacking moles as they pop up from their holes. This README provides essential information on setting up and playing the game.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Installation](#installation)
3. [Gameplay](#gameplay)
4. [Folder Structure](#folder-structure)
5. [Components](#components)
6. [Game Logic](#game-logic)
7. [Customization](#customization)
8. [Technical Requirements](#technical-requirements)
9. [Contributing](#contributing)
10. [License](#license)

## Getting Started

To get started with the React Whack-a-Mole game, follow the installation instructions below.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/LuisFPeluyera/react-whack-a-mole.git
    ```

2. Navigate to the project directory:

    ```bash
    cd react-whack-a-mole
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to play the game.

## Gameplay

The objective of the game is to whack as many moles as possible within the given time limit. Moles will randomly pop up from their holes, and your task is to click on them before they disappear.

## Folder Structure

The project follows a standard React folder structure:

- `src`: Contains the source code.
    - `components`: React components for the game.
    - `styles`: CSS styles for the components.
    - `App.js`: Main application component.
    - `index.js`: Entry point for the application.

## Components

The game is divided into several components for better organization:

- `Mole`: Represents a mole that pops up from a hole.
- `Game`: Manages the game state and logic.
- `Scoreboard`: Displays the player's score and other game information.

## Game Logic

The game logic is handled in the `Game` component. It manages mole appearance, player input, scoring, and game over conditions.

## Customization

Feel free to customize the game by adjusting the following:

- Mole appearance frequency.
- Time limit.
- Game difficulty.

Customization options can be found in the `Game` component or a dedicated configuration file.

## Technical Requirements

- Compatible with modern web browsers (Chrome, Firefox, Safari, etc.).
- Node.js and npm installed for development.

## Contributing

Contributions are welcome! If you find a bug or have an enhancement in mind, please submit an issue or create a pull request.

## License

This React Whack-a-Mole game is licensed under the [MIT License](LICENSE). Enjoy the game! If you have any questions or feedback, feel free to reach out.
