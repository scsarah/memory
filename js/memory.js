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
    html += '<div id="ia__memory__card' + elt + '" class="ia__memory__block" >' + elt + ' </div> ';
  });
  return html;
}

$(document).ready(function () {
  html = getRandomMemoryCards();
  $(".ia__memory__container").append(html);
});