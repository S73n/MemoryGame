// Achievements system for Memory Game

// Initialize achievements tracking
document.addEventListener('DOMContentLoaded', () => {
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
});

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
  
  achievementsPanel.innerHTML = '<h3>Achievements</h3>';
  
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
    achievementsPanel.appendChild(achievementElement);
  });
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

// Export functions to global scope
window.gameAchievements = {
  checkAchievements,
  updateAchievementsDisplay
};
startButton.addEventListener('click', () => {
  // Your existing code...
  mismatchCount = 0;
  // Rest of your existing code...
});

function checkForMatch() {
  // Your existing code...
  
  // Check if the game is over
  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = 'Congratulations! You found them all!';
    stopTimer(); // Make sure to stop the timer
    const timeTaken = calculateTime();
    
    // Check achievements
    gameAchievements.checkAchievements(timeTaken, mismatchCount, mode);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
}