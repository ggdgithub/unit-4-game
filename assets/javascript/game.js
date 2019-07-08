// Pseudocode
    // Variables
var goalNumber = Math.floor(Math.random() * (120 - 19) + 19);

var crystal1 = Math.floor(Math.random() * (12 - 1) + 1);
var crystal2 = Math.floor(Math.random() * (12 - 1) + 1);
var crystal3 = Math.floor(Math.random() * (12 - 1) + 1);
var crystal4 = Math.floor(Math.random() * (12 - 1) + 1);

var playerNumber = 0;

var wins = 0;

var losses = 0;

console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);
console.log(goalNumber);
        // X Goal Number Variable
            // X Randomly Chosen 19-120
            // X Displayed on Webpage
        // X Crystal Buttons
            // X Randomly Chosen 1-12
            // value hidden until clicked
            // value shown on page
            // addive properties
        // X Wins
        // X Losses
    // Game loop
        // player given number
        // player clicks on crystal
        // player finds out value of crystal as they add up
        // Win condition
            // if player score > given number || player quits
                // player loses
                // track losses++
            // else if player score === given number
                // player wins
                // track wins++