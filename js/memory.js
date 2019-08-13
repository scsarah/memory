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

getRandomMemoryArray();