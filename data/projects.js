let projectsArray = [
    {
    name: 'Day 24: Mail Merge Challenge',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/mail_merge',
    topic: 'Files, Directories, and Paths',
    description:
      'Opening, reading, and writing files to complete a mail merge project.',
    created: 'June 17, 2021',
  },
  {
    name: 'Day 23: Turtle Crossing',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/turtleCrossing',
    topic: 'Turtle Crossing Capstone Project',
    description:
      'Similar to that of Frogger, the goal of Turtle Crossing is to cross a busy road and get to the other side without being hit by a car. This game is built using Object-Oriented Programming, classes, and game logic.',
    created: 'June 16, 2021',
    image:'turtleCrossing.gif'
  },
  {
    name: 'Day 22: Pong Game',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/pongGame',
    topic: 'Intermediate Game Logic',
    description:
      'Building Pong, the classic arcade game, with Turtle, classes, class inheritance, and game logic.',
    created: 'June 15, 2021',
    image:'pong.gif'
  },
  {
    name: 'Day 21: Snake Game Part 2',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/snakeGamePt2',
    topic: 'Class Inheritance',
    description:
      'Part II of the Snake Game Part I build. Creates and updates a scoreboard and detects collisions with food, wall or tail. Built using Object-Oriented Programming and class inheritance.',
    created: 'June 14, 2021',
    image:'snake_pt2.gif'
  },
  {
    name: 'Day 20: Snake Game Part 1',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/snakeGame',
    topic: 'Animation and Coordinates',
    description:
      'Part 1 of the two-part build of the classic Snake Game. Built using Object-Oriented Programming.',
    created: 'June 11, 2021',
    image:'snake_game_pt1.gif'
  },
    {
    name: 'Day 19: Turtle Race',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/turtleRace',
    topic: 'More Turtle Graphics, Event Listeners, State, and Multiple Instances',
    description:
      'A digital turtle race built using event listeners, state, and multiple instances of Turtle Graphics. The user is asked to predict a winner, and each turtle takes a random number of steps until a winner crosses the finish line.',
    created: 'June 11, 2021',
    image:'turtle_gif.gif'
  },
  {
    name: 'Day 18: Hirst Painting',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/hirstPainting',
    topic: 'Understanding Turtle Graphics and Reading Documentation',
    description:
      'A digital art creation app inspired by Damien Hirst\'s spot paintings, which feature rows of randomly colored circles.',
    created: 'June 10, 2021',
    image:'hirst_gif.gif'
  },
  {
    name: 'Day 17: Quiz Game',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/quizGame',
    topic: 'Object-Oriented Programming',
    description:
      'A quiz game built using Object-Oriented Programming. The QuizBrain class has methods that check for remaining unasked questions, asks the next question, checks the user\'s answer, and print\'s the user\'s current score.',
    created: 'June 9, 2021',
  },
  {
    name: 'Day 16: Refatored OOP Coffee Machine',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/coffeeMachineV2',
    topic: 'Object-Oriented Programming',
    description:
      'An updated version of Coffee Machine (below), which has been refactored using Object-Oriented Programming.',
    created: 'June 8, 2021',
    image: 'coffee-machine-v2.png',
  },
  {
    name: 'Day 15: Coffee Machine Project',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/coffeeMachine',
    topic: 'Local Development Environment',
    description:
      'A virtual coffee machine that takes orders, checks available resources (coffee, water, milk) before fulfilling orders, processes payments and gives change, and renders a report of the machine\'s current resources and money',
    created: 'June 7, 2021',
    image: 'coffee-machine.png',
  },
  {
    name: 'Day 14: Higher Lower Game Project',
    URL: 'https://replit.com/@SaraStrasner/Day-14-Higher-Lower-Game',
    topic: 'Local vs. Global Scope',
    description:
      'An implementation of the Higher Lower game. The user is given two cards and has to decide which of the two has more Instagram followers. This game is built using game logic, conditionals, loops, and local and global variables. ',
    created: 'June 7, 2021',
    image: 'higher-lower.png',
  },
  {
    name: 'Day 13: Debugging',
    topic: 'Debugging: How to Fix and Find Errors',
    description: 'A series of debugging exercises to develop debugging skills.',
    created: 'June 7, 2021',
  },
  {
    name: 'Day 12: Number Guessing Game',
    URL: 'https://replit.com/@SaraStrasner/Day-12-Number-Guessing',
    topic: 'Local vs. Global Scope',
    description:
      'An number guessing game built using a variety of local and global variables and namespaces.',
    created: 'June 7, 2021',
    image: 'number-guessing-game.png',
  },
  {
    name: 'Day 11: Blackjack Capstone Project',
    URL: 'https://replit.com/@SaraStrasner/Day-11-Blackjack',
    topic: 'Capstone Project',
    description:
      'An interactive blackjack game using using a variety of function and loops, and advanced game logic.',
    created: 'June 4, 2021',
    image: 'blackjack.png',
    flowchart: 'blackjack-flowchart.jpg',
  },
  {
    name: 'Day 10: Calculator App',
    URL: 'https://replit.com/@SaraStrasner/Day-10-Calculator',
    topic: 'Functions with Outputs',
    description:
      'A calculator using recursion, while loops, and functions that provide outputs',
    image: 'calculator.png',
    created: 'June 3, 2021',
  },
  {
    name: 'Day 9: Silent Auction',
    URL: 'https://replit.com/@SaraStrasner/Day-9-Blind-Auction',
    topic: 'Python Dictionaries and Nesting',
    description:
      "A CLI silent auction app that askes for a bidder's name and bid, then clears the screen for the next bidder to enter their name and bid. Each bid is added to a dictionary. Once all bids are entered, the largest bid is found in the dictionary and returned as the winner of the silent auction.",
    image: 'auction.png',
    created: 'June 3, 2021',
  },
  {
    name: 'Day 8: Caesar Cipher',
    URL: 'https://replit.com/@SaraStrasner/Day-8-Caesar-Cipher',
    topic: 'Function Parameters',
    description:
      'Implementing a Caesar cipher, which takes a message and a shift value, then encrypts/decrypts the message shifting each letter forward or backward based on the shift value.',
    image: 'cipher.png',
    created: 'June 3, 2021',
  },
  {
    name: 'Day 7: Hangman',
    URL: 'https://replit.com/@SaraStrasner/Day-7-Hangman',
    topic: 'Conditionals and Loops',
    description:
      'A hangman game built with lists, if/else statements, and loops.',
    image: 'hangman.png',
    created: 'May 14, 2021',
  },
  {
    name: 'Day 6: Escaping the Maze',
    topic: 'Functions and Karel',
    description:
      'Using loops and conditionals to help Karel the robot escape a series of obstacles.',
    created: 'May 13, 2021',
  },
  {
    name: 'Day 5: Password Generator',
    URL: 'https://replit.com/@SaraStrasner/Day-5-Password-Generator',
    topic: 'Loops',
    description:
      'A password generator that user for loops to generate a randomized password using user input.',
    image: 'pw-generator.png',
    created: 'May 12, 2021',
  },
  {
    name: 'Day 4: Rock, Paper, Scissors Game',
    URL: 'https://replit.com/@SaraStrasner/Day-4-Rock-Paper-Scissors',
    topic: 'Randomization and Lists',
    description:
      'An interactive rock, paper, scissors game built using conditional logic.',
    image: 'rock-paper-scissors.png',
    created: 'May 11, 2021',
  },
  {
    name: 'Day 3: Treasure Island Game',
    URL: 'https://replit.com/@SaraStrasner/Day-3-Treasure-Island',
    topic: 'Control Flow and Logical Operators',
    description:
      'A text-based adventure game that gives the user a series of binary choices that may or may not lead them to a hidden treasure.',
    image: 'treasure-island.png',
    created: 'May 10, 2021',
  },
  {
    name: 'Day 2: Tip Calculator',
    URL: 'https://replit.com/@SaraStrasner/Day-2-Tip-Calculator',
    topic: 'Data Types',
    description:
      'A tip calculator that uses basic mathematical operators to calculate a grand total with tip, and then splits that number among how many will be paying the bill.',
    image: 'tip-calculator.png',
    created: 'May 19, 2021',
  },
  {
    name: 'Day 1: Band Name Generator',
    URL: 'https://replit.com/@SaraStrasner/Day-1-Band-Name-Generator',
    topic: 'Working with Variables',
    description:
      'A Python implementation of the classic band name generator. City You Grew Up In + Name of Your First Pet = Perfect Band Name.',
    image: 'band-name-generator.png',
    created: 'May 8, 2021',
  },
];

export default projectsArray;
