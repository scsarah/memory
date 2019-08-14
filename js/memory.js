function getRandomMemoryArray() {
  memoryArray = [];
  while (memoryArray.length < 16) {
    card = Math.floor(Math.random() * (16 - 1 + 1)) + 1;
    if (!(memoryArray.includes(card))) {
      memoryArray.push(card);
    }
  }
  console.log("final", memoryArray);
  return memoryArray;
}

function getRandomMemoryCards() {
  memoryArray = getRandomMemoryArray();
  html = "";
  memoryArray.forEach(function (elt, i) {
    if (elt <= 8) {
      imgNumber = elt;
    } else {
      imgNumber = elt - 8;
    }
    html += '<div class="ia__memory__card" >' + '<img src="img/img' + imgNumber + '.jpg" alt="a feline" class="ia__memory__img"></img>' + ' </div> ';
  });
  return html;
}

$(document).ready(function () {
  $(".ia__memory__container").append(getRandomMemoryCards());

  $card = $(".ia__memory__card");

  count = 0;
  cardsRound = []

  $card.click(function () {
    $this = $(this);
    if (!($this.hasClass("ia__memory__clicked") && $this.hasClass("ia__memory__found"))) {

      if (count < 2) {
        $this.addClass("ia__memory__clicked");
        cardsRound.push($this.children().attr("src"));
        console.log(cardsRound);
        count += 1;
        console.log(count);

      } else if (count === 2) {
        if (cardsRound[0] === cardsRound[1]) {
          $(".ia__memory__clicked").addClass("ia__memory__found");
        } else {
          $card.delay(1000).removeClass("ia__memory__clicked");
        }
        cardsRound = [];
        count = 0;
      }
    }
  });



});