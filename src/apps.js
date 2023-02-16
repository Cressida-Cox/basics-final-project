function trivia() {
  let name = prompt("What is your first name?");
  let number = prompt("How many snow leopards are there in the wild?");

  if (number <= 7000 && number >= 3900) {
    let button = document.querySelector("button");
    button.innerHTML =
      "Hi " +
      name +
      "! You are correct 🏆 there are between 3,920 and 6,390 snow leopards left in the wild";
  } else {
    let button = document.querySelector("button");
    button.innerHTML =
      "Sorry " +
      name +
      "! There are between 3,920 and 6,390 snow leopards left in the wild";
  }
}

let contactButton = document.querySelector("button");

contactButton.addEventListener("click", trivia);
