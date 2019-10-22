var coin = {
    blonde:
    {
        name: "blonde",
        value: 0
    },
    freedom:
    {
        name: "freedom",
        value: 0
    },
    doge:
    {
        name: "doge",
        value: 0
    },
    supermario:
    {
        name: "supermario",
        value: 0
    }
};

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;

var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var startGame = function () {

    currentScore = 0;

    targetScore = getRandom(19, 120);

    coin.blonde.value = getRandom(1, 12);
    coin.doge.value = getRandom(1, 12);
    coin.freedom.value = getRandom(1, 12);
    coin.supermario.value = getRandom(1, 12);

    $("#your-score").text(currentScore);
    $("#target-score").text(targetScore);
};

var checkWin = function () {

    if (currentScore > targetScore) {
        alert("Sorry. You lost!");
        console.log("You Lost");

        lossCount++;

        $("#loss-count").text(lossCount);

        startGame();
    }

    else if (currentScore === targetScore) {
        alert("Congratulations! You Won!");
        console.log("You Won!");

        winCount++;

        $("#win-count").text(winCount);

        startGame();
    }
};

var addValues = function (clickedcoin) {

    currentScore += clickedcoin.value;

    $("#your-score").text(currentScore);

    checkWin();

    console.log("Your Score: " + currentScore);
};

startGame();

$("#Blonde").click(function () {
    addValues(coin.blonde);
});

$("#Doge").click(function () {
    addValues(coin.doge);
});

$("#Freedom").click(function () {
    addValues(coin.freedom);
});

$("#SuperMario").click(function () {
    addValues(coin.supermario);
});
