# Bot Battlr App

Welcome to the Bot Battlr App README! This application allows users to manage a collection of bots, add them to their army, and perform various actions on them.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Overview
The Bot Battlr App is a React-based web application that enables users to interact with a collection of bots. It provides features such as adding bots to their army, releasing bots from the army, and permanently discharging bots from service.

## Features
- View profiles of all bots rendered in `BotCollection`.
- Add an individual bot to the army by clicking on it. The bot can be enlisted only once.
- Release a bot from the army by clicking on it.
- Discharge a bot from service permanently by clicking the red button marked "x", which deletes the bot from the backend and from the `YourBotArmy` on the frontend.

## Installation
To install and run the Bot Battlr App locally, follow these steps:
1. Clone the repository:
   ```
   git clone https://github.com/your-username/bot-battlr-app.git
   ```
2. Navigate to the project directory:
   ```
   cd bot-battlr-app
   ```
3. Install dependencies:
   ```
   yarn install
   ```
4. Start the development server:
   ```
   yarn start
   ```
5. The application will be running at `http://localhost:3000`.

## Usage
Once the application is running, you can:
- View profiles of all bots in the `BotCollection` section.
- Click on a bot card to add it to your army in the `YourBotArmy` section.
- Click on a bot card in the army to release it.
- Click the red "x" button on a bot card in the army to permanently discharge the bot from service.

## Endpoints
The Bot Battlr App uses the following endpoints:
- `GET /bots`: Fetches profiles of all bots.
- `DELETE /bots/:id`: Deletes a bot permanently from the backend.

## Contributing
Contributions are welcome! Here's how you can contribute:
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## Authors
- God
- Kelvin Kuria


## License
This project is licensed under the [MIT License](LICENSE).

