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
    html += '<div class="ia__memory__card" >' + '<img src="img/img' + imgNumber + '.jpg" alt="a feline" class="ia__memory__img"></img>' + ' </div> ';
  });
  return html;
}

$(document).ready(function () {
  $(".ia__memory__container").append(getRandomMemoryCards());

  let $card = $(".ia__memory__card");

  let count = 0;
  let cardsRound = []

  $card.click(function () {
    $this = $(this);
    if (!($this.hasClass("ia__memory__clicked") && $this.hasClass("ia__memory__found"))) {
      if (count < 2) {
        $this.addClass("ia__memory__clicked");
        cardsRound.push($this.children().attr("src"));
        count += 1;
        if (count === 2) {
          setTimeout(function () {
            if (cardsRound[0] === cardsRound[1]) {
              $(".ia__memory__clicked").addClass("ia__memory__found");
            } else {
              $card.removeClass("ia__memory__clicked");
            }
            count = 0;
            cardsRound = [];
          }, 700);
        }
      }
    }
  });



});