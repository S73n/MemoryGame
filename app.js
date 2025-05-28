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
    { name: 'pizza', img: 'imagess/pizza.png' },
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
      stopTimer();
      const timeTaken = (Date.now() - startTime) / 1000; // Calculate time directly here
      calculateTime(); // Call this for the display message
      // Check achievements with the calculated time
      checkAchievements(timeTaken, mismatchCount, mode);
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

  // Add this variable with your other game variables
  let mismatchCount = 0;

  // Add this after your existing variables and before the mode selection
  // ACHIEVEMENTS SYSTEM
  // Initialize achievements tracking
  function initializeAchievements() {
    // Create achievements object if it doesn't exist
    if (!localStorage.getItem('achievements')) {
      const initialAchievements = {
        fastTime: false,      // Complete any game under 15 seconds
        slowTime: false,      // Take more than 2 minutes to complete a game
        perfectGame: false,   // Complete a game without any mismatches
        allModes: false,      // Complete all game modes
        secretButton: false   // Find and click the secret button
      };
      localStorage.setItem('achievements', JSON.stringify(initialAchievements));
    }

    // Create completed modes array if it doesn't exist
    if (!localStorage.getItem('completedModes')) {
      localStorage.setItem('completedModes', JSON.stringify([]));
    }

    // Create achievements panel
    createAchievementsPanel();
    
    // Create secret button
    createSecretButton();
    
    // Update achievements display
    updateAchievementsDisplay();
  }

  // Create achievements panel
  function createAchievementsPanel() {
    const achievementsPanel = document.createElement('div');
    achievementsPanel.id = 'achievements';
    achievementsPanel.className = 'achievements-panel';
    document.body.appendChild(achievementsPanel);
    
    // Add CSS for achievements panel
    const style = document.createElement('style');
    style.textContent = `
      .achievements-panel {
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 10px;
        padding: 15px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        max-width: 300px;
        z-index: 1000;
      }
      
      .achievements-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        padding: 5px;
      }
      
      .achievements-toggle {
        background: rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
        border-radius: 2px;
        font-size: 10px;
        font-weight: bold;
        cursor: pointer;
        padding: 1px 3px;
        color: #333;
        min-width: 15px;
        height: 18px;
        text-align: center;
        line-height: 1;
      }
      
      .achievements-toggle:hover {
        background: rgba(0, 0, 0, 0.2);
      }
      
      .achievements-content {
        transition: max-height 0.3s ease;
        overflow: hidden;
      }
      
      .achievements-content.collapsed {
        max-height: 0;
        margin: 0;
      }
      
      .achievements-content.expanded {
        max-height: 500px;
      }
      
      .achievement {
        margin: 10px 0;
        padding: 10px;
        border-radius: 5px;
        position: relative;
      }
      
      .achievement.earned {
        background-color: rgba(144, 238, 144, 0.5);
      }
      
      .achievement.locked {
        background-color: rgba(211, 211, 211, 0.5);
        color: #777;
      }
      
      .achievement h4 {
        margin: 0 0 5px 0;
      }
      
      .achievement p {
        margin: 0;
        font-size: 0.9em;
      }
      
      .achievement .status {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 1.2em;
      }
      
      .achievement-notification {
        position: fixed;
        bottom: 20px;
        left: 20px;
        background-color: gold;
        color: black;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        animation: slideIn 0.5s, fadeOut 0.5s 4.5s;
        z-index: 1001;
      }
      
      @keyframes slideIn {
        from { transform: translateY(100px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      
      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }
      
      #secretButton {
        position: fixed;
        bottom: 10px;
        right: 10px;
        width: 15px;
        height: 15px;
        opacity: 0.1;
        cursor: pointer;
        background-color: #333;
        border: none;
        z-index: 1000;
      }
    `;
    document.head.appendChild(style);
  }

  // Create secret button
  function createSecretButton() {
    const secretButton = document.createElement('button');
    secretButton.id = 'secretButton';
    document.body.appendChild(secretButton);
    
    secretButton.addEventListener('click', () => {
      const achievements = JSON.parse(localStorage.getItem('achievements'));
      achievements.secretButton = true;
      localStorage.setItem('achievements', JSON.stringify(achievements));
      updateAchievementsDisplay();
      showAchievementNotification('Secret Finder');
    });
  }

  // Update achievements display
  function updateAchievementsDisplay() {
    const achievementsPanel = document.getElementById('achievements');
    if (!achievementsPanel) return;
    
    const achievements = JSON.parse(localStorage.getItem('achievements'));
    const isCollapsed = localStorage.getItem('achievementsCollapsed') === 'true';
    
    achievementsPanel.innerHTML = `
      <div class="achievements-header">
        <h3>Achievements</h3>
        <button class="achievements-toggle" id="achievements-toggle-btn">${isCollapsed ? '▼' : '▲'}</button>
      </div>
      <div class="achievements-content ${isCollapsed ? 'collapsed' : 'expanded'}" id="achievements-content">
      </div>
    `;
    
    // Add event listener to the toggle button
    const toggleBtn = document.getElementById('achievements-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleAchievements);
    }
    
    const achievementsContent = document.getElementById('achievements-content');
    
    const achievementsList = [
      { id: 'fastTime', name: 'Speed Demon', desc: 'Complete any game under 15 seconds', earned: achievements.fastTime },
      { id: 'slowTime', name: 'Turtle Pace', desc: 'Take more than 2 minutes to complete a game', earned: achievements.slowTime },
      { id: 'perfectGame', name: 'Perfect Memory', desc: 'Complete a game without any mismatches', earned: achievements.perfectGame },
      { id: 'allModes', name: 'Completionist', desc: 'Complete all game modes', earned: achievements.allModes },
      { id: 'secretButton', name: 'Secret Finder', desc: 'Find and click the secret button', earned: achievements.secretButton }
    ];
    
    achievementsList.forEach(achievement => {
      const achievementElement = document.createElement('div');
      achievementElement.className = `achievement ${achievement.id} ${achievement.earned ? 'earned' : 'locked'}`;
      achievementElement.innerHTML = `
        <h4>${achievement.name}</h4>
        <p>${achievement.desc}</p>
        <span class="status">${achievement.earned ? '✓' : '🔒'}</span>
      `;
      achievementsContent.appendChild(achievementElement);
    });
  }

  // Toggle achievements panel
  function toggleAchievements() {
    const content = document.getElementById('achievements-content');
    const toggle = document.getElementById('achievements-toggle-btn');
    const isCollapsed = content.classList.contains('collapsed');
    
    if (isCollapsed) {
      content.classList.remove('collapsed');
      content.classList.add('expanded');
      toggle.textContent = '▲';
      localStorage.setItem('achievementsCollapsed', 'false');
    } else {
      content.classList.remove('expanded');
      content.classList.add('collapsed');
      toggle.textContent = '▼';
      localStorage.setItem('achievementsCollapsed', 'true');
    }
  }

  // Check for achievements after game completion
  function checkAchievements(timeTaken, mismatchCount, currentMode) {
    const achievements = JSON.parse(localStorage.getItem('achievements'));
    const completedModes = JSON.parse(localStorage.getItem('completedModes'));
    
    let newAchievements = [];
    
    // Fast time achievement
    if (timeTaken < 15 && !achievements.fastTime) {
      achievements.fastTime = true;
      newAchievements.push('Speed Demon');
    }
    
    // Slow time achievement
    if (timeTaken > 120 && !achievements.slowTime) {
      achievements.slowTime = true;
      newAchievements.push('Turtle Pace');
    }
    
    // Perfect game achievement
    if (mismatchCount === 0 && !achievements.perfectGame) {
      achievements.perfectGame = true;
      newAchievements.push('Perfect Memory');
    }
    
    // Add current mode to completed modes if not already there
    if (!completedModes.includes(currentMode)) {
      completedModes.push(currentMode);
    }
    
    // Check if all modes are completed
    const allModes = ['easy', 'normal', 'hard', 'master', 'minecraft', 'chinese', 'symbols', 'costumepictures'];
    const allModesCompleted = allModes.every(mode => completedModes.includes(mode));
    
    if (allModesCompleted && !achievements.allModes) {
      achievements.allModes = true;
      newAchievements.push('Completionist');
    }
    
    // Save updated achievements and completed modes
    localStorage.setItem('achievements', JSON.stringify(achievements));
    localStorage.setItem('completedModes', JSON.stringify(completedModes));
    
    // Update achievements display
    updateAchievementsDisplay();
    
    // Show notifications for new achievements
    newAchievements.forEach(achievement => {
      showAchievementNotification(achievement);
    });
    
    return newAchievements;
  }

  // Show achievement notification
  function showAchievementNotification(achievementName) {
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
      <h3>🏆 Achievement Unlocked!</h3>
      <p>${achievementName}</p>
    `;
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
      notification.remove();
    }, 5000);
  }

  // Initialize achievements system
  initializeAchievements();
