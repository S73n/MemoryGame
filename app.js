document.addEventListener('DOMContentLoaded', () => {
  // List all card options
  const cardArray = [
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
    { name: 'hotdog', img: 'images/hotdog.png' }
  ];

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  const nameInput = document.querySelector('#name');
  const startButton = document.querySelector('#startButton');
  const timerDisplay = document.querySelector('#timer');  // Display the timer
  
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  let startTime = 0;
  let timerInterval;

  // Shuffle the cards randomly
  function shuffleCards() {
    cardArray.sort(() => 0.5 - Math.random());
  }

  // Create the game board
  function createBoard() {
    shuffleCards(); // Shuffle the cards each time the board is created

    // Clear the existing grid
    grid.innerHTML = '';

    // Create new cards
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
    startTime = Date.now(); // Record the start time
    cardsChosen = []; // Reset the chosen cards
    cardsChosenId = []; // Reset the chosen card IDs
    cardsWon = []; // Reset the won pairs
    resultDisplay.textContent = '0'; // Reset the score
    timerDisplay.textContent = '0'; // Reset the timer display
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
      alert('You have clicked the same image!');
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('Sorry, try again');
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
    const level = timeTaken < 60 ? 'Master' : timeTaken < 120 ? 'Expert' : 'Beginner';
    alert(`You completed the game in ${timeTaken.toFixed(2)} seconds. Your level is: ${level}`);
  }

  // Initialize the game
  createBoard();
});
