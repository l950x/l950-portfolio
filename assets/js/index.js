function toggleActive(button) {
  const buttons = document.querySelectorAll(".choice button");
  const offerPrice = document.querySelector(".offer-price");
  const tax = document.querySelector(".tax");
  const duration = document.querySelector(".duration");
  const buyButton = document.querySelector(".buy-link");

  buttons.forEach((btn) => {
    if (btn === button) {
      btn.classList.toggle("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const activeButton = document.querySelector(".choice button.active");
  if (activeButton) {
    const [durationText, price] = activeButton.innerText.split("\n");
    offerPrice.textContent = `${price}`;
    document.querySelector(
      ".duration span"
    ).textContent = `Duration: ${durationText}`;

    let newHref;
    switch (activeButton.id) {
      case "first":
        newHref = "https://google.com/1";
        break;
      case "second":
        newHref = "https://google.com/2";
        break;
      case "third":
        newHref = "https://google.com/3";
        break;
      default:
    }
    buyButton.href = newHref;
  }
}
