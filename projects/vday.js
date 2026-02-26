const messages = [
  "Are you sure?",
  "Really sure??",
  "Really really sure???",
  "Please no...",
  "Dont do it",
  "If you say no I will be sad..",
  "Very very sad...",
  "I will be very very very sad....",
  "Okay, that is the last question",
  "Just kidding, say yes please <3"
];

let messageIndex = 0;

const noButton = document.getElementById("noBtn");
const yesButton = document.getElementById("yesBtn");

noButton.addEventListener("click", noClick);
yesButton.addEventListener("click", yesClick);

function noClick() {
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );

  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function yesClick() {
  window.location.href = "vday_yes.html";
}
