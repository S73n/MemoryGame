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
    { name: 'taco', img: 'images/taco.png' },
    { name: 'gummy bear', img: 'images/gummybear.png' },
    { name: 'fries', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
    { name: 'spaghetti', img: 'images/spaghetti.png' },
    { name: 'osama', img: 'images/download.png' },
    { name: 'taco', img: 'images/taco.png' },
    { name: 'gummy bear', img: 'images/gummybear.png' },
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
    { name: 'taco', img: 'images/taco.png' },
    { name: 'gummy bear', img: 'images/gummybear.png' },
    { name: 'green gummy bear', img: 'images/greengummybear.png' },
    { name: 'cake', img: 'images/cake.png' },
    { name: 'fries', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
    { name: 'spaghetti', img: 'images/spaghetti.png' },
    { name: 'osama', img: 'images/download.png' },
    { name: 'taco', img: 'images/taco.png' },
    { name: 'gummy bear', img: 'images/gummybear.png' },
    { name: 'green gummy bear', img: 'images/greengummybear.png' },
    { name: 'cake', img: 'images/cake.png' },
  ];

  const minecraftModeCardArray = [
    { name: 'A', img: 'images/EN_A.png' },
    { name: 'c', img: 'images/EN_C.png' },
    { name: 'D', img: 'images/EN_D.png' },
    { name: 'H', img: 'images/EN_H.png' },
    { name: 'L', img: 'images/EN_L.png' },
    { name: 'N', img: 'images/EN_N.png' },
    { name: 'Q', img: 'images/EN_Q.png' },
    { name: 'T', img: 'images/EN_T.png' },
    { name: 'X', img: 'images/EN_X.png' },
    { name: 'A', img: 'images/EN_A.png' },
    { name: 'c', img: 'images/EN_C.png' },
    { name: 'D', img: 'images/EN_D.png' },
    { name: 'H', img: 'images/EN_H.png' },
    { name: 'L', img: 'images/EN_L.png' },
    { name: 'N', img: 'images/EN_N.png' },
    { name: 'Q', img: 'images/EN_Q.png' },
    { name: 'T', img: 'images/EN_T.png' },
    { name: 'X', img: 'images/EN_X.png' },
  ];

  const chineseModeCardArray = [
    { name: 'hiina1', img: 'images/C_2.png' },
    { name: 'hiina2', img: 'images/C_3.png' },
    { name: 'hiina3', img: 'images/C_4.png' },
    { name: 'hiina4', img: 'images/C_5.png' },
    { name: 'hiina5', img: 'images/C_6.png' },
    { name: 'hiina6', img: 'images/C_7.png' },
    { name: 'hiina7', img: 'images/C_8.png' },
    { name: 'hiina1', img: 'images/C_2.png' },
    { name: 'hiina2', img: 'images/C_3.png' },
    { name: 'hiina3', img: 'images/C_4.png' },
    { name: 'hiina4', img: 'images/C_5.png' },
    { name: 'hiina5', img: 'images/C_6.png' },
    { name: 'hiina6', img: 'images/C_7.png' },
    { name: 'hiina7', img: 'images/C_8.png' },
  ];

  const symbolsModeCardArray = [
    { name: 'symbol1', img: 'images/S_1.png' },
    { name: 'symbol2', img: 'images/S_2.png' },
    { name: 'symbol3', img: 'images/S_3.png' },
    { name: 'symbol4', img: 'images/S_4.png' },
    { name: 'symbol5', img: 'images/S_5.png' },
    { name: 'symbol6', img: 'images/S_6.png' },
    { name: 'symbol1', img: 'images/S_1.png' },
    { name: 'symbol2', img: 'images/S_2.png' },
    { name: 'symbol3', img: 'images/S_3.png' },
    { name: 'symbol4', img: 'images/S_4.png' },
    { name: 'symbol5', img: 'images/S_5.png' },
    { name: 'symbol6', img: 'images/S_6.png' },
  ];

  const supersecretgameCardArray = [
    { name: 'miko', img: 'faces/Image.jpg' },
    { name: 'aleks', img: 'faces/Image (1).jpg' },
    { name: 'sten', img: 'faces/Image (2).jpg' },
    { name: 'kaupo', img: 'faces/Image (3).jpg' },
    { name: 'hendrik', img: 'faces/Image (4).jpg' },
    { name: 'mikk', img: 'faces/Image (5).jpg' },
    { name: 'kaspar', img: 'faces/Image (6).jpg' },
    { name: 'tauri', img: 'faces/Image (7).jpg' },
    { name: 'martin', img: 'faces/Image (8).jpg' },
    { name: 'miko', img: 'faces/Image.jpg' },
    { name: 'aleks', img: 'faces/Image (1).jpg' },
    { name: 'sten', img: 'faces/Image (2).jpg' },
    { name: 'kaupo', img: 'faces/Image (3).jpg' },
    { name: 'hendrik', img: 'faces/Image (4).jpg' },
    { name: 'mikk', img: 'faces/Image (5).jpg' },
    { name: 'kaspar', img: 'faces/Image (6).jpg' },
    { name: 'tauri', img: 'faces/Image (7).jpg' },
    { name: 'martin', img: 'faces/Image (8).jpg' },
  ]

  const costumepicturesModeCardArray = [];

  window.uploadImages = function() {
    const input = document.getElementById('imageUpload');
    const files = input.files;
  
    let startingIndex = costumepicturesModeCardArray.length / 2;
  
    if (files.length > 0) {
      Array.from(files).forEach((file, i) => {
        const reader = new FileReader();
        reader.onload = function (e) {
          const imageUrl = e.target.result;
          const uniqueName = 'custom' + (startingIndex + i);
  
          costumepicturesModeCardArray.push(
            { name: uniqueName, img: imageUrl },
            { name: uniqueName, img: imageUrl }
          );
  
          console.log("Updated array:", costumepicturesModeCardArray);
        };
        reader.readAsDataURL(file);
      });
    }
  };
  
  
  

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

  // Set the appropriate card array based on the mode (either easy, normal, hard, or master)
  if (mode === 'easy') {
    cardArray = easyModeCardArray;
  } else if (mode === 'normal') {
    cardArray = normalModeCardArray;
  } else if (mode === 'hard') {
    cardArray = hardModeCardArray;
  } else if (mode === 'master') {
    cardArray = masterModeCardArray;
  } else if (mode === 'minecraft') {
    cardArray = minecraftModeCardArray;
  } else if (mode === 'chinese') {
    cardArray = chineseModeCardArray;
  } else if (mode === 'symbols') {
    cardArray = symbolsModeCardArray;
  } else if (mode === 'costumepictures') {
  cardArray = costumepicturesModeCardArray;
  } else if (mode === 'supersecretgame') {
    cardArray = supersecretgameCardArray;
  }

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

    // Adjust grid size based on the number of cards
    const columns = Math.sqrt(cardArray.length);
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`; // Make grid responsive
  }

  // Start a new game
  startButton.addEventListener('click', () => {
    const playerName = nameInput.value || 'Player'; // Default name if none entered
    localStorage.setItem('playerName', playerName); // Save player name to localStorage
    localStorage.setItem('gameMode', mode); // Save the game mode (easy, normal, hard, master)
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
