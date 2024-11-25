const wrapper = document.getElementById("wrapper");
const question = document.getElementById("question");
const gif = document.getElementById("gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yayyy!!!, Miss you more! (づ ◕‿◕ )づ Hope you're doing well babe!";
  question.style.color = "red"; // Add this line to style the text
  question.style.fontSize = "20px"; // Add this line to style the text
  question.style.fontWeight = "bold"; // Add this line to style the text
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  gif.style.width = "300px"; // Add this line to set the width of the gif
  gif.style.height = "300px"; // Add this line to set the height of the gif
  gif.style.display = "block"; // Add this line to center the gif
  gif.style.margin = "0 auto"; // Add this line to center the gif
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});