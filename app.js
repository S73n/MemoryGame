document.addEventListener('DOMContentLoaded', () => {
  const easyModeCardArray = [
    { name: 'fries', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
    { name: 'fries', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
  ];

  const normalModeCardArray = [
    { name: 'fries', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
    { name: 'spaghetti', img: 'images/spaghetti.png' },
    { name: 'osama', img: 'images/download.png' },
    { name: 'fries', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
    { name: 'spaghetti', img: 'images/spaghetti.png' },
    { name: 'osama', img: 'images/download.png' },
  ];

  const hardModeCardArray = [
    { name: 'fries', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
    { name: 'spaghetti', img: 'images/spaghetti.png' },
    { name: 'osama', img: 'images/download.png' },
    { name: 'fries', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
    { name: 'spaghetti', img: 'images/spaghetti.png' },
    { name: 'osama', img: 'images/download.png' },
  ];

  const masterModeCardArray = [
    { name: 'fries', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
    { name: 'spaghetti', img: 'images/spaghetti.png' },
    { name: 'osama', img: 'images/download.png' },
    { name: 'fries', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
    { name: 'spaghetti', img: 'images/spaghetti.png' },
    { name: 'osama', img: 'images/download.png' },
  ];

  // Select DOM elements
  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  const nameInput = document.querySelector('#name');
  const startButton = document.querySelector('#startButton');
  const timerDisplay = document.querySelector('#timer');  // Display the timer
  const messageDisplay = document.querySelector('#message'); // Message display area

  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  let startTime = 0;
  let timerInterval;
  let cardArray = [];  // This will hold the selected array of cards

  // Retrieve the game mode from localStorage
  const mode = localStorage.getItem('gameMode') || 'normal'; // Default to 'normal' mode if not set

  // Set the appropriate card array based on the mode (either easy or normal)
  cardArray = mode === 'easy' ? easyModeCardArray : normalModeCardArray;

  // Shuffle the cards randomly
  function shuffleCards() {
    cardArray.sort(() => 0.5 - Math.random());
  }

  // Create the game board
  function createBoard() {
    shuffleCards(); // Shuffle the cards each time the board is created

    // Clear the existing grid
    grid.innerHTML = '';

    // Create new cards based on the length of the cardArray
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  // Start a new game
  startButton.addEventListener('click', () => {
    const playerName = nameInput.value || 'Player'; // Default name if none entered
    localStorage.setItem('playerName', playerName); // Save player name to localStorage
    localStorage.setItem('gameMode', mode); // Save the game mode (easy or normal)
    startTime = Date.now(); // Record the start time
    cardsChosen = []; // Reset the chosen cards 
    cardsChosenId = []; // Reset the chosen card IDs
    cardsWon = []; // Reset the won pairs
    resultDisplay.textContent = '0'; // Reset the score
    timerDisplay.textContent = '0'; // Reset the timer display
    messageDisplay.textContent = ''; // Clear any previous messages
    createBoard(); // Create the new game board
    startTimer(); // Start the timer
  });

  // Start the timer
  function startTimer() {
    // Clear any existing intervals
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      const timeElapsed = (Date.now() - startTime) / 1000; // Time in seconds
      timerDisplay.textContent = timeElapsed.toFixed(1); // Update the timer display
    }, 100);
  }

  // Stop the timer
  function stopTimer() {
    clearInterval(timerInterval);
  }

  // Check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId === optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      messageDisplay.textContent = 'You have clicked the same image!'; // Message display
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      messageDisplay.textContent = 'You found a match'; // Message display
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      messageDisplay.textContent = 'Sorry, try again'; // Message display
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;

    // Check if the game is over
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found them all!';
      stopTimer(); // Stop the timer
      calculateTime(); // Calculate the time when game is finished
    }
  }

  // Flip a card
  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  // Calculate the time taken and display the player's level
  function calculateTime() {
    const timeTaken = (Date.now() - startTime) / 1000;
    const level = timeTaken < 20 ? 'Master' : timeTaken < 40 ? 'Expert' : 'Beginner';
    messageDisplay.textContent = `You completed the game in ${timeTaken.toFixed(2)} seconds. Your level is: ${level}`; // Display message
  }

  // Initialize the game
  createBoard();
});
