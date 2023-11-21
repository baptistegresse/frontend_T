# Pong Game Dashboard

This is a simple web application for a Pong game dashboard with multilingual support. The application is built using JavaScript and follows the Model-View-Controller (MVC) design pattern.

## Table of Contents

- [Overview](#overview)
- [Files and Structure](#files-and-structure)
- [Multilingual Support](#multilingual-support)
- [Usage](#usage)

## Overview

The Pong Game Dashboard consists of different pages:

1. **Dashboard**: Displays a welcome message and a button to find a quick game.

2. **Game**: Shows the current game state, including the username, opponent name, score, and positions.

3. **Tournament**: Provides a tournament board to check the actual score and game in real-time.

Each page extends the `AbstractView` class, which serves as the base for all views in the application.

## Files and Structure

- **AbstractView.js**: The base view class that other views extend. It includes common functionalities such as setting the title and handling translations.

- **DashboardView.js**: The view class for the dashboard page. It includes a welcome message and a button to find a quick game.

- **GameView.js**: The view class for the game page. It displays the current game state, including the username, opponent name, score, and positions.

- **TournamentView.js**: The view class for the tournament page. It provides a tournament board to check the actual score and game in real-time.

- **translations_en.js**: Translations for English.

- **translations_es.js**: Translations for Spanish.

- **translations_fr.js**: Translations for French.

## Multilingual Support

The application supports multiple languages (English, Spanish, and French) through a translation system. Each page includes translations for the respective languages, allowing users to switch between languages dynamically.

The selected language is stored in the browser's local storage to persist the user's language preference across sessions.

## Usage

To run the application, simply open the HTML file in a web browser. The default language is English, but users can change the language preference using the language dropdown provided on each page.

Feel free to customize the translations and add more features to enhance the Pong Game Dashboard!
