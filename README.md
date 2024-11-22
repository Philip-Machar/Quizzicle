# Quizzicle

A React-based multiple-choice quiz application that challenges users with historical trivia questions.

![Quizzicle Screenshot](/public/images/quizzical_screenshot.png)

[Live Demo](your-live-demo-url-here)

## Description

Quizzicle is an interactive quiz application that fetches random historical trivia questions from the Open Trivia Database. Players can select answers, receive immediate feedback, and see their final score after completing the quiz.

## Features

- 5 random historical trivia questions from medium difficulty
- Dynamic answer shuffling to prevent predictability
- Instant answer validation with color-coded feedback
- Score tracking and display
- HTML entity decoding for clean question and answer text
- Responsive design with Tailwind CSS
- Single-page application using React Router

## Technologies Used

- React
- React Router
- Tailwind CSS
- Open Trivia Database API
- nanoid (for unique ID generation)
- JavaScript (ES6+)

## Project Structure

- `App.jsx`: Main application and routing setup
- `routes.jsx`: Defines application routes
- `Intro.jsx`: Landing page with quiz start button
- `Questions.jsx`: Core quiz logic and rendering

## Getting Started

To run this project locally:

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`

## How it Works

### Key Functionalities

- Fetches 5 random historical trivia questions on component mount
- Allows user to select answers for each question
- Provides real-time visual feedback on answer selection
- Calculates and displays final score after completing the quiz

### State Management

- Uses React `useState` for managing:
  - Questions state
  - Selected answers
  - Score
  - Answer reveal status

### Answer Handling

- Dynamically shuffles answer choices
- Decodes HTML entities in questions and answers
- Tracks selected answers
- Reveals correct/incorrect answers with color coding

## Game Rules

1. Click "Start Quiz" on the intro page
2. Read each question and select an answer
3. Click "Check Answers" to see your score
4. Answers are color-coded (green for correct, red for incorrect)

