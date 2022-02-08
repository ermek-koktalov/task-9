let min = 1,
  max = 10,
  winningNum = Math.floor(Math.random() * 10) + 1,
  guessesLeft = 3;
i = 1;

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  if (guess === winningNum) {
    guessInput.disabled = true;
    guessInput.style.border = "1px solid green";
    setMessage(`Поздравляю! Вы угадали число ${winningNum}`, "green");
    guessBtn.textContent = "Новая игра";
    guessBtn.addEventListener("click", newGame);
  }
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Нужно ввести число от ${min} до ${max}`, "red");
    guessInput.value = "";
  } else {
    setMessage(
      `${guess} - не угадали, осталось попыток: ${guessesLeft - i}`,
      "red"
    );
    guessesLeft--;
    guessInput.value = "";
    if (guessesLeft === 0) {
      guessBtn.textContent = "Новая игра";
      guessInput.disabled = true;
      setMessage(
        `Игра окончена. Вы проиграли. Было загадано число: ${winningNum}`,
        "red"
      );
      guessBtn.addEventListener("click", newGame);
    }
  }
});

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
function newGame() {
  location.reload();
}
