function getRandomMemoryArray() {
  let memoryArray = [];
  while (memoryArray.length < 16) {
    card = Math.floor(Math.random() * (16 - 1 + 1)) + 1;
    if (!(memoryArray.includes(card))) {
      memoryArray.push(card);
    }
  }
  return memoryArray;
}

function getRandomMemoryCards() {
  let memoryArray = getRandomMemoryArray();
  let html = "";
  let imgNumber = 0;
  memoryArray.forEach(function (elt, i) {
    if (elt <= 8) {
      imgNumber = elt;
    } else {
      imgNumber = elt - 8;
    }
    html += '<div id="ia__memory__card__' + elt + '" class="ia__memory__card" >' + '<img src="img/img' + imgNumber + '.jpg" alt="a feline" class="ia__memory__img"></img>' + ' </div> ';
  });
  return html;
}

$(document).ready(function () {
  // Display a random memory game
  $(".ia__memory__container").append(getRandomMemoryCards());

  // Declare useful variables
  let $cards = $(".ia__memory__card");
  let $lapCounter = $(".ia__memory__lap__counter");

  let cardPerLap = 0;
  let lap = 0;
  let cardsLapImgs = [];
  let cardsHaveClassFound = [];


  $cards.click(function () {
    $this = $(this);

    if (!($this.hasClass("ia__memory__clicked")) && !($this.hasClass("ia__memory__found"))) {

      if (cardPerLap < 2) {

        // Identifie this turn's cards and their images
        $this.addClass("ia__memory__clicked");
        cardsLapImgs.push($this.children().attr("src"));
        cardPerLap += 1;

        if (cardPerLap === 2) {

          // Count the number of laps.
          lap++;
          $lapCounter.text("Coups : " + lap);

          setTimeout(function () {

            // Check if images of both card are similar .
            if (cardsLapImgs[0] === cardsLapImgs[1]) {
              // Add the class "ia__memory__found" to both cards.
              $(".ia__memory__clicked").addClass("ia__memory__found");

              // Check if all the cards have been found.
              for (let i = 1; i <= $cards.length; i++) {
                cardsHaveClassFound.push($('#ia__memory__card__' + i).hasClass("ia__memory__found"));
              }

              // Check when the game is finished and display it.
              if (cardsHaveClassFound.includes(false) === false) {
                alert("Bravo, vous avez terminé le jeu en " + lap + " coups.");
              }
            }

            // reset all variables for next lap.
            $cards.removeClass("ia__memory__clicked");
            cardPerLap = 0;
            cardsLapImgs = [];
            cardsHaveClassFound = []

          }, 700);
        }
      }
    }
  });





});