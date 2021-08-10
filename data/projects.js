let projectsArray = [
  {
    name: 'Day 48: Selenium Webdriver',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/selenium_webdriver',
    topic: 'Selenium Webdriver Broswer and Game Bot',
    description:
      "Uses Selenium Webdriver to create a bot that plays Cookie Clicker by clicking on the cookie as fast as possible. Every 5 seconds, it checks the right-hand pane to see which upgrades are affordable and purchase the most expensive one. Every 5 minutes, the bot stops and prints the cookies per second.",
    created: 'August 10, 2021',
    image: 'cookies.gif',
  },
  {
    name: 'Day 47: Amazon Price Tracker Project',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/price_tracker',
    topic: 'Web Scraping with Amazon',
    description:
      "An automated price tracker that uses BeautifulSoup to monitor the price of a given item on Amazon. If the price drops below a specified threshold, smtplib emails me with the price and item name.",
    created: 'August 4, 2021'
  },
  {
    name: 'Day 46: Python Time Machine',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/timeMachine',
    topic: 'Web Scraping and Spotify Automation',
    description:
      "A 'Time Machine' that creates a Spotify playlist of the Billboard Top 100 songs for a user-provided date. Uses BeautifulSoup and requests for web scraping and Spotipy for authentication and playlist creation.",
    created: 'August 3, 2021',
    image: 'spotify.png'
  },
  {
    name: 'Day 45: Movie Watchlist',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/movieWatchlist',
    topic: 'Scraping the Web with BeautifulSoup',
    description:
      "A list of must-see movies built using data scraped via BeautifulSoup from Empire's list of 100 best movies of all time.",
    created: 'August 2, 2021',
  },
  {
    name: 'Day 41 - 44: HTML & CSS',
    topic: 'Web Fundamentals',
    description: 'A 4-day series on basic and intermediate HTML and CSS.',
    created: 'July 16, 2021',
  },
  {
    name: 'Day 40: Capstone Part II Flight Club',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/flight_club',
    topic: 'Capstone Project Part II',
    description:
      'A continuation of the Cheap Flight Finder project that accomodates multiple users, handles exceptions, handles destinations without direct flights, and emails all users when deals arise.',
    created: 'July 14, 2021',
  },
  {
    name: 'Day 39: Capstone Part I Cheap Flight Finder',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/cheap_flight_finder',
    topic: 'Capstone Project',
    description:
      'A cheap flight finder that reads city data and maximum prices from a Google sheet and checks for the cheapest flights from tomorrow to 6 months later for all the cities in the Google Sheet. If the price is lower than the lowest price listed in the Google Sheet, it sends an SMS to me. Uses Object-Oriented Programming, the Sheety API, Kiwi Partners Flight Search API, Tequila Flight Search API, and Twilio SMS API.',
    created: 'July 13, 2021',
  },
  {
    name: 'Day 38: Exercise Tracker',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/workout_tracker',
    topic: 'Exercise Tracking with Python and Google Sheets',
    description:
      "An application that uses natural language processing, Nutritionix API, and Sheety API to prompt for the user's description of their exercise and adds it to a Google Sheet.",
    created: 'July 12, 2021',
  },
  {
    name: 'Day 37: Habit Tracker',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/stock_news_monitor',
    topic: 'Advanced Authentication and POST/PUT/DELETE requests',
    description:
      'A full-CRUD habit tracker built with Pixela, requests, and datetime.',
    created: 'July 9, 2021',
  },
  {
    name: 'Day 36: Stock News Monitor',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/stock_news_monitor',
    topic:
      'Intermediate API Keys, Authentication, Environment Variables, and Sending SMS',
    description:
      'An application that checks the closing stock prices for a given stock. If the closing stock price has fluctuated by over 5% in the last two days, it sends a text with the percentage difference, and the 3 latest news articles about that company. Built using Alpha Vantage API, News API, Twilio, requests, and datetime.',
    created: 'July 8, 2021',
    image: 'stock_alert_texts.png',
  },
  {
    name: 'Day 35: Rain Alert Application',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/rain_alert',
    topic: 'API Keys, Authentication, Environment Variables, and Sending SMS',
    description:
      'Checks the weather forecast for a given location, and sends me a text message if it will rain within the next 12 hours. Uses Twilio for sending SMS and the OpenWeather API for checking the forecast.',
    created: 'July 7, 2021',
  },
  {
    name: 'Day 34: Quizzler App',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/iss_tracker',
    topic: 'The Trivia API and the Quizzler App',
    description:
      'A refactored version of a CLI-based quiz app that included a GUI (via Tkinter) and pulls new data from the Open Trivia database each time the app runs.',
    created: 'July 1, 2021',
    image: 'quizzler.png',
  },
  {
    name: 'Day 33: International Space Station Tracker',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/iss_tracker',
    topic: 'Application Programming Interfaces',
    description:
      "An ISS tracker that emails me if it's dark out, and the ISS is overhead. Utilizes Sunrise-Sunset and ISS Open-Notify APIs and smtplib for email.",
    created: 'June 30, 2021',
  },
  {
    name: 'Day 32: Automated Birthday Email',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/birthday_wisher',
    topic: 'Email SMTP and the datetime module',
    description:
      'A birthday wisher that uses SMTP, datetime, and pandas to automatically send customized birthday emails to friends and family.',
    created: 'June 29, 2021',
  },
  {
    name: 'Day 31: Flash Card App Capstone Project',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/flashcard_app',
    topic: 'Capstone Project',
    description:
      "A flashcard app built with Tkinter that shows a Spanish word and then its English translation after three seconds. If the user clicks that they knew the word, it is removed from the list of words to learn and won't be shown again.",
    created: 'June 28, 2021',
    image: 'flashcard.png',
  },
  {
    name: 'Day 30: Password Manager v2',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/password_manager_v2',
    topic: 'Errors, Exceptions, and Saving JSON Data',
    description:
      'An updated version of the password manager that handles exceptions related to the data.json file. This version also has a search feature so users can search for an existing password.',
    created: 'June 25, 2021',
    image: 'passwordManagerv2.png',
  },
  {
    name: 'Day 29: Password Manager',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/password_manager',
    topic: 'Graphical User Interfaces with Tkinter',
    description:
      'A password manager built using Tkinter. The app can provide a randomized password if needed and saves the website, username, and password to a local file.',
    created: 'June 24, 2021',
    image: 'passwordManager.jpg',
  },
  {
    name: 'Day 28: Pomodoro App',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/pomodoro_app',
    topic: 'Graphical User Interfaces with Tkinter',
    description:
      'An application built using tkinter to help users implement the Pomodoro Technique when working.',
    created: 'June 23, 2021',
    image: 'pomodoro.gif',
  },
  {
    name: 'Day 27: Unit Converter',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/unit_converter',
    topic: 'Graphical User Interfaces with Tkinter and Function Arguments',
    description:
      'A GUI program that converts miles to kilometers built with Tkinter.',
    created: 'June 22, 2021',
    image: 'miles_to_km_converter.png',
  },
  {
    name: 'Day 26: NATO Phonetic Alphabet',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/nato_alphabet',
    topic: 'List and Dictionary Comprehensions',
    description:
      'Returns the NATO alphabet for each letter in a user input string. Built using list and dictionary comprehension. Pandas is used to import, read, and manipulate a .csv file of the NATO alphabet.',
    created: 'June 21, 2021',
  },
  {
    name: 'Day 25: U.S. States Game',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/states_game',
    topic: 'Working with CSVs and Analyzing Data with Pandas',
    description:
      'A guessing game that prompts the user to name all 50 states. Correctly guessed states are labeled on a map. The states data is read and analyzed using the pandas library. The map is rendered using the turtle library. The game keeps a record of correct states and at the end of the game creates a csv file of states to study.',
    created: 'June 18, 2021',
    image: 'states_game.gif',
  },
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
    image: 'turtleCrossing.gif',
  },
  {
    name: 'Day 22: Pong Game',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/pongGame',
    topic: 'Intermediate Game Logic',
    description:
      'Building Pong, the classic arcade game, with Turtle, classes, class inheritance, and game logic.',
    created: 'June 15, 2021',
    image: 'pong.gif',
  },
  {
    name: 'Day 21: Snake Game Part 2',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/snakeGamePt2',
    topic: 'Class Inheritance',
    description:
      'Part II of the Snake Game Part I build. Creates and updates a scoreboard and detects collisions with food, wall or tail. Built using Object-Oriented Programming and class inheritance.',
    created: 'June 14, 2021',
    image: 'snake_pt2.gif',
  },
  {
    name: 'Day 20: Snake Game Part 1',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/snakeGame',
    topic: 'Animation and Coordinates',
    description:
      'Part 1 of the two-part build of the classic Snake Game. Built using Object-Oriented Programming.',
    created: 'June 11, 2021',
    image: 'snake_game_pt1.gif',
  },
  {
    name: 'Day 19: Turtle Race',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/turtleRace',
    topic:
      'More Turtle Graphics, Event Listeners, State, and Multiple Instances',
    description:
      'A digital turtle race built using event listeners, state, and multiple instances of Turtle Graphics. The user is asked to predict a winner, and each turtle takes a random number of steps until a winner crosses the finish line.',
    created: 'June 11, 2021',
    image: 'turtle_gif.gif',
  },
  {
    name: 'Day 18: Hirst Painting',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/hirstPainting',
    topic: 'Understanding Turtle Graphics and Reading Documentation',
    description:
      "A digital art creation app inspired by Damien Hirst's spot paintings, which feature rows of randomly colored circles.",
    created: 'June 10, 2021',
    image: 'hirst_gif.gif',
  },
  {
    name: 'Day 17: Quiz Game',
    URL: 'https://github.com/sarastrasner/python-projects/tree/main/quizGame',
    topic: 'Object-Oriented Programming',
    description:
      "A quiz game built using Object-Oriented Programming. The QuizBrain class has methods that check for remaining unasked questions, asks the next question, checks the user's answer, and print's the user's current score.",
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
      "A virtual coffee machine that takes orders, checks available resources (coffee, water, milk) before fulfilling orders, processes payments and gives change, and renders a report of the machine's current resources and money",
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
