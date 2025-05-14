let baseTitle = "𝐥𝟗𝟓𝟎·";
let intervalId;

function rotateTitle() {
  let characters = Array.from(baseTitle);
  characters.push(characters.shift());
  baseTitle = characters.join("");
  document.title = baseTitle;
}

function startTitleAnimation() {
  if (!intervalId) {
    intervalId = setInterval(rotateTitle, 500);
  }
}

function stopTitleAnimation() {
  clearInterval(intervalId);
  intervalId = null;
  document.title = "𝓒𝓸𝓶𝓮 𝓫𝓪𝓬𝓴 !";
}

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    stopTitleAnimation();
  } else {
    startTitleAnimation();
  }
});

startTitleAnimation();
