// <!-- ![Crystal Collector](Images/1-CrystalCollector.jpg)

// 1. [Watch the demo](homework_demos/crystalsCollector_demo.mp4).

// 2. The player will have to guess the answer, just like in Hangman. This time, though, the player will guess with numbers instead of letters. 

// 3. Here's how the app works:

//    DONE There will be four crystals displayed as buttons on the page.

//    DONE The player will be shown a random number at the start of the game.

//    DONE When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//      Done Your game will hide this amount until the player clicks a crystal.
//      Done When they do click one, update the player's score counter.

//    Done The player wins if their total score matches the random number from the beginning of the game.

//    Done The player loses if their score goes above the random number.

//    Done The game restarts whenever the player wins or loses.

//      Done When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    Done The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// ##### Option 1 Game design notes

// DONE The random number shown at the start of the game should be between 19 - 120.

// DONE Each crystal should have a random hidden value between 1 - 12. -->

$(document).ready(function() {
  //My variables
  var sum = 0;
  $("#crystalTotal").html(sum);
  var wins = 0;
  $("#wins").html(wins);
  var losses = 0;
  $("#losses").html(losses);

  //My functions
  function randomNumberGenerator(range) {
    return Math.ceil(Math.random() * range);
  }

  function randomNumberStart() {
    var num = randomNumberGenerator(120);
    while (num <= 19) {
      num = randomNumberGenerator(120);
    }
    return num;
  }

  function resetGame() {
    sum = 0;
    $("#crystalTotal").html(sum);
    crystal1Value = randomNumberGenerator(12);
    crystal2Value = randomNumberGenerator(12);
    crystal3Value = randomNumberGenerator(12);
    crystal4Value = randomNumberGenerator(12);
    initializeRandomNumberStart = randomNumberStart();
    return $("#randomNumberStart").html(initializeRandomNumberStart);
  }

  function checkSum() {
    if (sum == initializeRandomNumberStart) {
      wins++;
      $("#wins").html(wins)
      alert("You win!");
      return resetGame();
    } else if (sum > initializeRandomNumberStart) {
      losses++;
      $("#losses").html(losses)
      alert("You lose...");
      return resetGame();
    }
  }

  //My Game Logic
  var initializeRandomNumberStart = randomNumberStart();
  $("#randomNumberStart").html(initializeRandomNumberStart);

  
  var crystal1Value = randomNumberGenerator(12);
  $("#crystal1").on("click", function() {
    console.log(crystal1Value);
    sum += crystal1Value;
    $("#crystalTotal").html(sum);
    checkSum();
    return sum;
  });

  var crystal2Value = randomNumberGenerator(12);
  $("#crystal2").on("click", function() {
    console.log(crystal2Value);
    sum += crystal2Value;
    $("#crystalTotal").html(sum);
    checkSum();
    return sum;
  });

  var crystal3Value = randomNumberGenerator(12);
  $("#crystal3").on("click", function() {
    console.log(crystal3Value);
    sum += crystal3Value;
    $("#crystalTotal").html(sum);
    checkSum();
    return sum;
  });

  var crystal4Value = randomNumberGenerator(12);
  $("#crystal4").on("click", function() {
    console.log(crystal4Value);
    sum += crystal4Value;
    $("#crystalTotal").html(sum);
    checkSum();
    return sum;
  });
  
});