document.addEventListener("DOMContentLoaded", function () {
    // Select dice images and player name elements
    const img1 = document.querySelector(".img1");
    const img2 = document.querySelector(".img2");
    const player1Name = document.querySelector(".dice p:first-of-type");
    const player2Name = document.querySelector(".dice p:last-of-type");
  
    // Create the "Spin" button dynamically
    const spinButton = document.createElement("button");
    spinButton.textContent = "Spin";
    spinButton.className = "spin-button";
    document.querySelector(".container").appendChild(spinButton);
  
    // Create a result display element
    const resultDisplay = document.createElement("p");
    resultDisplay.className = "result-display";
    document.querySelector(".container").appendChild(resultDisplay);
  
    // Function to roll the dice and determine the winner
    function rollDice() {
      // Generate random numbers between 1 and 6 for both players
      const randomNumber1 = Math.floor(Math.random() * 6) + 1;
      const randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
      // Update the dice images based on the random numbers
      img1.setAttribute("src", `./images/dice${randomNumber1}.png`);
      img2.setAttribute("src", `./images/dice${randomNumber2}.png`);
  
      // Determine and display the winner
      if (randomNumber1 > randomNumber2) {
        resultDisplay.textContent = `${player1Name.textContent} Wins! 🎉`;
      } else if (randomNumber1 < randomNumber2) {
        resultDisplay.textContent = `${player2Name.textContent} Wins! 🎉`;
      } else {
        resultDisplay.textContent = "It's a Draw! 🎲";
      }
    }
  
    // Attach event listener to the spin button
    spinButton.addEventListener("click", rollDice);
  });
  